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
  let pocetSpravnychOdpovedi = 0;

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
    otazkaHodnoceni.innerHTML = poleKviz[i].otazka + '<br>';
    vyhodnoceni.appendChild(otazkaHodnoceni);

    let porovnani1 = document.createElement('div');
    let porovnani2 = document.createElement('div');
    porovnani2.innerHTML = 'Správná odpověď: ' + poleKviz[i].poleMoznosti[poleKviz[i].spravnaOdpoved];
    porovnani1.innerHTML = 'Tvoje odpověď: ' + poleKviz[i].poleMoznosti[poleKviz[i].skutecnaOdpoved];
    otazkaHodnoceni.appendChild(porovnani1);
    otazkaHodnoceni.appendChild(porovnani2);

    if (poleKviz[i].skutecnaOdpoved === poleKviz[i].spravnaOdpoved) {
      pocetSpravnychOdpovedi = pocetSpravnychOdpovedi + 1;
      porovnani2.textContent = 'To je SPRÁVNĚ.'
    }
  }

  let procentoUspesnosti = document.createElement('div');
  vyhodnoceni.appendChild(procentoUspesnosti);
  procentoUspesnosti.innerHTML = 'SPRÁVNĚ ' + pocetSpravnychOdpovedi + ' ZE ' + poleKviz.length + ' OTÁZEK. ÚSPĚŠNOST ' + Math.round((pocetSpravnychOdpovedi / poleKviz.length) * 100) + '%.'
}






