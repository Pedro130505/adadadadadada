/* ═══════════════════════════════════════════════════
   ICONS
═══════════════════════════════════════════════════ */
const SVG={
  home:'<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>',
  kanban:'<rect x="3" y="3" width="18" height="18" rx="2"/><line x1="9" y1="3" x2="9" y2="21"/><line x1="15" y1="3" x2="15" y2="21"/>',
  handshake:'<path d="m11 17 2 2 4-4"/><path d="M5 12H3l5-9 4 4h4l4 4-2 2"/>',
  chart:'<line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/>',
  target:'<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>',
  users:'<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
  gear:'<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>',
  moon:'<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>',
  sun:'<circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>',
  check:'<polyline points="20 6 9 17 4 12"/>',
  plus:'<line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>',
  x:'<line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>',
  search:'<circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>',
  filter:'<polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/>',
  download:'<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>',
  menu:'<line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/>',
  back:'<polyline points="15 18 9 12 15 6"/>',
  flame:'<path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 3z"/>',
  clock:'<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>',
  star:'<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>',
  alert:'<path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>',
  arrow:'<line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>',
  calendar:'<rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>',
  mail:'<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>',
  trending:'<polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/>',
  shield:'<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>',
  dollar:'<line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>',
};
function ic(name,cls='ic'){
  return `<svg class="${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${SVG[name]||''}</svg>`;
}

/* ═══════════════════════════════════════════════════
   DATA
═══════════════════════════════════════════════════ */
const D=86400000;
const inD=(d,h=0,m=0)=>{const t=new Date(Date.now()+d*D);t.setHours(h,m,0,0);return t.toISOString();};
const fBRL=v=>v.toLocaleString('pt-BR',{style:'currency',currency:'BRL',minimumFractionDigits:0});
const fK=v=>'R$\u00a0'+(v>=1000?(v/1000).toLocaleString('pt-BR',{maximumFractionDigits:0})+'k':v);
const fDT=iso=>{if(!iso)return'—';const d=new Date(iso);return d.toLocaleDateString('pt-BR')+' às '+d.toLocaleTimeString('pt-BR',{hour:'2-digit',minute:'2-digit'});};
const dUntil=iso=>{if(!iso)return null;return Math.ceil((new Date(iso)-Date.now())/D);};
const esc=s=>String(s??'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
const ini=n=>n.split(' ').filter(Boolean).map(p=>p[0]).slice(0,2).join('').toUpperCase();

const ACCENT_COLORS=[
  ['#e8f3f8','#024c76'],['#fff4e0','#92540a'],['#ecfdf3','#027a48'],
  ['#f5f3ff','#5b21b6'],['#fef3f2','#b42318'],['#fffaeb','#b54708'],
];
const avatarColor=idx=>{const [bg,fg]=ACCENT_COLORS[idx%ACCENT_COLORS.length];return `background:${bg};color:${fg}`;};

const STAGES=[
  {id:'prospeccao',    label:'Prospecção',       color:'#98a2b3'},
  {id:'contato',       label:'Contato localizado',color:'#57a0bc'},
  {id:'reuniao',       label:'Reunião marcada',   color:'#f6a21c'},
  {id:'negociacao',    label:'Em negociação',     color:'#024c76'},
  {id:'finalizado',    label:'Finalizado',        color:'#12b76a'},
  {id:'perdido',       label:'Perdidos',          color:'#f04438'},
];
const stageById=id=>STAGES.find(s=>s.id===id)||{label:id,color:'#ccc'};

const PSTAGES=[
  {id:'kickoff',   label:'Aguardando kickoff'},
  {id:'andamento', label:'Em andamento'},
  {id:'pendente',  label:'Pendente cliente'},
  {id:'concluido', label:'Entregas concluídas'},
  {id:'finalizado',label:'Finalizado'},
];
const pbadge={
  kickoff:{cls:'b-amber',dot:'bdot-amber'},
  andamento:{cls:'b-blue',dot:'bdot-blue'},
  pendente:{cls:'b-orange',dot:'bdot-amber'},
  concluido:{cls:'b-green',dot:'bdot-green'},
  finalizado:{cls:'b-grey',dot:'bdot-blue'},
};

const mkCo=(id,name,stage,rel,fin,temp,adv,quota,val,cn,cr,notes,overdue=0)=>({
  id,name,stage,rel,fin,temp,adv,quota,val,
  contacts:[{name:cn,role:cr,email:'',phone:'',isPrimary:true}],
  // legacy shorthands kept for compatibility
  get cn(){return this.contacts.find(x=>x.isPrimary)?.name||this.contacts[0]?.name||'—';},
  get cr(){return this.contacts.find(x=>x.isPrimary)?.role||this.contacts[0]?.role||'—';},
  notes,overdue,
  engagement:3, // 1-5 potencial de engajamento
  // meeting report fields (from template)
  meeting:{
    date:'',
    pubAlvo:'',periodo:'',objetivo:'',desafio:'',budget:'',
    decisor:'',prazo:'',outrasFeiras:'',objecoes:'',criterio:'',
    interesse:'',tomReuniao:'',pontoVirada:'',nivelInteresse:3,urgencia:3,
    proximosPassos:[]
  },
  partnership:null
});

const S={
  page:'central', theme:'light',
  eventName:'Mercado em Conexão 2026',
  defaultChecklist:['Logo vetorizada recebida','Tema da palestra definido','Horário e local confirmados','Material aprovado pelo cliente','Kickoff realizado'],
  quotas:[{n:'Bronze',v:5000},{n:'Prata',v:12000},{n:'Ouro',v:25000},{n:'Diamante',v:50000}],
  goal:{total:500000,deadline:inD(150)},
  fSearch:'',fAdv:'all',fQuota:'all',fHot:false,fCold:false,fLate:false,
  pSel:null, pTab:'info', pView:'list',
  // TASKS SYSTEM
  tasks:[
    {id:'t1',title:'Ligar para retorno da proposta',desc:'Cliente pediu retorno até hoje',assignedTo:'u1',assignedBy:'u3',companyId:'c5',dueDate:new Date(Date.now()-86400000).toISOString().slice(0,10),done:false,doneAt:null,createdAt:new Date().toISOString()},
    {id:'t2',title:'Enviar contrato para assinatura',desc:'Contrato aprovado pelo jurídico',assignedTo:'u2',assignedBy:'u3',companyId:'c6',dueDate:new Date(Date.now()).toISOString().slice(0,10),done:false,doneAt:null,createdAt:new Date().toISOString()},
    {id:'t3',title:'Confirmar reunião com CEO',desc:'Confirmar local e horário',assignedTo:'u1',assignedBy:'u3',companyId:'c4',dueDate:new Date(Date.now()+2*86400000).toISOString().slice(0,10),done:false,doneAt:null,createdAt:new Date().toISOString()},
    {id:'t4',title:'Preparar proposta comercial',desc:'Incluir desconto de 10%',assignedTo:'u2',assignedBy:'u3',companyId:'c3',dueDate:new Date(Date.now()+5*86400000).toISOString().slice(0,10),done:true,doneAt:new Date().toISOString(),createdAt:new Date().toISOString()},
    {id:'t5',title:'Follow-up pós-reunião',desc:'Enviar resumo da reunião por e-mail',assignedTo:'u1',assignedBy:'u3',companyId:'c2',dueDate:new Date(Date.now()+7*86400000).toISOString().slice(0,10),done:false,doneAt:null,createdAt:new Date().toISOString()},
  ],
  // METAS EXTENDED
  metaByQuota:{Bronze:0,Prata:0,Ouro:0,Diamante:0},
  users:[
    {id:'u1',name:'Rafael Mendes', email:'rafael@mecx.com',  team:'negocios', role:'assessor',    status:'ativo',   color:0},
    {id:'u2',name:'Bianca Lopes',  email:'bianca@mecx.com',  team:'negocios', role:'assessor',    status:'ativo',   color:1},
    {id:'u3',name:'Juliana Costa', email:'juliana@mecx.com', team:'parcerias',role:'coordenador', status:'ativo',   color:2},
    {id:'u4',name:'Diego Faria',   email:'diego@mecx.com',   team:'parcerias',role:'assessor',    status:'pendente',color:3},
    {id:'u5',name:'Lara Souza',    email:'lara@mecx.com',    team:'negocios', role:'assessor',    status:'pendente',color:4},
  ],
  companies:[
    mkCo('c1','Padaria Estrela','prospeccao',2,2,2,'u1','Bronze',5000,'Antônio Vieira','Proprietário','Indicação. Avaliar interesse em pacote básico.',0),
    mkCo('c2','TechNova Sistemas','prospeccao',4,4,2,'u2','Ouro',25000,'Paula Reis','CMO','Empresa em crescimento. Contato ainda frio.',1),
    mkCo('c3','Clínica Vida','contato',3,3,3,'u1','Prata',12000,'Helena Dias','Diretora','Demonstrou interesse. Aguardando reunião.',0),
    mkCo('c4','Grupo Atlas','reuniao',5,5,5,'u2','Diamante',50000,'Marcos Tavares','CEO','Reunião marcada para semana que vem. Alto potencial.',2),
    mkCo('c5','Loja Bem-Estar','negociacao',3,3,5,'u1','Prata',12000,'Júlia Nunes','Sócia','Negociando desconto. Cliente muito engajado.',1),
    mkCo('c6','AutoPeças Sul','negociacao',4,4,4,'u2','Ouro',25000,'Pedro Lima','Dir. Comercial','Proposta enviada. Aguardando financeiro.',2),
    mkCo('c10','Café Aurora','perdido',2,2,1,'u1','Bronze',5000,'Sofia Martins','Gerente','Sem orçamento neste ciclo.',0),
  ],
};

// Finalized companies with partnership
function mkFin(id,name,adv,quota,val,cn,cr,notes,pstage,checks,talk){
  const c=mkCo(id,name,'finalizado',4,4,4,adv,quota,val,cn,cr,notes,0);
  c.engagement=4;
  c.meeting.objetivo='Exposição de marca e geração de leads qualificados';
  c.meeting.budget=fBRL(val);
  c.meeting.decisor=cn;
  c.meeting.interesse='Alto — demonstrou urgência e solicitou proposta imediata';
  c.meeting.tomReuniao='Positivo e propositivo';
  c.partnership={stage:pstage,checklist:checks,talk,reuniaoReport:c.meeting};
  return c;
}
S.companies.push(
  mkFin('c7','Construtora Horizonte','u1','Ouro',25000,'Marina Alves','Diretora de Marketing',
    'Cliente quer destaque no palco principal. Aprovação via jurídico — prever 5 dias úteis.',
    'andamento',[true,true,false,false,false],
    {theme:'Inovação no varejo de construção',datetime:inD(9,14,0),inGrid:true,custom:false,briefing:'',speaker:'Marina Alves'}),
  mkFin('c8','Banco Lumen','u1','Diamante',50000,'Otávio Prado','Head Comercial',
    'Acabou de fechar. Aguardando kickoff.',
    'kickoff',[false,false,false,false,false],
    {theme:'',datetime:'',inGrid:false,custom:false,briefing:'',speaker:''}),
  mkFin('c9','Verde Agro','u2','Prata',12000,'Caio Ribeiro','CEO',
    'Palestra sob medida sobre sustentabilidade. Conteúdo co-criado com o cliente.',
    'concluido',[true,true,true,true,true],
    {theme:'Sustentabilidade que dá lucro no agro',datetime:inD(9,14,0),inGrid:true,custom:true,
     briefing:'Foco em cases reais de ROI. Sem jargão técnico. 2 perguntas de plateia ao final.',speaker:'Caio Ribeiro'})
);

S.pSel=S.companies.find(c=>c.partnership)?.id||null;

const user=id=>S.users.find(u=>u.id===id);
const userName=id=>user(id)?.name||'—';
const partners=()=>S.companies.filter(c=>c.partnership);
const co=()=>S.companies.find(c=>c.id===S.pSel)||partners()[0];
const closedVal=()=>S.companies.filter(c=>c.stage==='finalizado').reduce((s,c)=>s+c.val,0);
const progress=c=>{
  const tot=c.partnership.checklist.length;
  return tot?Math.round(c.partnership.checklist.filter(Boolean).length/tot*100):0;
};
const hasPend=c=>!c.partnership.talk.theme||!c.partnership.talk.datetime||c.partnership.checklist.some(x=>!x);

/* ═══════════════════════════════════════════════════
   NAV CONFIG
═══════════════════════════════════════════════════ */
const NAV_ITEMS=[
  {id:'central',   icon:'home',      label:'Central do Assessor'},
  {id:'funil',     icon:'kanban',    label:'Funil de Negócios'},
  {id:'parcerias', icon:'handshake', label:'Sucesso dos Clientes'},
  {id:'dashboards',icon:'chart',     label:'Dashboards'},
  {divider:'GESTÃO INTERNA'},
  {id:'metas',     icon:'target',    label:'Métricas e Metas'},
  {id:'usuarios',  icon:'users',     label:'Usuários e Permissões'},
  {id:'config',    icon:'gear',      label:'Configurações'},
];

/* ═══════════════════════════════════════════════════
   TOAST
═══════════════════════════════════════════════════ */
function toast(msg,type=''){
  const el=document.createElement('div');
  el.className='toast';
  if(type==='warn')el.style.borderLeftColor='var(--warn)';
  if(type==='err') el.style.borderLeftColor='var(--danger)';
  el.textContent=msg;
  document.getElementById('toasts').appendChild(el);
  setTimeout(()=>{el.style.opacity='0';el.style.transition='opacity .3s';setTimeout(()=>el.remove(),300);},2600);
}

/* ═══════════════════════════════════════════════════
   ROUTING
═══════════════════════════════════════════════════ */
function nav(page){
  S.page=page;closeAll();render();
}
function toggleTheme(){
  S.theme=S.theme==='dark'?'light':'dark';
  document.documentElement.setAttribute('data-theme',S.theme);
  buildNav();
}
function closeNav(){document.getElementById('sidebar').classList.remove('open');document.getElementById('overlay').style.display='none';}
function openNav(){document.getElementById('sidebar').classList.add('open');document.getElementById('overlay').style.display='block';}
function closeSheet(){document.getElementById('slideover').classList.remove('open');document.getElementById('scrim').classList.remove('open');}
function closeModal(){document.getElementById('modal').classList.remove('open');document.getElementById('scrim').classList.remove('open');}
function closeAll(){closeSheet();closeModal();closeNav();}

/* ═══════════════════════════════════════════════════
   PAGES
═══════════════════════════════════════════════════ */
function render(){
  document.documentElement.setAttribute('data-theme',S.theme);
  buildNav();
  const pages={central:pageCentral,funil:pageFunil,parcerias:pageParcerias,dashboards:pageDash,metas:pageMetas,usuarios:pageUsers,config:pageConfig};
  document.getElementById('content').innerHTML=(pages[S.page]||pageCentral)();
}

/* ─── CENTRAL ─── */
function pageCentral(){
  const today=new Date().toISOString().slice(0,10);
  const nextWeek=new Date(Date.now()+7*86400000).toISOString().slice(0,10);
  const isCoord=session?.role==='coordenador';
  const myId=session?.userId;
  const firstName=session?.name?.split(' ')[0]||'!';

  // My companies (assigned as primary or secondary advisor)
  const myCos=S.companies.filter(c=>c.adv===myId||(c.adv2||'')=== myId);
  const activeCos=myCos.filter(c=>!['finalizado','perdido'].includes(c.stage));
  const finalizedCos=myCos.filter(c=>c.stage==='finalizado');
  const lostCos=myCos.filter(c=>c.stage==='perdido');
  const negCos=myCos.filter(c=>['reuniao','negociacao'].includes(c.stage));
  const closedMy=finalizedCos.reduce((s,c)=>s+c.val,0);
  const negVal=negCos.reduce((s,c)=>s+c.val,0);

  // Tasks
  const relevantTasks=S.tasks.filter(t=>isCoord?true:t.assignedTo===myId);
  const pendingTasks=relevantTasks.filter(t=>!t.done);
  const lateTasks=pendingTasks.filter(t=>t.dueDate<today).sort((a,b)=>a.dueDate.localeCompare(b.dueDate));
  const todayTasks=pendingTasks.filter(t=>t.dueDate===today);
  const weekTasks=pendingTasks.filter(t=>t.dueDate>today&&t.dueDate<=nextWeek).sort((a,b)=>a.dueDate.localeCompare(b.dueDate));

  // Section helpers
  const taskItem=t=>{
    const co=S.companies.find(c=>c.id===t.companyId);
    const isLate=t.dueDate<today;const isToday2=t.dueDate===today;
    return`<div class="ci-row" onclick="toggleTask('${t.id}')">
      <div class="ci-check ${t.done?'done':''}">${t.done?ic('check','ic ic-sm'):''}</div>
      <div class="ci-body">
        <div class="ci-name${t.done?' ci-done':''}">${esc(t.title)}</div>
        <div class="ci-sub">
          ${isLate?`<span style="color:var(--danger-txt);font-weight:600">⚠ ${fmtDate(t.dueDate)}</span>`:isToday2?`<span style="color:var(--warn-txt);font-weight:600">Hoje</span>`:`<span>${fmtDate(t.dueDate)}</span>`}
          ${co?` · ${co.name}`:''}
          ${isCoord?` · <span style="color:var(--navy);font-weight:600">${userName(t.assignedTo)}</span>`:''}
        </div>
      </div>
    </div>`;
  };

  const coItem=c=>`<div class="ci-row" onclick="openCompany('${c.id}')">
    <div class="ci-body">
      <div class="ci-name">${esc(c.name)}</div>
      <div class="ci-sub" style="display:flex;align-items:center;gap:6px">
        <span>${stageById(c.stage).label}</span>
        ${c.temp>=4?ic('flame','ic ic-sm'):''} ${c.rel>=4?ic('star','ic ic-sm'):''}
      </div>
      <div style="font-size:12px;font-weight:600;color:var(--navy);margin-top:2px">${fBRL(c.val)}</div>
    </div>
    <div style="color:var(--txt4)">${ic('arrow','ic ic-sm')}</div>
  </div>`;

  // "Sem atualização" = no meeting date recorded in last 7 days
  const stale=myCos.filter(c=>!['finalizado','perdido'].includes(c.stage)&&!c.meeting?.date);
  // Quentes & estratégicas
  const hotStrat=S.companies.filter(c=>!['finalizado','perdido'].includes(c.stage)&&c.temp>=4&&c.rel>=4)
    .sort((a,b)=>b.temp-a.temp||b.rel-a.rel).slice(0,5);

  const kpiCard=(icon,lbl,val,valColor='var(--txt)',border='')=>`
    <div style="background:var(--surface);border:1px solid ${border||'var(--border)'};border-radius:var(--r-lg);padding:14px 16px;min-width:0;flex:1">
      <div style="display:flex;align-items:center;gap:5px;font-size:10.5px;font-weight:700;text-transform:uppercase;letter-spacing:.07em;color:var(--txt3);margin-bottom:8px">${icon?ic(icon,'ic ic-sm'):''}<span>${lbl}</span></div>
      <div style="font-size:22px;font-weight:900;letter-spacing:-.03em;color:${valColor}">${val}</div>
    </div>`;

  const sectionCard=(title,badge,content)=>`
    <div style="background:var(--surface);border:1px solid var(--border);border-radius:var(--r-lg);display:flex;flex-direction:column;min-height:160px">
      <div style="display:flex;align-items:center;justify-content:space-between;padding:14px 16px 12px;border-bottom:1px solid var(--border)">
        <span style="font-size:14px;font-weight:700;color:var(--txt)">${title}</span>
        <span style="background:${badge===0?'var(--surface2)':'var(--danger)'};color:${badge===0?'var(--txt3)':'#fff'};font-size:11px;font-weight:800;border-radius:99px;padding:2px 8px;min-width:24px;text-align:center">${badge}</span>
      </div>
      <div style="flex:1;overflow-y:auto;padding:4px 0">
        ${content||`<div style="padding:20px 16px;text-align:center;color:var(--txt4);font-size:13px">Nada por aqui.</div>`}
      </div>
    </div>`;

  return`
  <div class="ph">
    <button class="hamburger" onclick="openNav()">${ic('menu','ic ic-lg')}</button>
    <div>
      <div style="font-size:20px;font-weight:900;color:var(--txt);letter-spacing:-.03em">Bem-vindo, ${firstName}</div>
      <div style="font-size:13px;color:var(--txt3);margin-top:2px">Suas prioridades, empresas e tarefas em um só lugar.</div>
    </div>
    <div class="ph-gap"></div>
    <div class="ph-actions">
      <button class="btn btn-ghost btn-sm" onclick="openNewTaskModal()">${ic('plus','ic')}Nova tarefa</button>
      <button class="btn btn-primary btn-sm" onclick="openNewCompany()">${ic('plus','ic')}Nova empresa</button>
    </div>
  </div>

  <div class="page-body">
    <!-- KPI ROW — 8 cards -->
    <div style="display:flex;gap:10px;margin-bottom:20px;overflow-x:auto;padding-bottom:4px">
      ${kpiCard('users','Atribuídas',myCos.length)}
      ${kpiCard('kanban','Ativas',activeCos.length)}
      ${kpiCard('check','Finalizadas',finalizedCos.length,'var(--success-txt)')}
      ${kpiCard('x','Perdidas',lostCos.length,lostCos.length?'var(--danger-txt)':'var(--txt)')}
      ${kpiCard('trending','Em Negociação',fBRL(negVal),'var(--txt)')}
      ${kpiCard('dollar','Fechado',fBRL(closedMy),'var(--success-txt)')}
      ${kpiCard('clock','Tarefas Pendentes',pendingTasks.length)}
      ${kpiCard('alert','Tarefas Atrasadas',lateTasks.length,lateTasks.length?'var(--danger-txt)':'var(--txt)',lateTasks.length?'var(--danger)':'')}
    </div>

    <!-- TASKS ROW — 3 columns -->
    <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:14px;margin-bottom:20px">
      ${sectionCard(
        ic('alert','ic ic-sm')+' Atrasadas', lateTasks.length,
        lateTasks.map(taskItem).join('')
      )}
      ${sectionCard(
        ic('calendar','ic ic-sm')+' Hoje', todayTasks.length,
        todayTasks.map(taskItem).join('')
      )}
      ${sectionCard(
        ic('clock','ic ic-sm')+' Próximos 7 dias', weekTasks.length,
        weekTasks.map(taskItem).join('')
      )}
    </div>

    <!-- COMPANIES ROW — 3 columns -->
    <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:14px">
      <div style="background:var(--surface);border:1px solid var(--border);border-radius:var(--r-lg)">
        <div style="padding:14px 16px 12px;border-bottom:1px solid var(--border);font-size:14px;font-weight:700">Minhas empresas</div>
        <div style="padding:4px 0;overflow-y:auto;max-height:280px">
          ${myCos.length?myCos.slice(0,8).map(coItem).join(''):`<div style="padding:20px 16px;text-align:center;color:var(--txt4);font-size:13px">Nenhuma empresa.</div>`}
        </div>
      </div>
      <div style="background:var(--surface);border:1px solid var(--border);border-radius:var(--r-lg)">
        <div style="padding:14px 16px 12px;border-bottom:1px solid var(--border);font-size:14px;font-weight:700">Sem atualização</div>
        <div style="padding:4px 0;overflow-y:auto;max-height:280px">
          ${stale.length?stale.map(coItem).join(''):`<div style="padding:20px 16px;text-align:center;color:var(--txt4);font-size:13px">Nenhuma empresa.</div>`}
        </div>
      </div>
      <div style="background:var(--surface);border:1px solid var(--border);border-radius:var(--r-lg)">
        <div style="padding:14px 16px 12px;border-bottom:1px solid var(--border);font-size:14px;font-weight:700">Quentes &amp; estratégicas</div>
        <div style="padding:4px 0;overflow-y:auto;max-height:280px">
          ${hotStrat.length?hotStrat.map(coItem).join(''):`<div style="padding:20px 16px;text-align:center;color:var(--txt4);font-size:13px">Nenhuma empresa.</div>`}
        </div>
      </div>
    </div>
  </div>`;
}

function statCard(icon,bg,fg,val,lbl){
  return`<div class="stat-card">
    <div class="stat-icon" style="background:${bg};color:${fg}">${ic(icon,'ic ic-lg')}</div>
    <div class="stat-val">${val}</div>
    <div class="stat-lbl">${lbl}</div>
  </div>`;
}

/* ─── FUNIL ─── */
function pageFunil(){
  // apply filters
  const q=S.fSearch.toLowerCase().trim();
  const list=S.companies.filter(c=>{
    if(q&&!c.name.toLowerCase().includes(q))return false;
    if(S.fAdv!=='all'&&c.adv!==S.fAdv)return false;
    if(S.fQuota!=='all'&&c.quota!==S.fQuota)return false;
    if(S.fHot&&c.temp<4)return false;
    if(S.fCold&&c.temp>2)return false;
    if(S.fLate&&!c.overdue)return false;
    return true;
  });
  const anyFilter=q||S.fAdv!=='all'||S.fQuota!=='all'||S.fHot||S.fCold||S.fLate;
  const activeUsers=S.users.filter(u=>u.team==='negocios'&&u.status==='ativo');

  const filterBar=`
  <div class="filterbar">
    <div class="fb-search">
      ${ic('search','ic')}
      <input class="input fb-input" id="fSearch" placeholder="Buscar empresa…" value="${esc(S.fSearch)}" oninput="S.fSearch=this.value;rerenderFunil()" style="font-size:13px">
    </div>
    <div class="fb-sep"></div>
    <span class="fb-label">Assessor</span>
    <select class="fb-sel" id="fAdv" onchange="S.fAdv=this.value;rerenderFunil()">
      <option value="all">Todos</option>
      ${activeUsers.map(u=>`<option value="${u.id}"${S.fAdv===u.id?' selected':''}>${u.name}</option>`).join('')}
    </select>
    <select class="fb-sel" id="fQuota" onchange="S.fQuota=this.value;rerenderFunil()">
      <option value="all">Todas as cotas</option>
      ${S.quotas.map(q=>`<option value="${q.n}"${S.fQuota===q.n?' selected':''}>${q.n}</option>`).join('')}
    </select>
    <div class="fb-sep"></div>
    <div class="filter-chips">
      <button class="fchip${S.fHot?' active-hot':''}" onclick="S.fHot=!S.fHot;if(S.fHot)S.fCold=false;rerenderFunil()">${ic('flame','ic ic-sm')}Quentes</button>
      <button class="fchip${S.fCold?' active-cold':''}" onclick="S.fCold=!S.fCold;if(S.fCold)S.fHot=false;rerenderFunil()">${ic('clock','ic ic-sm')}Frios</button>
      <button class="fchip${S.fLate?' active-late':''}" onclick="S.fLate=!S.fLate;rerenderFunil()">${ic('alert','ic ic-sm')}Atrasados</button>
    </div>
    <div class="active-filters">
      <span class="fc-count">${list.length} de ${S.companies.length}</span>
      ${anyFilter?`<button class="fc-clear" onclick="clearFilters()">Limpar filtros</button>`:''}
    </div>
  </div>`;

  const board=STAGES.map(st=>{
    const cards=list.filter(c=>c.stage===st.id);
    const sum=cards.reduce((s,c)=>s+c.val,0);
    return`<div class="kcol" id="col-${st.id}" ondragover="event.preventDefault();this.classList.add('drag-over')" ondragleave="this.classList.remove('drag-over')" ondrop="onDrop(event,'${st.id}')">
      <div class="kcol-head">
        <span class="kcol-dot" style="background:${st.color}"></span>
        <span class="kcol-name">${st.label}</span>
        <span class="kcol-cnt">${cards.length}</span>
      </div>
      ${sum?`<div class="kcol-sum">${fBRL(sum)}</div>`:''}
      <div class="kcol-body">
        ${cards.map(c=>{
          const pend=c.partnership&&hasPend(c)&&!['concluido','finalizado'].includes(c.partnership.stage);
          return`<div class="kcard" draggable="true" ondragstart="onDragStart(event,'${c.id}')" ondragend="onDragEnd(event)" onclick="openCompany('${c.id}')">
            <div class="kc-name">${c.name}</div>
            <div class="kc-sub">${c.cn} · ${c.cr}</div>
            <div class="kc-foot">
              <span class="kc-value">${fBRL(c.val)}</span>
              <div class="kc-tags">
                ${c.overdue?`<span class="kc-tag late">${ic('clock','ic ic-sm')}${c.overdue}d</span>`:''}
                ${c.temp>=4?`<span class="kc-tag hot">${ic('flame','ic ic-sm')}${c.temp}</span>`:`<span class="kc-tag">${ic('flame','ic ic-sm')}${c.temp}</span>`}
                ${pend?`<span class="kc-tag pend">${ic('alert','ic ic-sm')}Pendências</span>`:''}
              </div>
            </div>
          </div>`;
        }).join('')||`<div class="kc-empty">Sem empresas</div>`}
      </div>
    </div>`;
  }).join('');

  return`
  <div class="ph">
    <button class="hamburger" onclick="openNav()">${ic('menu','ic ic-lg')}</button>
    <div><div style="font-size:16px;font-weight:800">Funil de Negócios</div>
      <div style="font-size:12.5px;color:var(--txt3)">Arraste os cards entre as etapas</div></div>
    <div class="ph-gap"></div>
    <div class="ph-actions">
      <button class="btn btn-ghost btn-sm" onclick="exportExcel()">${ic('download','ic')}Exportar</button>
      <button class="btn btn-primary btn-sm" onclick="openNewCompany()">${ic('plus','ic')}Nova empresa</button>
    </div>
  </div>
  <div class="page-body">
    <div id="filterbarWrap">${filterBar}</div>
    <div class="kanban" id="kanbanBoard">${board}</div>
  </div>`;
}

function rerenderFunil(){
  if(S.page!=='funil')return;
  // re-render just the filter + board without losing focus
  const fb=document.getElementById('filterbarWrap');
  const kb=document.getElementById('kanbanBoard');
  if(!fb||!kb)return render();
  const tmp=document.createElement('div');
  tmp.innerHTML=pageFunil();
  fb.innerHTML=tmp.querySelector('#filterbarWrap').innerHTML;
  kb.innerHTML=tmp.querySelector('#kanbanBoard').innerHTML;
  // restore focus
  const inp=document.getElementById('fSearch');
  if(inp&&document.activeElement!==inp){inp.focus();inp.setSelectionRange(inp.value.length,inp.value.length);}
}

function clearFilters(){S.fSearch='';S.fAdv='all';S.fQuota='all';S.fHot=false;S.fCold=false;S.fLate=false;rerenderFunil();}
function exportExcel(){toast('Exportação para Excel gerada ✓');}

// drag & drop
let dragId=null;
function onDragStart(e,id){dragId=id;e.target.classList.add('is-dragging');e.dataTransfer.effectAllowed='move';}
function onDragEnd(e){e.target.classList.remove('is-dragging');document.querySelectorAll('.kcol').forEach(c=>c.classList.remove('drag-over'));}
function onDrop(e,stage){
  e.preventDefault();document.querySelectorAll('.kcol').forEach(c=>c.classList.remove('drag-over'));
  if(!dragId)return;
  moveStage(dragId,stage);dragId=null;
}
function moveStage(id,stage){
  const c=S.companies.find(x=>x.id===id);if(!c||c.stage===stage)return;
  c.stage=stage;
  if(stage==='finalizado'&&!c.partnership){
    c.partnership={
      stage:'kickoff',
      checklist:S.defaultChecklist.map(()=>false),
      talk:{theme:'',datetime:'',inGrid:false,custom:false,briefing:'',speaker:''},
      reuniaoReport:{...c.meeting} // transfer all meeting data
    };
    S.pSel=c.id;
    toast(`${c.name} fechado — dados da reunião transferidos para Parcerias ✓`);
  }
  render();
}

/* ─── PARCERIAS ─── */
function pageParcerias(){
  if(S.pView==='grade')return pageGrade();

  const list=partners();
  const sel=co();
  const listHtml=list.map((c,i)=>{
    const {cls}=pbadge[c.partnership.stage]||{cls:'b-grey'};
    const pend=hasPend(c)&&!['concluido','finalizado'].includes(c.partnership.stage);
    const pct=progress(c);
    return`<button class="pitem${sel&&c.id===sel.id?' active':''}" onclick="selectPartner('${c.id}')">
      <div class="pi-top">
        <div class="pi-mono" style="${avatarColor(i%6)}">${ini(c.name)}</div>
        <div class="pi-info">
          <div class="pi-name">${c.name}</div>
          <div class="pi-meta">${c.quota} · ${fBRL(c.val)}</div>
        </div>
        <span class="badge ${cls}" style="flex-shrink:0">${PSTAGES.find(p=>p.id===c.partnership.stage)?.label||c.partnership.stage}</span>
      </div>
      <div class="pi-foot">
        <div class="pi-prog-wrap">
          <div class="pi-prog-bar"><div class="pi-prog-fill" style="width:${pct}%"></div></div>
          <div class="pi-prog-txt">${c.partnership.checklist.filter(Boolean).length}/${c.partnership.checklist.length} entregas · ${pct}%</div>
        </div>
        ${pend?`<div class="pi-pend">${ic('alert','ic ic-sm')}Pendente</div>`:''}
      </div>
    </button>`;
  }).join('');

  return`
  <div style="display:flex;flex-direction:column;height:100vh;overflow:hidden">
    <div class="ph" style="flex-shrink:0">
      <button class="hamburger" onclick="openNav()">${ic('menu','ic ic-lg')}</button>
      <div><div style="font-size:16px;font-weight:800">Sucesso dos Clientes</div>
        <div style="font-size:12.5px;color:var(--txt3)">Acompanhamento das parcerias fechadas</div></div>
      <div class="ph-gap"></div>
      <div class="ph-actions">
        <div style="display:flex;border:1px solid var(--border);border-radius:var(--r-md);overflow:hidden;background:var(--surface)">
          <button class="btn btn-ghost btn-sm" style="border:0;border-radius:0;${S.pView==='list'?'background:var(--surface2);':''}color:var(--txt2)" onclick="S.pView='list';render()">Parcerias</button>
          <button class="btn btn-ghost btn-sm" style="border:0;border-radius:0;border-left:1px solid var(--border);${S.pView==='grade'?'background:var(--surface2);':''}color:var(--txt2)" onclick="S.pView='grade';render()">${ic('calendar','ic')}Grade</button>
        </div>
      </div>
    </div>
    <div style="display:flex;flex:1;overflow:hidden">
      <!-- LIST -->
      <div style="width:300px;flex-shrink:0;border-right:1px solid var(--border);background:var(--surface);display:flex;flex-direction:column;overflow:hidden">
        <div style="padding:12px 16px;border-bottom:1px solid var(--border);font-size:14px;font-weight:700;flex-shrink:0">${list.length} parceria${list.length!==1?'s':''}</div>
        <div style="padding:8px 12px;border-bottom:1px solid var(--border);background:var(--surface2);flex-shrink:0">
          <div style="position:relative">${ic('search','ic')}
            <input class="input" placeholder="Filtrar parcerias…" style="font-size:12.5px;padding:6px 10px 6px 30px;width:100%"
              oninput="S.pFilter=this.value;renderParceriasFilter()">
          </div>
        </div>
        <div style="overflow-y:auto;flex:1" id="plistItems">
          ${listHtml||`<div style="padding:24px;text-align:center;color:var(--txt3);font-size:13px">Nenhuma parceria ainda.<br>Feche um negócio no funil.</div>`}
        </div>
      </div>
      <!-- DETAIL -->
      <div style="flex:1;overflow-y:auto;background:var(--bg)" id="pdetailPane">
        ${sel?renderPartnerDetail(sel):`<div style="display:flex;align-items:center;justify-content:center;height:100%;color:var(--txt3);font-size:14px;flex-direction:column;gap:8px">${ic('handshake','ic ic-lg')}<span>Selecione uma parceria à esquerda</span></div>`}
      </div>
    </div>
  </div>`;
}

function renderParceriasFilter(){
  const q=(S.pFilter||'').toLowerCase();
  const items=document.getElementById('plistItems');
  if(!items)return;
  document.querySelectorAll('.pitem').forEach(btn=>{
    const name=btn.querySelector('.pi-name')?.textContent||'';
    btn.style.display=name.toLowerCase().includes(q)?'':'none';
  });
}

function selectPartner(id){
  S.pSel=id; S.pTab='info';
  // update active state in list without full re-render
  document.querySelectorAll('.pitem').forEach(b=>b.classList.remove('active'));
  const btn=document.querySelector(`.pitem[onclick*="${id}"]`);
  if(btn)btn.classList.add('active');
  // update detail pane
  const c=S.companies.find(x=>x.id===id);
  const pane=document.getElementById('pdetailPane');
  if(pane&&c){pane.innerHTML=renderPartnerDetail(c);pane.scrollTop=0;}
  else render();
}

function renderPartnerDetail(c){
  const p=c.partnership;
  const {cls}=pbadge[p.stage]||{cls:'b-grey'};
  const stagesOrder=['kickoff','andamento','pendente','concluido','finalizado'];
  const curIdx=stagesOrder.indexOf(p.stage);
  const pct=progress(c);

  // stepper
  const stepperH=`<div class="stepper">
    ${stagesOrder.map((s,i)=>{
      const done=i<curIdx;const cur=i===curIdx;
      return`<div class="step${done?' done':cur?' current':''}">
        ${i>0?`<div class="step-line"></div>`:''}
        <div class="step-dot">${done?ic('check','ic ic-sm'):i+1}</div>
        <div class="step-lbl">${PSTAGES.find(x=>x.id===s)?.label||s}</div>
      </div>`;
    }).join('')}
  </div>`;

  // metrics bar
  const metricsH=`<div class="pdh-metrics">
    <div class="pdh-metric"><div class="pdh-m-val">${fBRL(c.val)}</div><div class="pdh-m-lbl">Valor fechado</div></div>
    <div class="pdh-metric"><div class="pdh-m-val">${c.quota}</div><div class="pdh-m-lbl">Cota</div></div>
    <div class="pdh-metric"><div class="pdh-m-val">${pct}%</div><div class="pdh-m-lbl">Entregas</div></div>
    <div class="pdh-metric"><div class="pdh-m-val">${p.talk.datetime?dUntil(p.talk.datetime)+'d':'—'}</div><div class="pdh-m-lbl">Dias p/ palestra</div></div>
  </div>`;

  const PTABS=[
    {id:'info',     label:'Informações'},
    {id:'negocios', label:'Dados de Negócios'},
    {id:'checklist',label:'Checklist'},
    {id:'tarefas',  label:'Tarefas'},
    {id:'palestra', label:'Palestra'},
    {id:'comentarios',label:'Comentários'},
  ];

  let paneHtml='';
  const pt=S.pTab;
  if(pt==='info')         paneHtml=paneInfo(c);
  else if(pt==='negocios')paneHtml=paneNegocios(c);
  else if(pt==='checklist')paneHtml=paneChecklist(c);
  else if(pt==='tarefas') paneHtml=paneTarefas(c);
  else if(pt==='palestra')paneHtml=panePalestra(c);
  else if(pt==='comentarios')paneHtml=paneComentarios(c);
  else paneHtml=paneInfo(c);

  return`
  <div class="pdetail-hero">
    <div class="pdh-top">
      <div style="${avatarColor(S.companies.indexOf(c)%6)};width:52px;height:52px;border-radius:14px;font-size:17px;font-weight:800;display:grid;place-items:center;letter-spacing:-.02em;flex-shrink:0">${ini(c.name)}</div>
      <div class="pdh-info" style="flex:1;min-width:0">
        <div class="pdh-name">${c.name}</div>
        <div style="display:flex;align-items:center;gap:8px;margin-top:5px;flex-wrap:wrap">
          <span class="pdh-origin">${ic('kanban','ic ic-sm')}<span>Fechado no Funil de Negócios</span></span>
          <span class="badge ${cls}"><span class="bdot ${(pbadge[p.stage]||{dot:'bdot-blue'}).dot}"></span>${PSTAGES.find(x=>x.id===p.stage)?.label||p.stage}</span>
        </div>
      </div>
      <div style="display:flex;gap:8px;align-items:center;flex-shrink:0">
        <select class="fb-sel" onchange="setPartnerStage('${c.id}',this.value)" style="min-width:170px">
          ${PSTAGES.map(ps=>`<option value="${ps.id}"${p.stage===ps.id?' selected':''}>${ps.label}</option>`).join('')}
        </select>
      </div>
    </div>
    ${metricsH}
  </div>
  ${stepperH}
  <div class="ptabs" style="overflow-x:auto;flex-wrap:nowrap">
    ${PTABS.map(t=>`<button class="ptab${S.pTab===t.id?' active':''}" onclick="S.pTab='${t.id}';document.getElementById('pdetailPane').innerHTML=renderPartnerDetail(document.getElementById('pdetailPane').__c||S.companies.find(x=>x.id==='${c.id}'));renderSwitchPTab('${c.id}','${t.id}')">${t.label}</button>`).join('')}
  </div>
  <div class="pane-body">${paneHtml}</div>`;
}

function renderSwitchPTab(cId,tab){
  S.pTab=tab;
  const c=S.companies.find(x=>x.id===cId);
  const pane=document.getElementById('pdetailPane');
  if(pane&&c){pane.innerHTML=renderPartnerDetail(c);pane.scrollTop=0;}
}

function paneNegocios(c){
  const rr=c.partnership?.reuniaoReport||c.meeting||{};
  const qfields=[
    ['Público-alvo principal',rr.pubAlvo],['Período buscado',rr.periodo],
    ['Objetivo na feira',rr.objetivo],['Desafio atual',rr.desafio],
    ['Budget disponível',rr.budget],['Prazo para decisão',rr.prazo],
    ['Tomador de decisão',rr.decisor],['Outras feiras',rr.outrasFeiras],
    ['Objeções levantadas',rr.objecoes],['Critério de escolha',rr.criterio],
    ['Interesse demonstrado',rr.interesse],['Tom da reunião',rr.tomReuniao],
    ['Ponto de virada',rr.pontoVirada],
  ].filter(([,v])=>v);

  const contacts=c.contacts||[];
  return`
  <div class="info-grid" style="margin-bottom:16px">
    <div class="ig-item"><div class="ig-lbl">Assessor responsável</div><div class="ig-val">${userName(c.adv)}</div></div>
    ${c.adv2?`<div class="ig-item"><div class="ig-lbl">Assessor secundário</div><div class="ig-val">${userName(c.adv2)}</div></div>`:''}
    <div class="ig-item"><div class="ig-lbl">Cota estimada</div><div class="ig-val">${c.quota}</div></div>
    <div class="ig-item"><div class="ig-lbl">Cota fechada</div><div class="ig-val">${c.cotaFechada||'—'}</div></div>
    <div class="ig-item"><div class="ig-lbl">Valor final</div><div class="ig-val mono" style="color:var(--navy)">${fBRL(c.val)}</div></div>
    <div class="ig-item"><div class="ig-lbl">Forma de pagamento</div><div class="ig-val">${c.payment||'À vista'}</div></div>
    <div class="ig-item"><div class="ig-lbl">Temperatura</div><div class="ig-val">${['','❄️ Frio','🌡 Morno','🟡 Morno+','🔥 Quente','🔴 Hot'][c.temp||3]}</div></div>
    <div class="ig-item"><div class="ig-lbl">Potencial financeiro</div>
      <div class="ig-val"><div class="scores">${[1,2,3,4,5].map(i=>`<div class="sdot${i<=c.fin?' on':''}"></div>`).join('')}</div></div></div>
  </div>

  ${contacts.length?`
  <div style="margin-bottom:16px">
    <div class="ig-lbl" style="font-size:11px;text-transform:uppercase;letter-spacing:.08em;font-weight:700;color:var(--txt3);margin-bottom:8px">Contatos da empresa</div>
    ${contacts.map(ct=>`
    <div style="display:flex;align-items:center;gap:10px;padding:8px 0;border-bottom:1px solid var(--border)">
      <div style="width:30px;height:30px;border-radius:99px;background:var(--blue-light);color:var(--navy);display:grid;place-items:center;font-size:11px;font-weight:700;flex-shrink:0">${ini(ct.name||'?')}</div>
      <div style="flex:1"><div style="font-size:13px;font-weight:600">${esc(ct.name)} ${ct.isPrimary?'<span class="badge b-blue" style="font-size:10px">Principal</span>':''}</div>
        <div style="font-size:12px;color:var(--txt3)">${esc(ct.role)}${ct.email?` · ${esc(ct.email)}`:''}${ct.phone?` · ${esc(ct.phone)}`:''}</div>
      </div>
    </div>`).join('')}
  </div>`:''}

  ${c.notes?`
  <div style="margin-bottom:16px">
    <div class="ig-lbl" style="font-size:11px;text-transform:uppercase;letter-spacing:.08em;font-weight:700;color:var(--txt3);margin-bottom:8px">Observações do hand-off</div>
    <div class="notes-box">${esc(c.notes)}</div>
  </div>`:''}

  ${qfields.length?`
  <div style="margin-bottom:4px">
    <div style="display:flex;align-items:center;gap:8px;margin-bottom:12px">
      <div style="font-size:14px;font-weight:700">Relatório de Reunião</div>
      <span class="badge b-blue">Transferido do Funil</span>
      ${rr.date?`<span class="badge b-grey">${fmtDate(rr.date)}</span>`:''}
    </div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">
      ${qfields.map(([l,v])=>`
      <div style="background:var(--surface);border:1px solid var(--border);border-radius:var(--r-md);padding:11px 13px">
        <div class="ig-lbl" style="margin-bottom:4px">${l}</div>
        <div style="font-size:13px;color:var(--txt2);line-height:1.45">${esc(v)}</div>
      </div>`).join('')}
    </div>
    ${rr.nivelInteresse||rr.urgencia?`
    <div style="display:flex;gap:16px;margin-top:12px;padding:12px 14px;background:var(--surface2);border-radius:var(--r-md)">
      ${rr.nivelInteresse?`<div style="text-align:center;flex:1">
        <div style="font-size:10px;color:var(--txt3);text-transform:uppercase;letter-spacing:.06em">Interesse</div>
        <div style="font-size:22px;margin-top:2px">${['','😐','🙂','😊','😃','🤩'][rr.nivelInteresse||3]}</div>
        <div style="font-size:11px;color:var(--txt3)">${rr.nivelInteresse}/5</div></div>`:''}
      ${rr.urgencia?`<div style="text-align:center;flex:1">
        <div style="font-size:10px;color:var(--txt3);text-transform:uppercase;letter-spacing:.06em">Urgência</div>
        <div style="font-size:22px;margin-top:2px">${['','🐢','🚶','🚴','🏃','🚀'][rr.urgencia||3]}</div>
        <div style="font-size:11px;color:var(--txt3)">${rr.urgencia}/5</div></div>`:''}
    </div>`:''}
    ${(rr.proximosPassos||[]).filter(Boolean).length?`
    <div style="margin-top:12px;padding:12px 14px;background:var(--blue-light);border:1px solid rgba(87,160,188,.3);border-radius:var(--r-md)">
      <div class="ig-lbl" style="margin-bottom:6px">Próximos passos acordados</div>
      ${rr.proximosPassos.filter(Boolean).map(p=>`<div style="display:flex;align-items:center;gap:6px;font-size:13px;padding:3px 0"><span style="color:var(--navy)">→</span>${esc(p)}</div>`).join('')}
    </div>`:''}
  </div>`:
  `<div style="padding:20px;text-align:center;color:var(--txt4);font-size:13px">Nenhum relatório de reunião registrado ainda.</div>`}`;
}

function paneTarefas(c){
  const today=new Date().toISOString().slice(0,10);
  const ctasks=S.tasks.filter(t=>t.companyId===c.id).sort((a,b)=>a.dueDate.localeCompare(b.dueDate));
  const canCreate=session?.role==='coordenador';
  const rows=ctasks.length?ctasks.map(t=>{
    const late=!t.done&&t.dueDate<today;
    const isToday=!t.done&&t.dueDate===today;
    return`<div class="task-item${late?' late':''}">
      <div class="task-cb${t.done?' done':''}" onclick="toggleTask('${t.id}');renderSwitchPTab('${c.id}','tarefas')">${t.done?ic('check','ic ic-sm'):''}</div>
      <div class="task-body">
        <div class="task-title${t.done?' done':''}">${esc(t.title)}</div>
        ${t.desc?`<div class="task-co">${esc(t.desc)}</div>`:''}
        <div class="task-meta">
          <span class="task-due ${late?'late':isToday?'today':'ok'}">${late?'⚠ '+fmtDate(t.dueDate)+' — atrasada':isToday?'Hoje':fmtDate(t.dueDate)}</span>
          <span class="task-assignee">${userName(t.assignedTo)}</span>
        </div>
      </div>
      ${canCreate?`<button class="btn btn-ghost btn-xs" style="color:var(--danger);flex-shrink:0" onclick="deleteTask('${t.id}');renderSwitchPTab('${c.id}','tarefas')">${ic('x','ic ic-sm')}</button>`:''}
    </div>`;
  }).join(''):`<div style="padding:24px;text-align:center;color:var(--txt4);font-size:13px">Nenhuma tarefa para esta empresa.</div>`;

  return`<div class="card" style="margin-bottom:14px">${rows}</div>
  ${canCreate?`
  <div style="background:var(--surface);border:1px solid var(--border);border-radius:var(--r-lg);padding:16px">
    <div style="font-size:13px;font-weight:700;margin-bottom:12px">Nova tarefa</div>
    <div class="form-row"><label class="form-label">Título</label><input class="input" id="pt_title" placeholder="Ex.: Ligar para confirmar entrega"></div>
    <div class="form-grid">
      <div class="form-row"><label class="form-label">Designar para</label>
        <select class="sel" id="pt_who">${S.users.filter(u=>u.status==='ativo'&&u.role==='assessor').map(u=>`<option value="${u.id}">${u.name}</option>`).join('')}</select></div>
      <div class="form-row"><label class="form-label">Data limite</label>
        <input class="input" type="date" id="pt_due" value="${today}"></div>
    </div>
    <button class="btn btn-primary btn-sm" style="width:100%;justify-content:center" onclick="createTask('${c.id}');renderSwitchPTab('${c.id}','tarefas')">${ic('plus','ic')}Criar tarefa</button>
  </div>`:''}`;
}

function paneComentarios(c){
  if(!c.comments)c.comments=[];
  const myName=session?.name||'Usuário';
  const rows=c.comments.length?[...c.comments].reverse().map(cm=>`
    <div style="padding:12px 0;border-bottom:1px solid var(--border)">
      <div style="display:flex;align-items:center;gap:8px;margin-bottom:5px">
        <div style="width:28px;height:28px;border-radius:99px;${avatarColor(S.users.findIndex(u=>u.id===cm.userId)%6)};display:grid;place-items:center;font-size:10px;font-weight:700;flex-shrink:0">${ini(cm.author)}</div>
        <div style="font-weight:600;font-size:13px">${esc(cm.author)}</div>
        <div style="font-size:11.5px;color:var(--txt3);margin-left:auto">${fmtDate(cm.date)}</div>
      </div>
      <div style="font-size:13.5px;color:var(--txt2);line-height:1.5;padding-left:36px">${esc(cm.text)}</div>
    </div>`).join('')
  :`<div style="padding:20px;text-align:center;color:var(--txt4);font-size:13px">Nenhum comentário ainda. Seja o primeiro!</div>`;

  return`
  <div class="card" style="margin-bottom:14px"><div style="padding:4px 16px">${rows}</div></div>
  <div style="background:var(--surface);border:1px solid var(--border);border-radius:var(--r-lg);padding:14px">
    <textarea class="textarea" id="pc_txt" placeholder="Escreva um comentário sobre esta parceria…" style="min-height:72px"></textarea>
    <button class="btn btn-primary btn-sm" style="margin-top:8px" onclick="addComment('${c.id}')">${ic('arrow','ic')}Comentar</button>
  </div>`;
}

function addComment(cId){
  const c=S.companies.find(x=>x.id===cId);if(!c)return;
  const txt=(document.getElementById('pc_txt')?.value||'').trim();
  if(!txt){toast('Escreva algo antes de comentar','err');return;}
  if(!c.comments)c.comments=[];
  c.comments.push({id:'cm'+(Date.now()%100000),text:txt,author:session?.name||'Usuário',userId:session?.userId||'',date:new Date().toISOString().slice(0,10)});
  toast('Comentário adicionado');
  renderSwitchPTab(cId,'comentarios');
}

function setPartnerStage(id,stage){
  const c=S.companies.find(x=>x.id===id);
  if(c&&c.partnership){c.partnership.stage=stage;render();toast('Status atualizado');}
}

function paneInfo(c){
  const rr=c.partnership?.reuniaoReport||c.meeting||{};
  const hasReport=rr&&(rr.objetivo||rr.interesse||rr.decisor);
  return`
  <div class="info-grid">
    <div class="ig-item"><div class="ig-lbl">Assessor responsável</div><div class="ig-val">${userName(c.adv)}</div></div>
    <div class="ig-item"><div class="ig-lbl">Contato principal</div><div class="ig-val">${c.cn}</div></div>
    <div class="ig-item"><div class="ig-lbl">Cargo</div><div class="ig-val">${c.cr}</div></div>
    <div class="ig-item"><div class="ig-lbl">Cota</div><div class="ig-val">${c.quota}</div></div>
    <div class="ig-item"><div class="ig-lbl">Valor</div><div class="ig-val mono">${fBRL(c.val)}</div></div>
    <div class="ig-item"><div class="ig-lbl">Forma de pagamento</div><div class="ig-val">${c.payment||'À vista'}</div></div>
  </div>
  <div style="margin-top:4px">
    <div class="ig-lbl" style="font-size:11px;text-transform:uppercase;letter-spacing:.08em;font-weight:700;color:var(--txt3);margin-bottom:8px">Observações do hand-off</div>
    <div class="notes-box">${esc(c.notes)}</div>
  </div>
  ${hasReport?`
  <div style="margin-top:20px">
    <div style="display:flex;align-items:center;gap:8px;margin-bottom:12px">
      <div style="font-size:14px;font-weight:700">Relatório de Reunião</div>
      <span class="badge b-blue">Transferido do Funil</span>
      ${rr.date?`<span class="badge b-grey">${rr.date}</span>`:''}
    </div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">
      ${[
        ['Objetivo na feira',rr.objetivo],['Desafio atual',rr.desafio],
        ['Budget disponível',rr.budget],['Prazo para decisão',rr.prazo],
        ['Tomador de decisão',rr.decisor],['Outras feiras',rr.outrasFeiras],
        ['Objeções',rr.objecoes],['Critério de escolha',rr.criterio],
        ['Interesse demonstrado',rr.interesse],['Tom da reunião',rr.tomReuniao],
        ['Ponto de virada',rr.pontoVirada],
      ].filter(([,v])=>v).map(([l,v])=>`
      <div style="background:var(--surface);border:1px solid var(--border);border-radius:var(--r-md);padding:11px 13px">
        <div class="ig-lbl" style="margin-bottom:4px">${l}</div>
        <div style="font-size:13px;color:var(--txt2);line-height:1.45">${esc(v)}</div>
      </div>`).join('')}
    </div>
    ${(rr.proximosPassos||[]).filter(Boolean).length?`
    <div style="margin-top:12px;padding:12px 14px;background:var(--blue-light);border:1px solid rgba(87,160,188,.3);border-radius:var(--r-md)">
      <div class="ig-lbl" style="margin-bottom:6px">Próximos passos acordados</div>
      ${rr.proximosPassos.filter(Boolean).map(p=>`<div style="display:flex;align-items:center;gap:6px;font-size:13px;padding:3px 0"><span style="color:var(--navy)">→</span>${esc(p)}</div>`).join('')}
    </div>`:''}
    <div style="display:flex;gap:16px;margin-top:12px;padding:12px 14px;background:var(--surface2);border-radius:var(--r-md)">
      <div style="text-align:center;flex:1"><div style="font-size:10px;color:var(--txt3);text-transform:uppercase;letter-spacing:.06em">Interesse</div>
        <div style="font-size:20px;margin-top:2px">${['','😐','🙂','😊','😃','🤩'][rr.nivelInteresse||3]}</div>
        <div style="font-size:11px;color:var(--txt3)">${rr.nivelInteresse||3}/5</div></div>
      <div style="text-align:center;flex:1"><div style="font-size:10px;color:var(--txt3);text-transform:uppercase;letter-spacing:.06em">Urgência</div>
        <div style="font-size:20px;margin-top:2px">${['','🐢','🚶','🚴','🏃','🚀'][rr.urgencia||3]}</div>
        <div style="font-size:11px;color:var(--txt3)">${rr.urgencia||3}/5</div></div>
    </div>
  </div>`:''}
  <div style="margin-top:12px;font-size:11.5px;color:var(--txt4)">Preenchido automaticamente quando o negócio foi fechado no Funil de Negócios.</div>`;
}

function paneChecklist(c){
  const p=c.partnership;
  const done=p.checklist.filter(Boolean).length;
  const tot=p.checklist.length;
  const pct=tot?Math.round(done/tot*100):0;
  return`
  <div class="cl-header">
    <div>
      <div style="font-size:14px;font-weight:700">Checklist de entregas</div>
      <div style="font-size:12.5px;color:var(--txt3);margin-top:2px">${done} de ${tot} concluídas</div>
    </div>
    <span class="badge ${pct===100?'b-green':'b-blue'}">${pct}%</span>
  </div>
  <div class="cl-progress"><div class="cl-bar" style="width:${pct}%"></div></div>
  <div class="cl-list">
    ${p.checklist.map((v,i)=>`
    <div class="cl-item${v?' done':''}" onclick="toggleCheck('${c.id}',${i})">
      <div class="cl-check">${ic('check','ic ic-sm')}</div>
      <div class="cl-text">${esc(S.defaultChecklist[i]||`Item ${i+1}`)}</div>
      <div class="cl-status">${v?'Concluído':'Pendente'}</div>
    </div>`).join('')}
  </div>
  <div style="margin-top:16px;font-size:12px;color:var(--txt4)">Os itens vêm do checklist padrão configurado em Configurações. Ao marcar tudo, a parceria avança para "Entregas concluídas".</div>`;
}

function toggleCheck(id,i){
  const c=S.companies.find(x=>x.id===id);
  if(!c?.partnership)return;
  c.partnership.checklist[i]=!c.partnership.checklist[i];
  if(c.partnership.checklist.every(Boolean)&&c.partnership.stage==='andamento'){
    c.partnership.stage='concluido';toast('Todas as entregas concluídas ✓');
  }
  render();
}

function panePalestra(c){
  const t=c.partnership.talk;
  const du=dUntil(t.datetime);
  const miss=[];
  if(!t.theme)miss.push('tema da palestra');
  if(!t.datetime)miss.push('data e horário');
  const alertH=miss.length&&du!=null&&du<=14?`
  <div style="display:flex;align-items:flex-start;gap:10px;background:var(--warn-bg);border:1px solid var(--warn);border-radius:var(--r-md);padding:12px 14px;margin-bottom:16px;font-size:13px;color:var(--warn-txt)">
    ${ic('alert','ic')}
    <div>Faltam <strong>${du} dia${du===1?'':'s'}</strong> para a palestra e ainda há pendências: <strong>${miss.join(', ')}</strong>.</div>
  </div>`:'';

  return`
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
      <input class="input" type="datetime-local" value="${t.datetime?t.datetime.slice(0,16):''}" onchange="updateTalk('${c.id}','datetime',this.value?new Date(this.value).toISOString():'')">
    </div>
    <div class="toggle-row${t.inGrid?' on':''}" onclick="updateTalk('${c.id}','inGrid',!${t.inGrid})">
      <div class="tr-info">
        <div class="tr-title">Incluir na grade de palestras</div>
        <div class="tr-desc">Entra na programação oficial do evento</div>
      </div>
      <div class="sw${t.inGrid?' on':''}"></div>
    </div>
    <div class="toggle-row${t.custom?' on':''}" onclick="updateTalk('${c.id}','custom',!${t.custom})">
      <div class="tr-info">
        <div class="tr-title">Palestra personalizada</div>
        <div class="tr-desc">Conteúdo sob medida para este cliente</div>
      </div>
      <div class="sw${t.custom?' on':''}"></div>
    </div>
    ${t.custom?`<div class="briefing-box form-row">
      <label class="form-label">Briefing / escopo personalizado</label>
      <textarea class="textarea" placeholder="O que o cliente espera, tom, pontos obrigatórios…" oninput="updateTalk('${c.id}','briefing',this.value)">${esc(t.briefing)}</textarea>
    </div>`:''}
  </div>
  <div style="display:flex;gap:8px;margin-top:14px">
    <button class="btn btn-primary btn-sm" onclick="toast('Palestra salva ✓')">Salvar</button>
    <button class="btn btn-ghost btn-sm" onclick="sendPending('${c.id}')">${ic('mail','ic')}Solicitar pendências ao cliente</button>
  </div>`;
}

function updateTalk(id,key,val){
  const c=S.companies.find(x=>x.id===id);
  if(c?.partnership)c.partnership.talk[key]=val;
  render();
}
function sendPending(id){
  const c=S.companies.find(x=>x.id===id);
  const t=c.partnership.talk;
  const miss=[];
  if(!t.theme)miss.push('tema');
  if(!t.datetime)miss.push('data e horário');
  toast(miss.length?`Mensagem gerada — solicita: ${miss.join(', ')}`:'Cliente em dia — nada pendente');
}

function pageGrade(){
  const talks=partners().filter(c=>c.partnership.talk.inGrid&&c.partnership.talk.datetime)
    .sort((a,b)=>new Date(a.partnership.talk.datetime)-new Date(b.partnership.talk.datetime));
  const times={};
  talks.forEach(c=>{const k=c.partnership.talk.datetime.slice(0,13);times[k]=(times[k]||0)+1;});
  const conflicts=talks.filter(c=>times[c.partnership.talk.datetime.slice(0,13)]>1);
  const conflictBar=conflicts.length?`<div class="conflict-bar">${ic('alert','ic')}<div><strong>Conflito de horário detectado:</strong> ${[...new Set(conflicts.map(c=>fDT(c.partnership.talk.datetime)))].join(' e ')} têm mais de uma palestra marcada.</div></div>`:'';

  return`
  <div class="ph">
    <button class="hamburger" onclick="openNav()">${ic('menu','ic ic-lg')}</button>
    <div><div style="font-size:16px;font-weight:800">Grade de Palestras</div>
      <div style="font-size:12.5px;color:var(--txt3)">${S.eventName} · ${talks.length} palestra${talks.length!==1?'s':''} na grade</div></div>
    <div class="ph-gap"></div>
    <div class="ph-actions">
      <div style="display:flex;border:1px solid var(--border);border-radius:var(--r-md);overflow:hidden;background:var(--surface)">
        <button class="btn btn-ghost btn-sm" style="border:0;border-radius:0;color:var(--txt2)" onclick="S.pView='list';render()">Parcerias</button>
        <button class="btn btn-ghost btn-sm" style="border:0;border-radius:0;border-left:1px solid var(--border);background:var(--surface2);color:var(--txt2)" onclick="S.pView='grade';render()">${ic('calendar','ic')}Grade</button>
      </div>
    </div>
  </div>
  <div class="page-body">
    ${conflictBar}
    ${talks.length?`<div class="grade-list">
      ${talks.map(c=>{
        const t=c.partnership.talk;const d=new Date(t.datetime);const cf=times[t.datetime.slice(0,13)]>1;
        return`<div class="grade-row">
          <div class="grade-time">${d.toLocaleTimeString('pt-BR',{hour:'2-digit',minute:'2-digit'})}</div>
          <div class="grade-body">
            <div class="grade-co${cf?' grade-conflict':''}">${c.name}${cf?` ${ic('alert','ic ic-sm')}`:''}
            </div>
            <div class="grade-theme">${esc(t.theme||'(tema não definido)')} · ${d.toLocaleDateString('pt-BR')}</div>
          </div>
          <span class="badge ${t.custom?'b-orange':'b-blue'}">${t.custom?'Personalizada':'Padrão'}</span>
        </div>`;}).join('')}
    </div>`:
    `<div style="padding:48px;text-align:center;color:var(--txt3);background:var(--surface);border:1px solid var(--border);border-radius:var(--r-lg)">
      Nenhuma palestra marcada para a grade ainda.<br>
      <span style="font-size:12px">Ative "Incluir na grade" nas palestras das parcerias.</span>
    </div>`}
  </div>`;
}

/* ─── DASHBOARDS ─── */
function svgDonut(slices,cx=80,cy=80,r=60,hole=38){
  // slices: [{value,color,label}]
  const total=slices.reduce((s,x)=>s+x.value,0);if(!total)return`<text x="${cx}" y="${cy}" text-anchor="middle" dominant-baseline="middle" fill="var(--txt3)" font-size="12">Sem dados</text>`;
  let angle=-Math.PI/2;
  const paths=slices.map(s=>{
    const sweep=2*Math.PI*(s.value/total);
    const x1=cx+r*Math.cos(angle),y1=cy+r*Math.sin(angle);
    const x2=cx+r*Math.cos(angle+sweep),y2=cy+r*Math.sin(angle+sweep);
    const xi=cx+hole*Math.cos(angle),yi=cy+hole*Math.sin(angle);
    const xj=cx+hole*Math.cos(angle+sweep),yj=cy+hole*Math.sin(angle+sweep);
    const large=sweep>Math.PI?1:0;
    const d=`M${xi},${yi} L${x1},${y1} A${r},${r} 0 ${large} 1 ${x2},${y2} L${xj},${yj} A${hole},${hole} 0 ${large} 0 ${xi},${yi}Z`;
    angle+=sweep;
    return`<path d="${d}" fill="${s.color}" opacity=".9"/>`;
  }).join('');
  return paths;
}
function svgPieChart(title,slices,w=320,h=220){
  const cx=90,cy=h/2,r=72,hole=40;
  const total=slices.reduce((s,x)=>s+x.value,0);
  const legend=slices.map((s,i)=>{
    const pct=total?Math.round(s.value/total*100):0;
    return`<div style="display:flex;align-items:center;gap:7px;font-size:12px;padding:3px 0">
      <span style="width:10px;height:10px;border-radius:3px;background:${s.color};flex-shrink:0;display:inline-block"></span>
      <span style="flex:1;color:var(--txt2)">${s.label}</span>
      <span style="font-weight:700;color:var(--txt)">${s.value}</span>
      <span style="color:var(--txt4);min-width:32px;text-align:right">${pct}%</span>
    </div>`;
  }).join('');
  return`<div class="card" style="padding:18px 20px">
    <div class="card-title" style="margin-bottom:14px">${title}</div>
    <div style="display:flex;align-items:center;gap:16px;flex-wrap:wrap">
      <svg width="${cx*2}" height="${h}" viewBox="0 0 ${cx*2} ${h}" style="flex-shrink:0">
        ${total?svgDonut(slices,cx,cy,r,hole):`<circle cx="${cx}" cy="${cy}" r="${r}" fill="var(--surface2)"/>`}
        <text x="${cx}" y="${cy-6}" text-anchor="middle" dominant-baseline="middle" fill="var(--txt)" font-size="20" font-weight="800">${total}</text>
        <text x="${cx}" y="${cy+14}" text-anchor="middle" dominant-baseline="middle" fill="var(--txt3)" font-size="10">total</text>
      </svg>
      <div style="flex:1;min-width:140px">${legend}</div>
    </div>
  </div>`;
}
function svgVertBar(title,bars,colorFn){
  // bars: [{label,value}]
  const max=Math.max(1,...bars.map(b=>b.value));
  const bw=36,gap=12,ph=100,pw=bars.length*(bw+gap)+gap;
  const rects=bars.map((b,i)=>{
    const bh=Math.max(2,Math.round(b.value/max*ph));
    const x=gap+i*(bw+gap),y=ph-bh;
    const col=colorFn?colorFn(i):['#024c76','#57a0bc','#f6a21c','#12b76a','#7c3aed','#f04438'][i%6];
    return`<g>
      <rect x="${x}" y="${y}" width="${bw}" height="${bh}" rx="5" fill="${col}" opacity=".88"/>
      <text x="${x+bw/2}" y="${y-5}" text-anchor="middle" fill="var(--txt2)" font-size="11" font-weight="700">${b.value}</text>
      <text x="${x+bw/2}" y="${ph+14}" text-anchor="middle" fill="var(--txt3)" font-size="10">${b.label.substring(0,7)}</text>
    </g>`;
  }).join('');
  return`<div class="card" style="padding:18px 20px">
    <div class="card-title" style="margin-bottom:14px">${title}</div>
    <svg width="100%" viewBox="0 0 ${pw} ${ph+28}" style="overflow:visible">
      <line x1="0" y1="${ph}" x2="${pw}" y2="${ph}" stroke="var(--border)" stroke-width="1"/>
      ${rects}
    </svg>
  </div>`;
}

function pageDash(){
  const byStage=STAGES.map(st=>({
    label:st.label,value:S.companies.filter(c=>c.stage===st.id).length,color:st.color
  }));
  const byQuota={};
  S.companies.filter(c=>c.stage==='finalizado').forEach(c=>{byQuota[c.quota]=(byQuota[c.quota]||0)+1;});
  const quotaSlices=S.quotas.map((q,i)=>({label:q.n,value:byQuota[q.n]||0,color:['#024c76','#57a0bc','#f6a21c','#12b76a'][i%4]}));
  const byAdv={};
  S.companies.filter(c=>c.stage==='finalizado').forEach(c=>{byAdv[c.adv]=(byAdv[c.adv]||0)+c.val;});
  const advBars=Object.entries(byAdv).sort((a,b)=>b[1]-a[1]).map(([id,v])=>({label:userName(id).split(' ')[0],value:Math.round(v/1000)}));
  const pStageSlices=Object.entries(
    partners().reduce((acc,c)=>{acc[c.partnership.stage]=(acc[c.partnership.stage]||0)+1;return acc;},{})
  ).map(([k,v])=>({label:PSTAGES.find(p=>p.id===k)?.label||k,value:v,color:{kickoff:'#f6a21c',andamento:'#57a0bc',concluido:'#12b76a',pendente:'#f79009',finalizado:'#98a2b3'}[k]||'#ccc'}));
  const won=S.companies.filter(c=>c.stage==='finalizado').length;
  const lost=S.companies.filter(c=>c.stage==='perdido').length;
  const conv=won+lost?Math.round(won/(won+lost)*100):0;
  const pct=Math.min(100,Math.round(closedVal()/S.goal.total*100));
  const r=52,circ=2*Math.PI*r,dash=circ*(1-pct/100);

  return`
  <div class="ph">
    <button class="hamburger" onclick="openNav()">${ic('menu','ic ic-lg')}</button>
    <div><div style="font-size:16px;font-weight:800">Dashboards</div>
      <div style="font-size:12.5px;color:var(--txt3)">Visão geral de Negócios e Parcerias</div></div>
  </div>
  <div class="page-body">
    <div class="stats-grid">
      ${statCard('trending','#ecfdf3','#027a48',fK(closedVal()),'Receita fechada')}
      ${statCard('target','#e8f3f8','#024c76',conv+'%','Taxa de conversão')}
      ${statCard('kanban','#f5f3ff','#5b21b6',S.companies.filter(c=>!['finalizado','perdido'].includes(c.stage)).length,'Negócios em aberto')}
      ${statCard('handshake','#fff4e0','#92540a',partners().length,'Total de parcerias')}
    </div>

    <div class="two-col" style="margin-bottom:16px">
      ${svgPieChart('Negócios por etapa',byStage.filter(x=>x.value>0))}
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
      ${svgPieChart('Parcerias por status',pStageSlices.length?pStageSlices:[{label:'Sem dados',value:1,color:'#e4e7ec'}])}
      ${svgPieChart('Fechamentos por cota',quotaSlices.filter(x=>x.value>0).length?quotaSlices.filter(x=>x.value>0):[{label:'Sem dados',value:1,color:'#e4e7ec'}])}
    </div>

    ${advBars.length?svgVertBar('Receita fechada por assessor (R$ mil)',advBars,null):''}
  </div>`;
}

/* ─── METAS ─── */
function pageMetas(){
  const pct=Math.min(100,Math.round(closedVal()/S.goal.total*100));
  const emNeg=S.companies.filter(c=>['reuniao','negociacao'].includes(c.stage)).reduce((s,c)=>s+c.val,0);
  const byAdv={};S.companies.filter(c=>c.stage==='finalizado').forEach(c=>{byAdv[c.adv]=(byAdv[c.adv]||0)+c.val;});
  const advRows=Object.entries(byAdv).sort((a,b)=>b[1]-a[1]);
  const maxAdv=Math.max(1,...advRows.map(x=>x[1]),1);
  const byQuota={};S.companies.filter(c=>c.stage==='finalizado').forEach(c=>{byQuota[c.quota]=(byQuota[c.quota]||0)+1;});
  const isCoord=session?.role==='coordenador';

  // Tasks summary for coordinator
  const today=new Date().toISOString().slice(0,10);
  const allTasks=S.tasks;
  const lateAll=allTasks.filter(t=>!t.done&&t.dueDate<today);
  const doneAll=allTasks.filter(t=>t.done);

  return`
  <div class="ph">
    <button class="hamburger" onclick="openNav()">${ic('menu','ic ic-lg')}</button>
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
        <div style="font-size:12px;color:var(--txt3);margin-top:4px">${S.companies.filter(c=>['reuniao','negociacao'].includes(c.stage)).length} empresa(s)</div>
      </div>
    </div>

    <div class="two-col" style="margin-bottom:16px">
      <div class="card">
        <div class="card-head"><span class="card-title">Cotas — valores-base</span></div>
        <div class="card-pad">
          ${S.quotas.map(q=>`
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
              <input class="input" type="date" value="${S.goal.deadline.slice(0,10)}" onchange="S.goal.deadline=this.value"></div>
          </div>
          <div class="form-grid" style="margin-top:4px">
            ${S.quotas.map(q=>`<div class="form-row"><label class="form-label">Meta empresas ${q.n}</label>
              <input class="input" type="number" value="${S.metaByQuota[q.n]||0}" min="0"
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
            ${advRows.length?advRows.map(([id,v])=>`<div class="bar-row">
              <div style="font-size:12.5px">${userName(id)}</div>
              <div class="bar-track"><div class="bar-fill" style="width:${Math.max(4,v/maxAdv*100)}%;background:var(--navy)"></div></div>
              <div class="bar-val">${fK(v)}</div>
            </div>`).join(''):`<div style="color:var(--txt4);font-size:13px;padding:8px 0">Sem fechamentos ainda.</div>`}
          </div>
        </div>
      </div>
      <div class="card">
        <div class="card-head"><span class="card-title">Fechamentos por cota</span></div>
        <div class="card-pad">
          <div class="bar-chart">
            ${S.quotas.map(q=>{
              const n=byQuota[q.n]||0;
              const meta=S.metaByQuota[q.n]||0;
              const pctQ=meta?Math.min(100,Math.round(n/meta*100)):0;
              return`<div class="bar-row">
                <div style="font-size:12.5px">${q.n}</div>
                <div class="bar-track"><div class="bar-fill" style="width:${Math.max(meta?4:0,pctQ)}%;background:var(--blue)"></div></div>
                <div class="bar-val">${n}${meta?`/<span style="color:var(--txt4)">${meta}</span>`:''}</div>
              </div>`;}).join('')}
          </div>
        </div>
      </div>
    </div>

    ${isCoord?`<div class="card">
      <div class="card-head"><span class="card-title">Painel de tarefas da equipe</span>
        <button class="btn btn-primary btn-sm" onclick="openNewTaskModal()">${ic('plus','ic')}Nova tarefa</button></div>
      <table><thead><tr><th>Tarefa</th><th>Assessor</th><th>Empresa</th><th>Prazo</th><th>Status</th><th></th></tr></thead><tbody>
        ${S.tasks.sort((a,b)=>a.dueDate.localeCompare(b.dueDate)).map(t=>{
          const late=!t.done&&t.dueDate<today;const isToday=!t.done&&t.dueDate===today;
          const co=S.companies.find(c=>c.id===t.companyId);
          return`<tr${late?' style="background:var(--danger-bg)"':''}>
            <td><div style="font-weight:600;font-size:13px${t.done?';text-decoration:line-through;color:var(--txt3)':''}">${esc(t.title)}</div>
              ${t.desc?`<div style="font-size:11.5px;color:var(--txt3)">${esc(t.desc)}</div>`:''}</td>
            <td><span class="task-assignee">${userName(t.assignedTo)}</span></td>
            <td style="font-size:12.5px;color:var(--txt3)">${co?co.name:'—'}</td>
            <td><span class="task-due ${late?'late':isToday?'today':'ok'}">${late?'⚠ ':''} ${fmtDate(t.dueDate)}</span></td>
            <td>${t.done?`<span class="badge b-green">Concluída</span>`:late?`<span class="badge b-red">Atrasada</span>`:isToday?`<span class="badge b-amber">Hoje</span>`:`<span class="badge b-grey">Pendente</span>`}</td>
            <td style="text-align:right;display:flex;gap:4px;justify-content:flex-end">
              <button class="btn btn-ghost btn-xs" onclick="toggleTask('${t.id}')">${t.done?'Reabrir':'✓ Feita'}</button>
              <button class="btn btn-ghost btn-xs" style="color:var(--danger)" onclick="deleteTask('${t.id}')">${ic('x','ic ic-sm')}</button>
            </td>
          </tr>`;}).join('')}
      </tbody></table>
    </div>`:''}
  </div>`;
}

/* ─── USUÁRIOS ─── */
function pageUsers(){
  const pend=S.users.filter(u=>u.status==='pendente').length;
  const roleBadge={assessor:'b-blue',coordenador:'b-purple'};
  const statusBadge={ativo:'b-green',inativo:'b-grey',pendente:'b-amber'};

  return`
  <div class="ph">
    <button class="hamburger" onclick="openNav()">${ic('menu','ic ic-lg')}</button>
    <div><div style="font-size:16px;font-weight:800">Usuários e Permissões</div>
      <div style="font-size:12.5px;color:var(--txt3)">Aprove cadastros e defina papéis</div></div>
    <div class="ph-gap"></div>
    <div class="ph-actions">
      <button class="btn btn-primary btn-sm">${ic('plus','ic')}Convidar usuário</button>
    </div>
  </div>
  <div class="page-body">
    ${pend?`<div class="pending-banner">${ic('shield','ic')}<div><strong>${pend} cadastro${pend>1?'s':''} aguardando aprovação.</strong> Por segurança, o papel é definido aqui — ninguém se auto-promove a coordenador.</div></div>`:''}
    <div class="card">
      <div class="table-wrap">
        <table>
          <thead><tr><th>Usuário</th><th>Time</th><th>Papel</th><th>Status</th><th style="text-align:right">Ações</th></tr></thead>
          <tbody>
            ${S.users.map((u,i)=>`<tr>
              <td><div style="display:flex;align-items:center;gap:10px">
                <div class="user-av" style="${avatarColor(u.color)}">${ini(u.name)}</div>
                <div class="user-info"><div class="un">${u.name}</div><div class="ue">${u.email}</div></div>
              </div></td>
              <td><span class="badge b-grey" style="text-transform:capitalize">${u.team}</span></td>
              <td>
                <select class="fb-sel" style="min-width:140px" onchange="updateUserRole('${u.id}',this.value)">
                  <option value="assessor"${u.role==='assessor'?' selected':''}>Assessor</option>
                  <option value="coordenador"${u.role==='coordenador'?' selected':''}>Coordenador</option>
                </select>
              </td>
              <td><span class="badge ${statusBadge[u.status]||'b-grey'}">${u.status}</span></td>
              <td style="text-align:right">
                ${u.status==='pendente'
                  ?`<button class="btn btn-success btn-xs" onclick="approveUser('${u.id}')">${ic('check','ic ic-sm')}Aprovar</button>`
                  :`<button class="btn btn-ghost btn-xs" onclick="toggleUser('${u.id}')">${u.status==='ativo'?'Desativar':'Reativar'}</button>`}
              </td>
            </tr>`).join('')}
          </tbody>
        </table>
      </div>
    </div>
  </div>`;
}
function updateUserRole(id,role){const u=S.users.find(x=>x.id===id);if(u){u.role=role;toast('Papel atualizado ✓');render();}}
function approveUser(id){const u=S.users.find(x=>x.id===id);if(u){u.status='ativo';toast(`${u.name} aprovado(a) ✓`);render();}}
function toggleUser(id){const u=S.users.find(x=>x.id===id);if(u){u.status=u.status==='ativo'?'inativo':'ativo';render();}}

/* ─── CONFIGURAÇÕES ─── */
function pageConfig(){
  return`
  <div class="ph">
    <button class="hamburger" onclick="openNav()">${ic('menu','ic ic-lg')}</button>
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
        ${S.quotas.map(q=>`<div class="quota-row">
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
          ${ic('arrow','ic ic-sm')} Estes itens são aplicados automaticamente quando um negócio é fechado no Funil.
        </div>
        <div class="cl-list" style="margin-bottom:12px">
          ${S.defaultChecklist.map((it,i)=>`
          <div class="cl-item" style="cursor:default">
            <div class="cl-check" style="border-color:var(--border2)"></div>
            <div class="cl-text">${esc(it)}</div>
            <button class="btn btn-ghost btn-xs" style="flex-shrink:0" onclick="removeCheck(${i})">${ic('x','ic ic-sm')}</button>
          </div>`).join('')}
        </div>
        <div class="cl-add-row">
          <input class="input" id="newCheckInput" placeholder="Novo item de entrega…" style="max-width:380px">
          <button class="btn btn-primary btn-sm" onclick="addCheck()">${ic('plus','ic')}Adicionar</button>
        </div>
      </div>
    </div>
  </div>`;
}
function removeCheck(i){S.defaultChecklist.splice(i,1);render();}
function addCheck(){
  const inp=document.getElementById('newCheckInput');
  const v=(inp?.value||'').trim();
  if(v){S.defaultChecklist.push(v);render();toast('Item adicionado ao checklist padrão');}
}

/* ─── COMPANY SLIDE-OVER ─── */
let soTab='dados';
function openCompany(id){
  soTab='dados';
  renderSlideover(id);
  document.getElementById('slideover').classList.add('open');
  document.getElementById('scrim').classList.add('open');
}
function renderSlideover(id){
  const c=S.companies.find(x=>x.id===id);if(!c)return;
  const TABS=[{id:'dados',l:'Dados'},{id:'contatos',l:'Contatos'},{id:'tarefas',l:'Tarefas'},{id:'reuniao',l:'Reunião'},{id:'passagem',l:'Passagem p/ Parcerias'},{id:'historico',l:'Histórico'}];
  const tabsH=TABS.map(t=>`<button onclick="soTab='${t.id}';renderSlideover('${id}')" style="padding:8px 14px;font-size:13px;font-weight:${soTab===t.id?'700':'500'};color:${soTab===t.id?'var(--navy)':'var(--txt3)'};background:0;border:0;border-bottom:2px solid ${soTab===t.id?'var(--navy)':'transparent'};cursor:pointer;margin-bottom:-1px">${t.l}</button>`).join('');
  const partnerLink=c.partnership?`<div style="margin:12px 0;padding:10px 12px;background:var(--success-bg);border:1px solid rgba(18,183,106,.25);border-radius:var(--r-md);font-size:13px;display:flex;align-items:center;gap:8px;color:var(--success-txt)">
    ${ic('handshake','ic ic-sm')}<span>Negócio fechado</span>
    <button class="btn btn-ghost btn-xs" style="margin-left:auto" onclick="nav('parcerias');S.pSel='${c.id}';S.pTab='info';closeSheet();render()">Ver parceria ${ic('arrow','ic ic-sm')}</button>
  </div>`:'';

  // TEMPERATURE / ENGAGEMENT chip selectors
  const tempLabel=['','❄️ Frio','🌡 Morno','🟡 Morno+','🔥 Quente','🔴 Hot'];
  const engLabel=['','⭐','⭐⭐','⭐⭐⭐','⭐⭐⭐⭐','⭐⭐⭐⭐⭐'];
  const chipSel=(field,max,labels,colorFn)=>`<div style="display:flex;gap:5px;flex-wrap:wrap">${Array.from({length:max},(_,i)=>{const v=i+1;const active=c[field]===v;return`<button onclick="updateCo('${c.id}','${field}',${v});renderSlideover('${c.id}')" style="padding:4px 10px;border-radius:99px;border:1px solid ${active?colorFn(v):' var(--border2)'};background:${active?colorFn(v)+'22':'var(--surface)'};color:${active?colorFn(v):'var(--txt3)'};font-size:12px;font-weight:600;cursor:pointer">${labels[v]}</button>`;}).join('')}</div>`;
  const tempColor=v=>v>=4?'#f6a21c':v>=3?'#f79009':'#57a0bc';
  const engColor=()=>'#024c76';

  let body='';
  if(soTab==='dados'){
    const activeAdvisors=S.users.filter(u=>u.status==='ativo');
    const sliderStyle=(val,max=5,col='navy')=>{const pct=Math.round(val/max*100);return `class="${col}" style="--pct:${pct}%" min="1" max="${max}" value="${val}"`};
    const cotaFechada=c.cotaFechada||'';
    const desconto=c.desconto||0;
    const cotaBase=S.quotas.find(q=>q.n===c.quota)?.v||c.val;
    const valorFinal=Math.max(0,cotaBase-desconto);
    body=`
    ${partnerLink}
    <div class="form-row"><label class="form-label">Nome da empresa</label>
      <input class="input" value="${esc(c.name)}" oninput="updateCo('${c.id}','name',this.value)"></div>
    <div class="form-grid">
      <div class="form-row"><label class="form-label">Etapa do funil</label>
        <select class="sel" onchange="updateCo('${c.id}','stage',this.value)">
          ${STAGES.map(s=>`<option value="${s.id}"${c.stage===s.id?' selected':''}>${s.label}</option>`).join('')}
        </select></div>
      <div class="form-row"><label class="form-label">Forma de pagamento</label>
        <select class="sel" onchange="updateCo('${c.id}','payment',this.value)">
          ${['À vista','Parcelado (2x)','Parcelado (3x)','Parcelado (6x)','Boleto','PIX'].map(p=>`<option${(c.payment||'À vista')===p?' selected':''}>${p}</option>`).join('')}
        </select></div>
    </div>
    <div class="form-grid">
      <div class="form-row"><label class="form-label">Assessor principal</label>
        <select class="sel" onchange="updateCo('${c.id}','adv',this.value)">
          ${activeAdvisors.map(u=>`<option value="${u.id}"${c.adv===u.id?' selected':''}>${u.name}</option>`).join('')}
        </select></div>
      <div class="form-row"><label class="form-label">Assessor secundário</label>
        <select class="sel" onchange="updateCo('${c.id}','adv2',this.value)">
          <option value="">Nenhum</option>
          ${activeAdvisors.map(u=>`<option value="${u.id}"${(c.adv2||'')===u.id?' selected':''}>${u.name}</option>`).join('')}
        </select></div>
    </div>
    <div class="form-grid" style="margin-bottom:4px">
      <div class="slider-wrap">
        <div class="slider-label">${ic('star','ic ic-sm')} Relevância estratégica: <span id="sl_rel_${c.id}">${c.rel}/5</span></div>
        <input type="range" ${sliderStyle(c.rel)} oninput="updateCo('${c.id}','rel',+this.value);document.getElementById('sl_rel_${c.id}').textContent=this.value+'/5';updateSliderTrack(this)">
      </div>
      <div class="slider-wrap">
        <div class="slider-label">${ic('trending','ic ic-sm')} Potencial financeiro: <span id="sl_fin_${c.id}">${c.fin}/5</span></div>
        <input type="range" ${sliderStyle(c.fin)} oninput="updateCo('${c.id}','fin',+this.value);document.getElementById('sl_fin_${c.id}').textContent=this.value+'/5';updateSliderTrack(this)">
      </div>
    </div>
    <div class="slider-wrap" style="margin-bottom:16px">
      <div class="slider-label">${ic('flame','ic ic-sm')} Temperatura do contato: <span id="sl_temp_${c.id}">${c.temp}/5</span></div>
      <input type="range" class="orange" min="1" max="5" value="${c.temp}" style="--pct:${Math.round(c.temp/5*100)}%" oninput="updateCo('${c.id}','temp',+this.value);document.getElementById('sl_temp_${c.id}').textContent=this.value+'/5';updateSliderTrack(this)">
    </div>
    <div class="form-grid">
      <div class="form-row"><label class="form-label">Cota estimada</label>
        <select class="sel" onchange="updateCo('${c.id}','quota',this.value);recalcValorFinal('${c.id}')">
          ${S.quotas.map(q=>`<option value="${q.n}"${c.quota===q.n?' selected':''}>${q.n} — ${fBRL(q.v)}</option>`).join('')}
        </select></div>
      <div class="form-row"><label class="form-label">Cota fechada</label>
        <select class="sel" onchange="updateCo('${c.id}','cotaFechada',this.value);recalcValorFinal('${c.id}')">
          <option value="">Nenhuma</option>
          ${S.quotas.map(q=>`<option value="${q.n}"${cotaFechada===q.n?' selected':''}>${q.n}</option>`).join('')}
        </select></div>
    </div>
    <div class="form-row"><label class="form-label">Desconto (R$)</label>
      <input class="input" type="number" value="${desconto}" min="0" oninput="updateCo('${c.id}','desconto',+this.value);recalcValorFinal('${c.id}')" placeholder="0"></div>
    <div class="valor-final-box" id="vfbox_${c.id}">
      <div class="valor-final-lbl">VALOR FINAL</div>
      <div class="valor-final-num">${fBRL(valorFinal)}</div>
    </div>
    <div class="form-row" style="margin-top:16px"><label class="form-label">Observações</label>
      <textarea class="textarea" oninput="updateCo('${c.id}','notes',this.value)">${esc(c.notes)}</textarea></div>`;
  }
  else if(soTab==='contatos'){
    const clist=c.contacts.map((ct,i)=>`
    <div style="background:var(--surface2);border:1px solid var(--border);border-radius:var(--r-md);padding:12px;margin-bottom:8px">
      <div style="display:flex;align-items:center;gap:8px;margin-bottom:8px">
        <div style="width:30px;height:30px;border-radius:99px;${avatarColor(i)};display:grid;place-items:center;font-size:11px;font-weight:700;flex-shrink:0">${ini(ct.name||'?')}</div>
        <div style="flex:1;font-weight:600;font-size:13px">${esc(ct.name||'Sem nome')}</div>
        ${ct.isPrimary?`<span class="badge b-blue">Principal</span>`:
          `<button onclick="setPrimaryContact('${c.id}',${i})" class="btn btn-ghost btn-xs">Tornar principal</button>`}
        ${c.contacts.length>1?`<button onclick="removeContact('${c.id}',${i})" class="btn btn-ghost btn-xs" style="color:var(--danger)">${ic('x','ic ic-sm')}</button>`:''}
      </div>
      <div class="form-grid" style="gap:8px">
        <input class="input" placeholder="Nome" value="${esc(ct.name)}" oninput="updateContact('${c.id}',${i},'name',this.value)" style="font-size:12.5px">
        <input class="input" placeholder="Cargo" value="${esc(ct.role)}" oninput="updateContact('${c.id}',${i},'role',this.value)" style="font-size:12.5px">
        <input class="input" placeholder="E-mail" value="${esc(ct.email)}" oninput="updateContact('${c.id}',${i},'email',this.value)" style="font-size:12.5px">
        <input class="input" placeholder="Telefone" value="${esc(ct.phone||'')}" oninput="updateContact('${c.id}',${i},'phone',this.value)" style="font-size:12.5px">
      </div>
    </div>`).join('');
    body=`${clist}
    <button class="btn btn-ghost btn-sm" onclick="addContact('${c.id}')" style="width:100%;justify-content:center">${ic('plus','ic')}Adicionar contato</button>`;
  }
  else if(soTab==='reuniao'){
    const m=c.meeting;
    const qrow=(label,field,placeholder='')=>`<div class="form-row">
      <label class="form-label">${label}</label>
      <textarea class="textarea" placeholder="${placeholder}" oninput="updateMeeting('${c.id}','${field}',this.value)" style="min-height:52px">${esc(m[field])}</textarea>
    </div>`;
    body=`
    <div class="form-grid">
      <div class="form-row"><label class="form-label">Data da reunião</label>
        <input class="input" type="date" value="${m.date}" oninput="updateMeeting('${c.id}','date',this.value)"></div>
      <div class="form-row"><label class="form-label">Tomador de decisão</label>
        <input class="input" placeholder="Nome / cargo" value="${esc(m.decisor)}" oninput="updateMeeting('${c.id}','decisor',this.value)"></div>
    </div>
    ${qrow('Qual a cota principal de interesse?','pubAlvo','Ex.: Ouro ou Diamante')}
    ${qrow('Público-alvo principal deles?','pubAlvo','Ex.: PMEs do setor de tecnologia')}
    ${qrow('De qual período estão buscando?','periodo','Ex.: Q3 2026')}
    ${qrow('Qual o principal objetivo na feira?','objetivo','Ex.: Geração de leads B2B')}
    ${qrow('Maior desafio atual do cliente?','desafio','')}
    ${qrow('Budget disponível?','budget','Ex.: R$ 25.000')}
    ${qrow('Prazo para decisão?','prazo','Ex.: Até sexta-feira')}
    ${qrow('Já participou de outra feira? Qual?','outrasFeiras','')}
    ${qrow('Objeções levantadas?','objecoes','')}
    ${qrow('Critério principal de escolha?','criterio','')}
    ${qrow('Houve interesse claro? Qual sinal?','interesse','')}
    <div class="form-row"><label class="form-label">Tom da reunião</label>
      <input class="input" value="${esc(m.tomReuniao)}" oninput="updateMeeting('${c.id}','tomReuniao',this.value)"></div>
    <div class="form-row"><label class="form-label">Ponto de virada da conversa</label>
      <input class="input" value="${esc(m.pontoVirada)}" oninput="updateMeeting('${c.id}','pontoVirada',this.value)"></div>
    <div class="form-grid">
      <div class="form-row"><label class="form-label">Nível de interesse (${m.nivelInteresse}/5)</label>
        ${chipSel('nivelInteresse',5,['','😐','🙂','😊','😃','🤩'],()=>'#024c76')}</div>
      <div class="form-row"><label class="form-label">Urgência percebida (${m.urgencia}/5)</label>
        ${chipSel('urgencia',5,['','🐢','🚶','🚴','🏃','🚀'],()=>'#f6a21c')}</div>
    </div>
    <div style="margin-top:4px;padding-top:12px;border-top:1px solid var(--border)">
      <div class="form-label" style="margin-bottom:8px">Próximos passos</div>
      ${(m.proximosPassos||[]).map((p,i)=>`<div style="display:flex;gap:6px;margin-bottom:6px">
        <input class="input" value="${esc(p)}" oninput="updateStep('${c.id}',${i},this.value)" style="font-size:12.5px">
        <button class="btn btn-ghost btn-xs" onclick="removeStep('${c.id}',${i})">${ic('x','ic ic-sm')}</button>
      </div>`).join('')}
      <button class="btn btn-ghost btn-sm" onclick="addStep('${c.id}')" style="margin-top:2px">${ic('plus','ic')}Adicionar passo</button>
    </div>`;
  }
  else if(soTab==='tarefas'){
    const ctasks=S.tasks.filter(t=>t.companyId===c.id);
    const today=new Date().toISOString().slice(0,10);
    const taskRows=ctasks.length?ctasks.map(t=>{
      const late=!t.done&&t.dueDate<today;
      const isToday=!t.done&&t.dueDate===today;
      const dueLabel=late?`⚠ ${fmtDate(t.dueDate)} (atrasada)`:isToday?`Hoje`:fmtDate(t.dueDate);
      const dueCls=late?'late':isToday?'today':'ok';
      return`<div class="task-item${late?' late':''}">
        <div class="task-cb${t.done?' done':''}" onclick="toggleTask('${t.id}')">${t.done?ic('check','ic ic-sm'):''}</div>
        <div class="task-body">
          <div class="task-title${t.done?' done':''}">${esc(t.title)}</div>
          ${t.desc?`<div class="task-co">${esc(t.desc)}</div>`:''}
          <div class="task-meta">
            <span class="task-due ${dueCls}">${dueLabel}</span>
            <span class="task-assignee">${userName(t.assignedTo)}</span>
          </div>
        </div>
        ${session?.role==='coordenador'?`<button class="btn btn-ghost btn-xs" style="color:var(--danger);flex-shrink:0" onclick="deleteTask('${t.id}')">${ic('x','ic ic-sm')}</button>`:''}
      </div>`;
    }).join(''):`<div style="padding:24px;text-align:center;color:var(--txt3);font-size:13px">Nenhuma tarefa para esta empresa.</div>`;
    const canCreate=session?.role==='coordenador';
    body=`<div class="card" style="margin-bottom:12px">${taskRows}</div>
    ${canCreate?`<div style="background:var(--surface);border:1px solid var(--border);border-radius:var(--r-lg);padding:16px">
      <div style="font-size:13px;font-weight:700;margin-bottom:12px">Nova tarefa para esta empresa</div>
      <div class="form-row"><label class="form-label">Título</label><input class="input" id="nt_title" placeholder="Ex.: Ligar para confirmar reunião"></div>
      <div class="form-row"><label class="form-label">Descrição (opcional)</label><input class="input" id="nt_desc" placeholder="Detalhes..."></div>
      <div class="form-grid">
        <div class="form-row"><label class="form-label">Designar para</label>
          <select class="sel" id="nt_who">${S.users.filter(u=>u.status==='ativo'&&u.role==='assessor').map(u=>`<option value="${u.id}">${u.name}</option>`).join('')}</select></div>
        <div class="form-row"><label class="form-label">Data limite</label><input class="input" type="date" id="nt_due" value="${today}"></div>
      </div>
      <button class="btn btn-primary btn-sm" style="width:100%;justify-content:center" onclick="createTask('${c.id}')">${ic('plus','ic')}Criar tarefa</button>
    </div>`:''}`;
  }
  else if(soTab==='passagem'){
    const rr=c.partnership?.reuniaoReport||c.meeting||{};
    body=`<div style="padding:4px 0">
      <div style="font-size:13px;color:var(--txt3);margin-bottom:16px">Resumo dos dados que serão transferidos para a equipe de Parcerias ao fechar o negócio.</div>
      <div class="info-grid" style="margin-bottom:16px">
        <div class="ig-item"><div class="ig-lbl">Contato principal</div><div class="ig-val">${c.cn}</div></div>
        <div class="ig-item"><div class="ig-lbl">Cota fechada</div><div class="ig-val">${c.cotaFechada||c.quota}</div></div>
        <div class="ig-item"><div class="ig-lbl">Valor final</div><div class="ig-val">${fBRL(Math.max(0,(S.quotas.find(q=>q.n===c.quota)?.v||c.val)-(c.desconto||0)))}</div></div>
        <div class="ig-item"><div class="ig-lbl">Assessor responsável</div><div class="ig-val">${userName(c.adv)}</div></div>
        <div class="ig-item"><div class="ig-lbl">Forma de pagamento</div><div class="ig-val">${c.payment||'À vista'}</div></div>
        <div class="ig-item"><div class="ig-lbl">Temperatura</div><div class="ig-val">${['','❄️ Frio','🌡 Morno','🟡 Morno+','🔥 Quente','🔴 Hot'][c.temp]}</div></div>
      </div>
      ${rr.objetivo?`<div class="form-row"><label class="form-label">Objetivo na feira</label><div class="notes-box">${esc(rr.objetivo)}</div></div>`:''}
      ${rr.budget?`<div class="form-row"><label class="form-label">Budget</label><div class="notes-box">${esc(rr.budget)}</div></div>`:''}
      ${rr.interesse?`<div class="form-row"><label class="form-label">Interesse demonstrado</label><div class="notes-box">${esc(rr.interesse)}</div></div>`:''}
      <div class="form-row"><label class="form-label">Observações do hand-off</label>
        <textarea class="textarea" placeholder="Notas adicionais para o time de Parcerias…" oninput="updateCo('${c.id}','notes',this.value)">${esc(c.notes)}</textarea></div>
      ${!c.partnership?`<button class="btn btn-primary" style="width:100%;justify-content:center;margin-top:4px" onclick="moveStage('${c.id}','finalizado');closeSheet();render()">✓ Marcar como Fechado e transferir para Parcerias</button>`:''}
    </div>`;
  }
  else if(soTab==='historico'){
    // Build history from pipeline changes (simulated)
    const hist=[
      {date:new Date(Date.now()-10*86400000).toISOString(),action:'Empresa criada no funil',user:'u1'},
      {date:new Date(Date.now()-8*86400000).toISOString(),action:`Etapa alterada para "${stageById(c.stage).label}"`,user:'u1'},
      {date:new Date(Date.now()-5*86400000).toISOString(),action:'Reunião registrada',user:'u1'},
      {date:new Date(Date.now()-2*86400000).toISOString(),action:'Qualificação atualizada',user:'u1'},
    ];
    const coTasks=S.tasks.filter(t=>t.companyId===c.id&&t.done);
    coTasks.forEach(t=>hist.push({date:t.doneAt,action:`Tarefa concluída: "${t.title}"`,user:t.assignedTo}));
    hist.sort((a,b)=>new Date(b.date)-new Date(a.date));
    body=`<div class="card">${hist.map(h=>`<div class="task-item">
      <div style="width:8px;height:8px;border-radius:99px;background:var(--blue);flex-shrink:0;margin-top:5px"></div>
      <div class="task-body">
        <div class="task-title">${h.action}</div>
        <div class="task-meta"><span class="task-co">${fmtDate(h.date.slice(0,10))} · ${userName(h.user)}</span></div>
      </div>
    </div>`).join('')}</div>`;
  }
  document.getElementById('slideover').innerHTML=`
    <div class="so-head">
      <div style="flex:1;min-width:0">
        <div style="font-size:17px;font-weight:800;color:var(--txt);white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${c.name}</div>
        <div style="display:flex;gap:6px;margin-top:5px;flex-wrap:wrap">
          <span class="badge b-blue">${c.quota}</span>
          <span class="badge b-orange">${fBRL(c.val)}</span>
          <span class="badge" style="background:${stageById(c.stage).color}22;color:${stageById(c.stage).color};border:1px solid ${stageById(c.stage).color}44">${stageById(c.stage).label}</span>
        </div>
      </div>
      <button class="btn btn-ghost btn-xs" onclick="closeSheet()">${ic('x','ic')}</button>
    </div>
    <div style="display:flex;gap:0;border-bottom:1px solid var(--border);padding:0 20px;overflow-x:auto">${tabsH}</div>
    <div class="so-body">${body}</div>`;
}

function updateCo(id,field,val){
  const c=S.companies.find(x=>x.id===id);
  if(!c)return;
  if(field==='stage'){moveStage(id,val);return;}
  c[field]=val;
}

function recalcValorFinal(id){
  const c=S.companies.find(x=>x.id===id);if(!c)return;
  const base=S.quotas.find(q=>q.n===c.quota)?.v||c.val;
  const vf=Math.max(0,base-(c.desconto||0));
  const box=document.getElementById('vfbox_'+id);
  if(box)box.querySelector('.valor-final-num').textContent=fBRL(vf);
  c.val=vf;
}

function updateSliderTrack(el){
  const pct=Math.round((el.value-el.min)/(el.max-el.min)*100);
  el.style.setProperty('--pct',pct+'%');
}

const fmtDate=d=>{if(!d)return'—';const[y,m,di]=d.split('-');return`${di}/${m}/${y}`;};

/* ─── TASKS ─── */
function toggleTask(id){
  const t=S.tasks.find(x=>x.id===id);if(!t)return;
  t.done=!t.done;t.doneAt=t.done?new Date().toISOString():null;
  toast(t.done?'Tarefa marcada como concluída ✓':'Tarefa reaberta');
  render();
}
function deleteTask(id){
  if(!confirm('Excluir esta tarefa?'))return;
  S.tasks=S.tasks.filter(t=>t.id!==id);
  render();toast('Tarefa excluída');
}
function createTask(companyId){
  const title=(document.getElementById('nt_title')?.value||'').trim();
  const desc=(document.getElementById('nt_desc')?.value||'').trim();
  const who=document.getElementById('nt_who')?.value||'u1';
  const due=document.getElementById('nt_due')?.value||new Date().toISOString().slice(0,10);
  if(!title){toast('Informe o título da tarefa','err');return;}
  S.tasks.push({id:'t'+(Date.now()%100000),title,desc,assignedTo:who,assignedBy:session?.userId||'u3',companyId,dueDate:due,done:false,doneAt:null,createdAt:new Date().toISOString()});
  toast('Tarefa criada e designada para '+userName(who)+' ✓');
  renderSlideover(companyId);
}
function openNewTaskModal(){
  const today=new Date().toISOString().slice(0,10);
  const advisors=S.users.filter(u=>u.status==='ativo'&&u.role==='assessor');
  document.getElementById('modal').innerHTML=`
    <div class="modal-head"><div style="font-size:16px;font-weight:800;flex:1">Nova tarefa</div>
      <button class="btn btn-ghost btn-xs" onclick="closeModal()">${ic('x','ic')}</button></div>
    <div class="modal-body">
      <div class="form-row"><label class="form-label">Título da tarefa *</label><input class="input" id="gt_title" placeholder="Ex.: Ligar para cliente"></div>
      <div class="form-row"><label class="form-label">Descrição</label><input class="input" id="gt_desc" placeholder="Detalhes..."></div>
      <div class="form-grid">
        <div class="form-row"><label class="form-label">Designar para *</label>
          <select class="sel" id="gt_who">${advisors.map(u=>`<option value="${u.id}">${u.name}</option>`).join('')}</select></div>
        <div class="form-row"><label class="form-label">Data limite *</label>
          <input class="input" type="date" id="gt_due" value="${today}"></div>
      </div>
      <div class="form-row"><label class="form-label">Empresa (opcional)</label>
        <select class="sel" id="gt_co">
          <option value="">— Sem empresa —</option>
          ${S.companies.filter(c=>!['perdido'].includes(c.stage)).map(c=>`<option value="${c.id}">${c.name}</option>`).join('')}
        </select></div>
      <button class="btn btn-primary" style="width:100%;justify-content:center" onclick="submitNewTask()">${ic('plus','ic')}Criar e designar tarefa</button>
    </div>`;
  document.getElementById('modal').classList.add('open');
  document.getElementById('scrim').classList.add('open');
}
function submitNewTask(){
  const title=(document.getElementById('gt_title')?.value||'').trim();
  const desc=(document.getElementById('gt_desc')?.value||'').trim();
  const who=document.getElementById('gt_who')?.value;
  const due=document.getElementById('gt_due')?.value;
  const co=document.getElementById('gt_co')?.value||null;
  if(!title||!who||!due){toast('Preencha título, responsável e data','err');return;}
  S.tasks.push({id:'t'+(Date.now()%100000),title,desc,assignedTo:who,assignedBy:session?.userId||'u3',companyId:co,dueDate:due,done:false,doneAt:null,createdAt:new Date().toISOString()});
  closeModal();render();toast('Tarefa criada e designada para '+userName(who)+' ✓');
}
function updateContact(id,i,field,val){
  const c=S.companies.find(x=>x.id===id);if(!c)return;
  c.contacts[i][field]=val;
}
function addContact(id){
  const c=S.companies.find(x=>x.id===id);if(!c)return;
  c.contacts.push({name:'',role:'',email:'',phone:'',isPrimary:false});
  renderSlideover(id);
}
function removeContact(id,i){
  const c=S.companies.find(x=>x.id===id);if(!c)return;
  const wasPrimary=c.contacts[i].isPrimary;
  c.contacts.splice(i,1);
  if(wasPrimary&&c.contacts.length>0)c.contacts[0].isPrimary=true;
  renderSlideover(id);
}
function setPrimaryContact(id,i){
  const c=S.companies.find(x=>x.id===id);if(!c)return;
  c.contacts.forEach((ct,j)=>ct.isPrimary=j===i);
  renderSlideover(id);
}
function updateMeeting(id,field,val){
  const c=S.companies.find(x=>x.id===id);if(!c)return;
  c.meeting[field]=val;
  // if nivelInteresse or urgencia, re-render so chip updates
  if(field==='nivelInteresse'||field==='urgencia')renderSlideover(id);
}
function addStep(id){
  const c=S.companies.find(x=>x.id===id);if(!c)return;
  c.meeting.proximosPassos.push('');renderSlideover(id);
}
function removeStep(id,i){
  const c=S.companies.find(x=>x.id===id);if(!c)return;
  c.meeting.proximosPassos.splice(i,1);renderSlideover(id);
}
function updateStep(id,i,val){
  const c=S.companies.find(x=>x.id===id);if(!c)return;
  c.meeting.proximosPassos[i]=val;
}

/* ─── NEW COMPANY MODAL ─── */
function openNewCompany(){
  const advisors=S.users.filter(u=>u.team==='negocios'&&u.status==='ativo');
  document.getElementById('modal').innerHTML=`
    <div class="modal-head">
      <div style="font-size:16px;font-weight:800;flex:1">Nova empresa</div>
      <button class="btn btn-ghost btn-xs" onclick="closeModal()">${ic('x','ic')}</button>
    </div>
    <div class="modal-body">
      <div class="form-row"><label class="form-label">Nome da empresa *</label><input class="input" id="nc_name" placeholder="Ex.: Indústria Modelo"></div>
      <div class="form-grid">
        <div class="form-row"><label class="form-label">Valor estimado (R$)</label><input class="input" id="nc_val" type="number" value="12000" min="0"></div>
        <div class="form-row"><label class="form-label">Cota</label><select class="sel" id="nc_quota">${S.quotas.map(q=>`<option>${q.n}</option>`).join('')}</select></div>
      </div>
      <div class="form-grid">
        <div class="form-row"><label class="form-label">Assessor</label><select class="sel" id="nc_adv">${advisors.map(u=>`<option value="${u.id}">${u.name}</option>`).join('')}</select></div>
        <div class="form-row"><label class="form-label">Etapa inicial</label><select class="sel" id="nc_stage">${STAGES.filter(s=>s.id!=='perdido').map(s=>`<option value="${s.id}">${s.label}</option>`).join('')}</select></div>
      </div>
      <button class="btn btn-primary" style="width:100%;justify-content:center" onclick="createCompany()">${ic('plus','ic')}Adicionar ao funil</button>
    </div>`;
  document.getElementById('modal').classList.add('open');
  document.getElementById('scrim').classList.add('open');
}
function createCompany(){
  const name=(document.getElementById('nc_name')?.value||'').trim();
  if(!name){toast('Informe o nome da empresa','err');return;}
  const id='c'+(Date.now()%10000);
  const nc=mkCo(id,name,document.getElementById('nc_stage').value,3,3,3,
    document.getElementById('nc_adv').value,document.getElementById('nc_quota').value,
    +(document.getElementById('nc_val').value)||0,'A definir','—','Empresa adicionada manualmente.');
  S.companies.push(nc);
  if(nc.stage==='finalizado')moveStage(id,'finalizado');
  closeModal();S.page='funil';render();toast('Empresa adicionada ao funil ✓');
}

/* ═══════════════════════════════════════════════════
   BRAND LOGO SVG — faithful to manual
   Modes: 'icon' | 'full' | 'compact'
═══════════════════════════════════════════════════ */
function mecLogoSVG(mode='full', color='#ffffff', width=160){
  // The brand mark: a stylized double-a / infinity symbol
  // Colors: navy #024c76, blue #57a0bc, orange #f6a21c
  const c=color;
  const iconSVG=`<svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="42" height="42" rx="9" fill="${c}"/>
    <!-- Stylized double-a: left loop -->
    <path d="M8 25.5 C8.5 20.5 11.5 17 15.5 17 C18.2 17 20 18.8 21 21 C22 18.8 23.8 17 26.5 17 C30.5 17 33.5 20.5 34 25.5" fill="none" stroke="white" stroke-width="2.2" stroke-linecap="round"/>
    <!-- Left descender -->
    <path d="M8 25.5 C8 27.5 9.5 29.5 12 29.5 C14.5 29.5 16 27.5 16.5 25 C17 27.5 18.5 29.5 21 29.5 C23.5 29.5 25 27.5 25.5 25 C26 27.5 27.5 29.5 30 29.5 C32.5 29.5 34 27.5 34 25.5" fill="none" stroke="white" stroke-width="2.2" stroke-linecap="round"/>
    <!-- Upper arc left - the "Mercado em" reference -->
    <path d="M12.5 17.5 C12 14.5 13 12 15.5 11 C18 10 20 11.5 21 14" fill="none" stroke="white" stroke-width="2" stroke-linecap="round"/>
    <!-- Upper arc right -->
    <path d="M29.5 17.5 C30 14.5 29 12 26.5 11 C24 10 22 11.5 21 14" fill="none" stroke="white" stroke-width="2" stroke-linecap="round"/>
  </svg>`;

  if(mode==='icon') return iconSVG;

  // Full horizontal lockup: icon + wordmark
  const wordH=`<div style="display:flex;flex-direction:column;gap:0;line-height:1">
    <span style="font-size:${Math.round(width*0.072)}px;font-weight:400;color:${c};letter-spacing:.01em;opacity:.82">Mercado em</span>
    <span style="font-size:${Math.round(width*0.112)}px;font-weight:800;color:${c};letter-spacing:-.025em;margin-top:-1px">conexão</span>
  </div>`;

  if(mode==='compact'){
    return`<div style="display:flex;align-items:center;gap:10px">${iconSVG}
      <span style="font-size:${Math.round(width*0.16)}px;font-weight:800;color:${c};letter-spacing:-.02em">MeC</span></div>`;
  }

  return`<div style="display:flex;align-items:center;gap:12px">${iconSVG}${wordH}</div>`;
}

/* ═══════════════════════════════════════════════════
   AUTH SYSTEM
═══════════════════════════════════════════════════ */

// Simulated user database (persisted in sessionStorage for demo)
const AUTH_KEY='mecx_auth_users';
const SESSION_KEY='mecx_session';

function loadAuthUsers(){
  try{return JSON.parse(sessionStorage.getItem(AUTH_KEY)||'null');}catch{return null;}
}
function saveAuthUsers(users){sessionStorage.setItem(AUTH_KEY,JSON.stringify(users));}

// Seed initial users (matches CRM's S.users)
let authUsers=loadAuthUsers();
if(!authUsers){
  authUsers=[
    {id:'u1',name:'Rafael Mendes', email:'rafael@mecx.com',  pass:'123456',team:'negocios', role:'assessor',    status:'ativo'},
    {id:'u2',name:'Bianca Lopes',  email:'bianca@mecx.com',  pass:'123456',team:'negocios', role:'assessor',    status:'ativo'},
    {id:'u3',name:'Juliana Costa', email:'juliana@mecx.com', pass:'123456',team:'parcerias',role:'coordenador', status:'ativo'},
  ];
  saveAuthUsers(authUsers);
}

let session=null; // {userId, name, role, team, status}
try{session=JSON.parse(sessionStorage.getItem(SESSION_KEY)||'null');}catch{}

let authView='login'; // 'login' | 'register' | 'pending'

function renderAuth(){
  const card=document.getElementById('authCard');
  if(!card)return;
  if(authView==='pending'){
    card.innerHTML=`
    <div class="auth-logo">
      ${mecLogoSVG('full','#024c76',160)}
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
  if(authView==='login'){
    card.innerHTML=`
    <div class="auth-logo">
      ${mecLogoSVG('full','#024c76',180)}
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
  // register
  card.innerHTML=`
    <div class="auth-logo">
      ${mecLogoSVG('full','#024c76',180)}
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

let selectedRole='';
function selectRole(r){
  selectedRole=r;
  document.getElementById('regRole').value=r;
  document.querySelectorAll('.role-card').forEach(c=>c.classList.remove('selected'));
  document.querySelectorAll('.role-card').forEach(c=>{
    if((r==='assessor'&&c.querySelector('.role-name').textContent==='Assessor')||
       (r==='coordenador'&&c.querySelector('.role-name').textContent==='Coordenador'))
      c.classList.add('selected');
  });
}

function showAuthErr(msg){
  const el=document.getElementById('authErr');
  if(el){el.textContent=msg;el.classList.add('show');}
}

function doLogin(){
  const email=(document.getElementById('loginEmail')?.value||'').trim().toLowerCase();
  const pass=document.getElementById('loginPass')?.value||'';
  if(!email||!pass){showAuthErr('Preencha e-mail e senha.');return;}
  const u=authUsers.find(x=>x.email.toLowerCase()===email&&x.pass===pass);
  if(!u){showAuthErr('E-mail ou senha incorretos.');return;}
  if(u.status==='pendente'){authView='pending';renderAuth();return;}
  if(u.status==='inativo'){showAuthErr('Conta desativada. Fale com um coordenador.');return;}
  // login ok
  session={userId:u.id,name:u.name,role:u.role,team:u.team,status:u.status};
  sessionStorage.setItem(SESSION_KEY,JSON.stringify(session));
  enterApp();
}

function doRegister(){
  const name=(document.getElementById('regName')?.value||'').trim();
  const surname=(document.getElementById('regSurname')?.value||'').trim();
  const email=(document.getElementById('regEmail')?.value||'').trim().toLowerCase();
  const pass=document.getElementById('regPass')?.value||'';
  const pass2=document.getElementById('regPass2')?.value||'';
  const team=document.getElementById('regTeam')?.value||'';
  const role=document.getElementById('regRole')?.value||selectedRole;
  if(!name||!surname){showAuthErr('Informe nome e sobrenome.');return;}
  if(!email||!email.includes('@')){showAuthErr('E-mail inválido.');return;}
  if(pass.length<6){showAuthErr('A senha precisa ter no mínimo 6 caracteres.');return;}
  if(pass!==pass2){showAuthErr('As senhas não coincidem.');return;}
  if(!team){showAuthErr('Selecione seu time.');return;}
  if(!role){showAuthErr('Selecione o papel desejado (Assessor ou Coordenador).');return;}
  if(authUsers.find(u=>u.email.toLowerCase()===email)){showAuthErr('Este e-mail já está cadastrado.');return;}
  const fullName=name+' '+surname;
  const newId='u'+(Date.now()%100000);
  const newUser={id:newId,name:fullName,email,pass,team,role,status:'pendente',color:authUsers.length%6};
  authUsers.push(newUser);
  saveAuthUsers(authUsers);
  // Also add to CRM users list for coord approval
  S.users.push({id:newId,name:fullName,email,team,role,status:'pendente',color:authUsers.length%6});
  authView='pending';
  renderAuth();
}

function enterApp(){
  // Sync session user with S.users
  const u=S.users.find(x=>x.id===session.userId);
  if(!u){
    S.users.push({id:session.userId,name:session.name,email:'',team:session.team,role:session.role,status:'ativo',color:0});
  }
  // update sidebar user info
  document.getElementById('authScreen').classList.remove('visible');
  updateSidebarUser();
  render();
}

function updateSidebarUser(){
  if(!session)return;
  const av=document.querySelector('.sb-av');
  const nm=document.querySelector('.sb-user-name');
  const rl=document.querySelector('.sb-user-role');
  if(av)av.textContent=ini(session.name);
  if(nm)nm.textContent=session.name;
  if(rl)rl.textContent=(session.role==='coordenador'?'Coordenador':'Assessor')+' · '+session.team;
}

function doLogout(){
  session=null;
  sessionStorage.removeItem(SESSION_KEY);
  authView='login';
  document.getElementById('authScreen').classList.add('visible');
  renderAuth();
  closeAll();
}

// Wire logout into sidebar footer
function buildNav(){
  // Inject real brand SVG into sidebar logo area
  const logoInner=document.querySelector('.sb-logo-inner');
  if(logoInner){
    logoInner.innerHTML=`<div style="display:flex;align-items:center;gap:10px">${mecLogoSVG('icon','#ffffff')}<div style="line-height:1.15"><span style="font-size:10px;font-weight:500;opacity:.7;display:block">Mercado em</span><span style="font-size:14px;font-weight:800;letter-spacing:-.02em">conexão</span><small style="display:block;font-size:9px;opacity:.55;letter-spacing:.1em;text-transform:uppercase;margin-top:1px">CRM Interno</small></div></div>`;
  }
  const pend=S.users.filter(u=>u.status==='pendente').length;
  document.getElementById('sbNav').innerHTML=NAV_ITEMS.map(it=>{
    if(it.divider)return`<div class="sb-section">${it.divider}</div>`;
    // hide coord-only pages for assessors
    if(['usuarios','config'].includes(it.id)&&session?.role==='assessor')return'';
    const badge=it.id==='usuarios'&&pend?`<span class="nav-badge">${pend}</span>`:'';
    return`<button class="nav-btn${S.page===it.id?' active':''}" onclick="nav('${it.id}')">${ic(it.icon,'ic ic-lg')}<span>${it.label}</span>${badge}</button>`;
  }).join('');
  document.getElementById('themeBtn').innerHTML=ic(S.theme==='dark'?'sun':'moon','ic ic-lg');
  // logout button in sidebar foot
  const foot=document.querySelector('.sb-foot');
  if(foot&&!foot.querySelector('.logout-btn')){
    const lb=document.createElement('button');
    lb.className='logout-btn';
    lb.style.cssText='width:100%;margin-top:10px;padding:8px;background:rgba(255,255,255,.1);border:1px solid rgba(255,255,255,.2);border-radius:8px;color:rgba(255,255,255,.8);font-size:12.5px;font-weight:600;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:6px;transition:.13s';
    lb.innerHTML=`<svg style="width:14px;height:14px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>Sair`;
    lb.onmouseover=()=>lb.style.background='rgba(255,255,255,.18)';
    lb.onmouseout=()=>lb.style.background='rgba(255,255,255,.1)';
    lb.onclick=()=>{if(confirm('Deseja sair do sistema?'))doLogout();};
    foot.appendChild(lb);
  }
}

/* ─── INIT ─── */
renderAuth();
if(session){
  enterApp();
} else {
  renderAuth();
}
