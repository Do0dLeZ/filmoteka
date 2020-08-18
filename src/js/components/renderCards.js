'use-strict';

import cardsTemplate from '../../handlebars/cards.hbs';
import templateCard from '../../handlebars/card.hbs';
import { initInfoForMovies } from '../services/apiService.js';

const renderCards = (elem, data) => {
  const movies = initInfoForMovies(data.results);
  elem.insertAdjacentHTML('afterbegin', cardsTemplate({ movies }));
};

const renderCard = (elem, data) => {
  elem.textContent = '';
  console.log(data);
  elem.insertAdjacentHTML('beforeend', templateCard(data));
};

export { renderCards, renderCard };
