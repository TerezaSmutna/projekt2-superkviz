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

poleKviz.forEach(element => {
  element.skutecnaOdpoved;
});

//cisloSpravneOdpovediPrvniOtazky = poleKviz[0].spravnaOdpoved
//poleKviz[0].poleMoznosti[cisloSpravneOdpovediPrvniOtazky]

function pokracuj(event) {

  let moznosti = event.target;
  let odpoved = moznosti.dataset.odpoved;

  poleKviz[cisloOtazky].skutecnaOdpoved = parseInt(odpoved);

  if (cisloOtazky < poleKviz.length - 1) {
    kviz.innerHTML = ''
    cisloOtazky = cisloOtazky + 1
    napisOtazku();
  } else {
    vyhodnot();
  }
}

let otazka = document.createElement('h2');
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
  kviz.removeChild(otazka);

  let skutecnaOdpoved = poleKviz.skutecnaOdpoved;
  let spravnaOdpoved = poleKviz.spravnaOdpoved;
  let vyhodnoceni = document.createElement('div');
  kviz.appendChild(vyhodnoceni);

  let tvojeHodnoceni = document.createElement('h2');
  tvojeHodnoceni.textContent = 'TVOJE HODNOCENÍ';
  vyhodnoceni.appendChild(tvojeHodnoceni);

  let otazkyHodnoceni = document.createElement('ol');
  otazkyHodnoceni.type = "1";

  for (let i = 0; i < poleKviz.length; i++) {
    let otazkaHodnoceni = document.createElement('li');
    otazkyHodnoceni.appendChild(otazkaHodnoceni);
    otazkaHodnoceni.classList.add('h3');
    otazkaHodnoceni.innerHTML = poleKviz[i].otazka;
    vyhodnoceni.appendChild(otazkaHodnoceni);

    let porovnani = document.createElement('div');
    porovnani.textContent  = 'ahoj';
    otazkaHodnoceni.appendChild(porovnani);

  }
}



  /**for (let i = 0; i < poleKviz.length; i++) {

    let dobraOdpoved = ('Správná odpověď: ' + spravnaOdpoved);

    hodnoceni.id = ('hodnoceni');
    hodnoceni.textContent = 'Tvoje odpověď: ' + poleKviz[i].skutecnaOdpoved + '<br>' + dobraOdpoved;

    if (skutecnaOdpoved == spravnaOdpoved) {
      dobraOdpoved.textContent = 'To je SPRÁVNĚ.'
    }

  let procentoUspesnosti = document.createElement('div');
  //procentoUspesnosti.id = ('');
  procentoUspesnosti.textContent = 'SPRÁVNĚ' + X + 'ZE' + poleKviz.length + 'OTÁZEK. ÚSPĚŠNOST' + Y + '%.'

}**/





