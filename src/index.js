import './sass/main.scss';

import { renderCardsAndPagination as renderHomeCards } from './js/components/renderCards.js';
import { renderHeaderHome } from './js/components/renderHeader.js';
import { requestPopularMovies } from './js/services/apiService.js';

const refs = {
  // ============== containers ==================
  headerContainer: document.querySelector('.header'),
  mainContainer: document.querySelector('.info-container'),
  // =============== btns/inputs ================
};

// ========================== RENDERS   =============================

const renderHomePage = () => {
  renderHeaderHome(refs.headerContainer);
  requestPopularMovies(1).then(data =>
    renderHomeCards(refs.mainContainer, data),
  );
};

// ==========================    EVENTS  =============================

renderHomePage();
