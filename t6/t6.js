'use strict';

const kohde = document.querySelector('#target');

const elokuvat = [];

const lkm = prompt("Syötä elokuvan lkm. U BUM")

for (let i = 0; i < lkm; i++) {
  const title = prompt("Syötä elokuvan nimi. Tyhjä lopettaa");
  const rating = prompt("Syötä arvio 1-5 BOMBACLAAAAAT");
  const elokuva = {
    title,
    rating,
  }
  elokuvat.push(elokuva);
}


elokuvat.sort((a,b) => a.rating - b.rating);

console.log(elokuvat);

for(let elokuva of elokuvat) {
  const html = `<tr>
                    <td>${elokuva.title}</td>
                    <td>${elokuva.rating}</td>
                </tr>`;
  /*kohde.innerHTML += html; on paska älä käytä*/

  kohde.insertAdjacentHTML("beforeend", html);

}
