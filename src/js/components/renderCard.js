import renderSingleCard from '../../handlebars/card.hbs';
import { requestMovieByID } from '../services/apiService';

const mainContainer = document.querySelector('.info-container');

const renderCard = res => {
  mainContainer.innerHTML = '';
  console.dir(res);
  mainContainer.insertAdjacentHTML('beforeend', renderSingleCard(res));
};

const checkAndRenderTarget = () => {
  if (event.target.nodeName != 'IMG') {
    return;
  }
  requestMovieByID(event.target.dataset.movieId)
    .then(res => renderCard(res))
    .finally(() => {
      //   TODO add watched/queue btn click events
    });
};

export default checkAndRenderTarget;
