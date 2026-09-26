/* blynai.eu — real copy from the company pages. Lithuanian is the primary language. */
window.BLYN = {
  /* Live site nav — labels and in-page anchors as shipped on blynai.eu. */
  nav: [{label:'Apie',href:'#vardas'},{label:'Tyrimai',href:'#tyrimai'},{label:'Nariai',href:'#nariai'},{label:'Kontaktai',href:'#rekvizitai'}],
  /* Real destinations. Do not swap these for placeholders. */
  urls: {journal:'https://blynai.meetluko.eu', github:'https://github.com/bykovas/trading-bot', luko:'https://meetluko.eu', byko:'https://byko.bykovas.lt', mail:'mailto:info@blynai.eu'},
  cta: {journal:'Gyvas žurnalas', github:'GitHub · atvirasis kodas', programme:'Tyrimų programa'},
  navLab: [{label:'Veikla',href:'#vardas'},{label:'Tyrimai',href:'#tyrimai'},{label:'Atvirasis kodas',href:'#tyrimai'},{label:'Nariai',href:'#nariai'}],
  navPoster: [{label:'Bendrija',href:'#vardas'},{label:'Laboratorija',href:'#tyrimai'},{label:'Kodas',href:'#tyrimai'},{label:'Kontaktai',href:'#rekvizitai'}],
  eyebrow: 'Mažoji bendrija · įsteigta Lietuvoje',
  leadDoc: 'MB „BlynAI“ yra tyrimų bendrija: kuriame algoritminės prekybos programinę įrangą, leidžiame jai veikti su savo pinigais ir skelbiame viską, ką ji nusprendė — įskaitant tai, kur suklydo. Programinė įranga platinama atvirojo kodo principu, kad rezultatą galėtų pakartoti kas nors kitas.',
  leadLab: 'Rašome programinę įrangą, kuri pati sprendžia, kada pirkti ir kada parduoti — ir tikriname ją tikrais pinigais, savo. Kiekvienas sprendimas įrašomas ir paskelbiamas. Kodas atviras.',
  leadPoster: 'Mažoji bendrija, kurios visas turinys — algoritmai, jų sprendimai ir atviras kodas. Prekiaujame savo lėšomis, skelbiame kiekvieną orderį, neteikiame finansinių paslaugų.',
  status: ['Botai veikia be pertraukos.','Žurnalas atviras.','Klientų lėšų — nėra ir nebus.'],
  stats: [{label:'Teisinė forma',value:'Mažoji bendrija'},{label:'Nariai',value:'2 · po 50 %'},{label:'Kodo licencija',value:'Atvirasis kodas'}],
  syllable: {
    left:{word:'BLYN',expansion:'Blockchain Ledger Yield Numerics',note:'Kas matuojama: grandinės duomenys, orderių žurnalas, pelno kreivė ir skaičiai, kuriuos iš jų galima gauti.'},
    right:{word:'AI',expansion:'Algorithmic Inference',note:'Kas iš to daroma: išvada ir orderis, priimtas taisyklių, o ne nuojautos. Be žmogaus rankos ir be jo nuotaikos.'},
    note:'Lietuviškai tas pats žodis skaitomas kaip „blynai“. Bendrija sąmoningai laikosi abiejų skaitymų: pirmasis paaiškina, ką darome, antrasis — kad nesame rimtesni, nei esame.'
  },
  directions: [
    {title:'Paaiškinamas sprendimas',body:'Kiekvienas orderis įrašomas su signalais, rizikos ribomis ir atmestomis alternatyvomis. Jei sprendimo negalima perskaityti po savaitės — jis netinka tyrimui.'},
    {title:'Simuliacija prieš tikrovę',body:'Tas pats algoritmas vienu metu leidžiamas istoriniuose duomenyse ir gyvoje rinkoje. Matuojame ne pelną, o atotrūkį tarp dviejų kreivių.'},
    {title:'Rizikos mechanika',body:'Pozicijų dydis, atvėsimo periodai, avarinis stabdys. Tikriname juos realaus kritimo metu, nes lentelėje jie visada atrodo veikiantys.'},
    {title:'Atkuriamumas',body:'Kodas, parametrai ir duomenų momentinės kopijos skelbiami atvirai, kad rezultatą galėtų pakartoti trečiasis asmuo be mūsų dalyvavimo.'}
  ],
  questions: [
    {index:'01',title:'Ar sprendimą galima paaiškinti?',body:'Kiekvienam pirkimui ir pardavimui fiksuojame įėjimo signalus, rizikos ribas ir atmestas alternatyvas. Sprendimas be paaiškinimo mums yra klaida.'},
    {index:'02',title:'Kur baigiasi backtesto tiesa?',body:'Lyginame istorinę simuliaciją su tuo pačiu algoritmu, veikiančiu realiu laiku ir realiomis lėšomis. Atotrūkis tarp šių dviejų kreivių — pagrindinis mūsų matavimas.'},
    {index:'03',title:'Kiek rizikos atlaiko automatas?',body:'Stop-loss, atvėsimo periodai, pozicijų dydis, avarinis stabdys. Tikriname, kaip šie mechanizmai laikosi realaus rinkos kritimo metu, o ne lentelėje.'}
  ],
  activities: [
    {label:'Kūrimas',title:'Prekybos programinė įranga',body:'Signalai, rizikos valdymas, biržų API integracijos, žurnalas. Viskas rašoma iš naujo, ne konfigūruojama.'},
    {label:'Tyrimas',title:'Eksperimentai su savo lėšomis',body:'Hipotezė, ribos, laikotarpis, rezultatas. Nepavykę eksperimentai skelbiami taip pat, kaip pavykę.'},
    {label:'Skelbimas',title:'Atvirasis kodas',body:'Programinė įranga platinama atvirai, kad rezultatą galėtų pakartoti kas nors, kas mumis netiki.'},
    {label:'Riba',title:'Ko nedarome',body:'Nevaldome trečiųjų asmenų lėšų, neteikiame rekomendacijų, nepriimame investicijų. Niekada.'}
  ],
  registry: [
    {term:'Pavadinimas',value:'MB „BlynAI“'},
    {term:'Forma',value:'Mažoji bendrija'},
    {term:'J. a. kodas',value:'registruojama'},
    {term:'Buveinė',value:'Lietuvos Respublika'},
    {term:'Direktorius',value:'Lukas Peciukonis'},
    {term:'Paštas',value:'info@blynai.eu',href:'mailto:info@blynai.eu'}
  ],
  members: [
    {name:'Lukas Peciukonis',role:'MB vadovas · Λ',src:'https://meetluko.eu/assets/founder-lukas.png',objectPosition:'50% 12%',accent:'gold'},
    {name:'Denisas Bykovas',role:'MB narys · Δ',src:'https://meetluko.eu/assets/founder-denisas.png',accent:'violet'}
  ],
  instances: {eyebrow:'Du nariai, dvi valiutos',title:'L&D: dvi nepriklausomos boto instancijos',body:'Tas pats kodas, atskiros sąskaitos, atskiri žurnalai. Jei rezultatai skiriasi — skirtumas irgi yra duomenys.'},
  legal: 'MB „BlynAI“ nėra finansų įstaiga, investicijų valdytojas ar finansinių paslaugų teikėja. Bendrija neteikia investavimo rekomendacijų, nepriima ir nesaugo trečiųjų asmenų pinigų ar kriptoturto ir nevaldo trečiųjų asmenų biržos sąskaitų. Bendrija prekiauja tik savo lėšomis; paskelbti rezultatai yra tyrimo duomenys, o ne pasiūlymas ar prognozė.'
};
