/* ═══════════════════════════════════════════════════
   MAIN APP ORCHESTRATOR & AUTHENTICATION
   ═══════════════════════════════════════════════════ */

const NAV_ITEMS = [
  { id: 'central', icon: 'home', label: 'Central do Assessor' },
  { id: 'funil', icon: 'kanban', label: 'Funil de Negócios' },
  { id: 'parcerias', icon: 'handshake', label: 'Sucesso dos Clientes' },
  { id: 'dashboards', icon: 'chart', label: 'Dashboards' },
  { divider: 'GESTÃO INTERNA' },
  { id: 'metas', icon: 'target', label: 'Métricas e Metas' },
  { id: 'usuarios', icon: 'users', label: 'Usuários e Permissões' },
  { id: 'config', icon: 'gear', label: 'Configurações' },
];

function toast(msg, type = '') {
  const el = document.createElement('div');
  el.className = 'toast';
  if (type === 'warn') el.style.borderLeftColor = 'var(--warn)';
  if (type === 'err') el.style.borderLeftColor = 'var(--danger)';
  el.textContent = msg;
  document.getElementById('toasts').appendChild(el);
  setTimeout(() => {
    el.style.opacity = '0';
    el.style.transition = 'opacity .3s';
    setTimeout(() => el.remove(), 300);
  }, 2600);
}

function nav(page) {
  S.page = page;
  if (window.location.hash.slice(1) !== page) {
    window.location.hash = page;
  }
  closeAll();
  render();
}

function toggleTheme() {
  S.theme = S.theme === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', S.theme);
  buildNav();
}

function closeNav() {
  document.getElementById('sidebar').classList.remove('open');
  document.getElementById('overlay').style.display = 'none';
}

function openNav() {
  document.getElementById('sidebar').classList.add('open');
  document.getElementById('overlay').style.display = 'block';
}

function closeSheet() {
  document.getElementById('slideover').classList.remove('open');
  document.getElementById('scrim').classList.remove('open');
}

function closeModal() {
  document.getElementById('modal').classList.remove('open');
  document.getElementById('scrim').classList.remove('open');
}

function closeAll() {
  closeSheet();
  closeModal();
  closeNav();
}

function render() {
  document.documentElement.setAttribute('data-theme', S.theme);
  buildNav();
  const pages = {
    central: pageCentral,
    funil: pageFunil,
    parcerias: pageParcerias,
    dashboards: pageDash,
    metas: pageMetas,
    usuarios: pageUsers,
    config: pageConfig
  };
  document.getElementById('content').innerHTML = (pages[S.page] || pageCentral)();
}

/* ═══════════════════════════════════════════════════
   BRAND LOGO SVG
   ═══════════════════════════════════════════════════ */
function mecLogoSVG(mode = 'full', color = '#ffffff', width = 160) {
  const c = color;
  const iconSVG = `<svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="42" height="42" rx="9" fill="${c}"/>
    <path d="M8 25.5 C8.5 20.5 11.5 17 15.5 17 C18.2 17 20 18.8 21 21 C22 18.8 23.8 17 26.5 17 C30.5 17 33.5 20.5 34 25.5" fill="none" stroke="white" stroke-width="2.2" stroke-linecap="round"/>
    <path d="M8 25.5 C8 27.5 9.5 29.5 12 29.5 C14.5 29.5 16 27.5 16.5 25 C17 27.5 18.5 29.5 21 29.5 C23.5 29.5 25 27.5 25.5 25 C26 27.5 27.5 29.5 30 29.5 C32.5 29.5 34 27.5 34 25.5" fill="none" stroke="white" stroke-width="2.2" stroke-linecap="round"/>
    <path d="M12.5 17.5 C12 14.5 13 12 15.5 11 C18 10 20 11.5 21 14" fill="none" stroke="white" stroke-width="2" stroke-linecap="round"/>
    <path d="M29.5 17.5 C30 14.5 29 12 26.5 11 C24 10 22 11.5 21 14" fill="none" stroke="white" stroke-width="2" stroke-linecap="round"/>
  </svg>`;

  if (mode === 'icon') return iconSVG;

  const wordH = `<div style="display:flex;flex-direction:column;gap:0;line-height:1">
    <span style="font-size:${Math.round(width * 0.072)}px;font-weight:400;color:${c};letter-spacing:.01em;opacity:.82">Mercado em</span>
    <span style="font-size:${Math.round(width * 0.112)}px;font-weight:800;color:${c};letter-spacing:-.025em;margin-top:-1px">conexão</span>
  </div>`;

  if (mode === 'compact') {
    return `<div style="display:flex;align-items:center;gap:10px">${iconSVG}
      <span style="font-size:${Math.round(width * 0.16)}px;font-weight:800;color:${c};letter-spacing:-.02em">MeC</span></div>`;
  }

  return `<div style="display:flex;align-items:center;gap:12px">${iconSVG}${wordH}</div>`;
}

/* ═══════════════════════════════════════════════════
   AUTH SYSTEM
   ═══════════════════════════════════════════════════ */
const AUTH_KEY = 'mecx_auth_users';
const SESSION_KEY = 'mecx_session';

function loadAuthUsers() {
  try {
    return JSON.parse(sessionStorage.getItem(AUTH_KEY) || 'null');
  } catch {
    return null;
  }
}
function saveAuthUsers(users) {
  sessionStorage.setItem(AUTH_KEY, JSON.stringify(users));
}

let authUsers = loadAuthUsers();
if (!authUsers) {
  authUsers = [
    { id: 'u1', name: 'Rafael Mendes', email: 'rafael@mecx.com', pass: '123456', team: 'negocios', role: 'assessor', status: 'ativo' },
    { id: 'u2', name: 'Bianca Lopes', email: 'bianca@mecx.com', pass: '123456', team: 'negocios', role: 'assessor', status: 'ativo' },
    { id: 'u3', name: 'Juliana Costa', email: 'juliana@mecx.com', pass: '123456', team: 'parcerias', role: 'coordenador', status: 'ativo' },
  ];
  saveAuthUsers(authUsers);
}

let session = null;
try {
  session = JSON.parse(sessionStorage.getItem(SESSION_KEY) || 'null');
} catch {}

let authView = 'login';

function renderAuth() {
  const card = document.getElementById('authCard');
  if (!card) return;
  if (authView === 'pending') {
    card.innerHTML = `
    <div class="auth-logo">
      ${mecLogoSVG('full', '#024c76', 160)}
    </div>
    <div class="pending-screen">
      <div class="pending-icon">⏳</div>
      <div class="pending-title">Cadastro em análise</div>
      <div class="pending-desc">Seu cadastro foi enviado com sucesso!<br>
        Um coordenador precisa aprovar sua conta antes que você possa acessar o sistema.<br>
        Assim que aprovado, você receberá acesso completo.</div>
      <button class="auth-btn" onclick="authView='login';renderAuth()">Voltar ao login</button>
    </div>`;
    return;
  }
  if (authView === 'login') {
    card.innerHTML = `
    <div class="auth-logo">
      ${mecLogoSVG('full', '#024c76', 180)}
    </div>
    <div style="margin-bottom:20px">
      <div class="auth-title">Bem-vindo de volta</div>
      <div class="auth-subtitle">Faça login para acessar o CRM</div>
    </div>
    <div class="auth-tabs">
      <button class="auth-tab active" onclick="authView='login';renderAuth()">Entrar</button>
      <button class="auth-tab" onclick="authView='register';renderAuth()">Criar conta</button>
    </div>
    <div id="authErr" class="auth-err"></div>
    <div class="auth-field">
      <label class="auth-label">E-mail</label>
      <input class="auth-input" id="loginEmail" type="email" placeholder="seu@email.com" autocomplete="email">
    </div>
    <div class="auth-field">
      <label class="auth-label">Senha</label>
      <input class="auth-input" id="loginPass" type="password" placeholder="••••••••" autocomplete="current-password"
        onkeydown="if(event.key==='Enter')doLogin()">
    </div>
    <button class="auth-btn" onclick="doLogin()">Entrar no sistema</button>
    <div class="auth-divider">ou</div>
    <div style="text-align:center;font-size:13px;color:#667085">Ainda não tem conta? 
      <button class="auth-link" onclick="authView='register';renderAuth()">Criar conta gratuita</button></div>
    <div style="margin-top:20px;padding:12px;background:#f5f6f8;border-radius:10px;font-size:11.5px;color:#667085">
      <strong>Contas demo:</strong><br>
      juliana@mecx.com (coordenadora) · rafael@mecx.com (assessor)<br>Senha: <code>123456</code>
    </div>`;
    document.getElementById('loginEmail').focus();
    return;
  }
  card.innerHTML = `
    <div class="auth-logo">
      ${mecLogoSVG('full', '#024c76', 180)}
    </div>
    <div style="margin-bottom:20px">
      <div class="auth-title">Criar conta</div>
      <div class="auth-subtitle">Preencha os dados abaixo para solicitar acesso</div>
    </div>
    <div class="auth-tabs">
      <button class="auth-tab" onclick="authView='login';renderAuth()">Entrar</button>
      <button class="auth-tab active" onclick="authView='register';renderAuth()">Criar conta</button>
    </div>
    <div id="authErr" class="auth-err"></div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">
      <div class="auth-field"><label class="auth-label">Nome *</label>
        <input class="auth-input" id="regName" placeholder="Seu nome"></div>
      <div class="auth-field"><label class="auth-label">Sobrenome *</label>
        <input class="auth-input" id="regSurname" placeholder="Sobrenome"></div>
    </div>
    <div class="auth-field"><label class="auth-label">E-mail corporativo *</label>
      <input class="auth-input" id="regEmail" type="email" placeholder="seu@mecx.com"></div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">
      <div class="auth-field"><label class="auth-label">Senha *</label>
        <input class="auth-input" id="regPass" type="password" placeholder="Mín. 6 caracteres"></div>
      <div class="auth-field"><label class="auth-label">Confirmar senha *</label>
        <input class="auth-input" id="regPass2" type="password" placeholder="Repetir senha"></div>
    </div>
    <div class="auth-field"><label class="auth-label">Time *</label>
      <select class="auth-input" id="regTeam">
        <option value="">Selecione seu time…</option>
        <option value="negocios">Negócios</option>
        <option value="parcerias">Parcerias</option>
      </select></div>
    <div class="auth-field" style="margin-bottom:6px"><label class="auth-label" style="margin-bottom:10px">Papel desejado *</label>
      <div class="role-grid" id="roleGrid">
        <div class="role-card" onclick="selectRole('assessor')">
          <div class="role-icon">👤</div>
          <div class="role-name">Assessor</div>
          <div class="role-desc">Gerencia empresas no funil e registra reuniões</div>
        </div>
        <div class="role-card" onclick="selectRole('coordenador')">
          <div class="role-icon">🎯</div>
          <div class="role-name">Coordenador</div>
          <div class="role-desc">Acesso total, aprova usuários e gerencia metas</div>
        </div>
      </div>
      <input type="hidden" id="regRole" value="">
    </div>
    <div style="background:#fffaeb;border:1px solid #f6a21c;border-radius:8px;padding:10px 12px;font-size:12px;color:#b54708;margin-bottom:14px">
      ⏳ Após o cadastro, um <strong>coordenador precisa aprovar</strong> sua conta antes do primeiro acesso.
    </div>
    <button class="auth-btn" onclick="doRegister()">Enviar cadastro para aprovação</button>
    <div style="text-align:center;margin-top:12px;font-size:13px;color:#667085">
      Já tem conta? <button class="auth-link" onclick="authView='login';renderAuth()">Fazer login</button></div>`;
}

let selectedRole = '';
function selectRole(r) {
  selectedRole = r;
  document.getElementById('regRole').value = r;
  document.querySelectorAll('.role-card').forEach(c => c.classList.remove('selected'));
  document.querySelectorAll('.role-card').forEach(c => {
    if ((r === 'assessor' && c.querySelector('.role-name').textContent === 'Assessor') ||
        (r === 'coordenador' && c.querySelector('.role-name').textContent === 'Coordenador'))
      c.classList.add('selected');
  });
}

function showAuthErr(msg) {
  const el = document.getElementById('authErr');
  if (el) {
    el.textContent = msg;
    el.classList.add('show');
  }
}

function doLogin() {
  const email = (document.getElementById('loginEmail')?.value || '').trim().toLowerCase();
  const pass = document.getElementById('loginPass')?.value || '';
  if (!email || !pass) {
    showAuthErr('Preencha e-mail e senha.');
    return;
  }
  const u = authUsers.find(x => x.email.toLowerCase() === email && x.pass === pass);
  if (!u) {
    showAuthErr('E-mail ou senha incorretos.');
    return;
  }
  if (u.status === 'pendente') {
    authView = 'pending';
    renderAuth();
    return;
  }
  if (u.status === 'inativo') {
    showAuthErr('Conta desativada. Fale com um coordenador.');
    return;
  }
  session = { userId: u.id, name: u.name, role: u.role, team: u.team, status: u.status };
  sessionStorage.setItem(SESSION_KEY, JSON.stringify(session));
  enterApp();
}

function doRegister() {
  const name = (document.getElementById('regName')?.value || '').trim();
  const surname = (document.getElementById('regSurname')?.value || '').trim();
  const email = (document.getElementById('regEmail')?.value || '').trim().toLowerCase();
  const pass = document.getElementById('regPass')?.value || '';
  const pass2 = document.getElementById('regPass2')?.value || '';
  const team = document.getElementById('regTeam')?.value || '';
  const role = document.getElementById('regRole')?.value || selectedRole;
  if (!name || !surname) {
    showAuthErr('Informe nome e sobrenome.');
    return;
  }
  if (!email || !email.includes('@')) {
    showAuthErr('E-mail inválido.');
    return;
  }
  if (pass.length < 6) {
    showAuthErr('A senha precisa ter no mínimo 6 caracteres.');
    return;
  }
  if (pass !== pass2) {
    showAuthErr('As senhas não coincidem.');
    return;
  }
  if (!team) {
    showAuthErr('Selecione seu time.');
    return;
  }
  if (!role) {
    showAuthErr('Selecione o papel desejado (Assessor ou Coordenador).');
    return;
  }
  if (authUsers.find(u => u.email.toLowerCase() === email)) {
    showAuthErr('Este e-mail já está cadastrado.');
    return;
  }
  const fullName = name + ' ' + surname;
  const newId = 'u' + (Date.now() % 100000);
  const newUser = { id: newId, name: fullName, email, pass, team, role, status: 'pendente', color: authUsers.length % 6 };
  authUsers.push(newUser);
  saveAuthUsers(authUsers);
  S.users.push({ id: newId, name: fullName, email, team, role, status: 'pendente', color: authUsers.length % 6 });
  authView = 'pending';
  renderAuth();
}

function enterApp() {
  const u = S.users.find(x => x.id === session.userId);
  if (!u) {
    S.users.push({ id: session.userId, name: session.name, email: '', team: session.team, role: session.role, status: 'ativo', color: 0 });
  }
  document.getElementById('authScreen').classList.remove('visible');
  updateSidebarUser();
  render();
}

function updateSidebarUser() {
  if (!session) return;
  const av = document.querySelector('.sb-av');
  const nm = document.querySelector('.sb-user-name');
  const rl = document.querySelector('.sb-user-role');
  if (av) av.textContent = ini(session.name);
  if (nm) nm.textContent = session.name;
  if (rl) rl.textContent = (session.role === 'coordenador' ? 'Coordenador' : 'Assessor') + ' · ' + session.team;
}

function doLogout() {
  session = null;
  sessionStorage.removeItem(SESSION_KEY);
  authView = 'login';
  document.getElementById('authScreen').classList.add('visible');
  renderAuth();
  closeAll();
}

function buildNav() {
  const logoInner = document.querySelector('.sb-logo-inner');
  if (logoInner) {
    logoInner.innerHTML = `<div style="display:flex;align-items:center;gap:10px">${mecLogoSVG('icon', '#ffffff')}<div style="line-height:1.15"><span style="font-size:10px;font-weight:500;opacity:.7;display:block">Mercado em</span><span style="font-size:14px;font-weight:800;letter-spacing:-.02em">conexão</span><small style="display:block;font-size:9px;opacity:.55;letter-spacing:.1em;text-transform:uppercase;margin-top:1px">CRM Interno</small></div></div>`;
  }
  const pend = S.users.filter(u => u.status === 'pendente').length;
  document.getElementById('sbNav').innerHTML = NAV_ITEMS.map(it => {
    if (it.divider) return `<div class="sb-section">${it.divider}</div>`;
    if (['usuarios', 'config'].includes(it.id) && session?.role === 'assessor') return '';
    const badge = it.id === 'usuarios' && pend ? `<span class="nav-badge">${pend}</span>` : '';
    return `<button class="nav-btn${S.page === it.id ? ' active' : ''}" onclick="nav('${it.id}')">${ic(it.icon, 'ic ic-lg')}<span>${it.label}</span>${badge}</button>`;
  }).join('');
  document.getElementById('themeBtn').innerHTML = ic(S.theme === 'dark' ? 'sun' : 'moon', 'ic ic-lg');

  const foot = document.querySelector('.sb-foot');
  if (foot && !foot.querySelector('.logout-btn')) {
    const lb = document.createElement('button');
    lb.className = 'logout-btn';
    lb.style.cssText = 'width:100%;margin-top:10px;padding:8px;background:rgba(255,255,255,.1);border:1px solid rgba(255,255,255,.2);border-radius:8px;color:rgba(255,255,255,.8);font-size:12.5px;font-weight:600;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:6px;transition:.13s';
    lb.innerHTML = `<svg style="width:14px;height:14px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>Sair`;
    lb.onmouseover = () => lb.style.background = 'rgba(255,255,255,.18)';
    lb.onmouseout = () => lb.style.background = 'rgba(255,255,255,.1)';
    lb.onclick = () => {
      if (confirm('Deseja sair do sistema?')) doLogout();
    };
    foot.appendChild(lb);
  }
}

// Expose on window for global accessibility
window.NAV_ITEMS = NAV_ITEMS;
window.toast = toast;
window.nav = nav;
window.toggleTheme = toggleTheme;
window.closeNav = closeNav;
window.openNav = openNav;
window.closeSheet = closeSheet;
window.closeModal = closeModal;
window.closeAll = closeAll;
window.render = render;
window.mecLogoSVG = mecLogoSVG;
window.loadAuthUsers = loadAuthUsers;
window.saveAuthUsers = saveAuthUsers;
window.authUsers = authUsers;
window.session = session;
window.authView = authView;
window.renderAuth = renderAuth;
window.selectRole = selectRole;
window.showAuthErr = showAuthErr;
window.doLogin = doLogin;
window.doRegister = doRegister;
window.enterApp = enterApp;
window.updateSidebarUser = updateSidebarUser;
window.doLogout = doLogout;
window.buildNav = buildNav;

// Hash-based routing event listener
window.addEventListener('hashchange', () => {
  const page = window.location.hash.slice(1) || 'central';
  const isValidPage = NAV_ITEMS.some(it => it.id === page);
  if (isValidPage && S.page !== page) {
    nav(page);
  }
});

// Init execution
renderAuth();
if (session) {
  enterApp();
  const initialPage = window.location.hash.slice(1) || 'central';
  const isValidPage = NAV_ITEMS.some(it => it.id === initialPage);
  if (isValidPage) {
    nav(initialPage);
  }
} else {
  renderAuth();
}
