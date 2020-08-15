import apiService from '../services/apiService';

const {
  paginationListWrapper,
  paginationList,
  lastPage,
  firstPage,
  input,
  paginationWrapper,
} = {
  paginationListWrapper: document.querySelector('.navigation-js'),
  paginationList: document.querySelector('.pagination-js'),
  lastPage: document.querySelector('.last-page'),
  firstPage: document.querySelector('.first-page'),
  input: document.querySelector('.input-js'),
  paginationWrapper: document.querySelector('.pagination-wrapper'),
};
paginationList.addEventListener('click', togglePagination);
paginationListWrapper.addEventListener('click', markupPaginationList);
input.addEventListener('submit', searchFilmValue);

let eventTarget;
let activePage;
let totalPage;
let markupPage = 5;
let value = 1;
let search;

function paginationService(activePage) {
  apiService
    .getMoviesByInput(search, activePage)
    .then(data => console.log(data));
  paginationWrapper.classList.remove('visually-hidden');
}

function maxPagePagination(maxPages) {
  totalPage = maxPages;
  return totalPage;
}

function togglePagination(event) {
  activePage = Number(event.target.innerText);
  console.log(activePage);
  if (eventTarget === 'previous-pages') {
    value -= 5;
    markupPage -= 5;
    paginationList.innerHTML = '';
  }
  if (totalPage < markupPage) {
    value = totalPage - 5;
    markupPage = totalPage;
  }

  paginationService(activePage);
}

function markupPaginationList(event) {
  eventTarget = event.target.id;

  if (eventTarget === 'next-page') {
    activePage += 1;
    paginationService(activePage);
  } else if (eventTarget === 'previous-page') {
    activePage -= 1;
    paginationService(activePage);
  }
  firstPage.innerHTML = 1;

  lastPage.innerHTML = totalPage;

  for (let i = value; i <= markupPage; i += 1) {
    paginationList.insertAdjacentHTML(
      'beforeEnd',
      ` <li class="page-item"><button class="page-link" href="#">${i}</button></li>`,
    );
  }
}

function searchFilmValue(event) {
  event.preventDefault();
  search = event.currentTarget.elements.search__films.value;
  return paginationService(activePage);
}

export default maxPagePagination;
