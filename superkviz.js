let cisloOtazky = 0
let odpovedi = document.querySelector('.odpovedi');
let kviz = document.querySelector('.kviz');
let poleMoznosti = [];

let poleKviz = [
  {
    otazka: 'Jaké je největší jezero na světě?', foto: 'obrazky/jezero.jpg',
    poleMoznosti: ['Velké medvědí jezero', 'Kaspické moře', 'VIktoriino jezero'],
    spravnaOdpoved: 1
  },
  {
    otazka: 'Jaká budova nepatří mezi scény Národního divadla?', foto: 'obrazky/Národní divadlo.jpg',
    poleMoznosti: ['Stavovské divadlo', 'Státní opera Praha', 'Rudolfinum'],
    spravnaOdpoved: 2
  },
  {
    otazka: 'V jakém roce byl založen Klub českých turistů?', foto: 'obrazky/klub českých turistů.jpg',
    poleMoznosti: ['1878', '1888', '1877'],
    spravnaOdpoved: 1
  },
]

//cisloSpravneOdpovediPrvniOtazky = poleKviz[0].spravnaOdpoved
//poleKviz[0].poleMoznosti[cisloSpravneOdpovediPrvniOtazky]

function pokracuj(event) {

  let moznosti = event.target;
  let odpoved = moznosti.dataset.odpoved;

  poleKviz.forEach(element => {
    element.skutecnaOdpoved;
  });

  poleKviz[cisloOtazky].skutecnaOdpoved = parseInt(odpoved);

  if (cisloOtazky < poleKviz.length - 1) {
    kviz.innerHTML = ''
    cisloOtazky = cisloOtazky + 1
    napisOtazku();
  } else {
    //kviz.textContent = ''
    vyhodnot();
  }
}

let otazka = document.createElement('div');
otazka.id = ('otazka');

function napisOtazku() {

  otazka.innerHTML = poleKviz[cisloOtazky].otazka
  kviz.appendChild(otazka);
  //kviz.insertAdjacentElement(2, otazka);

  let poradi = document.createElement('div');
  poradi.id = ('poradi');
  poradi.textContent = 'OTÁZKA' + ' ' + (cisloOtazky + 1) + '/' + poleKviz.length;
  otazka.appendChild(poradi);
  //otazka.insertAdjacentElement(2, poradi);

  let fotoKOtazce = document.createElement('img');
  fotoKOtazce.id = ('obrazek');
  fotoKOtazce.classList.add('foto');
  fotoKOtazce.src = poleKviz[cisloOtazky].foto;
  fotoKOtazce.alt = poleKviz[cisloOtazky].otazka;
  otazka.appendChild(fotoKOtazce);

  let odpovedi = document.createElement('ul');
  odpovedi.id = ('odpovedi');
  otazka.appendChild(odpovedi);

  for (let i = 0; i < poleKviz[cisloOtazky].poleMoznosti.length; i++) {
    let moznosti = document.createElement('li');
    moznosti.id = ('moznosti');

    moznosti.setAttribute('data-odpoved', i);
    moznosti.addEventListener('click', pokracuj);
    //moznosti.onclick = pokracuj;

    moznosti.innerHTML += poleKviz[cisloOtazky].poleMoznosti[i];
    odpovedi.appendChild(moznosti);
  }
}

function vyhodnot() {
  otazka.innerHTML = poleKviz[cisloOtazky].otazka
  let skutecnaOdpoved = poleKviz.skutecnaOdpoved;
  let spravnaOdpoved = poleKviz.spravnaOdpoved;

  //for (let i = 0; i < poleKviz.length; i++) {
  for (let i = 0; i < 1; i++) {
    let tvojehodnoceni = document.querySelector('#tvojehodnoceni');
    tvojehodnoceni.textContent = 'TVOJE HODNOCENÍ';
    
    let otazkaHodnoceni = document.querySelector('.vysledek');
    otazkaHodnoceni.textContent = (i + 1) + '. ' + poleKviz[i].otazka;

    let hodnoceni = document.createElement('div');

    let dobraOdpoved = ('Správná odpověď: ' + spravnaOdpoved);

    hodnoceni.id = ('hodnoceni');
    hodnoceni.textContent = 'Tvoje odpověď: ' + poleKviz[i].skutecnaOdpoved + '<br>' + dobraOdpoved;

    if (skutecnaOdpoved == spravnaOdpoved) {
      dobraOdpoved = true;
      dobraOdpoved.textContent = 'To je SPRÁVNĚ.'
    }
  }

  let procentoUspesnosti = document.createElement('div');
  //procentoUspesnosti.id = ('');
  procentoUspesnosti.textContent = 'SPRÁVNĚ' + 1 + 'ZE' + poleKviz.length + 'OTÁZEK. ÚSPĚŠNOST' + 33 + '%.'

}





