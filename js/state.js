/* ═══════════════════════════════════════════════════
   DATA & STATE MANAGEMENT
   ═══════════════════════════════════════════════════ */
const D = 86400000;
const inD = (d, h = 0, m = 0) => {
  const t = new Date(Date.now() + d * D);
  t.setHours(h, m, 0, 0);
  return t.toISOString();
};
const fBRL = v => v.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', minimumFractionDigits: 0 });
const fK = v => 'R$\u00a0' + (v >= 1000 ? (v / 1000).toLocaleString('pt-BR', { maximumFractionDigits: 0 }) + 'k' : v);
const fDT = iso => {
  if (!iso) return '—';
  const d = new Date(iso);
  return d.toLocaleDateString('pt-BR') + ' às ' + d.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
};
const dUntil = iso => {
  if (!iso) return null;
  return Math.ceil((new Date(iso) - Date.now()) / D);
};
const esc = s => String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const ini = n => n.split(' ').filter(Boolean).map(p => p[0]).slice(0, 2).join('').toUpperCase();

const ACCENT_COLORS = [
  ['#e8f3f8', '#024c76'], ['#fff4e0', '#92540a'], ['#ecfdf3', '#027a48'],
  ['#f5f3ff', '#5b21b6'], ['#fef3f2', '#b42318'], ['#fffaeb', '#b54708'],
];
const avatarColor = idx => {
  const [bg, fg] = ACCENT_COLORS[idx % ACCENT_COLORS.length];
  return `background:${bg};color:${fg}`;
};

const STAGES = [
  { id: 'prospeccao', label: 'Prospecção', color: '#98a2b3' },
  { id: 'contato', label: 'Contato localizado', color: '#57a0bc' },
  { id: 'reuniao', label: 'Reunião marcada', color: '#f6a21c' },
  { id: 'negociacao', label: 'Em negociação', color: '#024c76' },
  { id: 'finalizado', label: 'Finalizado', color: '#12b76a' },
  { id: 'perdido', label: 'Perdidos', color: '#f04438' },
];
const stageById = id => STAGES.find(s => s.id === id) || { label: id, color: '#ccc' };

const PSTAGES = [
  { id: 'kickoff', label: 'Aguardando kickoff' },
  { id: 'andamento', label: 'Em andamento' },
  { id: 'pendente', label: 'Pendente cliente' },
  { id: 'concluido', label: 'Entregas concluídas' },
  { id: 'finalizado', label: 'Finalizado' },
];
const pbadge = {
  kickoff: { cls: 'b-amber', dot: 'bdot-amber' },
  andamento: { cls: 'b-blue', dot: 'bdot-blue' },
  pendente: { cls: 'b-orange', dot: 'bdot-amber' },
  concluido: { cls: 'b-green', dot: 'bdot-green' },
  finalizado: { cls: 'b-grey', dot: 'bdot-blue' },
};

const mkCo = (id, name, stage, rel, fin, temp, adv, quota, val, cn, cr, notes, overdue = 0) => ({
  id, name, stage, rel, fin, temp, adv, quota, val,
  contacts: [{ name: cn, role: cr, email: '', phone: '', isPrimary: true }],
  get cn() { return this.contacts.find(x => x.isPrimary)?.name || this.contacts[0]?.name || '—'; },
  get cr() { return this.contacts.find(x => x.isPrimary)?.role || this.contacts[0]?.role || '—'; },
  notes, overdue,
  engagement: 3,
  meeting: {
    date: '',
    pubAlvo: '', periodo: '', objetivo: '', desafio: '', budget: '',
    decisor: '', prazo: '', outrasFeiras: '', objecoes: '', criterio: '',
    interesse: '', tomReuniao: '', pontoVirada: '', nivelInteresse: 3, urgencia: 3,
    proximosPassos: []
  },
  partnership: null
});

const S = {
  page: 'central', theme: 'light',
  eventName: 'Mercado em Conexão 2026',
  defaultChecklist: ['Logo vetorizada recebida', 'Tema da palestra definido', 'Horário e local confirmados', 'Material aprovado pelo cliente', 'Kickoff realizado'],
  quotas: [{ n: 'Bronze', v: 5000 }, { n: 'Prata', v: 12000 }, { n: 'Ouro', v: 25000 }, { n: 'Diamante', v: 50000 }],
  goal: { total: 500000, deadline: inD(150) },
  fSearch: '', fAdv: 'all', fQuota: 'all', fHot: false, fCold: false, fLate: false,
  pSel: null, pTab: 'info', pView: 'list',
  // TASKS SYSTEM
  tasks: [
    { id: 't1', title: 'Ligar para retorno da proposta', desc: 'Cliente pediu retorno até hoje', assignedTo: 'u1', assignedBy: 'u3', companyId: 'c5', dueDate: new Date(Date.now() - 86400000).toISOString().slice(0, 10), done: false, doneAt: null, createdAt: new Date().toISOString() },
    { id: 't2', title: 'Enviar contrato para assinatura', desc: 'Contrato aprovado pelo jurídico', assignedTo: 'u2', assignedBy: 'u3', companyId: 'c6', dueDate: new Date(Date.now()).toISOString().slice(0, 10), done: false, doneAt: null, createdAt: new Date().toISOString() },
    { id: 't3', title: 'Confirmar reunião com CEO', desc: 'Confirmar local e horário', assignedTo: 'u1', assignedBy: 'u3', companyId: 'c4', dueDate: new Date(Date.now() + 2 * 86400000).toISOString().slice(0, 10), done: false, doneAt: null, createdAt: new Date().toISOString() },
    { id: 't4', title: 'Preparar proposta comercial', desc: 'Incluir desconto de 10%', assignedTo: 'u2', assignedBy: 'u3', companyId: 'c3', dueDate: new Date(Date.now() + 5 * 86400000).toISOString().slice(0, 10), done: true, doneAt: new Date().toISOString(), createdAt: new Date().toISOString() },
    { id: 't5', title: 'Follow-up pós-reunião', desc: 'Enviar resumo da reunião por e-mail', assignedTo: 'u1', assignedBy: 'u3', companyId: 'c2', dueDate: new Date(Date.now() + 7 * 86400000).toISOString().slice(0, 10), done: false, doneAt: null, createdAt: new Date().toISOString() },
  ],
  metaByQuota: { Bronze: 0, Prata: 0, Ouro: 0, Diamante: 0 },
  users: [
    { id: 'u1', name: 'Rafael Mendes', email: 'rafael@mecx.com', team: 'negocios', role: 'assessor', status: 'ativo', color: 0 },
    { id: 'u2', name: 'Bianca Lopes', email: 'bianca@mecx.com', team: 'negocios', role: 'assessor', status: 'ativo', color: 1 },
    { id: 'u3', name: 'Juliana Costa', email: 'juliana@mecx.com', team: 'parcerias', role: 'coordenador', status: 'ativo', color: 2 },
    { id: 'u4', name: 'Diego Faria', email: 'diego@mecx.com', team: 'parcerias', role: 'assessor', status: 'pendente', color: 3 },
    { id: 'u5', name: 'Lara Souza', email: 'lara@mecx.com', team: 'negocios', role: 'assessor', status: 'pendente', color: 4 },
  ],
  companies: [
    mkCo('c1', 'Padaria Estrela', 'prospeccao', 2, 2, 2, 'u1', 'Bronze', 5000, 'Antônio Vieira', 'Proprietário', 'Indicação. Avaliar interesse em pacote básico.', 0),
    mkCo('c2', 'TechNova Sistemas', 'prospeccao', 4, 4, 2, 'u2', 'Ouro', 25000, 'Paula Reis', 'CMO', 'Empresa em crescimento. Contato ainda frio.', 1),
    mkCo('c3', 'Clínica Vida', 'contato', 3, 3, 3, 'u1', 'Prata', 12000, 'Helena Dias', 'Diretora', 'Demonstrou interesse. Aguardando reunião.', 0),
    mkCo('c4', 'Grupo Atlas', 'reuniao', 5, 5, 5, 'u2', 'Diamante', 50000, 'Marcos Tavares', 'CEO', 'Reunião marcada para semana que vem. Alto potencial.', 2),
    mkCo('c5', 'Loja Bem-Estar', 'negociacao', 3, 3, 5, 'u1', 'Prata', 12000, 'Júlia Nunes', 'Sócia', 'Negociando desconto. Cliente muito engajado.', 1),
    mkCo('c6', 'AutoPeças Sul', 'negociacao', 4, 4, 4, 'u2', 'Ouro', 25000, 'Pedro Lima', 'Dir. Comercial', 'Proposta enviada. Aguardando financeiro.', 2),
    mkCo('c10', 'Café Aurora', 'perdido', 2, 2, 1, 'u1', 'Bronze', 5000, 'Sofia Martins', 'Gerente', 'Sem orçamento neste ciclo.', 0),
  ],
};

function mkFin(id, name, adv, quota, val, cn, cr, notes, pstage, checks, talk) {
  const c = mkCo(id, name, 'finalizado', 4, 4, 4, adv, quota, val, cn, cr, notes, 0);
  c.engagement = 4;
  c.meeting.objetivo = 'Exposição de marca e geração de leads qualificados';
  c.meeting.budget = fBRL(val);
  c.meeting.decisor = cn;
  c.meeting.interesse = 'Alto — demonstrou urgência e solicitou proposta imediata';
  c.meeting.tomReuniao = 'Positivo e propositivo';
  c.partnership = { stage: pstage, checklist: checks, talk, reuniaoReport: c.meeting };
  return c;
}

// Add default finalized companies
S.companies.push(
  mkFin('c7', 'Construtora Horizonte', 'u1', 'Ouro', 25000, 'Marina Alves', 'Diretora de Marketing',
    'Cliente quer destaque no palco principal. Aprovação via jurídico — prever 5 dias úteis.',
    'andamento', [true, true, false, false, false],
    { theme: 'Inovação no varejo de construção', datetime: inD(9, 14, 0), inGrid: true, custom: false, briefing: '', speaker: 'Marina Alves' }),
  mkFin('c8', 'Banco Lumen', 'u1', 'Diamante', 50000, 'Otávio Prado', 'Head Comercial',
    'Acabou de fechar. Aguardando kickoff.',
    'kickoff', [false, false, false, false, false],
    { theme: '', datetime: '', inGrid: false, custom: false, briefing: '', speaker: '' }),
  mkFin('c9', 'Verde Agro', 'u2', 'Prata', 12000, 'Caio Ribeiro', 'CEO',
    'Palestra sob medida sobre sustentabilidade. Conteúdo co-criado com o cliente.',
    'concluido', [true, true, true, true, true],
    { theme: 'Sustentabilidade que dá lucro no agro', datetime: inD(9, 14, 0), inGrid: true, custom: true,
      briefing: 'Foco em cases reais de ROI. Sem jargão técnico. 2 perguntas de plateia ao final.', speaker: 'Caio Ribeiro' })
);

S.pSel = S.companies.find(c => c.partnership)?.id || null;

const user = id => S.users.find(u => u.id === id);
const userName = id => user(id)?.name || '—';
const partners = () => S.companies.filter(c => c.partnership);
const co = () => S.companies.find(c => c.id === S.pSel) || partners()[0];
const closedVal = () => S.companies.filter(c => c.stage === 'finalizado').reduce((s, c) => s + c.val, 0);
const progress = c => {
  const tot = c.partnership.checklist.length;
  return tot ? Math.round(c.partnership.checklist.filter(Boolean).length / tot * 100) : 0;
};
const hasPend = c => !c.partnership.talk.theme || !c.partnership.talk.datetime || c.partnership.checklist.some(x => !x);

// Expose elements on window for global accessibility
window.D = D;
window.inD = inD;
window.fBRL = fBRL;
window.fK = fK;
window.fDT = fDT;
window.dUntil = dUntil;
window.esc = esc;
window.ini = ini;
window.ACCENT_COLORS = ACCENT_COLORS;
window.avatarColor = avatarColor;
window.STAGES = STAGES;
window.stageById = stageById;
window.PSTAGES = PSTAGES;
window.pbadge = pbadge;
window.mkCo = mkCo;
window.S = S;
window.mkFin = mkFin;
window.user = user;
window.userName = userName;
window.partners = partners;
window.co = co;
window.closedVal = closedVal;
window.progress = progress;
window.hasPend = hasPend;
