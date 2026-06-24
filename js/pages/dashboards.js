/* ═══════════════════════════════════════════════════
   PAGES — DASHBOARDS
   ═══════════════════════════════════════════════════ */
function svgDonut(slices, cx = 80, cy = 80, r = 60, hole = 38) {
  const total = slices.reduce((s, x) => s + x.value, 0);
  if (!total) return `<text x="${cx}" y="${cy}" text-anchor="middle" dominant-baseline="middle" fill="var(--txt3)" font-size="12">Sem dados</text>`;
  let angle = -Math.PI / 2;
  const paths = slices.map(s => {
    const sweep = 2 * Math.PI * (s.value / total);
    const x1 = cx + r * Math.cos(angle), y1 = cy + r * Math.sin(angle);
    const x2 = cx + r * Math.cos(angle + sweep), y2 = cy + r * Math.sin(angle + sweep);
    const xi = cx + hole * Math.cos(angle), yi = cy + hole * Math.sin(angle);
    const xj = cx + hole * Math.cos(angle + sweep), yj = cy + hole * Math.sin(angle + sweep);
    const large = sweep > Math.PI ? 1 : 0;
    const d = `M${xi},${yi} L${x1},${y1} A${r},${r} 0 ${large} 1 ${x2},${y2} L${xj},${yj} A${hole},${hole} 0 ${large} 0 ${xi},${yi}Z`;
    angle += sweep;
    return `<path d="${d}" fill="${s.color}" opacity=".9"/>`;
  }).join('');
  return paths;
}

function svgPieChart(title, slices, w = 320, h = 220) {
  const cx = 90, cy = h / 2, r = 72, hole = 40;
  const total = slices.reduce((s, x) => s + x.value, 0);
  const legend = slices.map((s, i) => {
    const pct = total ? Math.round(s.value / total * 100) : 0;
    return `<div style="display:flex;align-items:center;gap:7px;font-size:12px;padding:3px 0">
      <span style="width:10px;height:10px;border-radius:3px;background:${s.color};flex-shrink:0;display:inline-block"></span>
      <span style="flex:1;color:var(--txt2)">${s.label}</span>
      <span style="font-weight:700;color:var(--txt)">${s.value}</span>
      <span style="color:var(--txt4);min-width:32px;text-align:right">${pct}%</span>
    </div>`;
  }).join('');
  return `<div class="card" style="padding:18px 20px">
    <div class="card-title" style="margin-bottom:14px">${title}</div>
    <div style="display:flex;align-items:center;gap:16px;flex-wrap:wrap">
      <svg width="${cx * 2}" height="${h}" viewBox="0 0 ${cx * 2} ${h}" style="flex-shrink:0">
        ${total ? svgDonut(slices, cx, cy, r, hole) : `<circle cx="${cx}" cy="${cy}" r="${r}" fill="var(--surface2)"/>`}
        <text x="${cx}" y="${cy - 6}" text-anchor="middle" dominant-baseline="middle" fill="var(--txt)" font-size="20" font-weight="800">${total}</text>
        <text x="${cx}" y="${cy + 14}" text-anchor="middle" dominant-baseline="middle" fill="var(--txt3)" font-size="10">total</text>
      </svg>
      <div style="flex:1;min-width:140px">${legend}</div>
    </div>
  </div>`;
}

function svgVertBar(title, bars, colorFn) {
  const max = Math.max(1, ...bars.map(b => b.value));
  const bw = 36, gap = 12, ph = 100, pw = bars.length * (bw + gap) + gap;
  const rects = bars.map((b, i) => {
    const bh = Math.max(2, Math.round(b.value / max * ph));
    const x = gap + i * (bw + gap), y = ph - bh;
    const col = colorFn ? colorFn(i) : ['#024c76', '#57a0bc', '#f6a21c', '#12b76a', '#7c3aed', '#f04438'][i % 6];
    return `<g>
      <rect x="${x}" y="${y}" width="${bw}" height="${bh}" rx="5" fill="${col}" opacity=".88"/>
      <text x="${x + bw / 2}" y="${y - 5}" text-anchor="middle" fill="var(--txt2)" font-size="11" font-weight="700">${b.value}</text>
      <text x="${x + bw / 2}" y="${ph + 14}" text-anchor="middle" fill="var(--txt3)" font-size="10">${b.label.substring(0, 7)}</text>
    </g>`;
  }).join('');
  return `<div class="card" style="padding:18px 20px">
    <div class="card-title" style="margin-bottom:14px">${title}</div>
    <svg width="100%" viewBox="0 0 ${pw} ${ph + 28}" style="max-width:${pw}px;height:auto;display:block;overflow:visible">
      <line x1="0" y1="${ph}" x2="${pw}" y2="${ph}" stroke="var(--border)" stroke-width="1"/>
      ${rects}
    </svg>
  </div>`;
}

function pageDash() {
  const byStage = STAGES.map(st => ({
    label: st.label, value: S.companies.filter(c => c.stage === st.id).length, color: st.color
  }));
  const byQuota = {};
  S.companies.filter(c => c.stage === 'finalizado').forEach(c => { byQuota[c.quota] = (byQuota[c.quota] || 0) + 1; });
  const quotaSlices = S.quotas.map((q, i) => ({ label: q.n, value: byQuota[q.n] || 0, color: ['#024c76', '#57a0bc', '#f6a21c', '#12b76a'][i % 4] }));
  const byAdv = {};
  S.companies.filter(c => c.stage === 'finalizado').forEach(c => { byAdv[c.adv] = (byAdv[c.adv] || 0) + c.val; });
  const advBars = Object.entries(byAdv).sort((a, b) => b[1] - a[1]).map(([id, v]) => ({ label: userName(id).split(' ')[0], value: Math.round(v / 1000) }));
  const pStageSlices = Object.entries(
    partners().reduce((acc, c) => { acc[c.partnership.stage] = (acc[c.partnership.stage] || 0) + 1; return acc; }, {})
  ).map(([k, v]) => ({ label: PSTAGES.find(p => p.id === k)?.label || k, value: v, color: { kickoff: '#f6a21c', andamento: '#57a0bc', concluido: '#12b76a', pendente: '#f79009', finalizado: '#98a2b3' }[k] || '#ccc' }));
  const won = S.companies.filter(c => c.stage === 'finalizado').length;
  const lost = S.companies.filter(c => c.stage === 'perdido').length;
  const conv = won + lost ? Math.round(won / (won + lost) * 100) : 0;
  const pct = Math.min(100, Math.round(closedVal() / S.goal.total * 100));
  const r = 52, circ = 2 * Math.PI * r, dash = circ * (1 - pct / 100);

  return `
  <div class="ph">
    <button class="hamburger" onclick="openNav()">${ic('menu', 'ic ic-lg')}</button>
    <div><div style="font-size:16px;font-weight:800">Dashboards</div>
      <div style="font-size:12.5px;color:var(--txt3)">Visão geral de Negócios e Parcerias</div></div>
  </div>
  <div class="page-body">
    <div class="stats-grid">
      ${statCard('trending', '#ecfdf3', '#027a48', fK(closedVal()), 'Receita fechada')}
      ${statCard('target', '#e8f3f8', '#024c76', conv + '%', 'Taxa de conversão')}
      ${statCard('kanban', '#f5f3ff', '#5b21b6', S.companies.filter(c => !['finalizado', 'perdido'].includes(c.stage)).length, 'Negócios em aberto')}
      ${statCard('handshake', '#fff4e0', '#92540a', partners().length, 'Total de parcerias')}
    </div>

    <div class="two-col" style="margin-bottom:16px">
      ${svgPieChart('Negócios por etapa', byStage.filter(x => x.value > 0))}
      <div class="card" style="padding:18px 20px;display:flex;flex-direction:column;align-items:center;justify-content:center">
        <div class="card-title" style="margin-bottom:6px;align-self:flex-start">Meta do evento</div>
        <svg width="160" height="160" viewBox="0 0 160 160">
          <circle cx="80" cy="80" r="${r}" fill="none" stroke="var(--border)" stroke-width="12"/>
          <circle cx="80" cy="80" r="${r}" fill="none" stroke="var(--navy)" stroke-width="12"
            stroke-linecap="round" stroke-dasharray="${circ}" stroke-dashoffset="${dash}"
            transform="rotate(-90 80 80)" style="transition:stroke-dashoffset .5s"/>
          <text x="80" y="74" text-anchor="middle" dominant-baseline="middle" fill="var(--txt)" font-size="24" font-weight="900" letter-spacing="-1">${pct}%</text>
          <text x="80" y="95" text-anchor="middle" dominant-baseline="middle" fill="var(--txt3)" font-size="11">alcançado</text>
        </svg>
        <div style="text-align:center;margin-top:4px">
          <div style="font-size:18px;font-weight:800;color:var(--navy)">${fBRL(closedVal())}</div>
          <div style="font-size:12px;color:var(--txt3)">de ${fBRL(S.goal.total)}</div>
        </div>
      </div>
    </div>

    <div class="two-col" style="margin-bottom:16px">
      ${svgPieChart('Parcerias por status', pStageSlices.length ? pStageSlices : [{ label: 'Sem dados', value: 1, color: '#e4e7ec' }])}
      ${svgPieChart('Fechamentos por cota', quotaSlices.filter(x => x.value > 0).length ? quotaSlices.filter(x => x.value > 0) : [{ label: 'Sem dados', value: 1, color: '#e4e7ec' }])}
    </div>

    ${advBars.length ? svgVertBar('Receita fechada por assessor (R$ mil)', advBars, null) : ''}
  </div>`;
}

// Expose on window for global accessibility
window.svgDonut = svgDonut;
window.svgPieChart = svgPieChart;
window.svgVertBar = svgVertBar;
window.pageDash = pageDash;
