let poleOdpovedi = [
  { odpoved1: 'Velké medvědí jezero', odpoved2: 'Kaspické moře', odpoved3: 'VIktoriino jezero', spravnaOdpoved: 'Kaspické moře' },
  { odpoved1: 'Stavovské divadlo', odpoved2: 'Státní opera Praha', odpoved3: 'Rudolfinum', spravnaOdpoved: 'Rudolfinum' }
]

let poleKviz = [
  { otazka: 'Jaké je největší jezero na světě?', foto: 'obrazky/jezero.jpg', poleOdpovedi, poradi: 1 },
  { otazka: 'Jaká budova nepatří mezi scény Národního divadla?', foto: 'obrazky/Národní divadlo.jpg', poleOdpovedi, poradi: 2 }
]

let odpovedi = document.querySelector('.odpovedi');

let clicked = false

function dalsiOtazka(clicked) {
  clicked = true
}

function prvniOtazka() {
  for (let i = 0; i < poleKviz.length; i++) {
    const otazka = document.createElement('h2');
    otazka.id = ('otazka');
    otazka.innerHTML = poleKviz[i].otazka

    let kviz = document.querySelector('.kviz');
    kviz.appendChild(otazka);

    const fotoKOtazce = document.createElement('img');
    fotoKOtazce.classList.add('obrazek');
    fotoKOtazce.classList.add('foto');
    fotoKOtazce.src = poleKviz[i].foto;
    fotoKOtazce.alt = poleKviz[i].otazka;


    const poradi = document.createElement('div');
    poradi.id = ('poradi');
    poradi.textContent = 'OTÁZKA' + ' ' + poleKviz[i].poradi + '/2';
    otazka.appendChild(poradi)
    otazka.appendChild(fotoKOtazce);

    const odpoved1 = document.createElement('li');
    odpoved1.classList.add = ('.odpovedi');
    const odpoved2 = document.createElement('li');
    odpoved2.classList.add = ('.odpovedi');
    const odpoved3 = document.createElement('li');
    odpoved3.classList.add('.odpovedi');
    odpovedi.appendChild(odpoved1);
    odpovedi.appendChild(odpoved2);
    odpovedi.appendChild(odpoved3);
    otazka.appendChild(odpovedi);

    for (let j = 0; j < poleOdpovedi.length; j++) {
      odpoved1.innerHTML = poleKviz[i].poleOdpovedi[j].odpoved1;
      odpoved2.innerHTML = poleKviz[i].poleOdpovedi[j].odpoved2;
      odpoved3.innerHTML = poleKviz[i].poleOdpovedi[j].odpoved3;
      if (clicked == false) {
        return
      } else {
        alert('pokracuj');
        i = i + 1
        j = j + 1
      }
    }
  }
}



