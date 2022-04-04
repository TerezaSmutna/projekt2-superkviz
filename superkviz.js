let cisloOtazky = 0
let odpovedi = document.querySelector('.odpovedi');
let kviz = document.querySelector('.kviz');

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
  }
]

//cisloSpravneOdpovediPrvniOtazky = poleKviz[0].spravnaOdpoved
//poleKviz[0].poleMoznosti[cisloSpravneOdpovediPrvniOtazky]

function pokracuj(event) {
  console.log(event.srcElement.getAttribute('data-odpoved'))
  if (cisloOtazky < poleKviz.length - 1) {
    kviz.innerHTML = ''
    cisloOtazky = cisloOtazky + 1
    napisOtazku()
  } else {
    alert('vypisHodnoceni')
  }
}

function napisOtazku() {

  const otazka = document.createElement('div');
  otazka.id = ('otazka');
  otazka.innerHTML = poleKviz[cisloOtazky].otazka
  kviz.appendChild(otazka);
  //kviz.insertAdjacentElement(2, otazka);

  const poradi = document.createElement('div');
  poradi.id = ('poradi');
  poradi.textContent = 'OTÁZKA' + ' ' + (cisloOtazky + 1) + '/' + poleKviz.length;
  otazka.appendChild(poradi);
  //otazka.insertAdjacentElement(2, poradi);
   
  const fotoKOtazce = document.createElement('img');
  fotoKOtazce.id = ('obrazek');
  fotoKOtazce.classList.add('foto');
  fotoKOtazce.src = poleKviz[cisloOtazky].foto;
  fotoKOtazce.alt = poleKviz[cisloOtazky].otazka;
  otazka.appendChild(fotoKOtazce);
  
  const odpovedi = document.createElement('ul');
  odpovedi.id = ('odpovedi'); 
  otazka.appendChild(odpovedi);

  for (let i = 0; i < poleKviz[cisloOtazky].poleMoznosti.length; i++) {
    const moznosti = document.createElement('li');
    moznosti.id = ('moznosti');
    
    moznosti.setAttribute('data-odpoved', i)
    moznosti.onclick = pokracuj;

    moznosti.innerHTML += poleKviz[cisloOtazky].poleMoznosti[i];
    odpovedi.appendChild(moznosti);
  }
  
}




