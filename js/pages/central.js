/* ═══════════════════════════════════════════════════
   PAGES — CENTRAL DO ASSESSOR
   ═══════════════════════════════════════════════════ */
function pageCentral() {
  const today = new Date().toISOString().slice(0, 10);
  const nextWeek = new Date(Date.now() + 7 * 86400000).toISOString().slice(0, 10);
  const isCoord = session?.role === 'coordenador';
  const myId = session?.userId;
  const firstName = session?.name?.split(' ')[0] || '!';

  // My companies (assigned as primary or secondary advisor)
  const myCos = S.companies.filter(c => c.adv === myId || (c.adv2 || '') === myId);
  const activeCos = myCos.filter(c => !['finalizado', 'perdido'].includes(c.stage));
  const finalizedCos = myCos.filter(c => c.stage === 'finalizado');
  const lostCos = myCos.filter(c => c.stage === 'perdido');
  const negCos = myCos.filter(c => ['reuniao', 'negociacao'].includes(c.stage));
  const closedMy = finalizedCos.reduce((s, c) => s + c.val, 0);
  const negVal = negCos.reduce((s, c) => s + c.val, 0);

  // Tasks
  const relevantTasks = S.tasks.filter(t => isCoord ? true : t.assignedTo === myId);
  const pendingTasks = relevantTasks.filter(t => !t.done);
  const lateTasks = pendingTasks.filter(t => t.dueDate < today).sort((a, b) => a.dueDate.localeCompare(b.dueDate));
  const todayTasks = pendingTasks.filter(t => t.dueDate === today);
  const weekTasks = pendingTasks.filter(t => t.dueDate > today && t.dueDate <= nextWeek).sort((a, b) => a.dueDate.localeCompare(b.dueDate));

  // Section helpers
  const taskItem = t => {
    const co = S.companies.find(c => c.id === t.companyId);
    const isLate = t.dueDate < today;
    const isToday2 = t.dueDate === today;
    return `<div class="ci-row" onclick="toggleTask('${t.id}')">
      <div class="ci-check ${t.done ? 'done' : ''}">${t.done ? ic('check', 'ic ic-sm') : ''}</div>
      <div class="ci-body">
        <div class="ci-name${t.done ? ' ci-done' : ''}">${esc(t.title)}</div>
        <div class="ci-sub">
          ${isLate ? `<span style="color:var(--danger-txt);font-weight:600">⚠ ${fmtDate(t.dueDate)}</span>` : isToday2 ? `<span style="color:var(--warn-txt);font-weight:600">Hoje</span>` : `<span>${fmtDate(t.dueDate)}</span>`}
          ${co ? ` · ${co.name}` : ''}
          ${isCoord ? ` · <span style="color:var(--navy);font-weight:600">${userName(t.assignedTo)}</span>` : ''}
        </div>
      </div>
    </div>`;
  };

  const coItem = c => `<div class="ci-row" onclick="openCompany('${c.id}')">
    <div class="ci-body">
      <div class="ci-name">${esc(c.name)}</div>
      <div class="ci-sub" style="display:flex;align-items:center;gap:6px">
        <span>${stageById(c.stage).label}</span>
        ${c.temp >= 4 ? ic('flame', 'ic ic-sm') : ''} ${c.rel >= 4 ? ic('star', 'ic ic-sm') : ''}
      </div>
      <div style="font-size:12px;font-weight:600;color:var(--navy);margin-top:2px">${fBRL(c.val)}</div>
    </div>
    <div style="color:var(--txt4)">${ic('arrow', 'ic ic-sm')}</div>
  </div>`;

  // "Sem atualização" = no meeting date recorded in last 7 days
  const stale = myCos.filter(c => !['finalizado', 'perdido'].includes(c.stage) && !c.meeting?.date);
  // Quentes & estratégicas
  const hotStrat = S.companies.filter(c => !['finalizado', 'perdido'].includes(c.stage) && c.temp >= 4 && c.rel >= 4)
    .sort((a, b) => b.temp - a.temp || b.rel - a.rel).slice(0, 5);

  const kpiCard = (icon, lbl, val, valColor = 'var(--txt)', border = '') => `
    <div style="background:var(--surface);border:1px solid ${border || 'var(--border)'};border-radius:var(--r-lg);padding:14px 16px;min-width:0;flex:1">
      <div style="display:flex;align-items:center;gap:5px;font-size:10.5px;font-weight:700;text-transform:uppercase;letter-spacing:.07em;color:var(--txt3);margin-bottom:8px">${icon ? ic(icon, 'ic ic-sm') : ''}<span>${lbl}</span></div>
      <div style="font-size:22px;font-weight:900;letter-spacing:-.03em;color:${valColor}">${val}</div>
    </div>`;

  const sectionCard = (title, badge, content) => `
    <div style="background:var(--surface);border:1px solid var(--border);border-radius:var(--r-lg);display:flex;flex-direction:column;min-height:160px">
      <div style="display:flex;align-items:center;justify-content:space-between;padding:14px 16px 12px;border-bottom:1px solid var(--border)">
        <span style="font-size:14px;font-weight:700;color:var(--txt)">${title}</span>
        <span style="background:${badge === 0 ? 'var(--surface2)' : 'var(--danger)'};color:${badge === 0 ? 'var(--txt3)' : '#fff'};font-size:11px;font-weight:800;border-radius:99px;padding:2px 8px;min-width:24px;text-align:center">${badge}</span>
      </div>
      <div style="flex:1;overflow-y:auto;padding:4px 0">
        ${content || `<div style="padding:20px 16px;text-align:center;color:var(--txt4);font-size:13px">Nada por aqui.</div>`}
      </div>
    </div>`;

  return `
  <div class="ph">
    <button class="hamburger" onclick="openNav()">${ic('menu', 'ic ic-lg')}</button>
    <div>
      <div style="font-size:20px;font-weight:900;color:var(--txt);letter-spacing:-.03em">Bem-vindo, ${firstName}</div>
      <div style="font-size:13px;color:var(--txt3);margin-top:2px">Suas prioridades, empresas e tarefas em um só lugar.</div>
    </div>
    <div class="ph-gap"></div>
    <div class="ph-actions">
      <button class="btn btn-ghost btn-sm" onclick="openNewTaskModal()">${ic('plus', 'ic')}Nova tarefa</button>
      <button class="btn btn-primary btn-sm" onclick="openNewCompany()">${ic('plus', 'ic')}Nova empresa</button>
    </div>
  </div>

  <div class="page-body">
    <!-- KPI ROW — 8 cards -->
    <div style="display:flex;gap:10px;margin-bottom:20px;overflow-x:auto;padding-bottom:4px">
      ${kpiCard('users', 'Atribuídas', myCos.length)}
      ${kpiCard('kanban', 'Ativas', activeCos.length)}
      ${kpiCard('check', 'Finalizadas', finalizedCos.length, 'var(--success-txt)')}
      ${kpiCard('x', 'Perdidas', lostCos.length, lostCos.length ? 'var(--danger-txt)' : 'var(--txt)')}
      ${kpiCard('trending', 'Em Negociação', fBRL(negVal), 'var(--txt)')}
      ${kpiCard('dollar', 'Fechado', fBRL(closedMy), 'var(--success-txt)')}
      ${kpiCard('clock', 'Tarefas Pendentes', pendingTasks.length)}
      ${kpiCard('alert', 'Tarefas Atrasadas', lateTasks.length, lateTasks.length ? 'var(--danger-txt)' : 'var(--txt)', lateTasks.length ? 'var(--danger)' : '')}
    </div>

    <!-- TASKS ROW — 3 columns -->
    <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:14px;margin-bottom:20px">
      ${sectionCard(
        ic('alert', 'ic ic-sm') + ' Atrasadas', lateTasks.length,
        lateTasks.map(taskItem).join('')
      )}
      ${sectionCard(
        ic('calendar', 'ic ic-sm') + ' Hoje', todayTasks.length,
        todayTasks.map(taskItem).join('')
      )}
      ${sectionCard(
        ic('clock', 'ic ic-sm') + ' Próximos 7 dias', weekTasks.length,
        weekTasks.map(taskItem).join('')
      )}
    </div>

    <!-- COMPANIES ROW — 3 columns -->
    <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:14px">
      <div style="background:var(--surface);border:1px solid var(--border);border-radius:var(--r-lg)">
        <div style="padding:14px 16px 12px;border-bottom:1px solid var(--border);font-size:14px;font-weight:700">Minhas empresas</div>
        <div style="padding:4px 0;overflow-y:auto;max-height:280px">
          ${myCos.length ? myCos.slice(0, 8).map(coItem).join('') : `<div style="padding:20px 16px;text-align:center;color:var(--txt4);font-size:13px">Nenhuma empresa.</div>`}
        </div>
      </div>
      <div style="background:var(--surface);border:1px solid var(--border);border-radius:var(--r-lg)">
        <div style="padding:14px 16px 12px;border-bottom:1px solid var(--border);font-size:14px;font-weight:700">Sem atualização</div>
        <div style="padding:4px 0;overflow-y:auto;max-height:280px">
          ${stale.length ? stale.map(coItem).join('') : `<div style="padding:20px 16px;text-align:center;color:var(--txt4);font-size:13px">Nenhuma empresa.</div>`}
        </div>
      </div>
      <div style="background:var(--surface);border:1px solid var(--border);border-radius:var(--r-lg)">
        <div style="padding:14px 16px 12px;border-bottom:1px solid var(--border);font-size:14px;font-weight:700">Quentes &amp; estratégicas</div>
        <div style="padding:4px 0;overflow-y:auto;max-height:280px">
          ${hotStrat.length ? hotStrat.map(coItem).join('') : `<div style="padding:20px 16px;text-align:center;color:var(--txt4);font-size:13px">Nenhuma empresa.</div>`}
        </div>
      </div>
    </div>
  </div>`;
}

function statCard(icon, bg, fg, val, lbl) {
  return `<div class="stat-card">
    <div class="stat-icon" style="background:${bg};color:${fg}">${ic(icon, 'ic ic-lg')}</div>
    <div class="stat-val">${val}</div>
    <div class="stat-lbl">${lbl}</div>
  </div>`;
}

// Expose on window for global accessibility
window.pageCentral = pageCentral;
window.statCard = statCard;
