'use-strict';

import cardsTemplate from '../../handlebars/cards.hbs';
import { initInfoForMovies } from '../services/apiService.js';

const renderCardsAndPagination = (elem, data) => {
  const movies = initInfoForMovies(data.results);
  console.log(movies[0]);
  elem.insertAdjacentHTML('beforeend', cardsTemplate({ movies }));
};

export { renderCardsAndPagination };
