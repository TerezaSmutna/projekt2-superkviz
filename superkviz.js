let cisloOtazky = 0
let odpovedi = document.querySelector('.odpovedi');
let kviz = document.querySelector('.kviz');
let poleOdpovedi = [];

let poleKviz = [
  {
    otazka: 'Jaké je největší jezero na světě?', foto: 'obrazky/jezero.jpg',
    poleOdpovedi: ['Velké medvědí jezero', 'Kaspické moře', 'VIktoriino jezero'],
    spravnaOdpoved: 1
  },
  {
    otazka: 'Jaká budova nepatří mezi scény Národního divadla?', foto: 'obrazky/Národní divadlo.jpg',
    poleOdpovedi: ['Stavovské divadlo', 'Státní opera Praha', 'Rudolfinum'],
    spravnaOdpoved: 2
  }
]

function pokracuj() {
  if (cisloOtazky < poleKviz.length - 1) {
    kviz.innerHTML = ''
    odpovedi.innerHTML = ''
    cisloOtazky = cisloOtazky + 1
    napisOtazku()
  } else {
    alert('vypisHodnoceni')
  }
}

function napisOtazku() {
  const otazka = document.createElement('h2');
  otazka.id = ('otazka');
  otazka.innerHTML = poleKviz[cisloOtazky].otazka

  const fotoKOtazce = document.createElement('img');
  fotoKOtazce.classList.add('obrazek');
  fotoKOtazce.classList.add('foto');
  fotoKOtazce.src = poleKviz[cisloOtazky].foto;
  fotoKOtazce.alt = poleKviz[cisloOtazky].otazka;

  const poradi = document.createElement('div');
  poradi.id = ('poradi');
  poradi.textContent = 'OTÁZKA' + ' ' + (cisloOtazky + 1) + '/' + poleKviz.length;
  otazka.appendChild(poradi)
  otazka.appendChild(fotoKOtazce);

  for (let i = 0; i < poleKviz[cisloOtazky].poleOdpovedi.length; i++) {
    const odpoved = document.createElement('li');
    odpoved.classList.add = ('.odpovedi');
    odpoved.innerHTML += poleKviz[cisloOtazky].poleOdpovedi[i];

    odpovedi.appendChild(odpoved);
    otazka.appendChild(odpovedi);
    kviz.appendChild(otazka);
  }
}



