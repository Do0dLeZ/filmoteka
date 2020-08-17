import './sass/main.scss';
import renderHeaderHome from './js/components/renderHeader';
import {
  renderCardsAndPagination as renderHomeCards,
  // renderHeader as renderHeaderHome,
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
  renderHeaderHome(refs.headerContainer);
  requestPopularMovies(1).then(data =>
    renderHomeCards(refs.mainContainer, data),
  );
};

// ==========================    EVENTS  =============================

renderHomePage();
