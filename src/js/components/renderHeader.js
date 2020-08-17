'use-strict';

import libraryTpl from '../../handlebars/header-library.hbs';
import homeTpl from '../../handlebars/header-home.hbs';
import cardTpl from '../../handlebars/header-card.hbs';

import imgHome1x from '../../images/header-bg-img@1x.png';
import imgHome2x from '../../images/header-bg-img@2x.png';
import imgHome3x from '../../images/header-bg-img@3x.png';
import imgWatched1x from '../../images/header-watched-bg-img@1x.png';
import imgWatched2x from '../../images/header-watched-bg-img@2x.png';
import imgWatched3x from '../../images/header-watched-bg-img@3x.png';
import imgDetails1x from '../../images/header-details-bg-img@1x.png';
import imgDetails2x from '../../images/header-details-bg-img@2x.png';
import imgDetails3x from '../../images/header-details-bg-img@3x.png';

const renderHeaderHome = container => {
  container.insertAdjacentHTML('beforeend', homeTpl());
  homeBgImage();

  function onClick(event) {
    if (event.target.id === 'library') {
      container.innerHTML = '';
      container.insertAdjacentHTML('beforeend', libraryTpl());
      libraryBgImage();
    } else if (event.target.id === 'home') {
      container.innerHTML = '';
      container.insertAdjacentHTML('beforeend', homeTpl());
      homeBgImage();
    }
    console.log(event.target.id);
  }

  container.addEventListener('click', onClick);

  function homeBgImage() {
    if (window.matchMedia('(min-width: 320px)').matches) {
      container.style.backgroundImage = `url(${imgHome1x})`;
    }
    if (window.matchMedia('(min-width: 640px)').matches) {
      container.style.backgroundImage = `url(${imgHome2x})`;
    }
    if (window.matchMedia('(min-width: 640px)').matches) {
      container.style.backgroundImage = `url(${imgHome3x})`;
    }
  }

  function libraryBgImage() {
    if (window.matchMedia('(min-width: 320px)').matches) {
      container.style.backgroundImage = `url(${imgWatched1x})`;
    }
    if (window.matchMedia('(min-width: 640px)').matches) {
      container.style.backgroundImage = `url(${imgWatched2x})`;
    }
    if (window.matchMedia('(min-width: 640px)').matches) {
      container.style.backgroundImage = `url(${imgWatched3x})`;
    }
  }
};

// function renderCardHeader(card) {
//   card.addEventListener('click', onCardClick);
//   function onCardClick(event) {
//     if (event.target.nodeName == 'LI') {
//       container.innerHTML = '';
//       container.insertAdjacentHTML('beforeend', cardTpl());
//       cardBgImage();
//     }

//     console.log(event.target.nodeName !== 'DIV' || 'UL');
//   }

//   function cardBgImage() {
//     if (window.matchMedia('(min-width: 320px)').matches) {
//       container.style.backgroundImage = `url(${imgDetails1x})`;
//     }
//     if (window.matchMedia('(min-width: 640px)').matches) {
//       container.style.backgroundImage = `url(${imgDetails2x})`;
//     }
//     if (window.matchMedia('(min-width: 640px)').matches) {
//       container.style.backgroundImage = `url(${imgDetails3x})`;
//     }
//   }
// }
export default renderHeaderHome;
