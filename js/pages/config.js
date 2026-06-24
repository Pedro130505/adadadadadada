/* ═══════════════════════════════════════════════════
   PAGES — CONFIGURAÇÕES
   ═══════════════════════════════════════════════════ */
function pageConfig() {
  return `
  <div class="ph">
    <button class="hamburger" onclick="openNav()">${ic('menu', 'ic ic-lg')}</button>
    <div><div style="font-size:16px;font-weight:800">Configurações</div>
      <div style="font-size:12.5px;color:var(--txt3)">Evento, cotas e checklist padrão</div></div>
  </div>
  <div class="page-body">
    <div class="config-section">
      <div class="config-sec-head"><span class="config-sec-title">Evento</span></div>
      <div class="config-sec-body">
        <div class="form-row">
          <label class="form-label">Nome do evento</label>
          <input class="input" value="${esc(S.eventName)}" oninput="S.eventName=this.value" style="max-width:380px">
        </div>
        <div style="font-size:12px;color:var(--txt4)">Aparece na grade de palestras e nos relatórios.</div>
      </div>
    </div>
    <div class="config-section">
      <div class="config-sec-head"><span class="config-sec-title">Cotas / Pacotes</span></div>
      <div class="config-sec-body">
        ${S.quotas.map(q => `<div class="quota-row">
          <span class="quota-name">${q.n}</span>
          <span class="quota-val">${fBRL(q.v)}</span>
        </div>`).join('')}
      </div>
    </div>
    <div class="config-section">
      <div class="config-sec-head">
        <span class="config-sec-title">Checklist padrão de entregas</span>
        <span style="font-size:12px;color:var(--txt3)">Criado automaticamente em cada nova parceria</span>
      </div>
      <div class="config-sec-body">
        <div style="display:flex;align-items:flex-start;gap:8px;background:var(--blue-light);border:1px solid rgba(87,160,188,.3);border-radius:var(--r-md);padding:10px 12px;margin-bottom:14px;font-size:12.5px;color:var(--navy)">
          ${ic('arrow', 'ic ic-sm')} Estes itens são aplicados automaticamente quando um negócio é fechado no Funil.
        </div>
        <div class="cl-list" style="margin-bottom:12px">
          ${S.defaultChecklist.map((it, i) => `
          <div class="cl-item" style="cursor:default">
            <div class="cl-check" style="border-color:var(--border2)"></div>
            <div class="cl-text">${esc(it)}</div>
            <button class="btn btn-ghost btn-xs" style="flex-shrink:0" onclick="removeCheck(${i})">${ic('x', 'ic ic-sm')}</button>
          </div>`).join('')}
        </div>
        <div class="cl-add-row">
          <input class="input" id="newCheckInput" placeholder="Novo item de entrega…" style="max-width:380px">
          <button class="btn btn-primary btn-sm" onclick="addCheck()">${ic('plus', 'ic')}Adicionar</button>
        </div>
      </div>
    </div>
  </div>`;
}

function removeCheck(i) {
  S.defaultChecklist.splice(i, 1);
  render();
}

function addCheck() {
  const inp = document.getElementById('newCheckInput');
  const v = (inp?.value || '').trim();
  if (v) {
    S.defaultChecklist.push(v);
    render();
    toast('Item adicionado ao checklist padrão');
  }
}

// Expose on window for global accessibility
window.pageConfig = pageConfig;
window.removeCheck = removeCheck;
window.addCheck = addCheck;
