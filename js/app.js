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
function mecLogoSVG(mode = 'full', color = '#ffffff', width = 160, boxed = false) {
  const c = color;
  
  // New brand symbol curves from logos mec.ai (normalized to 170x170 viewBox)
  const curvesPath = "M 145.21,117.86C 145.07,120.51 144.27,123.08 142.42,124.97C 139.23,128.36 133.57,128.55 130.13,125.40C 127.59,123.22 126.84,119.80 126.67,116.59C 126.23,107.46 124.80,90.89 118.94,83.80C 113.83,77.82 107.16,83.36 102.86,87.37C 98.20,91.72 93.43,95.95 88.64,100.16C 88.10,100.64 87.24,100.31 87.15,99.59C 86.87,97.46 86.63,95.33 86.39,93.22C 86.32,92.56 85.96,89.20 85.77,87.39C 85.69,86.66 85.96,85.94 86.50,85.44C 89.42,82.74 92.34,80.04 95.28,77.37C 104.45,69.29 117.21,67.48 127.53,74.57C 141.39,83.90 145.18,102.09 145.21,117.81Z M 121.48,124.03C 108.72,127.87 98.95,128.16 98.95,128.16C 98.68,128.17 98.40,128.18 98.13,128.18C 84.08,128.18 76.64,117.62 74.03,112.95C 73.29,111.62 72.94,110.77 72.94,110.77C 71.39,107.89 70.04,104.92 68.81,101.89C 68.31,100.66 67.84,99.41 67.38,98.16C 66.03,94.48 65.15,90.65 63.84,86.96C 62.57,83.41 59.71,82.09 56.39,82.09C 55.66,82.09 54.92,82.15 54.16,82.27C 52.48,82.53 50.85,83.04 49.29,83.69C 49.28,83.70 49.28,83.70 49.27,83.70C 48.78,83.90 48.33,83.30 48.66,82.88C 55.04,74.86 64.20,68.16 67.54,65.85C 68.38,65.27 69.43,65.09 70.41,65.39C 74.25,66.58 77.60,69.09 79.41,72.78C 81.81,77.68 82.20,83.49 82.75,88.93C 82.81,89.60 82.88,90.25 82.96,90.91C 83.45,95.18 83.89,99.48 84.55,103.73C 84.94,106.19 85.39,108.62 85.99,111.04C 86.71,113.99 88.63,117.09 90.96,119.04C 93.44,121.14 96.19,121.97 99.05,121.97C 106.52,121.97 114.73,116.28 120.86,112.56C 121.75,112.02 122.88,112.62 122.92,113.66L 123.27,121.52C 123.32,122.67 122.58,123.70 121.48,124.03M 70.48,116.11C 68.03,118.34 65.57,120.58 62.86,122.49C 55.65,127.65 45.93,129.79 37.60,126.07C 25.89,121.02 22.96,106.78 26.20,95.46C 31.98,74.46 49.22,58.49 68.14,48.47C 76.00,44.39 84.74,41.43 93.69,42.11C 102.18,42.75 110.77,47.02 115.11,54.54C 116.34,56.72 117.32,59.29 116.85,61.81C 116.00,66.35 110.59,67.70 107.59,64.19C 105.65,61.99 104.59,58.88 102.19,57.01C 99.14,54.51 95.04,53.68 91.15,53.62C 82.73,53.56 74.79,56.97 67.79,61.47C 54.00,70.91 39.87,83.68 36.64,100.59C 35.53,106.28 37.12,113.43 42.91,115.83C 51.88,119.23 59.20,110.77 65.14,105.27C 65.73,104.74 66.66,104.93 66.98,105.64C 68.11,108.15 69.85,111.72 70.91,113.77C 71.32,114.55 71.14,115.52 70.48,116.11";

  const boxPath = "M 151.90,0.00L 18.29,0.00C 8.18,0.00 0.00,8.18 0.00,18.29L 0.00,151.90C 0.00,162.00 8.18,170.18 18.29,170.18L 151.90,170.18C 162.00,170.18 170.18,162.00 170.18,151.90L 170.18,18.29C 170.18,8.18 162.00,0.00 151.90,0.00";

  // Combine curves and box if boxed version is selected
  const isBoxed = boxed || mode.endsWith('-boxed');
  const pathD = isBoxed ? (curvesPath + " " + boxPath) : curvesPath;
  
  const iconSVG = `<svg width="42" height="42" viewBox="0 0 170 170" fill="none" xmlns="http://www.w3.org/2000/svg" style="flex-shrink:0">
    <path d="${pathD}" fill="${c}" fill-rule="evenodd" />
  </svg>`;

  if (mode === 'icon' || mode === 'icon-boxed') return iconSVG;

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
