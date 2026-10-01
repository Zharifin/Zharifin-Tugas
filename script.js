/* ===================== DATA DASAR ===================== */
const MAPEL_LIST = [
  'Bahasa Indonesia','Matematika','Bahasa Inggris','Bahasa Arab','PPKn',
  'Akidah Akhlak','Fikih','Qur\'an Hadits','SKI','Seni Budaya','Prakarya',
  'PJOK','Informatika','BK','IPA','IPS'
];
 
/* Tag kompetensi disesuaikan dengan karakteristik tiap mata pelajaran. */
const MAPEL_TAGS = {
  'Bahasa Indonesia': ['gagasan-utama','analisis-fakta','inferensi','kesimpulan'],
  'Matematika': ['pemahaman-soal','analisis-data','penalaran-logis','kesimpulan'],
  'Bahasa Inggris': ['main-idea','fact-opinion','vocabulary-in-context','kesimpulan'],
  'Bahasa Arab': ['pemahaman-mufradat','pemahaman-teks','tarjamah','kesimpulan'],
  'PPKn': ['identifikasi-nilai','analisis-fakta','sikap-kritis','kesimpulan'],
  'Akidah Akhlak': ['pemahaman-dalil','penerapan-akhlak','analisis-kasus','kesimpulan'],
  'Fikih': ['identifikasi-hukum','penerapan-hukum','analisis-dalil','kesimpulan'],
  'Qur\'an Hadits': ['pemahaman-ayat','keterkaitan-hadits','tafsir-makna','kesimpulan'],
  'SKI': ['kronologi-peristiwa','analisis-fakta','sebab-akibat','kesimpulan'],
  'Seni Budaya': ['apresiasi-karya','analisis-unsur','interpretasi-makna','kesimpulan'],
  'Prakarya': ['pemahaman-prosedur','identifikasi-alat-bahan','analisis-langkah','kesimpulan'],
  'PJOK': ['pemahaman-gerak','analisis-aturan','penerapan-k3','kesimpulan'],
  'Informatika': ['pemahaman-algoritma','analisis-logika','identifikasi-masalah','kesimpulan'],
  'BK': ['pemahaman-diri','identifikasi-masalah','refleksi-diri','kesimpulan'],
  'IPA': ['gagasan-utama','analisis-fakta','inferensi','kesimpulan'],
  'IPS': ['gagasan-utama','analisis-fakta','sebab-akibat','kesimpulan']
};
 
const TAG_LABEL = {
  'analisis-fakta':'Analisis Fakta & Opini',
  'gagasan-utama':'Gagasan Utama',
  'kesimpulan':'Kesimpulan',
  'inferensi':'Inferensi',
  'pemahaman-soal':'Pemahaman Soal',
  'analisis-data':'Analisis Data',
  'penalaran-logis':'Penalaran Logis',
  'main-idea':'Main Idea',
  'fact-opinion':'Fact vs Opinion',
  'vocabulary-in-context':'Vocabulary in Context',
  'pemahaman-mufradat':'Pemahaman Mufradat',
  'pemahaman-teks':'Pemahaman Teks',
  'tarjamah':'Tarjamah (Terjemahan)',
  'identifikasi-nilai':'Identifikasi Nilai',
  'sikap-kritis':'Sikap Kritis',
  'pemahaman-dalil':'Pemahaman Dalil',
  'penerapan-akhlak':'Penerapan Akhlak',
  'analisis-kasus':'Analisis Kasus',
  'identifikasi-hukum':'Identifikasi Hukum',
  'penerapan-hukum':'Penerapan Hukum',
  'analisis-dalil':'Analisis Dalil',
  'pemahaman-ayat':'Pemahaman Ayat',
  'keterkaitan-hadits':'Keterkaitan Hadits',
  'tafsir-makna':'Tafsir Makna',
  'kronologi-peristiwa':'Kronologi Peristiwa',
  'sebab-akibat':'Sebab-Akibat',
  'apresiasi-karya':'Apresiasi Karya',
  'analisis-unsur':'Analisis Unsur',
  'interpretasi-makna':'Interpretasi Makna',
  'pemahaman-prosedur':'Pemahaman Prosedur',
  'identifikasi-alat-bahan':'Identifikasi Alat & Bahan',
  'analisis-langkah':'Analisis Langkah Kerja',
  'pemahaman-gerak':'Pemahaman Gerak',
  'analisis-aturan':'Analisis Aturan',
  'penerapan-k3':'Penerapan K3',
  'pemahaman-algoritma':'Pemahaman Algoritma',
  'analisis-logika':'Analisis Logika',
  'identifikasi-masalah':'Identifikasi Masalah',
  'pemahaman-diri':'Pemahaman Diri',
  'refleksi-diri':'Refleksi Diri'
};
 
/* Warna tag ditentukan otomatis (hash nama tag) supaya tetap konsisten
   walau jumlah tag kompetensi terus bertambah seiring mapel baru. */
const TAG_PALETTE = [
  {fg:'#A6501F', bg:'#F3DFCA'},
  {fg:'#3D5A80', bg:'#DFE7F0'},
  {fg:'#2E6B5E', bg:'#DCEAE5'},
  {fg:'#95661C', bg:'#F1E2C4'},
  {fg:'#6B4C9A', bg:'#E6DFF2'},
  {fg:'#1F6E8C', bg:'#D9EAF0'}
];
function tagColor(tag){
  let hash = 0;
  for(let i=0;i<tag.length;i++){ hash = (hash*31 + tag.charCodeAt(i)) >>> 0; }
  return TAG_PALETTE[hash % TAG_PALETTE.length];
}
function tagChipHtml(tag, extraStyle){
  const c = tagColor(tag);
  const label = TAG_LABEL[tag] || tag;
  return `<span class="tag-chip" style="color:${c.fg};background:${c.bg};${extraStyle||''}">${label}</span>`;
}
 
const DB = {
  students:[
    {id:'2025001', password:'siswa123', name:'Naila Putri Ramadhani', kelas:'IX-A'},
    {id:'2025002', password:'siswa123', name:'Rafi Aditya Pratama', kelas:'IX-B'}
  ],
  teachers:[
    {username:'guru01', password:'guru123', name:'Sri Wahyuni, S.Pd', mapel:'Bahasa Indonesia'}
  ],
  studentHistory:{
    '2025001':[],
    '2025002':[]
  },
  classRoster:{
    'IX-A':[
      {id:'2025001', nama:'Naila Putri Ramadhani', rata:0, terakhir:'Belum pernah'},
      {id:'2025003', nama:'Bagas Wirawan', rata:0, terakhir:'Belum pernah'},
      {id:'2025004', nama:'Citra Ayu Lestari', rata:0, terakhir:'Belum pernah'},
      {id:'2025005', nama:'Dimas Fadillah', rata:0, terakhir:'Belum pernah'}
    ],
    'IX-B':[
      {id:'2025002', nama:'Rafi Aditya Pratama', rata:0, terakhir:'Belum pernah'},
      {id:'2025006', nama:'Elang Saputra', rata:0, terakhir:'Belum pernah'},
      {id:'2025007', nama:'Farah Nabila', rata:0, terakhir:'Belum pernah'},
      {id:'2025008', nama:'Salsabila Putri', rata:0, terakhir:'Belum pernah'},
      {id:'2025009', nama:'Yusuf Ramadhan', rata:0, terakhir:'Belum pernah'}
    ]
  },
  examHistory:[],
  publishedExams:[]
};
 
let session = { role:null, user:null };
function hasCompletedExam(studentId, examId){
  const history = DB.studentHistory[studentId] || [];
  return history.some(h=>h.examId===examId);
}
 
/* ===================== UTIL ===================== */
function escapeHtml(s){ return s.replace(/[&<>"']/g, c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])); }
function initials(name){ return name.split(' ').filter(Boolean).slice(0,2).map(w=>w[0]).join('').toUpperCase(); }
function tierOf(pct){
  if(pct >= 70) return {cls:'good', label:'Baik'};
  if(pct >= 40) return {cls:'mid', label:'Cukup'};
  return {cls:'low', label:'Perlu perhatian'};
}
 
/* ===================== LOGIN ===================== */
function switchLoginRole(role){
  document.getElementById('roleOptSiswa').classList.toggle('active', role==='siswa');
  document.getElementById('roleOptGuru').classList.toggle('active', role==='guru');
  document.getElementById('formSiswa').classList.toggle('active', role==='siswa');
  document.getElementById('formGuru').classList.toggle('active', role==='guru');
  document.getElementById('loginError').style.display = 'none';
  const hint = document.getElementById('credHint');
  hint.innerHTML = role==='siswa'
    ? 'Kredensial demo siswa:<br><b>ID:</b> 2025001 &nbsp; <b>Sandi:</b> siswa123<br><b>ID:</b> 2025002 &nbsp; <b>Sandi:</b> siswa123 (belum ada riwayat)'
    : 'Kredensial demo guru:<br><b>Akun:</b> guru01 &nbsp; <b>Sandi:</b> guru123';
}
switchLoginRole('siswa');
 
function handleLoginSiswa(){
  const id = document.getElementById('siswaIdInput').value.trim();
  const pass = document.getElementById('siswaPassInput').value;
  const found = DB.students.find(s=>s.id===id && s.password===pass);
  if(!found){ document.getElementById('loginError').style.display='block'; return; }
  document.getElementById('loginError').style.display='none';
  session = { role:'siswa', user:found };
  enterApp();
}
function handleLoginGuru(){
  const u = document.getElementById('guruUserInput').value.trim();
  const pass = document.getElementById('guruPassInput').value;
  const found = DB.teachers.find(t=>t.username===u && t.password===pass);
  if(!found){ document.getElementById('loginError').style.display='block'; return; }
  document.getElementById('loginError').style.display='none';
  session = { role:'guru', user:found };
  enterApp();
}
document.getElementById('siswaPassInput').addEventListener('keydown', e=>{ if(e.key==='Enter') handleLoginSiswa(); });
document.getElementById('siswaIdInput').addEventListener('keydown', e=>{ if(e.key==='Enter') handleLoginSiswa(); });
document.getElementById('guruPassInput').addEventListener('keydown', e=>{ if(e.key==='Enter') handleLoginGuru(); });
document.getElementById('guruUserInput').addEventListener('keydown', e=>{ if(e.key==='Enter') handleLoginGuru(); });
function logout(){
  session = { role:null, user:null };
  document.getElementById('appScreen').classList.add('hidden');
  document.getElementById('loginScreen').classList.remove('hidden');
  document.getElementById('siswaIdInput').value=''; document.getElementById('siswaPassInput').value='';
  document.getElementById('guruUserInput').value=''; document.getElementById('guruPassInput').value='';
}
 
function enterApp(){
  document.getElementById('loginScreen').classList.add('hidden');
  document.getElementById('appScreen').classList.remove('hidden');
  document.getElementById('headerAvatar').textContent = initials(session.user.name);
  document.getElementById('headerName').textContent = session.user.name;
  if(session.role==='siswa'){
    document.getElementById('headerBrandRole').textContent = 'Portal Siswa';
    document.getElementById('headerRole').textContent = 'Siswa · Kelas ' + session.user.kelas;
    document.getElementById('lobbySiswa').classList.remove('hidden');
    document.getElementById('lobbyGuru').classList.add('hidden');
    setSiswaTab('ujian');
  } else {
    document.getElementById('headerBrandRole').textContent = 'Portal Guru';
    document.getElementById('headerRole').textContent = 'Guru · ' + session.user.mapel;
    document.getElementById('lobbyGuru').classList.remove('hidden');
    document.getElementById('lobbySiswa').classList.add('hidden');
    setGuruTab('buatsoal');
  }
}
 
/* ===================== SISWA LOBBY ===================== */
let siswaTab = 'ujian';
function setSiswaTab(tab){
  siswaTab = tab;
  document.querySelectorAll('#lobbySiswa .lobby-tab').forEach(t=>t.classList.toggle('active', t.dataset.tab===tab));
  const el = document.getElementById('siswaTabContent');
  if(tab==='ujian') renderSiswaUjian(el);
  if(tab==='kemampuan') renderSiswaKemampuan(el);
  if(tab==='riwayat') renderSiswaRiwayat(el);
  if(tab==='profil') renderSiswaProfil(el);
}
 
function renderSiswaUjian(el){
  const s = session.user;
  const avail = DB.publishedExams.filter(x=>x.kelas===s.kelas);
  let listHtml = avail.map(ex=>{
    const done = hasCompletedExam(s.id, ex.id);
    const doneAttempt = done ? (DB.studentHistory[s.id]||[]).find(h=>h.examId===ex.id) : null;
    return `<div class="exam-avail-card">
      <div>
        <div class="exam-avail-title">${escapeHtml(ex.title)}</div>
        <div class="exam-avail-meta">${escapeHtml(ex.mapel||'')} &middot; Diterbitkan ${ex.publishedDate} &middot; Kelas ${ex.kelas} &middot; ${ex.questions.length} soal</div>
      </div>
      ${done ? `<span class="status-badge status-good">Sudah dikerjakan &middot; skor ${doneAttempt.overallPct}</span>` : `<button class="btn btn-primary" onclick="startExam('${ex.id}')">Mulai ujian</button>`}
    </div>`;
  }).join('');
  if(avail.length===0) listHtml = '<div class="empty-hint">Belum ada ujian yang diterbitkan untuk kelasmu.</div>';
 
  el.innerHTML = `
    <h2 class="section-title">Ujian tersedia</h2>
    <p class="section-desc">Daftar asesmen yang telah diterbitkan guru untuk kelas ${s.kelas}.</p>
    ${listHtml}
    <div id="examRunningWrap"></div>
    <div id="examResultWrap"></div>
  `;
}
 
/* ---- Halaman Ujian ---- */
let examSession = null;
function startExam(examId){
  const ex = DB.publishedExams.find(x=>x.id===examId);
  if(hasCompletedExam(session.user.id, ex.id)){ alert('Ujian ini sudah pernah kamu kerjakan dan tidak bisa dikerjakan ulang.'); return; }
  examSession = { examId:ex.id, title:ex.title, mapel:ex.mapel, body:ex.body, kelas:ex.kelas, questions:ex.questions, currentQ:0, answers:{} };
  const wrap = document.getElementById('examRunningWrap');
  wrap.innerHTML = `
    <div class="exam-shell" style="margin-top:16px;">
      <div class="exam-left">
        <span class="locked-badge">Teks terkunci</span>
        <h3>${escapeHtml(examSession.title)}</h3>
        <div class="body-text">${escapeHtml(examSession.body)}</div>
      </div>
      <div class="exam-right">
        <div class="qnav" id="qNav"></div>
        <div class="q-tag-row" id="qTagRow"></div>
        <div class="q-body" id="qBody"></div>
        <div id="qAnswerArea"></div>
        <div class="exam-nav">
          <button class="btn" id="prevBtn" onclick="examPrev()">&larr; Sebelumnya</button>
          <button class="btn btn-primary" id="nextBtn" onclick="examNext()">Berikutnya &rarr;</button>
        </div>
      </div>
    </div>`;
  renderQNav(); renderQuestion();
}
function renderQNav(){
  const nav = document.getElementById('qNav'); if(!nav) return;
  nav.innerHTML = '';
  examSession.questions.forEach((q, idx)=>{
    const dot = document.createElement('div');
    dot.className = 'qdot' + (idx===examSession.currentQ ? ' current':'') + (examSession.answers[q.id] ? ' answered':'');
    dot.textContent = idx+1;
    dot.addEventListener('click', ()=>{ examSession.currentQ = idx; renderQNav(); renderQuestion(); });
    nav.appendChild(dot);
  });
}
function renderQuestion(){
  const q = examSession.questions[examSession.currentQ];
  document.getElementById('qTagRow').innerHTML = tagChipHtml(q.tag);
  document.getElementById('qBody').textContent = `${examSession.currentQ+1}. ${q.text}`;
  const area = document.getElementById('qAnswerArea');
  area.innerHTML = '';
  document.getElementById('nextBtn').textContent = examSession.currentQ === examSession.questions.length-1 ? 'Selesai & kumpulkan' : 'Berikutnya \u2192';
 
  if(q.type==='mc'){
    const wrap = document.createElement('div'); wrap.className='mc-options';
    const saved = examSession.answers[q.id];
    q.options.forEach((opt,i)=>{
      const label = document.createElement('label');
      label.className = 'mc-opt' + (saved===i?' selected':'');
      label.innerHTML = `<input type="radio" name="mc-${q.id}" ${saved===i?'checked':''}><span>${escapeHtml(opt)}</span>`;
      label.addEventListener('click', ()=>{ examSession.answers[q.id]=i; renderQuestion(); renderQNav(); });
      wrap.appendChild(label);
    });
    area.appendChild(wrap);
  } else {
    const saved = examSession.answers[q.id] || {};
    const wrap = document.createElement('div'); wrap.className='dd-wrap';
    const bank = document.createElement('div'); bank.className='dd-bank'; bank.dataset.zone='bank';
    const zones = document.createElement('div'); zones.className='dd-zones';
    const zFakta = document.createElement('div'); zFakta.className='dd-zone fakta'; zFakta.dataset.zone='fakta'; zFakta.innerHTML='<span class="dd-zone-label">Fakta</span>';
    const zOpini = document.createElement('div'); zOpini.className='dd-zone opini'; zOpini.dataset.zone='opini'; zOpini.innerHTML='<span class="dd-zone-label">Opini</span>';
 
    q.items.forEach((item,i)=>{
      const chip = document.createElement('div');
      chip.className='dd-chip'; chip.draggable=true; chip.textContent=item.text; chip.dataset.itemIndex=i;
      chip.addEventListener('dragstart', e=>{ e.dataTransfer.setData('text/plain', i); });
      const z = saved[i];
      if(z==='fakta') zFakta.appendChild(chip); else if(z==='opini') zOpini.appendChild(chip); else bank.appendChild(chip);
    });
 
    [bank,zFakta,zOpini].forEach(zoneEl=>{
      zoneEl.addEventListener('dragover', e=>{ e.preventDefault(); zoneEl.classList.add('dragover'); });
      zoneEl.addEventListener('dragleave', ()=>{ zoneEl.classList.remove('dragover'); });
      zoneEl.addEventListener('drop', e=>{
        e.preventDefault(); zoneEl.classList.remove('dragover');
        const idx = e.dataTransfer.getData('text/plain');
        const chip = wrap.querySelector(`.dd-chip[data-item-index="${idx}"]`);
        zoneEl.appendChild(chip);
        if(!examSession.answers[q.id]) examSession.answers[q.id] = {};
        if(zoneEl.dataset.zone==='bank') delete examSession.answers[q.id][idx];
        else examSession.answers[q.id][idx] = zoneEl.dataset.zone;
        renderQNav();
      });
    });
    zones.appendChild(zFakta); zones.appendChild(zOpini);
    wrap.appendChild(bank); wrap.appendChild(zones); area.appendChild(wrap);
    const hint = document.createElement('div'); hint.className='lock-note';
    hint.textContent = 'Seret setiap pernyataan dari kotak abu-abu ke kotak Fakta atau Opini.';
    area.appendChild(hint);
  }
}
function examPrev(){ if(examSession.currentQ>0){ examSession.currentQ--; renderQNav(); renderQuestion(); } }
function examNext(){
  const isLast = examSession.currentQ === examSession.questions.length-1;
  if(!isLast){ examSession.currentQ++; renderQNav(); renderQuestion(); }
  else submitExam();
}
function submitExam(){
  const unanswered = examSession.questions.filter(q=>{
    if(q.type==='mc') return examSession.answers[q.id]===undefined;
    const a = examSession.answers[q.id] || {};
    return Object.keys(a).length < q.items.length;
  });
  if(unanswered.length>0){ alert('Masih ada ' + unanswered.length + ' soal yang belum lengkap dijawab.'); return; }
  if(hasCompletedExam(session.user.id, examSession.examId)){ alert('Ujian ini sudah pernah kamu kerjakan.'); return; }
  document.getElementById('procOverlay').classList.add('active');
  setTimeout(()=>{
    const results = computeResults(examSession.questions, examSession.answers);
    document.getElementById('procOverlay').classList.remove('active');
    finishExam(results);
  }, 1100);
}
function computeResults(questions, answers){
  const items = [];
  questions.forEach(q=>{
    if(q.type==='mc'){ items.push({tag:q.tag, correct: answers[q.id]===q.correctIndex}); }
    else{
      const a = answers[q.id] || {};
      q.items.forEach((it,i)=>{ items.push({tag:q.tag, correct: a[i]===it.correct}); });
    }
  });
  const byTag = {};
  items.forEach(it=>{ if(!byTag[it.tag]) byTag[it.tag]={correct:0,total:0}; byTag[it.tag].total++; if(it.correct) byTag[it.tag].correct++; });
  const tagResults = Object.keys(byTag).map(tag=>({tag, pct:Math.round(100*byTag[tag].correct/byTag[tag].total), correct:byTag[tag].correct, total:byTag[tag].total})).sort((a,b)=>b.pct-a.pct);
  const totalCorrect = items.filter(i=>i.correct).length;
  const overallPct = Math.round(100*totalCorrect/items.length);
  return { items, tagResults, overallPct, totalCorrect, totalItems: items.length };
}
function finishExam(results){
  const attempt = { examId:examSession.examId, examTitle:examSession.title, mapel:examSession.mapel, date:'Hari ini', overallPct:results.overallPct, totalCorrect:results.totalCorrect, totalItems:results.totalItems, tagResults:results.tagResults };
  if(!DB.studentHistory[session.user.id]) DB.studentHistory[session.user.id] = [];
  DB.studentHistory[session.user.id].unshift(attempt);
 
  let histEntry = DB.examHistory.find(h=>h.id===examSession.examId);
  if(!histEntry){
    histEntry = { id:examSession.examId, title:examSession.title, mapel:examSession.mapel, kelas:examSession.kelas, date:'Hari ini', jumlahSiswa:0, avgScore:0, tagResults:[], participants:[] };
    DB.examHistory.unshift(histEntry);
  }
  const oldCount = histEntry.jumlahSiswa;
  histEntry.avgScore = Math.round((histEntry.avgScore*oldCount + results.overallPct)/(oldCount+1));
  histEntry.jumlahSiswa = oldCount + 1;
  const mergedTags = {};
  histEntry.tagResults.forEach(t=>{ mergedTags[t.tag] = {pctSum:t.pct*oldCount, count:oldCount}; });
  results.tagResults.forEach(t=>{
    if(!mergedTags[t.tag]) mergedTags[t.tag] = {pctSum:0, count:0};
    mergedTags[t.tag].pctSum += t.pct; mergedTags[t.tag].count += 1;
  });
  histEntry.tagResults = Object.keys(mergedTags).map(tag=>({tag, pct:Math.round(mergedTags[tag].pctSum/mergedTags[tag].count)}));
  if(!histEntry.participants) histEntry.participants = [];
  histEntry.participants = histEntry.participants.filter(p=>p.studentId!==session.user.id);
  histEntry.participants.unshift({ studentId:session.user.id, name:session.user.name, overallPct:results.overallPct, date:'Hari ini' });
 
  document.getElementById('examRunningWrap').innerHTML = '';
  const resWrap = document.getElementById('examResultWrap');
  resWrap.innerHTML = `<h2 class="section-title" style="margin-top:22px;">Hasil ujian: ${escapeHtml(examSession.title)}</h2>` + buildDashboardHtml(results, {contextNote:'Hasil ini otomatis tersimpan ke Riwayat Nilai dan Kemampuan Saya.'});
  examSession = null;
}
 
function renderSiswaKemampuan(el){
  const history = DB.studentHistory[session.user.id] || [];
  if(history.length===0){
    el.innerHTML = `<h2 class="section-title">Kemampuan saya</h2><p class="section-desc">Peta kekuatan dan kelemahan berdasarkan seluruh ujian yang pernah dikerjakan, dipisah per mata pelajaran.</p><div class="card"><div class="empty-hint">Belum ada data. Kerjakan ujian terlebih dahulu di tab Ujian.</div></div>`;
    return;
  }
  const byMapel = {};
  history.forEach(h=>{
    const mapel = h.mapel || 'Lainnya';
    if(!byMapel[mapel]) byMapel[mapel] = [];
    byMapel[mapel].push(h);
  });
 
  const sectionsHtml = Object.keys(byMapel).map(mapel=>{
    const list = byMapel[mapel];
    const merged = {};
    list.forEach(h=>h.tagResults.forEach(t=>{ if(!merged[t.tag]) merged[t.tag]={sum:0,count:0}; merged[t.tag].sum+=t.pct; merged[t.tag].count+=1; }));
    const tagResults = Object.keys(merged).map(tag=>({tag, pct:Math.round(merged[tag].sum/merged[tag].count)})).sort((a,b)=>b.pct-a.pct);
    const overallPct = Math.round(list.reduce((s,h)=>s+h.overallPct,0)/list.length);
    const strongest = tagResults[0], weakest = tagResults[tagResults.length-1];
    let insight = tagResults.length>=2
      ? `Di mata pelajaran ini kamu sudah cukup kuat di <b>${TAG_LABEL[strongest.tag]}</b> (${strongest.pct}%), namun masih perlu latihan tambahan di <b>${TAG_LABEL[weakest.tag]}</b> (${weakest.pct}%).`
      : `Tingkat keberhasilan pada <b>${TAG_LABEL[strongest.tag]}</b> tercatat ${strongest.pct}%.`;
    return `
      <div class="card" style="margin-bottom:16px;">
        <h3>${escapeHtml(mapel)} <span style="font-weight:400;color:var(--ink-soft);font-size:12px;">(${list.length} ujian)</span></h3>
        <div class="dash-top">
          <div class="score-card"><div class="num">${overallPct}</div><div class="lbl">RATA-RATA MAPEL INI</div></div>
          <div class="insight-card"><span class="icon">i</span><p>${insight}</p></div>
        </div>
        ${tagResults.map(t=>{ const tier=tierOf(t.pct); return `<div class="bar-row"><div class="bar-label">${TAG_LABEL[t.tag]}</div><div class="bar-track"><div class="bar-fill" style="width:${t.pct}%;background:var(--${tier.cls});"></div></div><div class="bar-pct">${t.pct}%</div></div>`; }).join('')}
      </div>`;
  }).join('');
 
  el.innerHTML = `
    <h2 class="section-title">Kemampuan saya</h2>
    <p class="section-desc">Setiap mata pelajaran ditampilkan terpisah karena kompetensi literasi bisa berbeda-beda tergantung konteks bacaannya.</p>
    ${sectionsHtml}`;
}
 
function renderSiswaRiwayat(el){
  const history = DB.studentHistory[session.user.id] || [];
  if(history.length===0){
    el.innerHTML = `<h2 class="section-title">Riwayat nilai</h2><p class="section-desc">Daftar seluruh ujian yang pernah kamu kerjakan.</p><div class="card"><div class="empty-hint">Belum ada riwayat ujian.</div></div>`;
    return;
  }
  el.innerHTML = `
    <h2 class="section-title">Riwayat nilai</h2>
    <p class="section-desc">Klik salah satu ujian untuk melihat rincian skor per kompetensi.</p>
    ${history.map((h,idx)=>`
      <div class="history-item" id="hist-${idx}" onclick="toggleHistory(${idx})">
        <div class="history-item-top">
          <div>
            <div class="history-item-title">${escapeHtml(h.examTitle)}</div>
            <div class="history-item-meta">${h.date} &middot; ${h.totalCorrect}/${h.totalItems} benar</div>
          </div>
          <div class="history-score">${h.overallPct}</div>
        </div>
        <div class="history-expand">
          ${h.tagResults.map(t=>{ const tier=tierOf(t.pct); return `<div class="bar-row"><div class="bar-label">${TAG_LABEL[t.tag]}</div><div class="bar-track"><div class="bar-fill" style="width:${t.pct}%;background:var(--${tier.cls});"></div></div><div class="bar-pct">${t.pct}%</div></div>`; }).join('')}
        </div>
      </div>`).join('')}
  `;
}
function toggleHistory(idx){ document.getElementById('hist-'+idx).classList.toggle('open'); }
 
function renderSiswaProfil(el){
  const s = session.user;
  const history = DB.studentHistory[s.id] || [];
  el.innerHTML = `
    <h2 class="section-title">Profil</h2>
    <div class="card">
      <div class="profile-head">
        <div class="profile-avatar">${initials(s.name)}</div>
        <div><p class="profile-name">${escapeHtml(s.name)}</p><p class="profile-sub">Siswa &middot; Kelas ${s.kelas}</p></div>
      </div>
      <div class="profile-rows">
        <div class="profile-row"><div class="k">ID siswa</div><div class="v">${s.id}</div></div>
        <div class="profile-row"><div class="k">Kelas</div><div class="v">${s.kelas}</div></div>
        <div class="profile-row"><div class="k">Ujian dikerjakan</div><div class="v">${history.length}</div></div>
        <div class="profile-row"><div class="k">Rata-rata skor</div><div class="v">${history.length? Math.round(history.reduce((a,h)=>a+h.overallPct,0)/history.length) : '-'}</div></div>
      </div>
    </div>
  `;
}
 
/* ===================== GURU LOBBY ===================== */
let guruTab = 'buatsoal';
function setGuruTab(tab){
  guruTab = tab;
  document.querySelectorAll('#lobbyGuru .lobby-tab').forEach(t=>t.classList.toggle('active', t.dataset.tab===tab));
  const el = document.getElementById('guruTabContent');
  if(tab==='buatsoal') renderGuruBuatSoal(el);
  if(tab==='siswa') renderGuruSiswa(el);
  if(tab==='riwayat') renderGuruRiwayat(el);
  if(tab==='profil') renderGuruProfil(el);
}
 
let builder = { title: '', body: '', questions: [], kelasTarget:'IX-A', mapel:'Bahasa Indonesia' };
let newQType = 'mc';
 
function renderGuruBuatSoal(el){
  el.innerHTML = `
    <h2 class="section-title">Susun modul & bank soal</h2>
    <p class="section-desc">Masukkan teks bacaan, buat soal, beri tag kompetensi pada tiap soal, lalu terbitkan ke kelas tujuan.</p>
    <div class="grid-guru">
      <div class="card">
        <h3>Teks bacaan</h3>
        <label>Judul modul</label>
        <input type="text" id="passageTitle" placeholder="Contoh: Manfaat Membaca Buku Cetak">
        <label>Mata pelajaran</label>
        <select id="mapelTarget">
          ${MAPEL_LIST.map(m=>`<option value="${m}">${m}</option>`).join('')}
        </select>
        <label>Isi teks</label>
        <textarea id="passageBody" rows="12" placeholder="Tempel atau tulis teks bacaan lengkap di sini..."></textarea>
        <label>Kelas tujuan</label>
        <select id="kelasTarget">
          <option value="IX-A">IX-A</option>
          <option value="IX-B">IX-B</option>
        </select>
        <div class="btn-row"><button class="btn btn-primary" id="publishBtn">Terbitkan ujian ke kelas</button></div>
      </div>
      <div class="card">
        <h3>Bank soal <span id="qCount" style="font-weight:400;color:var(--ink-soft);font-size:12.5px;"></span></h3>
        <div class="q-list" id="qList"></div>
        <h3 style="margin-top:6px;">Tambah soal baru</h3>
        <div class="type-toggle">
          <div class="type-opt active" data-type="mc">Pilihan ganda</div>
          <div class="type-opt" data-type="dragdrop">Seret-lepas Fakta / Opini</div>
        </div>
        <label>Tag kompetensi <span style="font-weight:400;color:var(--ink-soft);">(mengikuti mata pelajaran di atas)</span></label>
        <select id="newTag"></select>
        <label>Pertanyaan / instruksi</label>
        <textarea id="newQText" rows="2"></textarea>
        <div id="mcFields">
          <label>Pilihan jawaban (tandai yang benar)</label>
          <div class="opt-row"><input type="radio" name="mcCorrect" value="0" checked><input type="text" placeholder="Opsi A"></div>
          <div class="opt-row"><input type="radio" name="mcCorrect" value="1"><input type="text" placeholder="Opsi B"></div>
          <div class="opt-row"><input type="radio" name="mcCorrect" value="2"><input type="text" placeholder="Opsi C"></div>
          <div class="opt-row"><input type="radio" name="mcCorrect" value="3"><input type="text" placeholder="Opsi D"></div>
        </div>
        <div id="ddFields" style="display:none;">
          <label>Pernyataan untuk diklasifikasi</label>
          <div id="ddStmtList"></div>
          <button class="btn btn-ghost" id="addStmtBtn" type="button" style="margin-top:4px;">+ Tambah pernyataan</button>
        </div>
        <div class="btn-row"><button class="btn btn-primary" id="addQBtn">Tambahkan soal</button></div>
      </div>
    </div>
  `;
 
  document.getElementById('passageTitle').value = builder.title;
  document.getElementById('passageBody').value = builder.body;
  document.getElementById('kelasTarget').value = builder.kelasTarget;
  document.getElementById('mapelTarget').value = builder.mapel;
  document.getElementById('passageTitle').addEventListener('input', e=>builder.title=e.target.value);
  document.getElementById('passageBody').addEventListener('input', e=>builder.body=e.target.value);
  document.getElementById('kelasTarget').addEventListener('change', e=>builder.kelasTarget=e.target.value);
  document.getElementById('mapelTarget').addEventListener('change', e=>{ builder.mapel=e.target.value; populateTagOptions(); });
  populateTagOptions();
 
  document.querySelectorAll('#guruTabContent .type-opt').forEach(t=>t.addEventListener('click', ()=>{
    document.querySelectorAll('#guruTabContent .type-opt').forEach(x=>x.classList.remove('active'));
    t.classList.add('active'); newQType = t.dataset.type;
    document.getElementById('mcFields').style.display = newQType==='mc' ? 'block':'none';
    document.getElementById('ddFields').style.display = newQType==='dragdrop' ? 'block':'none';
  }));
 
  const ddStmtList = document.getElementById('ddStmtList');
  function addStmtRow(){
    const row = document.createElement('div'); row.className='stmt-row';
    row.innerHTML = `<input type="text" placeholder="Tulis pernyataan..."><select><option value="fakta">Fakta</option><option value="opini">Opini</option></select><button class="btn btn-ghost" type="button" onclick="this.parentElement.remove()">\u2715</button>`;
    ddStmtList.appendChild(row);
  }
  addStmtRow(); addStmtRow();
  document.getElementById('addStmtBtn').addEventListener('click', addStmtRow);
 
  document.getElementById('addQBtn').addEventListener('click', ()=>{
    const tag = document.getElementById('newTag').value;
    const text = document.getElementById('newQText').value.trim();
    if(!text){ alert('Isi pertanyaan/instruksi terlebih dahulu.'); return; }
    if(newQType==='mc'){
      const optInputs = document.querySelectorAll('#mcFields .opt-row input[type=text]');
      const options = Array.from(optInputs).map(i=>i.value.trim());
      if(options.some(o=>!o)){ alert('Isi keempat opsi jawaban.'); return; }
      const correctIndex = parseInt(document.querySelector('#mcFields input[name=mcCorrect]:checked').value,10);
      builder.questions.push({id:'q'+Date.now(), type:'mc', tag, text, options, correctIndex});
    } else {
      const rows = ddStmtList.querySelectorAll('.stmt-row');
      const items = Array.from(rows).map(r=>({text:r.querySelector('input[type=text]').value.trim(), correct:r.querySelector('select').value}));
      if(items.length<2 || items.some(i=>!i.text)){ alert('Isi minimal 2 pernyataan.'); return; }
      builder.questions.push({id:'q'+Date.now(), type:'dragdrop', tag, text, items});
    }
    renderGuruBuatSoal(el);
  });
 
  document.getElementById('publishBtn').addEventListener('click', ()=>{
    if(!builder.title.trim()){ alert('Isi judul modul terlebih dahulu.'); return; }
    if(!builder.body.trim()){ alert('Isi teks bacaan terlebih dahulu.'); return; }
    if(builder.questions.length===0){ alert('Tambahkan minimal satu soal sebelum menerbitkan.'); return; }
    const id = 'ex-live-' + Date.now();
    DB.publishedExams.push({ id, title:builder.title, mapel:builder.mapel, body:builder.body, kelas:builder.kelasTarget, publishedDate:'Hari ini', questions: JSON.parse(JSON.stringify(builder.questions)) });
    alert('Ujian "' + builder.title + '" diterbitkan ke kelas ' + builder.kelasTarget + '. Siswa di kelas tersebut kini bisa mengerjakannya di tab Ujian.');
  });
 
  renderQList();
}
function renderQList(){
  const qList = document.getElementById('qList'); if(!qList) return;
  document.getElementById('qCount').textContent = `(${builder.questions.length} soal)`;
  if(builder.questions.length===0){ qList.innerHTML='<div class="empty-hint">Belum ada soal. Tambahkan di bawah.</div>'; return; }
  qList.innerHTML = '';
  builder.questions.forEach((q,idx)=>{
    const div = document.createElement('div'); div.className='q-item';
    div.innerHTML = `<div class="q-item-main"><div class="q-item-meta">${tagChipHtml(q.tag)}<span class="type-badge">${q.type==='mc'?'Pilihan ganda':'Seret-lepas'}</span></div><div class="q-item-text">${idx+1}. ${escapeHtml(q.text)}</div></div><button class="btn btn-ghost" onclick="removeQuestion('${q.id}')" aria-label="Hapus soal">\u2715</button>`;
    qList.appendChild(div);
  });
}
function removeQuestion(id){ builder.questions = builder.questions.filter(q=>q.id!==id); renderQList(); document.getElementById('qCount').textContent = `(${builder.questions.length} soal)`; }
function populateTagOptions(){
  const sel = document.getElementById('newTag'); if(!sel) return;
  const tags = MAPEL_TAGS[builder.mapel] || ['kesimpulan'];
  sel.innerHTML = tags.map(t=>`<option value="${t}">${TAG_LABEL[t] || t}</option>`).join('');
}
 
function renderGuruSiswa(el){
  const kelasList = Object.keys(DB.classRoster);
  el.innerHTML = `
    <h2 class="section-title">Database siswa</h2>
    <p class="section-desc">Daftar siswa per kelas. Klik "Lihat tugas" untuk melihat ujian mana yang sudah dan belum dikerjakan siswa tersebut.</p>
    <div class="kelas-pills">${kelasList.map((k,i)=>`<div class="kelas-pill${i===0?' active':''}" data-kelas="${k}" onclick="selectRosterKelas('${k}')">${k}</div>`).join('')}</div>
    <div class="card"><table class="simple-table" id="rosterTable"></table></div>
    <div id="tugasPanel"></div>
  `;
  selectRosterKelas(kelasList[0]);
}
function getAssignmentsForKelas(kelas){
  const map = {};
  DB.publishedExams.filter(e=>e.kelas===kelas).forEach(e=>{ map[e.id] = {id:e.id, title:e.title, mapel:e.mapel, date:e.publishedDate}; });
  DB.examHistory.filter(h=>h.kelas===kelas).forEach(h=>{ if(!map[h.id]) map[h.id] = {id:h.id, title:h.title, mapel:h.mapel, date:h.date}; });
  return Object.values(map);
}
function selectRosterKelas(kelas){
  document.querySelectorAll('#guruTabContent .kelas-pill').forEach(p=>p.classList.toggle('active', p.dataset.kelas===kelas));
  document.getElementById('tugasPanel').innerHTML = '';
  const roster = DB.classRoster[kelas] || [];
  const totalTugas = getAssignmentsForKelas(kelas).length;
  const rows = roster.map(s=>{
    const tier = tierOf(s.rata);
    const doneCount = (DB.studentHistory[s.id]||[]).filter(h=>getAssignmentsForKelas(kelas).some(a=>a.id===h.examId)).length;
    return `<tr>
      <td>${s.id}</td><td>${escapeHtml(s.nama)}</td><td>${s.rata||'-'}</td><td>${s.terakhir}</td>
      <td><span class="status-badge status-${tier.cls}">${tier.label}</span></td>
      <td>${doneCount}/${totalTugas} <button class="btn btn-ghost" onclick="showStudentTugas('${s.id}','${escapeHtml(s.nama).replace(/'/g,"\\'")}','${kelas}')">Lihat tugas</button></td>
    </tr>`;
  }).join('');
  document.getElementById('rosterTable').innerHTML = `
    <tr><th>ID</th><th>Nama</th><th>Rata-rata</th><th>Ujian terakhir</th><th>Status</th><th>Tugas</th></tr>
    ${rows || '<tr><td colspan="6" class="empty-hint">Belum ada siswa terdaftar di kelas ini.</td></tr>'}
  `;
}
function showStudentTugas(studentId, nama, kelas){
  const assignments = getAssignmentsForKelas(kelas);
  const history = DB.studentHistory[studentId] || [];
  const rows = assignments.map(a=>{
    const done = history.find(h=>h.examId===a.id);
    return `<div style="display:flex;justify-content:space-between;align-items:center;gap:10px;padding:9px 0;border-bottom:1px dashed var(--border);flex-wrap:wrap;">
      <div>
        <div style="font-size:13px;font-weight:600;">${escapeHtml(a.title)}</div>
        <div style="font-size:11.5px;color:var(--ink-soft);">${escapeHtml(a.mapel||'')} &middot; diterbitkan ${a.date}</div>
      </div>
      ${done ? `<span class="status-badge status-good">Sudah &middot; skor ${done.overallPct}</span>` : '<span class="status-badge status-low">Belum dikerjakan</span>'}
    </div>`;
  }).join('');
  document.getElementById('tugasPanel').innerHTML = `
    <div class="card" style="margin-top:14px;">
      <h3>Tugas ${escapeHtml(nama)}</h3>
      ${rows || '<div class="empty-hint">Belum ada tugas yang diterbitkan ke kelas ini.</div>'}
    </div>`;
}
 
let guruRiwayatList = [];
function getAllExamRecordsForRiwayat(){
  const map = {};
  DB.examHistory.forEach(h=>{ map[h.id] = h; });
  DB.publishedExams.forEach(e=>{
    if(!map[e.id]){
      map[e.id] = { id:e.id, title:e.title, kelas:e.kelas, mapel:e.mapel, date:e.publishedDate, jumlahSiswa:0, avgScore:0, tagResults:[], participants:[] };
    }
  });
  return Object.values(map);
}
function renderGuruRiwayat(el){
  guruRiwayatList = getAllExamRecordsForRiwayat();
  el.innerHTML = `
    <h2 class="section-title">Riwayat ujian</h2>
    <p class="section-desc">Ujian yang pernah diterbitkan ke setiap kelas, termasuk yang belum ada siswa mengerjakannya. Klik untuk melihat rincian.</p>
    ${guruRiwayatList.length===0 ? '<div class="card"><div class="empty-hint">Belum ada ujian yang diterbitkan sama sekali.</div></div>' : guruRiwayatList.map((h,idx)=>`
      <div class="history-item" id="ghist-${idx}" onclick="toggleGuruHistory(${idx})">
        <div class="history-item-top">
          <div>
            <div class="history-item-title">${escapeHtml(h.title)}</div>
            <div class="history-item-meta">${escapeHtml(h.mapel||'')} &middot; Kelas ${h.kelas} &middot; ${h.date} &middot; ${h.jumlahSiswa} siswa mengerjakan</div>
          </div>
          <div class="history-score">${h.jumlahSiswa? h.avgScore : '-'}</div>
        </div>
        <div class="history-expand" id="ghist-expand-${idx}"></div>
      </div>`).join('')}
  `;
}
function toggleGuruHistory(idx){
  const item = document.getElementById('ghist-'+idx);
  item.classList.toggle('open');
  if(item.classList.contains('open')){
    const h = guruRiwayatList[idx];
    const results = { overallPct:h.avgScore, totalCorrect:null, totalItems:null, tagResults:h.tagResults };
    document.getElementById('ghist-expand-'+idx).innerHTML = h.jumlahSiswa
      ? buildDashboardHtml(results, {contextNote:'Data agregat seluruh siswa kelas ' + h.kelas + ' yang mengerjakan ujian ini.', hideOverallCount:true}) + buildParticipantsHtml(h.participants, h.kelas)
      : buildParticipantsHtml([], h.kelas);
  }
}
function buildParticipantsHtml(participants, kelas){
  const roster = DB.classRoster[kelas] || [];
  const doneIds = (participants||[]).map(p=>p.studentId);
  const notDone = roster.filter(s=>!doneIds.includes(s.id));
  const sorted = participants ? [...participants].sort((a,b)=>b.overallPct-a.overallPct) : [];
  const doneRows = sorted.map(p=>`<tr><td>${escapeHtml(p.name)}</td><td>${p.studentId}</td><td>${p.date}</td><td style="text-align:right;font-family:'IBM Plex Mono',monospace;font-weight:600;">${p.overallPct}</td></tr>`).join('');
  const notDoneChips = notDone.map(s=>`<span class="status-badge status-low" style="margin:2px 4px 2px 0;">${escapeHtml(s.nama)}</span>`).join('');
  return `
    <div class="card" style="margin-top:14px;">
      <h3>Sudah mengerjakan (${sorted.length})</h3>
      ${sorted.length ? `<table class="simple-table"><tr><th>Nama</th><th>ID</th><th>Tanggal</th><th style="text-align:right;">Skor</th></tr>${doneRows}</table>` : '<div class="empty-hint">Belum ada siswa yang mengerjakan.</div>'}
      ${notDone.length ? `<h3 style="margin-top:16px;">Belum mengerjakan (${notDone.length})</h3><div>${notDoneChips}</div>` : ''}
    </div>`;
}
 
function renderGuruProfil(el){
  const g = session.user;
  el.innerHTML = `
    <h2 class="section-title">Profil</h2>
    <div class="card">
      <div class="profile-head">
        <div class="profile-avatar">${initials(g.name)}</div>
        <div><p class="profile-name">${escapeHtml(g.name)}</p><p class="profile-sub">Guru &middot; ${escapeHtml(g.mapel)}</p></div>
      </div>
      <div class="profile-rows">
        <div class="profile-row"><div class="k">Akun</div><div class="v">${g.username}</div></div>
        <div class="profile-row"><div class="k">Mata pelajaran</div><div class="v">${escapeHtml(g.mapel)}</div></div>
        <div class="profile-row"><div class="k">Ujian diterbitkan</div><div class="v">${DB.publishedExams.length}</div></div>
        <div class="profile-row"><div class="k">Kelas diampu</div><div class="v">${Object.keys(DB.classRoster).join(', ')}</div></div>
      </div>
    </div>
  `;
}
 
/* ===================== SHARED: DASHBOARD BUILDER ===================== */
function buildDashboardHtml(results, opts){
  opts = opts || {};
  const strongest = results.tagResults[0], weakest = results.tagResults[results.tagResults.length-1];
  let insight;
  if(results.tagResults.length>=2){
    insight = `Secara umum hasil ini sudah menguasai <b>${TAG_LABEL[strongest.tag]}</b> (tingkat keberhasilan ${strongest.pct}%), namun masih kesulitan pada <b>${TAG_LABEL[weakest.tag]}</b> (tingkat keberhasilan ${weakest.pct}%).`;
  } else {
    insight = `Tingkat keberhasilan pada <b>${TAG_LABEL[strongest.tag]}</b> tercatat ${strongest.pct}%.`;
  }
  const scoreLabel = opts.hideOverallCount || results.totalItems==null ? 'RATA-RATA SKOR' : `SKOR TOTAL \u00B7 ${results.totalCorrect}/${results.totalItems} BENAR`;
  const bars = results.tagResults.map(t=>{
    const tier = tierOf(t.pct);
    return `<div class="bar-row"><div class="bar-label">${TAG_LABEL[t.tag]}</div><div class="bar-track"><div class="bar-fill" style="width:${t.pct}%;background:var(--${tier.cls});"></div></div><div class="bar-pct">${t.pct}%</div></div>`;
  }).join('');
  return `
    <div class="dash-top">
      <div class="score-card"><div class="num">${results.overallPct}</div><div class="lbl">${scoreLabel}</div></div>
      <div class="insight-card"><span class="icon">i</span><p>${insight}</p></div>
    </div>
    <div class="card"><h3>Tingkat keberhasilan per kompetensi</h3>${bars}</div>
    ${opts.contextNote ? `<div class="demo-note">${opts.contextNote}</div>` : ''}
  `;
}