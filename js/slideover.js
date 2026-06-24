/* ═══════════════════════════════════════════════════
   COMPANY SLIDE-OVER & MODALS LOGIC
   ═══════════════════════════════════════════════════ */
let soTab = 'dados';

function openCompany(id) {
  soTab = 'dados';
  renderSlideover(id);
  document.getElementById('slideover').classList.add('open');
  document.getElementById('scrim').classList.add('open');
}

function renderSlideover(id) {
  const c = S.companies.find(x => x.id === id);
  if (!c) return;
  const TABS = [
    { id: 'dados', l: 'Dados' },
    { id: 'contatos', l: 'Contatos' },
    { id: 'tarefas', l: 'Tarefas' },
    { id: 'reuniao', l: 'Reunião' },
    { id: 'passagem', l: 'Passagem p/ Parcerias' },
    { id: 'historico', l: 'Histórico' }
  ];
  const tabsH = TABS.map(t => `<button onclick="soTab='${t.id}';renderSlideover('${id}')" style="padding:8px 14px;font-size:13px;font-weight:${soTab === t.id ? '700' : '500'};color:${soTab === t.id ? 'var(--navy)' : 'var(--txt3)'};background:0;border:0;border-bottom:2px solid ${soTab === t.id ? 'var(--navy)' : 'transparent'};cursor:pointer;margin-bottom:-1px">${t.l}</button>`).join('');
  const partnerLink = c.partnership ? `<div style="margin:12px 0;padding:10px 12px;background:var(--success-bg);border:1px solid rgba(18,183,106,.25);border-radius:var(--r-md);font-size:13px;display:flex;align-items:center;gap:8px;color:var(--success-txt)">
    ${ic('handshake', 'ic ic-sm')}<span>Negócio fechado</span>
    <button class="btn btn-ghost btn-xs" style="margin-left:auto" onclick="nav('parcerias');S.pSel='${c.id}';S.pTab='info';closeSheet();render()">Ver parceria ${ic('arrow', 'ic ic-sm')}</button>
  </div>` : '';

  // TEMPERATURE / ENGAGEMENT chip selectors
  const tempLabel = ['', '❄️ Frio', '🌡 Morno', '🟡 Morno+', '🔥 Quente', '🔴 Hot'];
  const engLabel = ['', '⭐', '⭐⭐', '⭐⭐⭐', '⭐⭐⭐⭐', '⭐⭐⭐⭐⭐'];
  const chipSel = (field, max, labels, colorFn) => `<div style="display:flex;gap:5px;flex-wrap:wrap">${Array.from({ length: max }, (_, i) => {
    const v = i + 1;
    const active = c[field] === v;
    return `<button onclick="updateCo('${c.id}','${field}',${v});renderSlideover('${c.id}')" style="padding:4px 10px;border-radius:99px;border:1px solid ${active ? colorFn(v) : ' var(--border2)'};background:${active ? colorFn(v) + '22' : 'var(--surface)'};color:${active ? colorFn(v) : 'var(--txt3)'};font-size:12px;font-weight:600;cursor:pointer">${labels[v]}</button>`;
  }).join('')}</div>`;
  const tempColor = v => v >= 4 ? '#f6a21c' : v >= 3 ? '#f79009' : '#57a0bc';
  const engColor = () => '#024c76';

  let body = '';
  if (soTab === 'dados') {
    const activeAdvisors = S.users.filter(u => u.status === 'ativo');
    const sliderStyle = (val, max = 5, col = 'navy') => {
      const pct = Math.round(val / max * 100);
      return `class="${col}" style="--pct:${pct}%" min="1" max="${max}" value="${val}"`;
    };
    const cotaFechada = c.cotaFechada || '';
    const desconto = c.desconto || 0;
    const cotaBase = S.quotas.find(q => q.n === c.quota)?.v || c.val;
    const valorFinal = Math.max(0, cotaBase - desconto);
    body = `
    ${partnerLink}
    <div class="form-row"><label class="form-label">Nome da empresa</label>
      <input class="input" value="${esc(c.name)}" oninput="updateCo('${c.id}','name',this.value)"></div>
    <div class="form-grid">
      <div class="form-row"><label class="form-label">Etapa do funil</label>
        <select class="sel" onchange="updateCo('${c.id}','stage',this.value)">
          ${STAGES.map(s => `<option value="${s.id}"${c.stage === s.id ? ' selected' : ''}>${s.label}</option>`).join('')}
        </select></div>
      <div class="form-row"><label class="form-label">Forma de pagamento</label>
        <select class="sel" onchange="updateCo('${c.id}','payment',this.value)">
          ${['À vista', 'Parcelado (2x)', 'Parcelado (3x)', 'Parcelado (6x)', 'Boleto', 'PIX'].map(p => `<option ${(c.payment || 'À vista') === p ? ' selected' : ''}>${p}</option>`).join('')}
        </select></div>
    </div>
    <div class="form-grid">
      <div class="form-row"><label class="form-label">Assessor principal</label>
        <select class="sel" onchange="updateCo('${c.id}','adv',this.value)">
          ${activeAdvisors.map(u => `<option value="${u.id}"${c.adv === u.id ? ' selected' : ''}>${u.name}</option>`).join('')}
        </select></div>
      <div class="form-row"><label class="form-label">Assessor secundário</label>
        <select class="sel" onchange="updateCo('${c.id}','adv2',this.value)">
          <option value="">Nenhum</option>
          ${activeAdvisors.map(u => `<option value="${u.id}"${(c.adv2 || '') === u.id ? ' selected' : ''}>${u.name}</option>`).join('')}
        </select></div>
    </div>
    <div class="form-grid" style="margin-bottom:4px">
      <div class="slider-wrap">
        <div class="slider-label">${ic('star', 'ic ic-sm')} Relevância estratégica: <span id="sl_rel_${c.id}">${c.rel}/5</span></div>
        <input type="range" ${sliderStyle(c.rel)} oninput="updateCo('${c.id}','rel',+this.value);document.getElementById('sl_rel_${c.id}').textContent=this.value+'/5';updateSliderTrack(this)">
      </div>
      <div class="slider-wrap">
        <div class="slider-label">${ic('trending', 'ic ic-sm')} Potencial financeiro: <span id="sl_fin_${c.id}">${c.fin}/5</span></div>
        <input type="range" ${sliderStyle(c.fin)} oninput="updateCo('${c.id}','fin',+this.value);document.getElementById('sl_fin_${c.id}').textContent=this.value+'/5';updateSliderTrack(this)">
      </div>
    </div>
    <div class="slider-wrap" style="margin-bottom:16px">
      <div class="slider-label">${ic('flame', 'ic ic-sm')} Temperatura do contato: <span id="sl_temp_${c.id}">${c.temp}/5</span></div>
      <input type="range" class="orange" min="1" max="5" value="${c.temp}" style="--pct:${Math.round(c.temp / 5 * 100)}%" oninput="updateCo('${c.id}','temp',+this.value);document.getElementById('sl_temp_${c.id}').textContent=this.value+'/5';updateSliderTrack(this)">
    </div>
    <div class="form-grid">
      <div class="form-row"><label class="form-label">Cota estimada</label>
        <select class="sel" onchange="updateCo('${c.id}','quota',this.value);recalcValorFinal('${c.id}')">
          ${S.quotas.map(q => `<option value="${q.n}"${c.quota === q.n ? ' selected' : ''}>${q.n} — ${fBRL(q.v)}</option>`).join('')}
        </select></div>
      <div class="form-row"><label class="form-label">Cota fechada</label>
        <select class="sel" onchange="updateCo('${c.id}','cotaFechada',this.value);recalcValorFinal('${c.id}')">
          <option value="">Nenhuma</option>
          ${S.quotas.map(q => `<option value="${q.n}"${cotaFechada === q.n ? ' selected' : ''}>${q.n}</option>`).join('')}
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
  else if (soTab === 'contatos') {
    const clist = c.contacts.map((ct, i) => `
    <div style="background:var(--surface2);border:1px solid var(--border);border-radius:var(--r-md);padding:12px;margin-bottom:8px">
      <div style="display:flex;align-items:center;gap:8px;margin-bottom:8px">
        <div style="width:30px;height:30px;border-radius:99px;${avatarColor(i)};display:grid;place-items:center;font-size:11px;font-weight:700;flex-shrink:0">${ini(ct.name || '?')}</div>
        <div style="flex:1;font-weight:600;font-size:13px">${esc(ct.name || 'Sem nome')}</div>
        ${ct.isPrimary ? `<span class="badge b-blue">Principal</span>` :
        `<button onclick="setPrimaryContact('${c.id}',${i})" class="btn btn-ghost btn-xs">Tornar principal</button>`}
        ${c.contacts.length > 1 ? `<button onclick="removeContact('${c.id}',${i})" class="btn btn-ghost btn-xs" style="color:var(--danger)">${ic('x', 'ic ic-sm')}</button>` : ''}
      </div>
      <div class="form-grid" style="gap:8px">
        <input class="input" placeholder="Nome" value="${esc(ct.name)}" oninput="updateContact('${c.id}',${i},'name',this.value)" style="font-size:12.5px">
        <input class="input" placeholder="Cargo" value="${esc(ct.role)}" oninput="updateContact('${c.id}',${i},'role',this.value)" style="font-size:12.5px">
        <input class="input" placeholder="E-mail" value="${esc(ct.email)}" oninput="updateContact('${c.id}',${i},'email',this.value)" style="font-size:12.5px">
        <input class="input" placeholder="Telefone" value="${esc(ct.phone || '')}" oninput="updateContact('${c.id}',${i},'phone',this.value)" style="font-size:12.5px">
      </div>
    </div>`).join('');
    body = `${clist}
    <button class="btn btn-ghost btn-sm" onclick="addContact('${c.id}')" style="width:100%;justify-content:center">${ic('plus', 'ic')}Adicionar contato</button>`;
  }
  else if (soTab === 'reuniao') {
    const m = c.meeting;
    const qrow = (label, field, placeholder = '') => `<div class="form-row">
      <label class="form-label">${label}</label>
      <textarea class="textarea" placeholder="${placeholder}" oninput="updateMeeting('${c.id}','${field}',this.value)" style="min-height:52px">${esc(m[field])}</textarea>
    </div>`;
    body = `
    <div class="form-grid">
      <div class="form-row"><label class="form-label">Data da reunião</label>
        <input class="input" type="date" value="${m.date}" oninput="updateMeeting('${c.id}','date',this.value)"></div>
      <div class="form-row"><label class="form-label">Tomador de decisão</label>
        <input class="input" placeholder="Nome / cargo" value="${esc(m.decisor)}" oninput="updateMeeting('${c.id}','decisor',this.value)"></div>
    </div>
    ${qrow('Público-alvo principal deles?', 'pubAlvo', 'Ex.: PMEs do setor de tecnologia')}
    ${qrow('De qual período estão buscando?', 'periodo', 'Ex.: Q3 2026')}
    ${qrow('Qual o principal objetivo na feira?', 'objetivo', 'Ex.: Geração de leads B2B')}
    ${qrow('Maior desafio atual do cliente?', 'desafio', '')}
    ${qrow('Budget disponível?', 'budget', 'Ex.: R$ 25.000')}
    ${qrow('Prazo para decisão?', 'prazo', 'Ex.: Até sexta-feira')}
    ${qrow('Já participou de outra feira? Qual?', 'outrasFeiras', '')}
    ${qrow('Objeções levantadas?', 'objecoes', '')}
    ${qrow('Critério principal de escolha?', 'criterio', '')}
    ${qrow('Houve interesse claro? Qual sinal?', 'interesse', '')}
    <div class="form-row"><label class="form-label">Tom da reunião</label>
      <input class="input" value="${esc(m.tomReuniao)}" oninput="updateMeeting('${c.id}','tomReuniao',this.value)"></div>
    <div class="form-row"><label class="form-label">Ponto de virada da conversa</label>
      <input class="input" value="${esc(m.pontoVirada)}" oninput="updateMeeting('${c.id}','pontoVirada',this.value)"></div>
    <div class="form-grid">
      <div class="form-row"><label class="form-label">Nível de interesse (${m.nivelInteresse}/5)</label>
        ${chipSel('nivelInteresse', 5, ['', '😐', '🙂', '😊', '😃', '🤩'], () => '#024c76')}</div>
      <div class="form-row"><label class="form-label">Urgência percebida (${m.urgencia}/5)</label>
        ${chipSel('urgencia', 5, ['', '🐢', '🚶', '🚴', '🏃', '🚀'], () => '#f6a21c')}</div>
    </div>
    <div style="margin-top:4px;padding-top:12px;border-top:1px solid var(--border)">
      <div class="form-label" style="margin-bottom:8px">Próximos passos</div>
      ${(m.proximosPassos || []).map((p, i) => `<div style="display:flex;gap:6px;margin-bottom:6px">
        <input class="input" value="${esc(p)}" oninput="updateStep('${c.id}',${i},this.value)" style="font-size:12.5px">
        <button class="btn btn-ghost btn-xs" onclick="removeStep('${c.id}',${i})">${ic('x', 'ic ic-sm')}</button>
      </div>`).join('')}
      <button class="btn btn-ghost btn-sm" onclick="addStep('${c.id}')" style="margin-top:2px">${ic('plus', 'ic')}Adicionar passo</button>
    </div>`;
  }
  else if (soTab === 'tarefas') {
    const ctasks = S.tasks.filter(t => t.companyId === c.id);
    const today = new Date().toISOString().slice(0, 10);
    const taskRows = ctasks.length ? ctasks.map(t => {
      const late = !t.done && t.dueDate < today;
      const isToday = !t.done && t.dueDate === today;
      const dueLabel = late ? `⚠ ${fmtDate(t.dueDate)} (atrasada)` : isToday ? `Hoje` : fmtDate(t.dueDate);
      const dueCls = late ? 'late' : isToday ? 'today' : 'ok';
      return `<div class="task-item${late ? ' late' : ''}">
        <div class="task-cb${t.done ? ' done' : ''}" onclick="toggleTask('${t.id}')">${t.done ? ic('check', 'ic ic-sm') : ''}</div>
        <div class="task-body">
          <div class="task-title${t.done ? ' done' : ''}">${esc(t.title)}</div>
          ${t.desc ? `<div class="task-co">${esc(t.desc)}</div>` : ''}
          <div class="task-meta">
            <span class="task-due ${dueCls}">${dueLabel}</span>
            <span class="task-assignee">${userName(t.assignedTo)}</span>
          </div>
        </div>
        ${session?.role === 'coordenador' ? `<button class="btn btn-ghost btn-xs" style="color:var(--danger);flex-shrink:0" onclick="deleteTask('${t.id}')">${ic('x', 'ic ic-sm')}</button>` : ''}
      </div>`;
    }).join('') : `<div style="padding:24px;text-align:center;color:var(--txt3);font-size:13px">Nenhuma tarefa para esta empresa.</div>`;
    const canCreate = session?.role === 'coordenador';
    body = `<div class="card" style="margin-bottom:12px">${taskRows}</div>
    ${canCreate ? `<div style="background:var(--surface);border:1px solid var(--border);border-radius:var(--r-lg);padding:16px">
      <div style="font-size:13px;font-weight:700;margin-bottom:12px">Nova tarefa para esta empresa</div>
      <div class="form-row"><label class="form-label">Título</label><input class="input" id="nt_title" placeholder="Ex.: Ligar para confirmar reunião"></div>
      <div class="form-row"><label class="form-label">Descrição (opcional)</label><input class="input" id="nt_desc" placeholder="Detalhes..."></div>
      <div class="form-grid">
        <div class="form-row"><label class="form-label">Designar para</label>
          <select class="sel" id="nt_who">${S.users.filter(u => u.status === 'ativo' && u.role === 'assessor').map(u => `<option value="${u.id}">${u.name}</option>`).join('')}</select></div>
        <div class="form-row"><label class="form-label">Data limite</label><input class="input" type="date" id="nt_due" value="${today}"></div>
      </div>
      <button class="btn btn-primary btn-sm" style="width:100%;justify-content:center" onclick="createTask('${c.id}')">${ic('plus', 'ic')}Criar tarefa</button>
    </div>` : ''}`;
  }
  else if (soTab === 'passagem') {
    const rr = c.partnership?.reuniaoReport || c.meeting || {};
    body = `<div style="padding:4px 0">
      <div style="font-size:13px;color:var(--txt3);margin-bottom:16px">Resumo dos dados que serão transferidos para a equipe de Parcerias ao fechar o negócio.</div>
      <div class="info-grid" style="margin-bottom:16px">
        <div class="ig-item"><div class="ig-lbl">Contato principal</div><div class="ig-val">${c.cn}</div></div>
        <div class="ig-item"><div class="ig-lbl">Cota fechada</div><div class="ig-val">${c.cotaFechada || c.quota}</div></div>
        <div class="ig-item"><div class="ig-lbl">Valor final</div><div class="ig-val">${fBRL(Math.max(0, (S.quotas.find(q => q.n === c.quota)?.v || c.val) - (c.desconto || 0)))}</div></div>
        <div class="ig-item"><div class="ig-lbl">Assessor responsável</div><div class="ig-val">${userName(c.adv)}</div></div>
        <div class="ig-item"><div class="ig-lbl">Forma de pagamento</div><div class="ig-val">${c.payment || 'À vista'}</div></div>
        <div class="ig-item"><div class="ig-lbl">Temperatura</div><div class="ig-val">${['', '❄️ Frio', '🌡 Morno', '🟡 Morno+', '🔥 Quente', '🔴 Hot'][c.temp]}</div></div>
      </div>
      ${rr.objetivo ? `<div class="form-row"><label class="form-label">Objetivo na feira</label><div class="notes-box">${esc(rr.objetivo)}</div></div>` : ''}
      ${rr.budget ? `<div class="form-row"><label class="form-label">Budget</label><div class="notes-box">${esc(rr.budget)}</div></div>` : ''}
      ${rr.interesse ? `<div class="form-row"><label class="form-label">Interesse demonstrado</label><div class="notes-box">${esc(rr.interesse)}</div></div>` : ''}
      <div class="form-row"><label class="form-label">Observações do hand-off</label>
        <textarea class="textarea" placeholder="Notas adicionais para o time de Parcerias…" oninput="updateCo('${c.id}','notes',this.value)">${esc(c.notes)}</textarea></div>
      ${!c.partnership ? `<button class="btn btn-primary" style="width:100%;justify-content:center;margin-top:4px" onclick="moveStage('${c.id}','finalizado');closeSheet();render()">✓ Marcar como Fechado e transferir para Parcerias</button>` : ''}
    </div>`;
  }
  else if (soTab === 'historico') {
    const hist = [
      { date: new Date(Date.now() - 10 * 86400000).toISOString(), action: 'Empresa criada no funil', user: 'u1' },
      { date: new Date(Date.now() - 8 * 86400000).toISOString(), action: `Etapa alterada para "${stageById(c.stage).label}"`, user: 'u1' },
      { date: new Date(Date.now() - 5 * 86400000).toISOString(), action: 'Reunião registrada', user: 'u1' },
      { date: new Date(Date.now() - 2 * 86400000).toISOString(), action: 'Qualificação atualizada', user: 'u1' },
    ];
    const coTasks = S.tasks.filter(t => t.companyId === c.id && t.done);
    coTasks.forEach(t => hist.push({ date: t.doneAt, action: `Tarefa concluída: "${t.title}"`, user: t.assignedTo }));
    hist.sort((a, b) => new Date(b.date) - new Date(a.date));
    body = `<div class="card">${hist.map(h => `<div class="task-item">
      <div style="width:8px;height:8px;border-radius:99px;background:var(--blue);flex-shrink:0;margin-top:5px"></div>
      <div class="task-body">
        <div class="task-title">${h.action}</div>
        <div class="task-meta"><span class="task-co">${fmtDate(h.date.slice(0, 10))} · ${userName(h.user)}</span></div>
      </div>
    </div>`).join('')}</div>`;
  }

  document.getElementById('slideover').innerHTML = `
    <div class="so-head">
      <div style="flex:1;min-width:0">
        <div style="font-size:17px;font-weight:800;color:var(--txt);white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${c.name}</div>
        <div style="display:flex;gap:6px;margin-top:5px;flex-wrap:wrap">
          <span class="badge b-blue">${c.quota}</span>
          <span class="badge b-orange">${fBRL(c.val)}</span>
          <span class="badge" style="background:${stageById(c.stage).color}22;color:${stageById(c.stage).color};border:1px solid ${stageById(c.stage).color}44">${stageById(c.stage).label}</span>
        </div>
      </div>
      <button class="btn btn-ghost btn-xs" onclick="closeSheet()">${ic('x', 'ic')}</button>
    </div>
    <div style="display:flex;gap:0;border-bottom:1px solid var(--border);padding:0 20px;overflow-x:auto">${tabsH}</div>
    <div class="so-body">${body}</div>`;
}

function updateCo(id, field, val) {
  const c = S.companies.find(x => x.id === id);
  if (!c) return;
  if (field === 'stage') {
    moveStage(id, val);
    return;
  }
  c[field] = val;
}

function recalcValorFinal(id) {
  const c = S.companies.find(x => x.id === id);
  if (!c) return;
  const base = S.quotas.find(q => q.n === c.quota)?.v || c.val;
  const vf = Math.max(0, base - (c.desconto || 0));
  const box = document.getElementById('vfbox_' + id);
  if (box) box.querySelector('.valor-final-num').textContent = fBRL(vf);
  c.val = vf;
}

function updateSliderTrack(el) {
  const pct = Math.round((el.value - el.min) / (el.max - el.min) * 100);
  el.style.setProperty('--pct', pct + '%');
}

const fmtDate = d => {
  if (!d) return '—';
  const [y, m, di] = d.split('-');
  return `${di}/${m}/${y}`;
};

function toggleTask(id) {
  const t = S.tasks.find(x => x.id === id);
  if (!t) return;
  t.done = !t.done;
  t.doneAt = t.done ? new Date().toISOString() : null;
  toast(t.done ? 'Tarefa marcada como concluída ✓' : 'Tarefa reaberta');
  render();
}

function deleteTask(id) {
  if (!confirm('Excluir esta tarefa?')) return;
  S.tasks = S.tasks.filter(t => t.id !== id);
  render();
  toast('Tarefa excluída');
}

function createTask(companyId) {
  const title = (document.getElementById('nt_title')?.value || '').trim();
  const desc = (document.getElementById('nt_desc')?.value || '').trim();
  const who = document.getElementById('nt_who')?.value || 'u1';
  const due = document.getElementById('nt_due')?.value || new Date().toISOString().slice(0, 10);
  if (!title) {
    toast('Informe o título da tarefa', 'err');
    return;
  }
  S.tasks.push({
    id: 't' + (Date.now() % 100000),
    title,
    desc,
    assignedTo: who,
    assignedBy: session?.userId || 'u3',
    companyId,
    dueDate: due,
    done: false,
    doneAt: null,
    createdAt: new Date().toISOString()
  });
  toast('Tarefa criada e designada para ' + userName(who) + ' ✓');
  renderSlideover(companyId);
}

function openNewTaskModal() {
  const today = new Date().toISOString().slice(0, 10);
  const advisors = S.users.filter(u => u.status === 'ativo' && u.role === 'assessor');
  document.getElementById('modal').innerHTML = `
    <div class="modal-head"><div style="font-size:16px;font-weight:800;flex:1">Nova tarefa</div>
      <button class="btn btn-ghost btn-xs" onclick="closeModal()">${ic('x', 'ic')}</button></div>
    <div class="modal-body">
      <div class="form-row"><label class="form-label">Título da tarefa *</label><input class="input" id="gt_title" placeholder="Ex.: Ligar para cliente"></div>
      <div class="form-row"><label class="form-label">Descrição</label><input class="input" id="gt_desc" placeholder="Detalhes..."></div>
      <div class="form-grid">
        <div class="form-row"><label class="form-label">Designar para *</label>
          <select class="sel" id="gt_who">${advisors.map(u => `<option value="${u.id}">${u.name}</option>`).join('')}</select></div>
        <div class="form-row"><label class="form-label">Data limite *</label>
          <input class="input" type="date" id="gt_due" value="${today}"></div>
      </div>
      <div class="form-row"><label class="form-label">Empresa (opcional)</label>
        <select class="sel" id="gt_co">
          <option value="">— Sem empresa —</option>
          ${S.companies.filter(c => !['perdido'].includes(c.stage)).map(c => `<option value="${c.id}">${c.name}</option>`).join('')}
        </select></div>
      <button class="btn btn-primary" style="width:100%;justify-content:center" onclick="submitNewTask()">${ic('plus', 'ic')}Criar e designar tarefa</button>
    </div>`;
  document.getElementById('modal').classList.add('open');
  document.getElementById('scrim').classList.add('open');
}

function submitNewTask() {
  const title = (document.getElementById('gt_title')?.value || '').trim();
  const desc = (document.getElementById('gt_desc')?.value || '').trim();
  const who = document.getElementById('gt_who')?.value;
  const due = document.getElementById('gt_due')?.value;
  const co = document.getElementById('gt_co')?.value || null;
  if (!title || !who || !due) {
    toast('Preencha título, responsável e data', 'err');
    return;
  }
  S.tasks.push({
    id: 't' + (Date.now() % 100000),
    title,
    desc,
    assignedTo: who,
    assignedBy: session?.userId || 'u3',
    companyId: co,
    dueDate: due,
    done: false,
    doneAt: null,
    createdAt: new Date().toISOString()
  });
  closeModal();
  render();
  toast('Tarefa criada e designada para ' + userName(who) + ' ✓');
}

function updateContact(id, i, field, val) {
  const c = S.companies.find(x => x.id === id);
  if (!c) return;
  c.contacts[i][field] = val;
}

function addContact(id) {
  const c = S.companies.find(x => x.id === id);
  if (!c) return;
  c.contacts.push({ name: '', role: '', email: '', phone: '', isPrimary: false });
  renderSlideover(id);
}

function removeContact(id, i) {
  const c = S.companies.find(x => x.id === id);
  if (!c) return;
  const wasPrimary = c.contacts[i].isPrimary;
  c.contacts.splice(i, 1);
  if (wasPrimary && c.contacts.length > 0) c.contacts[0].isPrimary = true;
  renderSlideover(id);
}

function setPrimaryContact(id, i) {
  const c = S.companies.find(x => x.id === id);
  if (!c) return;
  c.contacts.forEach((ct, j) => ct.isPrimary = j === i);
  renderSlideover(id);
}

function updateMeeting(id, field, val) {
  const c = S.companies.find(x => x.id === id);
  if (!c) return;
  c.meeting[field] = val;
  if (field === 'nivelInteresse' || field === 'urgencia') renderSlideover(id);
}

function addStep(id) {
  const c = S.companies.find(x => x.id === id);
  if (!c) return;
  c.meeting.proximosPassos.push('');
  renderSlideover(id);
}

function removeStep(id, i) {
  const c = S.companies.find(x => x.id === id);
  if (!c) return;
  c.meeting.proximosPassos.splice(i, 1);
  renderSlideover(id);
}

function updateStep(id, i, val) {
  const c = S.companies.find(x => x.id === id);
  if (!c) return;
  c.meeting.proximosPassos[i] = val;
}

function openNewCompany() {
  const advisors = S.users.filter(u => u.team === 'negocios' && u.status === 'ativo');
  document.getElementById('modal').innerHTML = `
    <div class="modal-head">
      <div style="font-size:16px;font-weight:800;flex:1">Nova empresa</div>
      <button class="btn btn-ghost btn-xs" onclick="closeModal()">${ic('x', 'ic')}</button>
    </div>
    <div class="modal-body">
      <div class="form-row"><label class="form-label">Nome da empresa *</label><input class="input" id="nc_name" placeholder="Ex.: Indústria Modelo"></div>
      <div class="form-grid">
        <div class="form-row"><label class="form-label">Valor estimado (R$)</label><input class="input" id="nc_val" type="number" value="12000" min="0"></div>
        <div class="form-row"><label class="form-label">Cota</label><select class="sel" id="nc_quota">${S.quotas.map(q => `<option>${q.n}</option>`).join('')}</select></div>
      </div>
      <div class="form-grid">
        <div class="form-row"><label class="form-label">Assessor</label><select class="sel" id="nc_adv">${advisors.map(u => `<option value="${u.id}">${u.name}</option>`).join('')}</select></div>
        <div class="form-row"><label class="form-label">Etapa inicial</label><select class="sel" id="nc_stage">${STAGES.filter(s => s.id !== 'perdido').map(s => `<option value="${s.id}">${s.label}</option>`).join('')}</select></div>
      </div>
      <button class="btn btn-primary" style="width:100%;justify-content:center" onclick="createCompany()">${ic('plus', 'ic')}Adicionar ao funil</button>
    </div>`;
  document.getElementById('modal').classList.add('open');
  document.getElementById('scrim').classList.add('open');
}

function createCompany() {
  const name = (document.getElementById('nc_name')?.value || '').trim();
  if (!name) {
    toast('Informe o nome da empresa', 'err');
    return;
  }
  const id = 'c' + (Date.now() % 10000);
  const nc = mkCo(id, name, document.getElementById('nc_stage').value, 3, 3, 3,
    document.getElementById('nc_adv').value, document.getElementById('nc_quota').value,
    +(document.getElementById('nc_val').value) || 0, 'A definir', '—', 'Empresa adicionada manualmente.');
  S.companies.push(nc);
  if (nc.stage === 'finalizado') moveStage(id, 'finalizado');
  closeModal();
  S.page = 'funil';
  render();
  toast('Empresa adicionada ao funil ✓');
}

// Expose on window for global accessibility
window.soTab = soTab;
window.openCompany = openCompany;
window.renderSlideover = renderSlideover;
window.updateCo = updateCo;
window.recalcValorFinal = recalcValorFinal;
window.updateSliderTrack = updateSliderTrack;
window.fmtDate = fmtDate;
window.toggleTask = toggleTask;
window.deleteTask = deleteTask;
window.createTask = createTask;
window.openNewTaskModal = openNewTaskModal;
window.submitNewTask = submitNewTask;
window.updateContact = updateContact;
window.addContact = addContact;
window.removeContact = removeContact;
window.setPrimaryContact = setPrimaryContact;
window.updateMeeting = updateMeeting;
window.addStep = addStep;
window.removeStep = removeStep;
window.updateStep = updateStep;
window.openNewCompany = openNewCompany;
window.createCompany = createCompany;
