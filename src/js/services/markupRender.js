// import cardTmp from '../../handlebars/card.hbs';
import cardListTmp from '../../handlebars/cards.hbs';

const root = document.querySelector('.root');

export default function renderCountryList(results) {
  root.insertAdjacentHTML('beforeend', cardListTmp(results));
}

// export const renderCard = movie => {
//   root.insertAdjacentHTML('beforeend', cardTmp(movie));
// };

// export default function renderCard(results) {
//   const markup = cardListTmp(results);
//   root.insertAdjacentHTML('beforeend', markup);
// }
