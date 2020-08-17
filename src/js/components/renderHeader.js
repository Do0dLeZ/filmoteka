'use-strict';

import templateHeaderHome from '../../handlebars/headerHome.hbs';

const renderHeaderHome = elem => {
  elem.insertAdjacentHTML('beforeend', templateHeaderHome());
};

export { renderHeaderHome };
