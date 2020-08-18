import './sass/main.scss';
import renderHeaderHome from './js/components/renderHeader';
import {
  renderCardsAndPagination as renderHomeCards,
  // renderHeader as renderHeaderHome,
} from './js/components/renderCards.js';
import checkAndRenderTarget from './js/components/renderCard';

import { renderCards } from './js/components/renderCards.js';
import {
  requestPopularMovies,
  // requestMovieByID,
} from './js/services/apiService.js';
import './js/components/pagination';
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

// const renderHomePage = () => {
//   renderHeaderHome(refs.headerContainer);
//   refs.homeBtn = document.querySelector('#link-home');
//   refs.libraryBtn = document.querySelector('#link-library');

//   requestPopularMovies(homePage)
//     .then(data => renderCards(refs.mainContainer, data))
//     .finally(() => {
//       refs.mainContainer
//         .querySelector('.movie-list')
//         .addEventListener('click', handleCardClick);
//     });
// };

// ==========================    EVENTS  =============================

// renderHomePage();
