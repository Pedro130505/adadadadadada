/* ═══════════════════════════════════════════════════
   PAGES — USUÁRIOS E PERMISSÕES
   ═══════════════════════════════════════════════════ */
function pageUsers() {
  const pend = S.users.filter(u => u.status === 'pendente').length;
  const statusBadge = { ativo: 'b-green', inativo: 'b-grey', pendente: 'b-amber' };

  return `
  <div class="ph">
    <button class="hamburger" onclick="openNav()">${ic('menu', 'ic ic-lg')}</button>
    <div><div style="font-size:16px;font-weight:800">Usuários e Permissões</div>
      <div style="font-size:12.5px;color:var(--txt3)">Aprove cadastros e defina papéis</div></div>
    <div class="ph-gap"></div>
    <div class="ph-actions">
      <button class="btn btn-primary btn-sm">${ic('plus', 'ic')}Convidar usuário</button>
    </div>
  </div>
  <div class="page-body">
    ${pend ? `<div class="pending-banner">${ic('shield', 'ic')}<div><strong>${pend} cadastro${pend > 1 ? 's' : ''} aguardando aprovação.</strong> Por segurança, o papel é definido aqui — ninguém se auto-promove a coordenador.</div></div>` : ''}
    <div class="card">
      <div class="table-wrap">
        <table>
          <thead><tr><th>Usuário</th><th>Time</th><th>Papel</th><th>Status</th><th style="text-align:right">Ações</th></tr></thead>
          <tbody>
            ${S.users.map((u, i) => `<tr>
              <td><div style="display:flex;align-items:center;gap:10px">
                <div class="user-av" style="${avatarColor(u.color)}">${ini(u.name)}</div>
                <div class="user-info"><div class="un">${u.name}</div><div class="ue">${u.email}</div></div>
              </div></td>
              <td><span class="badge b-grey" style="text-transform:capitalize">${u.team}</span></td>
              <td>
                <select class="fb-sel" style="min-width:140px" onchange="updateUserRole('${u.id}',this.value)">
                  <option value="assessor"${u.role === 'assessor' ? ' selected' : ''}>Assessor</option>
                  <option value="coordenador"${u.role === 'coordenador' ? ' selected' : ''}>Coordenador</option>
                </select>
              </td>
              <td><span class="badge ${statusBadge[u.status] || 'b-grey'}">${u.status}</span></td>
              <td style="text-align:right">
                ${u.status === 'pendente'
                ? `<button class="btn btn-success btn-xs" onclick="approveUser('${u.id}')">${ic('check', 'ic ic-sm')}Aprovar</button>`
                : `<button class="btn btn-ghost btn-xs" onclick="toggleUser('${u.id}')">${u.status === 'ativo' ? 'Desativar' : 'Reativar'}</button>`}
              </td>
            </tr>`).join('')}
          </tbody>
        </table>
      </div>
    </div>
  </div>`;
}

function updateUserRole(id, role) {
  const u = S.users.find(x => x.id === id);
  if (u) {
    u.role = role;
    toast('Papel atualizado ✓');
    render();
  }
}

function approveUser(id) {
  const u = S.users.find(x => x.id === id);
  if (u) {
    u.status = 'ativo';
    toast(`${u.name} aprovado(a) ✓`);
    render();
  }
}

function toggleUser(id) {
  const u = S.users.find(x => x.id === id);
  if (u) {
    u.status = u.status === 'ativo' ? 'inativo' : 'ativo';
    render();
  }
}

// Expose on window for global accessibility
window.pageUsers = pageUsers;
window.updateUserRole = updateUserRole;
window.approveUser = approveUser;
window.toggleUser = toggleUser;
