import imgService from './js/services/apiService';
import updateImgMarkup from './js/services/markupRender';

const searchForm = document.querySelector('.js-search-form');
const ulRef = document.querySelector('.root');

searchForm.addEventListener('submit', searchFormSubmitHandler);

function searchFormSubmitHandler(event) {
  event.preventDefault();

  const form = event.currentTarget;
  imgService.query = form.elements.query.value;

  clearImgContainer();
  imgService.resetPage();
  fetchImg();
  form.reset();
}

function fetchImg() {
  imgService.fetchImg().then(results => {
    updateImgMarkup(results);

    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  });
}

function clearImgContainer() {
  ulRef.innerHTML = '';
}
