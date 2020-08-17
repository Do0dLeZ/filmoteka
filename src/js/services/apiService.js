'use-strict';

// ============================== IMPORTS   ==============================

import axios from 'axios';

// ============================== PARAMS    ==============================

axios.defaults.baseURL = 'https://api.themoviedb.org';

const mainRequestParams = {
  api_key: '315e08344ecf67d3b7c1eb2e8ad237c9',
  language: 'ru-RU',
};

const genres = {};

// ============================== INIT PARAMS =============================

const initGenres = () => {
  axios
    .get('/3/genre/movie/list', { params: { ...mainRequestParams } })
    .then(response => response.data)
    .then(data => {
      data.genres.forEach(genre => {
        genres[genre.id] = genre.name;
      });
    });
};

initGenres();

// ==============================     GENRES    ============================

const initInfoForMovies = (movies = []) => {
  movies.forEach(movie => {
    movie.genres = movie.genre_ids.map(id => {
      return { id, name: genres[id] };
    });
    movie.year = movie.release_date.substring(0, 4);
  });

  return movies;
};

// ==============================    REQUESTS   ============================

const requestPopularMovies = page => {
  return axios
    .get('/3/movie/popular', { params: { ...mainRequestParams, page } })
    .then(response => response.data)
    .catch(error => {
      throw new Error(error);
    });
};

const requestMovieByID = id => {
  return axios
    .get(`/3/movie/${id}`, { params: { ...mainRequestParams } })
    .then(response => response.data.results[0]);
};

const requestSearchByQuery = (query, page) => {
  return axios
    .get('3/search/movie', { params: { ...mainRequestParams, query, page } })
    .then(response => response.data)
    .catch(error => {
      throw new Error(error);
    });
};

export {
  requestMovieByID,
  requestPopularMovies,
  requestSearchByQuery,
  initInfoForMovies,
};
