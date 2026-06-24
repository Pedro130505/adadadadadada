/* ═══════════════════════════════════════════════════
   PAGES — METAS & MÉTRICAS
   ═══════════════════════════════════════════════════ */
function pageMetas() {
  const pct = Math.min(100, Math.round(closedVal() / S.goal.total * 100));
  const emNeg = S.companies.filter(c => ['reuniao', 'negociacao'].includes(c.stage)).reduce((s, c) => s + c.val, 0);
  const byAdv = {}; S.companies.filter(c => c.stage === 'finalizado').forEach(c => { byAdv[c.adv] = (byAdv[c.adv] || 0) + c.val; });
  const advRows = Object.entries(byAdv).sort((a, b) => b[1] - a[1]);
  const maxAdv = Math.max(1, ...advRows.map(x => x[1]), 1);
  const byQuota = {}; S.companies.filter(c => c.stage === 'finalizado').forEach(c => { byQuota[c.quota] = (byQuota[c.quota] || 0) + 1; });
  const isCoord = session?.role === 'coordenador';

  // Tasks summary for coordinator
  const today = new Date().toISOString().slice(0, 10);
  const allTasks = S.tasks;

  return `
  <div class="ph">
    <button class="hamburger" onclick="openNav()">${ic('menu', 'ic ic-lg')}</button>
    <div><div style="font-size:16px;font-weight:800">Métricas e Metas</div>
      <div style="font-size:12.5px;color:var(--txt3)">Acompanhe o progresso rumo à meta do evento</div></div>
  </div>
  <div class="page-body">
    <div class="meta-top-cards">
      <div class="meta-top-card">
        <div class="meta-top-lbl">META GLOBAL</div>
        <div class="meta-top-val">${fBRL(S.goal.total)}</div>
        <div style="font-size:12px;color:var(--txt3);margin-top:4px">Prazo: ${new Date(S.goal.deadline).toLocaleDateString('pt-BR')}</div>
      </div>
      <div class="meta-top-card">
        <div class="meta-top-lbl">JÁ FECHADO</div>
        <div class="meta-top-val green">${fBRL(closedVal())}</div>
        <div style="font-size:12px;color:var(--txt3);margin-top:4px">${pct}% da meta</div>
      </div>
      <div class="meta-top-card">
        <div class="meta-top-lbl">EM NEGOCIAÇÃO</div>
        <div class="meta-top-val" style="color:var(--warn-txt)">${fBRL(emNeg)}</div>
        <div style="font-size:12px;color:var(--txt3);margin-top:4px">${S.companies.filter(c => ['reuniao', 'negociacao'].includes(c.stage)).length} empresa(s)</div>
      </div>
    </div>

    <div class="two-col" style="margin-bottom:16px">
      <div class="card">
        <div class="card-head"><span class="card-title">Cotas — valores-base</span></div>
        <div class="card-pad">
          ${S.quotas.map(q => `
          <div class="quota-edit-row">
            <div class="quota-edit-name">${q.n}</div>
            <input class="input" type="number" value="${q.v}" min="0"
              oninput="S.quotas.find(x=>x.n==='${q.n}').v=+this.value"
              style="font-size:13px">
            <button class="btn btn-primary btn-sm" onclick="toast('Valor de ${q.n} salvo ✓')">Salvar</button>
          </div>`).join('')}
        </div>
      </div>
      <div class="card">
        <div class="card-head"><span class="card-title">Metas globais</span></div>
        <div class="card-pad">
          <div class="form-grid">
            <div class="form-row"><label class="form-label">Meta de faturamento (R$)</label>
              <input class="input" type="number" value="${S.goal.total}" oninput="S.goal.total=+this.value;render()"></div>
            <div class="form-row"><label class="form-label">Prazo final</label>
              <input class="input" type="date" value="${S.goal.deadline.slice(0, 10)}" onchange="S.goal.deadline=this.value"></div>
          </div>
          <div class="form-grid" style="margin-top:4px">
            ${S.quotas.map(q => `<div class="form-row"><label class="form-label">Meta empresas ${q.n}</label>
              <input class="input" type="number" value="${S.metaByQuota[q.n] || 0}" min="0"
                oninput="S.metaByQuota['${q.n}']=+this.value" style="font-size:13px"></div>`).join('')}
          </div>
          <button class="btn btn-primary btn-sm" style="margin-top:8px" onclick="toast('Metas salvas ✓')">Salvar metas</button>
        </div>
      </div>
    </div>

    <div class="two-col" style="margin-bottom:16px">
      <div class="card">
        <div class="card-head"><span class="card-title">Receita fechada por assessor</span></div>
        <div class="card-pad">
          <div class="bar-chart">
            ${advRows.length ? advRows.map(([id, v]) => `<div class="bar-row">
              <div style="font-size:12.5px">${userName(id)}</div>
              <div class="bar-track"><div class="bar-fill" style="width:${Math.max(4, v / maxAdv * 100)}%;background:var(--navy)"></div></div>
              <div class="bar-val">${fK(v)}</div>
            </div>`).join('') : `<div style="color:var(--txt4);font-size:13px;padding:8px 0">Sem fechamentos ainda.</div>`}
          </div>
        </div>
      </div>
      <div class="card">
        <div class="card-head"><span class="card-title">Fechamentos por cota</span></div>
        <div class="card-pad">
          <div class="bar-chart">
            ${S.quotas.map(q => {
              const n = byQuota[q.n] || 0;
              const meta = S.metaByQuota[q.n] || 0;
              const pctQ = meta ? Math.min(100, Math.round(n / meta * 100)) : 0;
              return `<div class="bar-row">
                <div style="font-size:12.5px">${q.n}</div>
                <div class="bar-track"><div class="bar-fill" style="width:${Math.max(meta ? 4 : 0, pctQ)}%;background:var(--blue)"></div></div>
                <div class="bar-val">${n}${meta ? `/<span style="color:var(--txt4)">${meta}</span>` : ''}</div>
              </div>`;
            }).join('')}
          </div>
        </div>
      </div>
    </div>

    ${isCoord ? `<div class="card">
      <div class="card-head"><span class="card-title">Painel de tarefas da equipe</span>
        <button class="btn btn-primary btn-sm" onclick="openNewTaskModal()">${ic('plus', 'ic')}Nova tarefa</button></div>
      <table><thead><tr><th>Tarefa</th><th>Assessor</th><th>Empresa</th><th>Prazo</th><th>Status</th><th></th></tr></thead><tbody>
        ${S.tasks.sort((a, b) => a.dueDate.localeCompare(b.dueDate)).map(t => {
          const late = !t.done && t.dueDate < today; const isToday = !t.done && t.dueDate === today;
          const co = S.companies.find(c => c.id === t.companyId);
          return `<tr${late ? ' style="background:var(--danger-bg)"' : ''}>
            <td><div style="font-weight:600;font-size:13px${t.done ? ';text-decoration:line-through;color:var(--txt3)' : ''}">${esc(t.title)}</div>
              ${t.desc ? `<div style="font-size:11.5px;color:var(--txt3)">${esc(t.desc)}</div>` : ''}</td>
            <td><span class="task-assignee">${userName(t.assignedTo)}</span></td>
            <td style="font-size:12.5px;color:var(--txt3)">${co ? co.name : '—'}</td>
            <td><span class="task-due ${late ? 'late' : isToday ? 'today' : 'ok'}">${late ? '⚠ ' : ''} ${fmtDate(t.dueDate)}</span></td>
            <td>${t.done ? `<span class="badge b-green">Concluída</span>` : late ? `<span class="badge b-red">Atrasada</span>` : isToday ? `<span class="badge b-amber">Hoje</span>` : `<span class="badge b-grey">Pendente</span>`}</td>
            <td style="text-align:right;white-space:nowrap">
              <div style="display:inline-flex;gap:4px;justify-content:flex-end;vertical-align:middle">
                <button class="btn btn-ghost btn-xs" onclick="toggleTask('${t.id}')">${t.done ? 'Reabrir' : '✓ Feita'}</button>
                <button class="btn btn-ghost btn-xs" style="color:var(--danger)" onclick="deleteTask('${t.id}')">${ic('x', 'ic ic-sm')}</button>
              </div>
            </td>
          </tr>`;
        }).join('')}
      </tbody></table>
    </div>` : ''}
  </div>`;
}

// Expose on window for global accessibility
window.pageMetas = pageMetas;
