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
  
  // Decide colors for dual-color rendering
  let primaryColor = c;
  let secondaryColor = c;
  
  const lowerColor = c.toLowerCase();
  if (lowerColor === '#ffffff' || lowerColor === 'white' || lowerColor === '#fff') {
    primaryColor = '#ffffff';
    secondaryColor = '#57a0bc'; // Brand secondary color (Azul Claro)
  } else if (lowerColor === '#024c76') {
    primaryColor = '#024c76'; // Brand primary color (Azul Marinho)
    secondaryColor = '#57a0bc'; // Brand secondary color (Azul Claro)
  } else {
    primaryColor = c;
    secondaryColor = c;
  }

  const iconSVG = `<svg width="42" height="42" viewBox="0 0 362 258" fill="none" xmlns="http://www.w3.org/2000/svg" style="flex-shrink:0">
    <!-- Brand primary curves -->
    <path d="M 203.95,1.59C 220.96,1.32 237.00,4.73 251.06,14.78C 265.82,25.34 272.73,40.22 273.07,58.05C 273.27,68.37 264.26,73.68 255.47,68.23C 250.12,64.91 244.95,60.37 241.45,55.20C 225.97,32.39 201.39,24.56 173.18,33.20C 149.51,40.45 129.48,53.76 111.21,69.93C 81.99,95.78 57.75,125.44 44.97,162.88C 41.86,172.02 40.77,182.30 40.97,192.01C 41.35,210.79 58.95,221.75 76.32,214.44C 84.32,211.07 91.56,205.91 99.30,201.86C 103.75,199.53 108.36,197.14 113.18,195.94C 120.93,194.03 129.11,198.03 132.72,204.51C 136.55,211.35 136.00,218.34 130.30,224.23C 109.54,245.68 64.50,258.07 34.61,238.89C 16.45,227.23 6.93,210.67 5.95,188.91C 4.78,162.85 13.58,139.85 27.50,118.72C 58.32,71.92 100.36,37.77 150.37,13.33C 167.05,5.17 185.14,1.18 203.95,1.59" fill="${primaryColor}"/>
    <path d="M 210.37,176.59C 191.86,166.56 185.32,147.95 193.88,129.10C 206.52,101.24 227.22,83.48 258.25,80.11C 284.49,77.25 306.09,87.56 323.55,106.61C 344.20,129.12 353.09,156.89 356.12,186.50C 357.86,203.38 357.46,220.52 357.39,237.54C 357.36,246.68 355.46,247.92 346.10,248.43C 324.88,249.57 308.43,236.74 305.14,215.49C 302.70,199.80 302.28,183.77 299.28,168.22C 296.60,154.32 292.93,140.29 287.36,127.33C 279.18,108.26 263.64,105.58 248.00,119.41C 232.33,133.28 222.00,150.93 213.86,169.97C 213.04,171.88 212.22,173.77 211.34,175.65C 211.16,176.03 210.70,176.28 210.37,176.59" fill="${primaryColor}"/>
    <path d="M 82.65,123.26C 97.41,105.48 112.37,87.57 132.86,75.73C 149.85,65.91 163.18,70.00 168.32,88.82C 173.26,106.90 175.08,125.86 177.93,144.49C 180.43,160.87 181.51,177.52 184.91,193.70C 191.27,223.93 214.73,236.59 244.11,226.04C 252.90,222.88 261.11,217.88 269.25,213.16C 279.70,207.09 288.16,209.11 293.95,219.74C 301.04,232.77 300.66,233.55 286.26,237.26C 265.73,242.55 245.25,247.90 223.84,248.38C 197.86,248.97 177.35,238.49 161.63,218.29C 145.54,197.60 135.91,173.66 127.84,149.03C 125.76,142.68 123.99,136.23 121.96,129.86C 117.73,116.58 108.67,112.06 95.66,117.00C 91.18,118.70 86.98,121.15 82.65,123.26" fill="${primaryColor}"/>
    <!-- Brand secondary curves -->
    <path d="M 128.07,186.83C 127.13,184.75 124.43,184.19 122.74,185.74C 105.45,201.73 84.12,226.35 58.04,216.45C 41.20,209.47 36.57,188.68 39.81,172.13C 49.21,122.94 90.31,85.76 130.43,58.32C 150.78,45.23 173.88,35.30 198.39,35.49C 209.70,35.64 221.64,38.05 230.51,45.34C 237.48,50.77 240.57,59.82 246.21,66.23C 254.94,76.45 270.68,72.52 273.16,59.31C 274.51,51.95 271.66,44.50 268.08,38.15C 255.46,16.26 230.48,3.85 205.77,1.97C 179.75,0.00 154.31,8.64 131.46,20.49C 76.42,49.64 26.27,96.11 9.44,157.20C 0.00,190.14 8.54,231.54 42.60,246.25C 66.84,257.07 95.11,250.84 116.07,235.84C 123.96,230.28 131.12,223.77 138.27,217.29C 140.19,215.55 140.70,212.75 139.51,210.45C 136.43,204.50 131.36,194.12 128.07,186.83" fill="${secondaryColor}"/>
    <path d="M 304.22,96.43C 274.21,75.80 237.07,81.05 210.41,104.57C 201.85,112.35 193.35,120.19 184.86,128.05C 183.30,129.50 182.52,131.60 182.74,133.72C 183.30,139.00 184.33,148.75 184.55,150.68C 185.24,156.81 185.94,163.02 186.75,169.22C 187.02,171.31 189.51,172.26 191.09,170.87C 205.04,158.63 218.89,146.30 232.46,133.65C 244.95,122.00 264.36,105.89 279.24,123.26C 296.30,143.90 300.44,192.10 301.73,218.67C 302.23,228.02 304.41,237.96 311.79,244.31C 321.79,253.47 338.27,252.91 347.54,243.04C 352.94,237.57 355.26,230.07 355.67,222.36L 355.68,222.21C 355.56,176.48 344.57,123.56 304.22,96.43" fill="${secondaryColor}"/>
    <path d="M 290.82,210.14C 290.69,207.14 287.40,205.37 284.83,206.93C 266.98,217.78 243.10,234.31 221.37,234.31C 213.05,234.31 205.05,231.89 197.83,225.81C 191.07,220.12 185.48,211.10 183.38,202.51C 181.65,195.49 180.32,188.40 179.20,181.27C 177.26,168.89 175.99,156.39 174.55,143.95C 174.34,142.05 174.14,140.14 173.94,138.20C 172.36,122.38 171.21,105.45 164.23,91.21C 158.98,80.49 149.23,73.17 138.04,69.71C 135.21,68.83 132.13,69.36 129.70,71.04C 119.97,77.77 93.33,97.25 74.79,120.61C 73.82,121.84 75.12,123.57 76.56,122.98C 76.57,122.97 76.59,122.96 76.60,122.96C 81.14,121.05 85.90,119.58 90.78,118.82C 92.98,118.49 95.16,118.30 97.27,118.30C 106.93,118.30 115.24,122.15 118.93,132.47C 122.75,143.20 125.30,154.33 129.23,165.07C 130.56,168.70 131.96,172.32 133.41,175.92C 136.96,184.72 140.89,193.37 145.40,201.72C 145.40,201.72 146.43,204.21 148.59,208.09C 156.18,221.69 177.82,252.37 218.70,252.37C 219.49,252.37 220.29,252.36 221.09,252.34C 221.09,252.34 249.52,251.48 286.62,240.31C 289.82,239.35 291.96,236.35 291.82,233.01Z M 290.82,210.14" fill="${secondaryColor}"/>
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
