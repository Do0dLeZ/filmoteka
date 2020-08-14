import movieService from './js/services/apiService';
import updateImgMarkup from './js/services/markupRender';

const searchForm = document.querySelector('.js-search-form');
const root = document.querySelector('.root');

searchForm.addEventListener('submit', searchFormSubmitHandler);

function searchFormSubmitHandler(event) {
  event.preventDefault();

  const form = event.currentTarget;
  movieService.query = form.elements.query.value;

  clearImgContainer();
  movieService.resetPage();
  fetchMovie();
  form.reset();
}

function fetchMovie() {
  movieService.fetchMovie().then(results => {
    updateImgMarkup(results);
  });
}

function clearImgContainer() {
  root.innerHTML = '';
}
