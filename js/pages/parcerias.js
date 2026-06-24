/* ═══════════════════════════════════════════════════
   PAGES — SUCESSO DOS CLIENTES (PARCERIAS)
   ═══════════════════════════════════════════════════ */
function pageParcerias() {
  if (S.pView === 'grade') return pageGrade();

  const list = partners();
  const sel = co();
  const listHtml = list.map((c, i) => {
    const { cls } = pbadge[c.partnership.stage] || { cls: 'b-grey' };
    const pend = hasPend(c) && !['concluido', 'finalizado'].includes(c.partnership.stage);
    const pct = progress(c);
    return `<button class="pitem${sel && c.id === sel.id ? ' active' : ''}" onclick="selectPartner('${c.id}')">
      <div class="pi-top">
        <div class="pi-mono" style="${avatarColor(i % 6)}">${ini(c.name)}</div>
        <div class="pi-info">
          <div class="pi-name">${c.name}</div>
          <div class="pi-meta">${c.quota} · ${fBRL(c.val)}</div>
        </div>
        <span class="badge ${cls}" style="flex-shrink:0">${PSTAGES.find(p => p.id === c.partnership.stage)?.label || c.partnership.stage}</span>
      </div>
      <div class="pi-foot">
        <div class="pi-prog-wrap">
          <div class="pi-prog-bar"><div class="pi-prog-fill" style="width:${pct}%"></div></div>
          <div class="pi-prog-txt">${c.partnership.checklist.filter(Boolean).length}/${c.partnership.checklist.length} entregas · ${pct}%</div>
        </div>
        ${pend ? `<div class="pi-pend">${ic('alert', 'ic ic-sm')}Pendente</div>` : ''}
      </div>
    </button>`;
  }).join('');

  return `
  <div style="display:flex;flex-direction:column;height:100vh;overflow:hidden">
    <div class="ph" style="flex-shrink:0">
      <button class="hamburger" onclick="openNav()">${ic('menu', 'ic ic-lg')}</button>
      <div><div style="font-size:16px;font-weight:800">Sucesso dos Clientes</div>
        <div style="font-size:12.5px;color:var(--txt3)">Acompanhamento das parcerias fechadas</div></div>
      <div class="ph-gap"></div>
      <div class="ph-actions">
        <div style="display:flex;border:1px solid var(--border);border-radius:var(--r-md);overflow:hidden;background:var(--surface)">
          <button class="btn btn-ghost btn-sm" style="border:0;border-radius:0;${S.pView === 'list' ? 'background:var(--surface2);' : ''}color:var(--txt2)" onclick="S.pView='list';render()">Parcerias</button>
          <button class="btn btn-ghost btn-sm" style="border:0;border-radius:0;border-left:1px solid var(--border);${S.pView === 'grade' ? 'background:var(--surface2);' : ''}color:var(--txt2)" onclick="S.pView='grade';render()">${ic('calendar', 'ic')}Grade</button>
        </div>
      </div>
    </div>
    <div style="display:flex;flex:1;overflow:hidden">
      <!-- LIST -->
      <div style="width:300px;flex-shrink:0;border-right:1px solid var(--border);background:var(--surface);display:flex;flex-direction:column;overflow:hidden">
        <div style="padding:12px 16px;border-bottom:1px solid var(--border);font-size:14px;font-weight:700;flex-shrink:0">${list.length} parceria${list.length !== 1 ? 's' : ''}</div>
        <div style="padding:8px 12px;border-bottom:1px solid var(--border);background:var(--surface2);flex-shrink:0">
          <div style="position:relative">${ic('search', 'ic')}
            <input class="input" placeholder="Filtrar parcerias…" style="font-size:12.5px;padding:6px 10px 6px 30px;width:100%"
              oninput="S.pFilter=this.value;renderParceriasFilter()">
          </div>
        </div>
        <div style="overflow-y:auto;flex:1" id="plistItems">
          ${listHtml || `<div style="padding:24px;text-align:center;color:var(--txt3);font-size:13px">Nenhuma parceria ainda.<br>Feche um negócio no funil.</div>`}
        </div>
      </div>
      <!-- DETAIL -->
      <div style="flex:1;overflow-y:auto;background:var(--bg)" id="pdetailPane">
        ${sel ? renderPartnerDetail(sel) : `<div style="display:flex;align-items:center;justify-content:center;height:100%;color:var(--txt3);font-size:14px;flex-direction:column;gap:8px">${ic('handshake', 'ic ic-lg')}<span>Selecione uma parceria à esquerda</span></div>`}
      </div>
    </div>
  </div>`;
}

function renderParceriasFilter() {
  const q = (S.pFilter || '').toLowerCase();
  const items = document.getElementById('plistItems');
  if (!items) return;
  document.querySelectorAll('.pitem').forEach(btn => {
    const name = btn.querySelector('.pi-name')?.textContent || '';
    btn.style.display = name.toLowerCase().includes(q) ? '' : 'none';
  });
}

function selectPartner(id) {
  S.pSel = id; S.pTab = 'info';
  document.querySelectorAll('.pitem').forEach(b => b.classList.remove('active'));
  const btn = document.querySelector(`.pitem[onclick*="${id}"]`);
  if (btn) btn.classList.add('active');
  const c = S.companies.find(x => x.id === id);
  const pane = document.getElementById('pdetailPane');
  if (pane && c) { pane.innerHTML = renderPartnerDetail(c); pane.scrollTop = 0; }
  else render();
}

function renderPartnerDetail(c) {
  const p = c.partnership;
  const { cls } = pbadge[p.stage] || { cls: 'b-grey' };
  const stagesOrder = ['kickoff', 'andamento', 'pendente', 'concluido', 'finalizado'];
  const curIdx = stagesOrder.indexOf(p.stage);
  const pct = progress(c);

  // stepper
  const stepperH = `<div class="stepper">
    ${stagesOrder.map((s, i) => {
      const done = i < curIdx; const cur = i === curIdx;
      return `<div class="step${done ? ' done' : cur ? ' current' : ''}">
        ${i > 0 ? `<div class="step-line"></div>` : ''}
        <div class="step-dot">${done ? ic('check', 'ic ic-sm') : i + 1}</div>
        <div class="step-lbl">${PSTAGES.find(x => x.id === s)?.label || s}</div>
      </div>`;
    }).join('')}
  </div>`;

  // metrics bar
  const metricsH = `<div class="pdh-metrics">
    <div class="pdh-metric"><div class="pdh-m-val">${fBRL(c.val)}</div><div class="pdh-m-lbl">Valor fechado</div></div>
    <div class="pdh-metric"><div class="pdh-m-val">${c.quota}</div><div class="pdh-m-lbl">Cota</div></div>
    <div class="pdh-metric"><div class="pdh-m-val">${pct}%</div><div class="pdh-m-lbl">Entregas</div></div>
    <div class="pdh-metric"><div class="pdh-m-val">${p.talk.datetime ? dUntil(p.talk.datetime) + 'd' : '—'}</div><div class="pdh-m-lbl">Dias p/ palestra</div></div>
  </div>`;

  const PTABS = [
    { id: 'info', label: 'Informações' },
    { id: 'negocios', label: 'Dados de Negócios' },
    { id: 'checklist', label: 'Checklist' },
    { id: 'tarefas', label: 'Tarefas' },
    { id: 'palestra', label: 'Palestra' },
    { id: 'comentarios', label: 'Comentários' },
  ];

  let paneHtml = '';
  const pt = S.pTab;
  if (pt === 'info') paneHtml = paneInfo(c);
  else if (pt === 'negocios') paneHtml = paneNegocios(c);
  else if (pt === 'checklist') paneHtml = paneChecklist(c);
  else if (pt === 'tarefas') paneHtml = paneTarefas(c);
  else if (pt === 'palestra') paneHtml = panePalestra(c);
  else if (pt === 'comentarios') paneHtml = paneComentarios(c);
  else paneHtml = paneInfo(c);

  return `
  <div class="pdetail-hero">
    <div class="pdh-top">
      <div style="${avatarColor(S.companies.indexOf(c) % 6)};width:52px;height:52px;border-radius:14px;font-size:17px;font-weight:800;display:grid;place-items:center;letter-spacing:-.02em;flex-shrink:0">${ini(c.name)}</div>
      <div class="pdh-info" style="flex:1;min-width:0">
        <div class="pdh-name">${c.name}</div>
        <div style="display:flex;align-items:center;gap:8px;margin-top:5px;flex-wrap:wrap">
          <span class="pdh-origin">${ic('kanban', 'ic ic-sm')}<span>Fechado no Funil de Negócios</span></span>
          <span class="badge ${cls}"><span class="bdot ${(pbadge[p.stage] || { dot: 'bdot-blue' }).dot}"></span>${PSTAGES.find(x => x.id === p.stage)?.label || p.stage}</span>
        </div>
      </div>
      <div style="display:flex;gap:8px;align-items:center;flex-shrink:0">
        <select class="fb-sel" onchange="setPartnerStage('${c.id}',this.value)" style="min-width:170px">
          ${PSTAGES.map(ps => `<option value="${ps.id}"${p.stage === ps.id ? ' selected' : ''}>${ps.label}</option>`).join('')}
        </select>
      </div>
    </div>
    ${metricsH}
  </div>
  ${stepperH}
  <div class="ptabs" style="overflow-x:auto;flex-wrap:nowrap">
    ${PTABS.map(t => `<button class="ptab${S.pTab === t.id ? ' active' : ''}" onclick="S.pTab='${t.id}';renderSwitchPTab('${c.id}','${t.id}')">${t.label}</button>`).join('')}
  </div>
  <div class="pane-body">${paneHtml}</div>`;
}

function renderSwitchPTab(cId, tab) {
  S.pTab = tab;
  const c = S.companies.find(x => x.id === cId);
  const pane = document.getElementById('pdetailPane');
  if (pane && c) { pane.innerHTML = renderPartnerDetail(c); pane.scrollTop = 0; }
}

function paneNegocios(c) {
  const rr = c.partnership?.reuniaoReport || c.meeting || {};
  const qfields = [
    ['Público-alvo principal', rr.pubAlvo], ['Período buscado', rr.periodo],
    ['Objetivo na feira', rr.objetivo], ['Desafio atual', rr.desafio],
    ['Budget disponível', rr.budget], ['Prazo para decisão', rr.prazo],
    ['Tomador de decisão', rr.decisor], ['Outras feiras', rr.outrasFeiras],
    ['Objeções levantadas', rr.objecoes], ['Critério de escolha', rr.criterio],
    ['Interesse demonstrado', rr.interesse], ['Tom da reunião', rr.tomReuniao],
    ['Ponto de virada', rr.pontoVirada],
  ].filter(([, v]) => v);

  const contacts = c.contacts || [];
  return `
  <div class="info-grid" style="margin-bottom:16px">
    <div class="ig-item"><div class="ig-lbl">Assessor responsável</div><div class="ig-val">${userName(c.adv)}</div></div>
    ${c.adv2 ? `<div class="ig-item"><div class="ig-lbl">Assessor secundário</div><div class="ig-val">${userName(c.adv2)}</div></div>` : ''}
    <div class="ig-item"><div class="ig-lbl">Cota estimada</div><div class="ig-val">${c.quota}</div></div>
    <div class="ig-item"><div class="ig-lbl">Cota fechada</div><div class="ig-val">${c.cotaFechada || '—'}</div></div>
    <div class="ig-item"><div class="ig-lbl">Valor final</div><div class="ig-val mono" style="color:var(--navy)">${fBRL(c.val)}</div></div>
    <div class="ig-item"><div class="ig-lbl">Forma de pagamento</div><div class="ig-val">${c.payment || 'À vista'}</div></div>
    <div class="ig-item"><div class="ig-lbl">Temperatura</div><div class="ig-val">${['', '❄️ Frio', '🌡 Morno', '🟡 Morno+', '🔥 Quente', '🔴 Hot'][c.temp || 3]}</div></div>
    <div class="ig-item"><div class="ig-lbl">Potencial financeiro</div>
      <div class="ig-val"><div class="scores">${[1, 2, 3, 4, 5].map(i => `<div class="sdot${i <= c.fin ? ' on' : ''}"></div>`).join('')}</div></div></div>
  </div>

  ${contacts.length ? `
  <div style="margin-bottom:16px">
    <div class="ig-lbl" style="font-size:11px;text-transform:uppercase;letter-spacing:.08em;font-weight:700;color:var(--txt3);margin-bottom:8px">Contatos da empresa</div>
    ${contacts.map(ct => `
    <div style="display:flex;align-items:center;gap:10px;padding:8px 0;border-bottom:1px solid var(--border)">
      <div style="width:30px;height:30px;border-radius:99px;background:var(--blue-light);color:var(--navy);display:grid;place-items:center;font-size:11px;font-weight:700;flex-shrink:0">${ini(ct.name || '?')}</div>
      <div style="flex:1"><div style="font-size:13px;font-weight:600">${esc(ct.name)} ${ct.isPrimary ? '<span class="badge b-blue" style="font-size:10px">Principal</span>' : ''}</div>
        <div style="font-size:12px;color:var(--txt3)">${esc(ct.role)}${ct.email ? ` · ${esc(ct.email)}` : ''}${ct.phone ? ` · ${esc(ct.phone)}` : ''}</div>
      </div>
    </div>`).join('')}
  </div>` : ''}

  ${c.notes ? `
  <div style="margin-bottom:16px">
    <div class="ig-lbl" style="font-size:11px;text-transform:uppercase;letter-spacing:.08em;font-weight:700;color:var(--txt3);margin-bottom:8px">Observações do hand-off</div>
    <div class="notes-box">${esc(c.notes)}</div>
  </div>` : ''}

  ${qfields.length ? `
  <div style="margin-bottom:4px">
    <div style="display:flex;align-items:center;gap:8px;margin-bottom:12px">
      <div style="font-size:14px;font-weight:700">Relatório de Reunião</div>
      <span class="badge b-blue">Transferido do Funil</span>
      ${rr.date ? `<span class="badge b-grey">${fmtDate(rr.date)}</span>` : ''}
    </div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">
      ${qfields.map(([l, v]) => `
      <div style="background:var(--surface);border:1px solid var(--border);border-radius:var(--r-md);padding:11px 13px">
        <div class="ig-lbl" style="margin-bottom:4px">${l}</div>
        <div style="font-size:13px;color:var(--txt2);line-height:1.45">${esc(v)}</div>
      </div>`).join('')}
    </div>
    ${rr.nivelInteresse || rr.urgencia ? `
    <div style="display:flex;gap:16px;margin-top:12px;padding:12px 14px;background:var(--surface2);border-radius:var(--r-md)">
      ${rr.nivelInteresse ? `<div style="text-align:center;flex:1">
        <div style="font-size:10px;color:var(--txt3);text-transform:uppercase;letter-spacing:.06em">Interesse</div>
        <div style="font-size:22px;margin-top:2px">${['', '😐', '🙂', '😊', '😃', '🤩'][rr.nivelInteresse || 3]}</div>
        <div style="font-size:11px;color:var(--txt3)">${rr.nivelInteresse}/5</div></div>` : ''}
      ${rr.urgencia ? `<div style="text-align:center;flex:1">
        <div style="font-size:10px;color:var(--txt3);text-transform:uppercase;letter-spacing:.06em">Urgência</div>
        <div style="font-size:22px;margin-top:2px">${['', '🐢', '🚶', '🚴', '🏃', '🚀'][rr.urgencia || 3]}</div>
        <div style="font-size:11px;color:var(--txt3)">${rr.urgencia}/5</div></div>` : ''}
    </div>` : ''}
    ${(rr.proximosPassos || []).filter(Boolean).length ? `
    <div style="margin-top:12px;padding:12px 14px;background:var(--blue-light);border:1px solid rgba(87,160,188,.3);border-radius:var(--r-md)">
      <div class="ig-lbl" style="margin-bottom:6px">Próximos passos acordados</div>
      ${rr.proximosPassos.filter(Boolean).map(p => `<div style="display:flex;align-items:center;gap:6px;font-size:13px;padding:3px 0"><span style="color:var(--navy)">→</span>${esc(p)}</div>`).join('')}
    </div>` : ''}
  </div>` : `<div style="padding:20px;text-align:center;color:var(--txt4);font-size:13px">Nenhum relatório de reunião registrado ainda.</div>`}`;
}

function paneTarefas(c) {
  const today = new Date().toISOString().slice(0, 10);
  const ctasks = S.tasks.filter(t => t.companyId === c.id).sort((a, b) => a.dueDate.localeCompare(b.dueDate));
  const canCreate = session?.role === 'coordenador';
  const rows = ctasks.length ? ctasks.map(t => {
    const late = !t.done && t.dueDate < today;
    const isToday = !t.done && t.dueDate === today;
    return `<div class="task-item${late ? ' late' : ''}">
      <div class="task-cb${t.done ? ' done' : ''}" onclick="toggleTask('${t.id}');renderSwitchPTab('${c.id}','tarefas')">${t.done ? ic('check', 'ic ic-sm') : ''}</div>
      <div class="task-body">
        <div class="task-title${t.done ? ' done' : ''}">${esc(t.title)}</div>
        ${t.desc ? `<div class="task-co">${esc(t.desc)}</div>` : ''}
        <div class="task-meta">
          <span class="task-due ${late ? 'late' : isToday ? 'today' : 'ok'}">${late ? '⚠ ' + fmtDate(t.dueDate) + ' — atrasada' : isToday ? 'Hoje' : fmtDate(t.dueDate)}</span>
          <span class="task-assignee">${userName(t.assignedTo)}</span>
        </div>
      </div>
      ${canCreate ? `<button class="btn btn-ghost btn-xs" style="color:var(--danger);flex-shrink:0" onclick="deleteTask('${t.id}');renderSwitchPTab('${c.id}','tarefas')">${ic('x', 'ic ic-sm')}</button>` : ''}
    </div>`;
  }).join('') : `<div style="padding:24px;text-align:center;color:var(--txt4);font-size:13px">Nenhuma tarefa para esta empresa.</div>`;

  return `<div class="card" style="margin-bottom:14px">${rows}</div>
  ${canCreate ? `
  <div style="background:var(--surface);border:1px solid var(--border);border-radius:var(--r-lg);padding:16px">
    <div style="font-size:13px;font-weight:700;margin-bottom:12px">Nova tarefa</div>
    <div class="form-row"><label class="form-label">Título</label><input class="input" id="pt_title" placeholder="Ex.: Ligar para confirmar entrega"></div>
    <div class="form-grid">
      <div class="form-row"><label class="form-label">Designar para</label>
        <select class="sel" id="pt_who">${S.users.filter(u => u.status === 'ativo' && u.role === 'assessor').map(u => `<option value="${u.id}">${u.name}</option>`).join('')}</select></div>
      <div class="form-row"><label class="form-label">Data limite</label>
        <input class="input" type="date" id="pt_due" value="${today}"></div>
    </div>
    <button class="btn btn-primary btn-sm" style="width:100%;justify-content:center" onclick="createTask('${c.id}');renderSwitchPTab('${c.id}','tarefas')">${ic('plus', 'ic')}Criar tarefa</button>
  </div>` : ''}`;
}

function paneComentarios(c) {
  if (!c.comments) c.comments = [];
  const rows = c.comments.length ? [...c.comments].reverse().map(cm => `
    <div style="padding:12px 0;border-bottom:1px solid var(--border)">
      <div style="display:flex;align-items:center;gap:8px;margin-bottom:5px">
        <div style="width:28px;height:28px;border-radius:99px;${avatarColor(S.users.findIndex(u => u.id === cm.userId) % 6)};display:grid;place-items:center;font-size:10px;font-weight:700;flex-shrink:0">${ini(cm.author)}</div>
        <div style="font-weight:600;font-size:13px">${esc(cm.author)}</div>
        <div style="font-size:11.5px;color:var(--txt3);margin-left:auto">${fmtDate(cm.date)}</div>
      </div>
      <div style="font-size:13.5px;color:var(--txt2);line-height:1.5;padding-left:36px">${esc(cm.text)}</div>
    </div>`).join('')
    : `<div style="padding:20px;text-align:center;color:var(--txt4);font-size:13px">Nenhum comentário ainda. Seja o primeiro!</div>`;

  return `
  <div class="card" style="margin-bottom:14px"><div style="padding:4px 16px">${rows}</div></div>
  <div style="background:var(--surface);border:1px solid var(--border);border-radius:var(--r-lg);padding:14px">
    <textarea class="textarea" id="pc_txt" placeholder="Escreva um comentário sobre esta parceria…" style="min-height:72px"></textarea>
    <button class="btn btn-primary btn-sm" style="margin-top:8px" onclick="addComment('${c.id}')">${ic('arrow', 'ic')}Comentar</button>
  </div>`;
}

function addComment(cId) {
  const c = S.companies.find(x => x.id === cId);
  if (!c) return;
  const txt = (document.getElementById('pc_txt')?.value || '').trim();
  if (!txt) { toast('Escreva algo antes de comentar', 'err'); return; }
  if (!c.comments) c.comments = [];
  c.comments.push({ id: 'cm' + (Date.now() % 100000), text: txt, author: session?.name || 'Usuário', userId: session?.userId || '', date: new Date().toISOString().slice(0, 10) });
  toast('Comentário adicionado');
  renderSwitchPTab(cId, 'comentarios');
}

function setPartnerStage(id, stage) {
  const c = S.companies.find(x => x.id === id);
  if (c && c.partnership) {
    c.partnership.stage = stage;
    render();
    toast('Status atualizado');
  }
}

function paneInfo(c) {
  const rr = c.partnership?.reuniaoReport || c.meeting || {};
  const hasReport = rr && (rr.objetivo || rr.interesse || rr.decisor);
  return `
  <div class="info-grid">
    <div class="ig-item"><div class="ig-lbl">Assessor responsável</div><div class="ig-val">${userName(c.adv)}</div></div>
    <div class="ig-item"><div class="ig-lbl">Contato principal</div><div class="ig-val">${c.cn}</div></div>
    <div class="ig-item"><div class="ig-lbl">Cargo</div><div class="ig-val">${c.cr}</div></div>
    <div class="ig-item"><div class="ig-lbl">Cota</div><div class="ig-val">${c.quota}</div></div>
    <div class="ig-item"><div class="ig-lbl">Valor</div><div class="ig-val mono">${fBRL(c.val)}</div></div>
    <div class="ig-item"><div class="ig-lbl">Forma de pagamento</div><div class="ig-val">${c.payment || 'À vista'}</div></div>
  </div>
  <div style="margin-top:4px">
    <div class="ig-lbl" style="font-size:11px;text-transform:uppercase;letter-spacing:.08em;font-weight:700;color:var(--txt3);margin-bottom:8px">Observações do hand-off</div>
    <div class="notes-box">${esc(c.notes)}</div>
  </div>
  ${hasReport ? `
  <div style="margin-top:20px">
    <div style="display:flex;align-items:center;gap:8px;margin-bottom:12px">
      <div style="font-size:14px;font-weight:700">Relatório de Reunião</div>
      <span class="badge b-blue">Transferido do Funil</span>
      ${rr.date ? `<span class="badge b-grey">${rr.date}</span>` : ''}
    </div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">
      ${[
        ['Objetivo na feira', rr.objetivo], ['Desafio atual', rr.desafio],
        ['Budget disponível', rr.budget], ['Prazo para decisão', rr.prazo],
        ['Tomador de decisão', rr.decisor], ['Outras feiras', rr.outrasFeiras],
        ['Objeções', rr.objecoes], ['Critério de escolha', rr.criterio],
        ['Interesse demonstrado', rr.interesse], ['Tom da reunião', rr.tomReuniao],
        ['Ponto de virada', rr.pontoVirada],
      ].filter(([, v]) => v).map(([l, v]) => `
      <div style="background:var(--surface);border:1px solid var(--border);border-radius:var(--r-md);padding:11px 13px">
        <div class="ig-lbl" style="margin-bottom:4px">${l}</div>
        <div style="font-size:13px;color:var(--txt2);line-height:1.45">${esc(v)}</div>
      </div>`).join('')}
    </div>
    ${(rr.proximosPassos || []).filter(Boolean).length ? `
    <div style="margin-top:12px;padding:12px 14px;background:var(--blue-light);border:1px solid rgba(87,160,188,.3);border-radius:var(--r-md)">
      <div class="ig-lbl" style="margin-bottom:6px">Próximos passos acordados</div>
      ${rr.proximosPassos.filter(Boolean).map(p => `<div style="display:flex;align-items:center;gap:6px;font-size:13px;padding:3px 0"><span style="color:var(--navy)">→</span>${esc(p)}</div>`).join('')}
    </div>` : ''}
    <div style="display:flex;gap:16px;margin-top:12px;padding:12px 14px;background:var(--surface2);border-radius:var(--r-md)">
      <div style="text-align:center;flex:1"><div style="font-size:10px;color:var(--txt3);text-transform:uppercase;letter-spacing:.06em">Interesse</div>
        <div style="font-size:20px;margin-top:2px">${['', '😐', '🙂', '😊', '😃', '🤩'][rr.nivelInteresse || 3]}</div>
        <div style="font-size:11px;color:var(--txt3)">${rr.nivelInteresse || 3}/5</div></div>
      <div style="text-align:center;flex:1"><div style="font-size:10px;color:var(--txt3);text-transform:uppercase;letter-spacing:.06em">Urgência</div>
        <div style="font-size:20px;margin-top:2px">${['', '🐢', '🚶', '🚴', '🏃', '🚀'][rr.urgencia || 3]}</div>
        <div style="font-size:11px;color:var(--txt3)">${rr.urgencia || 3}/5</div></div>
    </div>
  </div>` : ''}
  <div style="margin-top:12px;font-size:11.5px;color:var(--txt4)">Preenchido automaticamente quando o negócio foi fechado no Funil de Negócios.</div>`;
}

function paneChecklist(c) {
  const p = c.partnership;
  const done = p.checklist.filter(Boolean).length;
  const tot = p.checklist.length;
  const pct = tot ? Math.round(done / tot * 100) : 0;
  return `
  <div class="cl-header">
    <div>
      <div style="font-size:14px;font-weight:700">Checklist de entregas</div>
      <div style="font-size:12.5px;color:var(--txt3);margin-top:2px">${done} de ${tot} concluídas</div>
    </div>
    <span class="badge ${pct === 100 ? 'b-green' : 'b-blue'}">${pct}%</span>
  </div>
  <div class="cl-progress"><div class="cl-bar" style="width:${pct}%"></div></div>
  <div class="cl-list">
    ${p.checklist.map((v, i) => `
    <div class="cl-item${v ? ' done' : ''}" onclick="toggleCheck('${c.id}',${i})">
      <div class="cl-check">${ic('check', 'ic ic-sm')}</div>
      <div class="cl-text">${esc(S.defaultChecklist[i] || `Item ${i + 1}`)}</div>
      <div class="cl-status">${v ? 'Concluído' : 'Pendente'}</div>
    </div>`).join('')}
  </div>
  <div style="margin-top:16px;font-size:12px;color:var(--txt4)">Os itens vêm do checklist padrão configurado em Configurações. Ao marcar tudo, a parceria avança para "Entregas concluídas".</div>`;
}

function toggleCheck(id, i) {
  const c = S.companies.find(x => x.id === id);
  if (!c?.partnership) return;
  c.partnership.checklist[i] = !c.partnership.checklist[i];
  if (c.partnership.checklist.every(Boolean) && c.partnership.stage === 'andamento') {
    c.partnership.stage = 'concluido';
    toast('Todas as entregas concluídas ✓');
  }
  render();
}

function panePalestra(c) {
  const t = c.partnership.talk;
  const du = dUntil(t.datetime);
  const miss = [];
  if (!t.theme) miss.push('tema da palestra');
  if (!t.datetime) miss.push('data e horário');
  const alertH = miss.length && du != null && du <= 14 ? `
  <div style="display:flex;align-items:flex-start;gap:10px;background:var(--warn-bg);border:1px solid var(--warn);border-radius:var(--r-md);padding:12px 14px;margin-bottom:16px;font-size:13px;color:var(--warn-txt)">
    ${ic('alert', 'ic')}
    <div>Faltam <strong>${du} dia${du === 1 ? '' : 's'}</strong> para a palestra e ainda há pendências: <strong>${miss.join(', ')}</strong>.</div>
  </div>` : '';

  return `
  ${alertH}
  <div class="talk-form">
    <div class="form-grid">
      <div class="form-row">
        <label class="form-label">Tema da palestra</label>
        <input class="input" placeholder="Ex.: Inovação no varejo" value="${esc(t.theme)}" oninput="updateTalk('${c.id}','theme',this.value)">
      </div>
      <div class="form-row">
        <label class="form-label">Palestrante</label>
        <input class="input" placeholder="Nome de quem vai palestrar" value="${esc(t.speaker)}" oninput="updateTalk('${c.id}','speaker',this.value)">
      </div>
    </div>
    <div class="form-row">
      <label class="form-label">Data e horário da palestra</label>
      <input class="input" type="datetime-local" value="${t.datetime ? t.datetime.slice(0, 16) : ''}" onchange="updateTalk('${c.id}','datetime',this.value ? new Date(this.value).toISOString() : '')">
    </div>
    <div class="toggle-row${t.inGrid ? ' on' : ''}" onclick="updateTalk('${c.id}','inGrid',!${t.inGrid})">
      <div class="tr-info">
        <div class="tr-title">Incluir na grade de palestras</div>
        <div class="tr-desc">Entra na programação oficial do evento</div>
      </div>
      <div class="sw${t.inGrid ? ' on' : ''}"></div>
    </div>
    <div class="toggle-row${t.custom ? ' on' : ''}" onclick="updateTalk('${c.id}','custom',!${t.custom})">
      <div class="tr-info">
        <div class="tr-title">Palestra personalizada</div>
        <div class="tr-desc">Conteúdo sob medida para este cliente</div>
      </div>
      <div class="sw${t.custom ? ' on' : ''}"></div>
    </div>
    ${t.custom ? `<div class="briefing-box form-row">
      <label class="form-label">Briefing / escopo personalizado</label>
      <textarea class="textarea" placeholder="O que o cliente espera, tom, pontos obrigatórios…" oninput="updateTalk('${c.id}','briefing',this.value)">${esc(t.briefing)}</textarea>
    </div>` : ''}
  </div>
  <div style="display:flex;gap:8px;margin-top:14px">
    <button class="btn btn-primary btn-sm" onclick="toast('Palestra salva ✓')">Salvar</button>
    <button class="btn btn-ghost btn-sm" onclick="sendPending('${c.id}')">${ic('mail', 'ic')}Solicitar pendências ao cliente</button>
  </div>`;
}

function updateTalk(id, key, val) {
  const c = S.companies.find(x => x.id === id);
  if (c?.partnership) c.partnership.talk[key] = val;
  render();
}

function sendPending(id) {
  const c = S.companies.find(x => x.id === id);
  if (!c?.partnership) return;
  const t = c.partnership.talk;
  const miss = [];
  if (!t.theme) miss.push('tema');
  if (!t.datetime) miss.push('data e horário');
  toast(miss.length ? `Mensagem gerada — solicita: ${miss.join(', ')}` : 'Cliente em dia — nada pendente');
}

function pageGrade() {
  const talks = partners().filter(c => c.partnership.talk.inGrid && c.partnership.talk.datetime)
    .sort((a, b) => new Date(a.partnership.talk.datetime) - new Date(b.partnership.talk.datetime));
  const times = {};
  talks.forEach(c => {
    const k = c.partnership.talk.datetime.slice(0, 13);
    times[k] = (times[k] || 0) + 1;
  });
  const conflicts = talks.filter(c => times[c.partnership.talk.datetime.slice(0, 13)] > 1);
  const conflictBar = conflicts.length ? `<div class="conflict-bar">${ic('alert', 'ic')}<div><strong>Conflito de horário detectado:</strong> ${[...new Set(conflicts.map(c => fDT(c.partnership.talk.datetime)))].join(' e ')} têm mais de uma palestra marcada.</div></div>` : '';

  return `
  <div class="ph">
    <button class="hamburger" onclick="openNav()">${ic('menu', 'ic ic-lg')}</button>
    <div><div style="font-size:16px;font-weight:800">Grade de Palestras</div>
      <div style="font-size:12.5px;color:var(--txt3)">${S.eventName} · ${talks.length} palestra${talks.length !== 1 ? 's' : ''} na grade</div></div>
    <div class="ph-gap"></div>
    <div class="ph-actions">
      <div style="display:flex;border:1px solid var(--border);border-radius:var(--r-md);overflow:hidden;background:var(--surface)">
        <button class="btn btn-ghost btn-sm" style="border:0;border-radius:0;color:var(--txt2)" onclick="S.pView='list';render()">Parcerias</button>
        <button class="btn btn-ghost btn-sm" style="border:0;border-radius:0;border-left:1px solid var(--border);background:var(--surface2);color:var(--txt2)" onclick="S.pView='grade';render()">${ic('calendar', 'ic')}Grade</button>
      </div>
    </div>
  </div>
  <div class="page-body">
    ${conflictBar}
    ${talks.length ? `<div class="grade-list">
      ${talks.map(c => {
        const t = c.partnership.talk; const d = new Date(t.datetime); const cf = times[t.datetime.slice(0, 13)] > 1;
        return `<div class="grade-row">
          <div class="grade-time">${d.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })}</div>
          <div class="grade-body">
            <div class="grade-co${cf ? ' grade-conflict' : ''}">${c.name}${cf ? ` ${ic('alert', 'ic ic-sm')}` : ''}
            </div>
            <div class="grade-theme">${esc(t.theme || '(tema não definido)')} · ${d.toLocaleDateString('pt-BR')}</div>
          </div>
          <span class="badge ${t.custom ? 'b-orange' : 'b-blue'}">${t.custom ? 'Personalizada' : 'Padrão'}</span>
        </div>`;
      }).join('')}
    </div>` :
    `<div style="padding:48px;text-align:center;color:var(--txt3);background:var(--surface);border:1px solid var(--border);border-radius:var(--r-lg)">
      Nenhuma palestra marcada para a grade ainda.<br>
      <span style="font-size:12px">Ative "Incluir na grade" nas palestras das parcerias.</span>
    </div>`}
  </div>`;
}

// Expose on window for global accessibility
window.pageParcerias = pageParcerias;
window.renderParceriasFilter = renderParceriasFilter;
window.selectPartner = selectPartner;
window.renderPartnerDetail = renderPartnerDetail;
window.renderSwitchPTab = renderSwitchPTab;
window.paneNegocios = paneNegocios;
window.paneTarefas = paneTarefas;
window.paneComentarios = paneComentarios;
window.addComment = addComment;
window.setPartnerStage = setPartnerStage;
window.paneInfo = paneInfo;
window.paneChecklist = paneChecklist;
window.toggleCheck = toggleCheck;
window.panePalestra = panePalestra;
window.updateTalk = updateTalk;
window.sendPending = sendPending;
window.pageGrade = pageGrade;
