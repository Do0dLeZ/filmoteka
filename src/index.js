import './sass/main.scss';

import { renderCardsAndPagination as renderHomeCards } from './js/components/renderCards.js';
import checkAndRenderTarget from './js/components/renderCard';
import { renderHeaderHome } from './js/components/renderHeader.js';
import {
  requestPopularMovies,
  // requestMovieByID,
} from './js/services/apiService.js';

// ============================ MAIN PARAMS ======================================

let homePage = 1;
let watchedPage = 1;
let queuePage = 1;

const refs = {
  // ============== containers ==================
  headerContainer: document.querySelector('.header'),
  mainContainer: document.querySelector('.info-container'),
  // =============== btns/inputs ================
};

// ========================== HANDLERS  =============================

const handleCardClick = e => {
  e.preventDefault();
  checkAndRenderTarget();
};

// ========================== RENDERS   =============================

const renderHomePage = () => {
  renderHeaderHome(refs.headerContainer);
  refs.homeBtn = document.querySelector('#link-home');
  refs.libraryBtn = document.querySelector('#link-library');

  requestPopularMovies(homePage)
    .then(data => renderHomeCards(refs.mainContainer, data))
    .finally(() => {
      refs.mainContainer
        .querySelector('.movie-list')
        .addEventListener('click', handleCardClick);
    });
};

// ==========================    EVENTS  =============================

renderHomePage();
