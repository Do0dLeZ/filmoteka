import './sass/main.scss';
import renderHeaderHome from './js/components/renderHeader';
import {
  renderCardsAndPagination as renderHomeCards,
  // renderHeader as renderHeaderHome,
} from './js/components/renderCards.js';

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
  requestMovieByID(e.target.closest('.list-item').dataset.movieId)
    .then(data => renderCard(refs.mainContainer, data))
    .finally(() => {
      //TODO add watched/queue btn click events
    });
};

// ========================== RENDERS   =============================

const renderHomePage = () => {
  renderHeaderHome(refs.headerContainer);
  refs.homeBtn = document.querySelector('#link-home');
  refs.libraryBtn = document.querySelector('#link-library');

  requestPopularMovies(homePage)
    .then(data => renderCards(refs.mainContainer, data))
    .finally(() => {
      refs.mainContainer
        .querySelector('.movie-list')
        .addEventListener('click', handleCardClick);
    });
};

// ==========================    EVENTS  =============================

renderHomePage();
