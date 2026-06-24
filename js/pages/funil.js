/* ═══════════════════════════════════════════════════
   PAGES — FUNIL DE NEGÓCIOS
   ═══════════════════════════════════════════════════ */
let dragId = null;

function pageFunil() {
  const q = S.fSearch.toLowerCase().trim();
  const list = S.companies.filter(c => {
    if (q && !c.name.toLowerCase().includes(q)) return false;
    if (S.fAdv !== 'all' && c.adv !== S.fAdv) return false;
    if (S.fQuota !== 'all' && c.quota !== S.fQuota) return false;
    if (S.fHot && c.temp < 4) return false;
    if (S.fCold && c.temp > 2) return false;
    if (S.fLate && !c.overdue) return false;
    return true;
  });
  const anyFilter = q || S.fAdv !== 'all' || S.fQuota !== 'all' || S.fHot || S.fCold || S.fLate;
  const activeUsers = S.users.filter(u => u.team === 'negocios' && u.status === 'ativo');

  const filterBar = `
  <div class="filterbar">
    <div class="fb-search">
      ${ic('search', 'ic')}
      <input class="input fb-input" id="fSearch" placeholder="Buscar empresa…" value="${esc(S.fSearch)}" oninput="S.fSearch=this.value;rerenderFunil()" style="font-size:13px">
    </div>
    <div class="fb-sep"></div>
    <span class="fb-label">Assessor</span>
    <select class="fb-sel" id="fAdv" onchange="S.fAdv=this.value;rerenderFunil()">
      <option value="all">Todos</option>
      ${activeUsers.map(u => `<option value="${u.id}"${S.fAdv === u.id ? ' selected' : ''}>${u.name}</option>`).join('')}
    </select>
    <select class="fb-sel" id="fQuota" onchange="S.fQuota=this.value;rerenderFunil()">
      <option value="all">Todas as cotas</option>
      ${S.quotas.map(q => `<option value="${q.n}"${S.fQuota === q.n ? ' selected' : ''}>${q.n}</option>`).join('')}
    </select>
    <div class="fb-sep"></div>
    <div class="filter-chips">
      <button class="fchip${S.fHot ? ' active-hot' : ''}" onclick="S.fHot=!S.fHot;if(S.fHot)S.fCold=false;rerenderFunil()">${ic('flame', 'ic ic-sm')}Quentes</button>
      <button class="fchip${S.fCold ? ' active-cold' : ''}" onclick="S.fCold=!S.fCold;if(S.fCold)S.fHot=false;rerenderFunil()">${ic('clock', 'ic ic-sm')}Frios</button>
      <button class="fchip${S.fLate ? ' active-late' : ''}" onclick="S.fLate=!S.fLate;rerenderFunil()">${ic('alert', 'ic ic-sm')}Atrasados</button>
    </div>
    <div class="active-filters">
      <span class="fc-count">${list.length} de ${S.companies.length}</span>
      ${anyFilter ? `<button class="fc-clear" onclick="clearFilters()">Limpar filtros</button>` : ''}
    </div>
  </div>`;

  const board = STAGES.map(st => {
    const cards = list.filter(c => c.stage === st.id);
    const sum = cards.reduce((s, c) => s + c.val, 0);
    return `<div class="kcol" id="col-${st.id}" ondragover="event.preventDefault();this.classList.add('drag-over')" ondragleave="this.classList.remove('drag-over')" ondrop="onDrop(event,'${st.id}')">
      <div class="kcol-head">
        <span class="kcol-dot" style="background:${st.color}"></span>
        <span class="kcol-name">${st.label}</span>
        <span class="kcol-cnt">${cards.length}</span>
      </div>
      ${sum ? `<div class="kcol-sum">${fBRL(sum)}</div>` : ''}
      <div class="kcol-body">
        ${cards.map(c => {
          const pend = c.partnership && hasPend(c) && !['concluido', 'finalizado'].includes(c.partnership.stage);
          return `<div class="kcard" draggable="true" ondragstart="onDragStart(event,'${c.id}')" ondragend="onDragEnd(event)" onclick="openCompany('${c.id}')">
            <div class="kc-name">${c.name}</div>
            <div class="kc-sub">${c.cn} · ${c.cr}</div>
            <div class="kc-foot">
              <span class="kc-value">${fBRL(c.val)}</span>
              <div class="kc-tags">
                ${c.overdue ? `<span class="kc-tag late">${ic('clock', 'ic ic-sm')}${c.overdue}d</span>` : ''}
                ${c.temp >= 4 ? `<span class="kc-tag hot">${ic('flame', 'ic ic-sm')}${c.temp}</span>` : `<span class="kc-tag">${ic('flame', 'ic ic-sm')}${c.temp}</span>`}
                ${pend ? `<span class="kc-tag pend">${ic('alert', 'ic ic-sm')}Pendências</span>` : ''}
              </div>
            </div>
          </div>`;
        }).join('') || `<div class="kc-empty">Sem empresas</div>`}
      </div>
    </div>`;
  }).join('');

  return `
  <div class="ph">
    <button class="hamburger" onclick="openNav()">${ic('menu', 'ic ic-lg')}</button>
    <div><div style="font-size:16px;font-weight:800">Funil de Negócios</div>
      <div style="font-size:12.5px;color:var(--txt3)">Arraste os cards entre as etapas</div></div>
    <div class="ph-gap"></div>
    <div class="ph-actions">
      <button class="btn btn-ghost btn-sm" onclick="exportExcel()">${ic('download', 'ic')}Exportar</button>
      <button class="btn btn-primary btn-sm" onclick="openNewCompany()">${ic('plus', 'ic')}Nova empresa</button>
    </div>
  </div>
  <div class="page-body">
    <div id="filterbarWrap">${filterBar}</div>
    <div class="kanban" id="kanbanBoard">${board}</div>
  </div>`;
}

function rerenderFunil() {
  if (S.page !== 'funil') return;
  const fb = document.getElementById('filterbarWrap');
  const kb = document.getElementById('kanbanBoard');
  if (!fb || !kb) return render();
  const tmp = document.createElement('div');
  tmp.innerHTML = pageFunil();
  fb.innerHTML = tmp.querySelector('#filterbarWrap').innerHTML;
  kb.innerHTML = tmp.querySelector('#kanbanBoard').innerHTML;
  const inp = document.getElementById('fSearch');
  if (inp && document.activeElement !== inp) {
    inp.focus();
    inp.setSelectionRange(inp.value.length, inp.value.length);
  }
}

function clearFilters() {
  S.fSearch = '';
  S.fAdv = 'all';
  S.fQuota = 'all';
  S.fHot = false;
  S.fCold = false;
  S.fLate = false;
  rerenderFunil();
}

function exportExcel() {
  toast('Exportação para Excel gerada ✓');
}

function onDragStart(e, id) {
  dragId = id;
  e.target.classList.add('is-dragging');
  e.dataTransfer.effectAllowed = 'move';
}

function onDragEnd(e) {
  e.target.classList.remove('is-dragging');
  document.querySelectorAll('.kcol').forEach(c => c.classList.remove('drag-over'));
}

function onDrop(e, stage) {
  e.preventDefault();
  document.querySelectorAll('.kcol').forEach(c => c.classList.remove('drag-over'));
  if (!dragId) return;
  moveStage(dragId, stage);
  dragId = null;
}

function moveStage(id, stage) {
  const c = S.companies.find(x => x.id === id);
  if (!c || c.stage === stage) return;
  c.stage = stage;
  if (stage === 'finalizado' && !c.partnership) {
    c.partnership = {
      stage: 'kickoff',
      checklist: S.defaultChecklist.map(() => false),
      talk: { theme: '', datetime: '', inGrid: false, custom: false, briefing: '', speaker: '' },
      reuniaoReport: { ...c.meeting }
    };
    S.pSel = c.id;
    toast(`${c.name} fechado — dados da reunião transferidos para Parcerias ✓`);
  }
  render();
}

// Expose on window for global accessibility
window.dragId = dragId;
window.pageFunil = pageFunil;
window.rerenderFunil = rerenderFunil;
window.clearFilters = clearFilters;
window.exportExcel = exportExcel;
window.onDragStart = onDragStart;
window.onDragEnd = onDragEnd;
window.onDrop = onDrop;
window.moveStage = moveStage;
