/* =========================================================
   EVS MASTER — QUIZ ENGINE
   Question data built from MNC-301 Unit 1 (Environment &
   Ecosystem) and Unit 2 (Biodiversity & Conservation)
========================================================= */

const TEST1 = [
{q:"Which of the following best defines 'Environment'?", options:["Our surroundings formed by the interaction of living and non-living things","The study of interaction between organisms","A network of food chains","The variability among living organisms"]},
{q:"The two basic components of environment are:", options:["Biotic and Abiotic","Physical and Chemical","Natural and Artificial","Solid and Liquid"]},
{q:"How many segments does the environment consist of?", options:["4","2","3","5"]},
{q:"Which segment of environment comprises soil, minerals and rocks?", options:["Lithosphere","Atmosphere","Hydrosphere","Biosphere"]},
{q:"More than 70% of the Earth's surface is covered by:", options:["Water","Land","Ice","Forest"]},
{q:"Of the total water available on Earth, what percentage is fresh water?", options:["3%","30%","50%","97%"]},
{q:"The approximate percentage of Nitrogen in atmospheric air is:", options:["78.03%","20.99%","0.034%","0.95%"]},
{q:"The approximate percentage of Oxygen in atmospheric air is:", options:["20.99%","78.03%","0.034%","0.95%"]},
{q:"Which layer of the atmosphere is closest to Earth's surface, where cloud formation occurs?", options:["Troposphere","Stratosphere","Mesosphere","Thermosphere"]},
{q:"Ozone (O3) formation mainly takes place in which layer?", options:["Stratosphere","Troposphere","Mesosphere","Thermosphere"]},
{q:"In which atmospheric layer do meteors burn up?", options:["Mesosphere","Troposphere","Stratosphere","Thermosphere"]},
{q:"The altitude range of the Troposphere is:", options:["0 to 12 km","12 to 50 km","50 to 80 km","80 to 500 km"]},
{q:"If atmospheric temperature decreases with an increase in height, the lapse rate is called:", options:["Positive lapse rate","Negative lapse rate","Zero lapse rate","Neutral lapse rate"]},
{q:"Environmental Science is best represented as:", options:["Natural Science + Social Science + Humanities","Physics + Chemistry","Biology + Geography","Zoology + Botany"]},
{q:"The term 'Ecosystem' was proposed by:", options:["A.G. Tansley (1935)","Ernst Haeckel (1869)","E.O. Wilson","Charles Darwin"]},
{q:"The term 'Ecology' was given by:", options:["Ernst Haeckel (1869)","A.G. Tansley (1935)","Ramdeo Misra","Lindeman"]},
{q:"Who is regarded as the 'Father of Ecology in India'?", options:["Prof. Ramdeo Misra","E.O. Wilson","Norman Myers","A.G. Tansley"]},
{q:"Organisms that prepare their own food through photosynthesis are called:", options:["Autotrophs","Heterotrophs","Saprotrophs","Decomposers"]},
{q:"Animals that feed only on plants are called:", options:["Herbivores","Carnivores","Omnivores","Decomposers"]},
{q:"Animals that feed on both plants and animals are called:", options:["Omnivores","Herbivores","Carnivores","Autotrophs"]},
{q:"Decomposers are mainly composed of:", options:["Bacteria and Fungi","Green plants and algae","Insects and birds","Fish and reptiles"]},
{q:"The transfer of food energy from producers to consumers to decomposers is called:", options:["Food chain","Food web","Trophic level","Biogeochemical cycle"]},
{q:"A food chain that starts from producers and ends at carnivores is called:", options:["Grazing food chain","Detritus food chain","Energy chain","Nutrient chain"]},
{q:"A food chain that starts from dead organic matter is called:", options:["Detritus food chain","Grazing food chain","Trophic chain","Nutrient cycle"]},
{q:"A network formed by several interconnected food chains is called:", options:["Food web","Food chain","Ecological pyramid","Biosphere"]},
{q:"The concept of 'Trophic Level' was first given by:", options:["Lindeman (1942)","Tansley","Haeckel","Myers"]},
{q:"The 'Ten Percent Law' of energy transfer was given by:", options:["Lindemann (1942)","Tansley","Haeckel","Wilson"]},
{q:"According to the 10% energy law, the energy available at a trophic level is what fraction of the previous level?", options:["10%","100%","50%","25%"]},
{q:"The ultimate source of energy in an ecosystem is:", options:["Sun","Wind","Water","Soil"]},
{q:"The flow of energy in an ecosystem is:", options:["Unidirectional and non-cyclic","Bidirectional and cyclic","Random","Reversible"]},
{q:"The temperature range in the Troposphere is approximately:", options:["17°C to -55°C","-55°C to 0°C","0°C to -75°C","-75°C to 1200°C"]},
{q:"Which of the following correctly represents 'Biosphere'?", options:["Atmosphere + Hydrosphere + Lithosphere + Life","Atmosphere + Hydrosphere only","Only living organisms","Only the atmosphere"]},
{q:"A food chain can have a minimum of ___ and a maximum of ___ trophic levels.", options:["2 and 5","1 and 3","3 and 6","2 and 4"]},
{q:"In the food chain 'Grass → Deer → Lion', the Lion represents the:", options:["Secondary consumer","Producer","Primary consumer","Decomposer"]},
{q:"Which functional aspect of an ecosystem refers to the 'balance between living and non-living components'?", options:["Homeostasis","Productivity","Energy flow","Nutrient cycling"]},
{q:"Which component of atmospheric air is described as 'variable' (not fixed in percentage)?", options:["Water vapour and dust particles","Nitrogen","Oxygen","Inert gases"]},
{q:"The main activity associated with the Thermosphere is:", options:["Very high temperature phenomena","Cloud formation","Ozone formation","Meteors burning"]},
{q:"Herbivores are also known as:", options:["Primary consumers","Secondary consumers","Tertiary consumers","Decomposers"]},
{q:"Decomposers play a vital role in the ecosystem mainly because they:", options:["Maintain soil fertility by breaking down organic matter","Produce oxygen","Absorb sunlight directly","Increase carbon dioxide levels"]},
{q:"If all decomposers on Earth were destroyed, the most likely consequence would be:", options:["Blockage of nutrient/mineral cycling","Increase in soil fertility","More oxygen production","Faster plant growth"]}
];

const TEST2 = [
{q:"Which ecological pyramid is always upright and can never be inverted in a stable ecosystem?", options:["Pyramid of energy","Pyramid of number","Pyramid of biomass","Pyramid of population"]},
{q:"The circulation of nutrients between living and non-living components of environment is called:", options:["Biogeochemical cycle","Food web","Ecological pyramid","Trophic transfer"]},
{q:"The Nitrogen cycle is completed in how many major steps?", options:["5","3","4","6"]},
{q:"Which is the correct order of steps in the Nitrogen cycle?", options:["Fixation → Nitrification → Assimilation → Ammonification → Denitrification","Nitrification → Fixation → Denitrification → Ammonification","Denitrification → Fixation → Nitrification → Assimilation","Assimilation → Fixation → Nitrification → Ammonification"]},
{q:"The industrial process that converts atmospheric nitrogen into ammonia is called:", options:["Haber process","Ostwald process","Contact process","Solvay process"]},
{q:"In the Sulphur cycle, SO2 is released into the atmosphere mainly due to:", options:["Burning of fossil fuels","Photosynthesis","Respiration","Nitrogen fixation"]},
{q:"In the Carbon cycle, atmospheric CO2 is fixed by green plants through:", options:["Photosynthesis","Respiration","Decomposition","Fossilization"]},
{q:"Which of the following is an example of a man-made (artificial) ecosystem?", options:["Aquarium","Forest","Grassland","Desert"]},
{q:"A standing-water aquatic ecosystem (e.g., pond, lake) is called:", options:["Lentic ecosystem","Lotic ecosystem","Terrestrial ecosystem","Marine ecosystem"]},
{q:"A running-water aquatic ecosystem (e.g., river, stream) is called:", options:["Lotic ecosystem","Lentic ecosystem","Estuarine ecosystem","Static ecosystem"]},
{q:"In a pond ecosystem, the main producers are:", options:["Phytoplanktons and aquatic plants","Zooplanktons","Small fish","Bacteria"]},
{q:"In a desert ecosystem, the primary producers include:", options:["Shrubs and cactus","Grasses and herbs","Trees and shrubs","Algae"]},
{q:"The term 'Biodiversity' was coined by:", options:["Walter and Rosen (1985)","E.O. Wilson","Norman Myers","A.G. Tansley"]},
{q:"Who is regarded as the 'Father of Biodiversity'?", options:["E.O. Wilson","A.G. Tansley","Norman Myers","Charles Darwin"]},
{q:"Biodiversity was formally defined by which convention, held in 1992?", options:["Convention on Biological Diversity","Kyoto Protocol","Montreal Protocol","Ramsar Convention"]},
{q:"Biodiversity is classified into how many main types?", options:["3","2","4","5"]},
{q:"Variation of genes among individuals of the same species is called:", options:["Genetic diversity","Species diversity","Ecosystem diversity","Alpha diversity"]},
{q:"The variety of species found within a particular region is called:", options:["Species diversity","Genetic diversity","Ecosystem diversity","Beta diversity"]},
{q:"The variation among different kinds of ecosystems in a region is called:", options:["Ecosystem diversity","Genetic diversity","Species diversity","Gamma diversity"]},
{q:"Diversity of organisms sharing the same habitat/community is known as:", options:["Alpha diversity","Beta diversity","Gamma diversity","Genetic diversity"]},
{q:"Diversity that compares species composition between different communities/habitats is called:", options:["Beta diversity","Alpha diversity","Gamma diversity","Genetic diversity"]},
{q:"Gamma diversity is equal to:", options:["Alpha diversity + Beta diversity","Alpha diversity × Beta diversity","Alpha diversity − Beta diversity","Alpha diversity ÷ Beta diversity"]},
{q:"The estimated total number of species on Earth is:", options:["10-30 million","1-5 million","50-100 million","100-200 million"]},
{q:"India, with only 2.4% of the world's land area, holds approximately what percentage of global biodiversity?", options:["8.22%","2.4%","5%","15%"]},
{q:"India has been divided into how many bio-geographic zones?", options:["10","6","8","12"]},
{q:"Which bio-geographic zone of India is described as a 'snow desert' region including Ladakh?", options:["Trans-Himalayas","Himalayas","Deccan Peninsula","Gangetic Plain"]},
{q:"The Thar Desert bio-geographic zone is located mainly in the state of:", options:["Rajasthan","Gujarat","Haryana","Punjab"]},
{q:"The Western Ghats bio-geographic zone is also known locally as:", options:["Sahyadri hills","Aravalli hills","Vindhya hills","Nilgiri hills"]},
{q:"Important fauna of the Gangetic Plain bio-geographic zone includes:", options:["Turtles, crocodiles and rhinoceros","Yak and wild sheep","Camel and desert cat","Orchids and ginger"]},
{q:"Which of the following is NOT one of India's 10 bio-geographic zones?", options:["Amazon Basin","Deccan Peninsula","Gangetic Plain","Western Ghats"]},
{q:"The scope of Environmental Science includes all of the following EXCEPT:", options:["Stock market analysis","Natural resource conservation","Pollution control","Global environmental issues"]},
{q:"Which consumer occupies the top level of a food chain?", options:["Tertiary/Top consumer","Primary consumer","Secondary consumer","Producer"]},
{q:"The 'productivity' function of an ecosystem refers to:", options:["Production of biomass","Balance of the ecosystem","Circulation of nutrients","Flow of energy only"]},
{q:"India is home to approximately how many plant species?", options:["49,000","20,000","35,000","60,000"]},
{q:"India is home to approximately how many animal species?", options:["89,000","40,000","60,000","1,00,000"]},
{q:"In the Nitrogen cycle, 'Denitrification' refers to:", options:["Conversion of nitrates back into atmospheric nitrogen","Conversion of nitrogen gas into ammonia","Absorption of nitrates by plants","Bacterial decomposition of proteins"]},
{q:"In the Sulphur cycle, sulphate ions present in the soil are absorbed by:", options:["Plants","Animals","Bacteria","Fungi"]},
{q:"A forest ecosystem's 'protective function' includes:", options:["Protection against soil erosion, drought and floods","Providing fruits and timber","Regulating atmospheric temperature","Providing fuel wood"]},
{q:"A forest ecosystem's 'regulative function' includes:", options:["Regulating the water and nutrient cycle","Providing honey and medicines","Providing rubber","Providing fodder"]},
{q:"Which value of biodiversity refers to direct use such as food, timber and medicines?", options:["Consumptive and productive value","Non-consumptive value","Aesthetic value","Ethical value"]}
];

const TEST3 = [
{q:"The total number of biodiversity hotspots identified worldwide is:", options:["36","25","30","40"]},
{q:"India has how many recognized biodiversity hotspots?", options:["4","2","3","5"]},
{q:"The concept of 'Biodiversity Hotspot' was introduced by:", options:["Norman Myers (1988)","E.O. Wilson","Walter and Rosen","A.G. Tansley"]},
{q:"Which of the following is NOT a biodiversity hotspot of India?", options:["Congo Basin","Himalayas","Western Ghats","Sundaland"]},
{q:"The Sundaland biodiversity hotspot in India mainly covers:", options:["Nicobar Islands","Andaman Islands","Lakshadweep Islands","Sunderbans (West Bengal)"]},
{q:"Approximately what percentage of amphibian species are endemic to the Western Ghats?", options:["77%","25%","50%","62%"]},
{q:"Species that are found only in a particular geographic area and nowhere else are called:", options:["Endemic species","Rare species","Threatened species","Indeterminate species"]},
{q:"Which of the following is an example of an exotic (alien) species introduced in India?", options:["Water hyacinth (Jalkumbhi)","Neem","Sandalwood","Banyan tree"]},
{q:"The introduction of exotic species is a threat to biodiversity mainly because it:", options:["Causes disappearance of native species","Increases native species","Improves soil fertility","Has no effect on ecosystems"]},
{q:"Which of the following is an example of a NATURAL threat to biodiversity?", options:["Volcanic eruption","Poaching","Deforestation","Mining"]},
{q:"The process of protecting biodiversity within its natural habitat is called:", options:["In-situ conservation","Ex-situ conservation","Cryopreservation","Domestication"]},
{q:"The process of protecting biodiversity by removing organisms from unsafe habitats to safe places under human care is called:", options:["Ex-situ conservation","In-situ conservation","Afforestation","Biomagnification"]},
{q:"Which of the following is a method of EX-SITU conservation?", options:["Zoo/Botanical Garden","National Park","Wildlife Sanctuary","Biosphere Reserve"]},
{q:"Which of the following is a method of IN-SITU conservation?", options:["National Park","Seed bank","Zoo","Gene bank"]},
{q:"India currently has approximately how many National Parks?", options:["107","50","75","150"]},
{q:"India currently has approximately how many Wildlife Sanctuaries?", options:["573","250","400","700"]},
{q:"The number of Biosphere Reserves currently existing in India is:", options:["18","10","14","25"]},
{q:"The first National Park of India, established in 1935 in Uttarakhand, was originally named:", options:["Hailey National Park","Corbett National Park","Kanha National Park","Gir National Park"]},
{q:"Kaziranga National Park (Assam) is famous for protecting:", options:["Rhinoceros","Bengal tiger","Asiatic lion","Elephant"]},
{q:"Gir National Park (Gujarat) is known for protecting:", options:["Asiatic lion","Bengal tiger","Rhinoceros","Snow leopard"]},
{q:"The concept of Biosphere Reserves was evolved in 1975 under which UNESCO programme?", options:["Man and Biosphere Programme (MAB)","World Heritage Programme","Ramsar Programme","Earthwatch Programme"]},
{q:"The first Biosphere Reserve established in India (1986) was:", options:["Nilgiri","Nanda Devi","Sunderbans","Manas"]},
{q:"In a Biosphere Reserve, the zone where NO human activity is allowed is called:", options:["Core zone","Buffer zone","Manipulation zone","Restoration zone"]},
{q:"According to IUCN, species that are no longer known to exist in the wild are called:", options:["Extinct species","Endangered species","Vulnerable species","Rare species"]},
{q:"Species facing a very high risk of extinction in the near future are classified as:", options:["Endangered species","Rare species","Vulnerable species","Indeterminate species"]},
{q:"Species likely to move into the endangered category if unfavourable conditions continue are called:", options:["Vulnerable species","Extinct species","Rare species","Threatened species"]},
{q:"Endangered, Vulnerable and Rare species are collectively known as:", options:["Threatened species","Extinct species","Indeterminate species","Endemic species"]},
{q:"'Project Tiger' was launched by the Government of India in the year:", options:["1973","1972","1980","1986"]},
{q:"The Wildlife Protection Act was passed in the year:", options:["1972","1973","1980","1986"]},
{q:"The Environmental Protection Act was passed in the year:", options:["1986","1972","1980","2002"]},
{q:"The Forest Conservation Act was passed in the year:", options:["1980","1972","1986","2002"]},
{q:"The Biological Diversity Act was passed in the year:", options:["2002","1986","1999","1973"]},
{q:"WWF stands for:", options:["World Wide Fund for Nature","World Wildlife Federation","World Water Foundation","World Wildlife Forum"]},
{q:"CITES stands for:", options:["Convention on International Trade in Endangered Species","Central Institute for Tropical Ecosystem Studies","Council for International Trade and Environment","Committee on International Threatened Ecosystems"]},
{q:"'Sacred groves' help conserve biodiversity because they are:", options:["Patches of forest protected due to religious beliefs","Commercial forests","Government farms","Used for mining"]},
{q:"The anti-malarial drug 'Quinine' is obtained from which plant?", options:["Cinchona","Neem","Opium","Papaya"]},
{q:"The painkiller 'Morphine' is derived from:", options:["Opium","Cinchona","Neem","Sarpgandha"]},
{q:"Musk deer are hunted/poached mainly for their:", options:["Musk","Skin","Tusk","Horn"]},
{q:"Rhinos are poached mainly for their:", options:["Horn","Tusk","Musk","Skin"]},
{q:"Cryopreservation of genetic material (sperms, eggs, embryos) is done at a temperature of:", options:["-196°C","0°C","-96°C","-296°C"]}
];

const ALL_TESTS = [TEST1, TEST2, TEST3];

/* ===================== STATE ===================== */
const state = { questions:[], index:0, score:0, answers:[], locked:false };

/* ===================== DOM ===================== */
const screens = {
  welcome: document.getElementById('screen-welcome'),
  select: document.getElementById('screen-select'),
  quiz: document.getElementById('screen-quiz'),
  result: document.getElementById('screen-result'),
};
const qTag = document.getElementById('qTag');
const qText = document.getElementById('qText');
const optionsWrap = document.getElementById('optionsWrap');
const feedbackBox = document.getElementById('feedbackBox');
const progressFill = document.getElementById('progressFill');
const qCounter = document.getElementById('qCounter');
const liveScore = document.getElementById('liveScore');
const btnNext = document.getElementById('btnNext');

function showScreen(name){
  Object.values(screens).forEach(s=>s.classList.remove('active'));
  screens[name].classList.add('active');
  window.scrollTo({top:0, behavior:'smooth'});
}

/* ===================== HELPERS ===================== */
function shuffle(arr){
  const a = [...arr];
  for(let i=a.length-1;i>0;i--){
    const j = Math.floor(Math.random()*(i+1));
    [a[i],a[j]] = [a[j],a[i]];
  }
  return a;
}

function playTone(freq, duration=0.12){
  try{
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'sine';
    osc.frequency.value = freq;
    gain.gain.setValueAtTime(0.08, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);
    osc.connect(gain); gain.connect(ctx.destination);
    osc.start(); osc.stop(ctx.currentTime + duration);
  }catch(e){}
}

function spawnConfetti(count=120){
  const layer = document.getElementById('confetti-layer');
  const colors = ['#a78bfa','#ec4899','#22d3ee','#f59e0b','#22c55e'];
  for(let i=0;i<count;i++){
    const el = document.createElement('div');
    el.className = 'confetti-piece';
    const size = 6 + Math.random()*6;
    el.style.width = size+'px';
    el.style.height = (size*0.4)+'px';
    el.style.left = Math.random()*100+'vw';
    el.style.background = colors[Math.floor(Math.random()*colors.length)];
    el.style.animationDuration = (2.5 + Math.random()*2)+'s';
    el.style.opacity = 0.9;
    layer.appendChild(el);
    setTimeout(()=>el.remove(), 5000);
  }
}

/* ===================== 3D TILT ===================== */
function attachTilt(){
  if(!window.matchMedia('(pointer: fine)').matches) return;
  document.querySelectorAll('.tilt').forEach(card=>{
    card.style.transformStyle = 'preserve-3d';
    card.addEventListener('mousemove', e=>{
      const r = card.getBoundingClientRect();
      const x = (e.clientX - r.left)/r.width - 0.5;
      const y = (e.clientY - r.top)/r.height - 0.5;
      card.style.transform = `perspective(800px) rotateY(${x*10}deg) rotateX(${-y*10}deg) translateY(-4px)`;
    });
    card.addEventListener('mouseleave', ()=>{
      card.style.transform = 'perspective(800px) rotateY(0) rotateX(0) translateY(0)';
    });
  });
}

/* ===================== QUIZ LOGIC ===================== */
function startTest(testIdx){
  const pool = ALL_TESTS[testIdx];
  state.questions = shuffle(pool).map(item=>{
    const correct = item.options[0];
    return { q:item.q, correct, shuffled: shuffle(item.options) };
  });
  state.index = 0;
  state.score = 0;
  state.answers = [];
  showScreen('quiz');
  renderQuestion();
}

function renderQuestion(){
  state.locked = false;
  btnNext.disabled = true;
  feedbackBox.className = 'feedback';
  feedbackBox.textContent = '';

  const total = state.questions.length;
  const cur = state.questions[state.index];

  qCounter.textContent = `Question ${state.index+1}/${total}`;
  liveScore.textContent = `Score: ${state.score}`;
  progressFill.style.width = `${(state.index/total)*100}%`;
  qTag.textContent = `Question ${state.index+1}`;
  qText.textContent = cur.q;

  optionsWrap.innerHTML = '';
  const letters = ['A','B','C','D'];
  cur.shuffled.forEach((opt, i)=>{
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.innerHTML = `<span class="opt-letter">${letters[i]}</span><span>${opt}</span>`;
    btn.addEventListener('click', ()=> selectOption(opt, btn, cur.correct));
    optionsWrap.appendChild(btn);
  });
}

function selectOption(selected, btnEl, correct){
  if(state.locked) return;
  state.locked = true;

  const allBtns = optionsWrap.querySelectorAll('.option-btn');
  const isCorrect = selected === correct;

  allBtns.forEach(b=>{
    b.disabled = true;
    const label = b.querySelector('span:last-child').textContent;
    if(label === correct) b.classList.add(isCorrect ? 'correct' : 'reveal');
  });

  if(isCorrect){
    btnEl.classList.add('correct');
    state.score++;
    playTone(880);
    feedbackBox.classList.add('show','correct');
    feedbackBox.innerHTML = `✅ <b>Correct!</b> Great job.`;
  } else {
    btnEl.classList.add('wrong');
    playTone(180);
    feedbackBox.classList.add('show','wrong');
    feedbackBox.innerHTML = `❌ <b>Incorrect.</b> Correct answer: <b>${correct}</b>`;
  }

  state.answers.push({
    q: state.questions[state.index].q,
    chosen: selected,
    correct,
    isCorrect
  });

  liveScore.textContent = `Score: ${state.score}`;
  btnNext.disabled = false;
}

function nextQuestion(){
  state.index++;
  if(state.index < state.questions.length){
    renderQuestion();
  } else {
    showResult();
  }
}

function showResult(){
  const total = state.questions.length;
  const pct = Math.round((state.score/total)*100);

  showScreen('result');
  document.getElementById('scoreNum').textContent = `${state.score}/${total}`;
  document.getElementById('scorePct').textContent = `${pct}%`;
  document.getElementById('statCorrect').textContent = state.score;
  document.getElementById('statWrong').textContent = total - state.score;

  const ring = document.getElementById('scoreRing');
  const deg = (pct/100)*360;
  const color = pct>=87 ? '#22c55e' : pct>=60 ? '#f59e0b' : '#ef4444';
  ring.style.background = `conic-gradient(${color} ${deg}deg, rgba(255,255,255,0.08) ${deg}deg)`;

  const title = document.getElementById('resultTitle');
  const msg = document.getElementById('resultMsg');
  if(pct>=87){
    title.textContent = "Outstanding! You're exam-ready 🎯";
    msg.textContent = "This is 35+/40 territory. Do one more test to lock it in, then get some sleep!";
    spawnConfetti(150);
  } else if(pct>=70){
    title.textContent = "Great job — almost there! 💪";
    msg.textContent = "Review your mistakes below, then retake this test to push past 35/40.";
  } else if(pct>=50){
    title.textContent = "Good start — keep revising 📘";
    msg.textContent = "Focus on the topics you got wrong. Re-read those sections and try again.";
  } else {
    title.textContent = "Needs more practice — you've got time! ⏳";
    msg.textContent = "Go through the review below carefully, revise the notes, then retry.";
  }

  renderReview();
}

function renderReview(){
  const list = document.getElementById('reviewList');
  list.innerHTML = '';
  list.style.display = 'none';
  state.answers.forEach((a,i)=>{
    const div = document.createElement('div');
    div.className = `review-item glass ${a.isCorrect ? 'correct':'wrong'}`;
    div.innerHTML = `
      <div class="review-q">${i+1}. ${a.q}</div>
      <div class="review-line">Your answer: <b style="color:${a.isCorrect?'#86efac':'#fca5a5'}">${a.chosen}</b></div>
      ${!a.isCorrect ? `<div class="review-line">Correct answer: <b style="color:#86efac">${a.correct}</b></div>` : ''}
    `;
    list.appendChild(div);
  });
}

/* ===================== EVENTS ===================== */
document.getElementById('btnGetStarted').addEventListener('click', ()=> showScreen('select'));
document.getElementById('btnBackHome').addEventListener('click', ()=> showScreen('welcome'));
document.getElementById('btnNext').addEventListener('click', nextQuestion);
document.getElementById('btnQuit').addEventListener('click', ()=>{
  if(confirm('Quit this test? Your progress will be lost.')) showScreen('select');
});
document.getElementById('btnRetry').addEventListener('click', ()=> showScreen('select'));
document.getElementById('btnHome').addEventListener('click', ()=> showScreen('welcome'));
document.getElementById('btnReview').addEventListener('click', ()=>{
  const list = document.getElementById('reviewList');
  list.style.display = list.style.display === 'none' ? 'flex' : 'none';
  list.style.flexDirection = 'column';
});

document.querySelectorAll('.test-card').forEach(card=>{
  card.querySelector('.btn-start').addEventListener('click', (e)=>{
    e.stopPropagation();
    startTest(parseInt(card.dataset.test));
  });
});

attachTilt();
