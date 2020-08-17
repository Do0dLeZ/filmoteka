'use-strict';

import cardsTemplate from '../../handlebars/cards.hbs';
import { initInfoForMovies } from '../services/apiService.js';

const renderCardsAndPagination = (elem, data) => {
  const movies = initInfoForMovies(data.results);
  elem.insertAdjacentHTML('beforeend', cardsTemplate({ movies }));
};

export { renderCardsAndPagination };
