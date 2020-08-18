import {
  requestSearchByQuery,
  requestPopularMovies,
  requestMovieByID,
} from '../services/apiService';
import { renderCards, renderCard } from './renderCards';
import renderHeaderHome from './renderHeader';

const {
  paginationListWrapper,
  paginationList,
  lastPage,
  firstPage,

  paginationWrapper,
  nextPages,
  pages,
  previousPages,
  nextPage,
  headerContainer,
  mainContainer,
  header,
} = {
  header: document.querySelector('.header'),
  paginationListWrapper: document.querySelector('.navigation-js'),
  paginationList: document.querySelector('.pagination-js'),
  lastPage: document.querySelector('.last-page'),
  firstPage: document.querySelector('.first-page'),

  paginationWrapper: document.querySelector('.pagination-wrapper'),
  nextPages: document.querySelector('#next-pages'),
  previousPages: document.querySelector('#previous-pages'),
  nextPage: document.querySelector('.next-page'),
  pages: document.querySelectorAll('.btn-page'),
  headerContainer: document.querySelector('.header'),
  mainContainer: document.querySelector('.info-container'),
};

paginationListWrapper.addEventListener('click', togglePagination);

let eventTarget;
let activePage = 1;
let totalPage;
let markupPage = 1;
let search;

const handleCardClick = async e => {
  e.preventDefault();
  await requestMovieByID(e.target.closest('.list-item').dataset.movieId)
    .then(data => renderCard(mainContainer, data))
    .finally(() => {
      //TODO add watched/queue btn click events
    });
};
const apiPaginationSearch = async (search, activePage = 1) => {
  await requestSearchByQuery(search, activePage)
    .then(data => {
      totalPage = data.total_pages;
      mainContainer.innerHTML = '';
      renderCards(mainContainer, data);
    })
    .finally(() => {
      showPaginationButtons();
      mainContainer
        .querySelector('.movie-list')
        .addEventListener('click', handleCardClick);
      header
        .querySelector('.input-js')
        .addEventListener('submit', searchFilmValue);
    });
};
const apiPaginationPopular = async (activePage = 1) => {
  await requestPopularMovies(activePage)
    .then(data => {
      totalPage = data.total_pages;
      mainContainer.innerHTML = '';
      renderCards(mainContainer, data);
    })
    .finally(() => {
      showPaginationButtons();
      mainContainer
        .querySelector('.movie-list')
        .addEventListener('click', handleCardClick);
      header
        .querySelector('.input-js')
        .addEventListener('submit', searchFilmValue);
    });
};
const renderHomePage = () => {
  headerContainer.innerHTML = '';
  renderHeaderHome(headerContainer);
  const homeBtn = document.querySelector('#link-home');
  const libraryBtn = document.querySelector('#link-library');
  if (search) {
    apiPaginationSearch(search, activePage);
  } else {
    apiPaginationPopular(activePage);
  }
};

function showPaginationButtons() {
  paginationWrapper.classList.remove('display-none');

  if (totalPage > 5) {
    lastPage.classList.remove('display-none');
    nextPages.classList.remove('display-none');
    lastPage.innerHTML = totalPage;
  }
  if (Number(pages[0].innerHTML) > 5) {
    previousPages.classList.remove('display-none');
    firstPage.classList.remove('display-none');
    firstPage.innerHTML = 1;
  } else if (Number(pages[0].innerHTML) < 5) {
    previousPages.classList.add('display-none');
    firstPage.classList.add('display-none');
    firstPage.innerHTML = 1;
  }
  if (Number(pages[4].innerHTML) >= totalPage) {
    nextPages.classList.add('display-none');
    lastPage.classList.add('display-none');
  }

  pages.forEach(page => {
    if (Number(page.innerHTML) === activePage) {
      page.classList.add('active');
    } else {
      page.classList.remove('active');
    }
  });

  pages.forEach(page => {
    if (Number(page.innerHTML) > totalPage) {
      page.classList.add('display-none');
    } else {
      page.classList.remove('display-none');
    }
  });
}

function togglePagination(event) {
  eventTarget = event.target.id;
  if (totalPage < markupPage) {
    markupPage = totalPage;
  }
  const className =
    'pagination_button pagination-link pagination-number pagination-link__focus btn-page';
  if (eventTarget === 'first-page') {
    markupPage = 1;
    markupPaginationList();
    showPaginationButtons();
  }
  if (eventTarget === 'last-page') {
    markupPage = totalPage - 4;
    markupPaginationList();
    showPaginationButtons();
  }

  if (event.target.className === className) {
    activePage = Number(event.target.innerText);
    renderHomePage();
    showPaginationButtons();
  }

  if (eventTarget === 'previous-pages') {
    markupPage -= 5;
    markupPaginationList();
    showPaginationButtons();
  }
  if (eventTarget === 'next-pages') {
    markupPage += 5;

    markupPaginationList();
    showPaginationButtons();
  }

  if (eventTarget === 'next-page' || eventTarget === 'next-page-arrow') {
    if (activePage === totalPage) {
      return;
    }
    activePage += 1;
    renderHomePage(activePage);
    if (activePage > Number(pages[4].innerHTML)) {
      markupPage += 5;
      markupPaginationList();
    }
  }
  if (
    eventTarget === 'previous-page' ||
    eventTarget === 'previous-page-arrow'
  ) {
    if (activePage === 1) {
      return;
    }
    activePage -= 1;
    renderHomePage(activePage);
    if (activePage < Number(pages[0].innerHTML)) {
      markupPage -= 5;
      markupPaginationList();
    }
  }
}

function markupPaginationList() {
  pages.forEach((page, i) => {
    page.innerHTML = i + markupPage;
  });
}

function searchFilmValue(event) {
  event.preventDefault();
  search = event.currentTarget.elements.search__films.value;
  console.log(event.currentTarget.elements.search__films.value);

  markupPaginationList();
  return renderHomePage(activePage);
}
renderHomePage();
