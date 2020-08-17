import apiService from '../services/apiService';

const {
  paginationListWrapper,
  paginationList,
  lastPage,
  firstPage,
  input,
  paginationWrapper,
  nextPages,
  pages,
  previousPages,
  nextPage,
} = {
  paginationListWrapper: document.querySelector('.navigation-js'),
  paginationList: document.querySelector('.pagination-js'),
  lastPage: document.querySelector('.last-page'),
  firstPage: document.querySelector('.first-page'),
  input: document.querySelector('.input-js'),
  paginationWrapper: document.querySelector('.pagination-wrapper'),
  nextPages: document.querySelector('#next-pages'),
  previousPages: document.querySelector('#previous-pages'),
  nextPage: document.querySelector('.next-page'),
  pages: document.querySelectorAll('.btn-page'),
};

paginationListWrapper.addEventListener('click', togglePagination);
input.addEventListener('submit', searchFilmValue);

let eventTarget;
let activePage = 1;
let totalPage;
let markupPage = 1;

let search;

async function paginationService(activePage) {
  await apiService.getMoviesByInput(search, activePage).then(data => {
    totalPage = data.total_pages;
    console.log(data.results);
  });

  showPaginationButtons();
}
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
  if (activePage > totalPage) {
    nextPage.setAttribute(disabled, disabled);
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
  console.log(event.target);
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

  if (event.target.className === 'page-link btn-page') {
    activePage = Number(event.target.innerText);
    paginationService(activePage);
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
  if (totalPage < markupPage) {
    markupPage = totalPage;
  }

  if (eventTarget === 'next-page') {
    if (activePage === totalPage) {
      return;
    }
    activePage += 1;
    paginationService(activePage);
    if (activePage > Number(pages[4].innerHTML)) {
      markupPage += 5;
      markupPaginationList();
    }
  } else if (eventTarget === 'previous-page') {
    if (activePage === 1) {
      return;
    }
    activePage -= 1;

    if (activePage < Number(pages[4].innerHTML)) {
      markupPage -= 5;
      markupPaginationList();
    }
    paginationService(activePage);
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
  markupPaginationList();
  return paginationService(activePage);
}

// class Pagination {
//   constructor() {
//     eventTarget = null;
//     activePage = null;
//     totalPage = null;
//     markupPage = 5;
//     value = 1;
//     search = null;
//   }

//   paginationService(activePage) {
//     apiService
//       .getMoviesByInput(this.search, activePage)
//       .then(data => console.log(data));
//     paginationWrapper.classList.remove('display-none');
//   }

//   getMaxPagePagination(maxPages) {
//     this.totalPage = maxPages;
//     return totalPage;
//   }

//   togglePagination(event) {
//     this.activePage = Number(event.target.innerText);

//     if (this.eventTarget === 'previous-pages') {
//       this.value -= 5;
//       this.markupPage -= 5;
//       paginationList.innerHTML = '';
//     }
//     if (this.totalPage < this.markupPage) {
//       this.value = this.totalPage - 5;
//       this.markupPage = this.totalPage;
//     }
//     this.eventTarget = event.target.id;

//     if (this.eventTarget === 'next-page') {
//       this.activePage += 1;
//       paginationService(this.activePage);
//     } else if (eventTarget === 'previous-page') {
//       this.activePage -= 1;
//       paginationService(this.activePage);
//     }
//     firstPage.innerHTML = 1;

//     lastPage.innerHTML = this.totalPage;

//     paginationService(this.activePage);
//   }

//   markupPaginationList() {
//     for (let i = this.value; i <= this.markupPage; i += 1) {
//       paginationList.insertAdjacentHTML(
//         'beforeEnd',
//         ` <li class="page-item"><button class="page-link" href="#">${i}</button></li>`,
//       );
//     }
//   }

//   searchFilmValue(event) {
//     event.preventDefault();
//     this.search = event.currentTarget.elements.search__films.value;
//     this.markupPaginationList();
//     return this.paginationService(this.activePage);
//   }
// }
