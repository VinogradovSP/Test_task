const cardImg = [
  './style/img/cards/henkel.png',
  './style/img/cards/johnDeere.png',
  './style/img/cards/McDonald.png',
  './style/img/cards/Ikea.png',
  './style/img/cards/reebok.png',
  './style/img/cards/nike.png',
  './style/img/cards/catP.png',
];

let cards = document.querySelector('#cards');

cards.innerHTML = cardImg
  .map(
    (card) => `
  <figure class="card">
    <img
      src=${card}
      alt="brand"
    />
  </figure>
`
  )
  .join('');
