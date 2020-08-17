import './sass/main.scss';

import pagination from './js/components/pagination';

import {
  renderCardsAndPagination as renderHomeCards,
  renderHeader as renderHomeHeader,
} from './js/components/renderCards.js';

import { requestPopularMovies } from './js/services/apiService.js';

const refs = {
  // ============== containers ==================
  headerContainer: document.querySelector('.header'),
  mainContainer: document.querySelector('.info-container'),
  // =============== btns/inputs ================
};

// ========================== RENDERS   =============================

const renderHomePage = () => {
  //   renderHomeHeader(refs.headerContainer);
  requestPopularMovies(1).then(data =>
    renderHomeCards(refs.mainContainer, data),
  );
};

// ==========================    EVENTS  =============================

renderHomePage();
