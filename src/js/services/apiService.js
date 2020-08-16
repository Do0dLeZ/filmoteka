import axios from 'axios';

// Ключик пока положил сюда, потом решим где будем хранить 😋
const key = '315e08344ecf67d3b7c1eb2e8ad237c9';

const getGenres = function () {
  const genres = {};
  axios
    .get(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=${key}&language=en-US`,
    )
    .then(response =>
      console.log(
        response.data.genres.forEach(element => {
          genres[element.id] = element.name;
        }),
      ),
    );
  return genres;
};

const getMoviesByInput = function (keyword, currentPage = 1) {
  return axios
    .get(
      `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=${keyword}&page=${currentPage}`,
    )
    .then(response => {
      return response.data.results;
    })
    .catch(error => {
      throw new Error(error);
    }); // Прокинул error. Может есть более оптимальный вариант, так как я еще не работал с axios:)
};
const getMovieById = async function (movieId) {
  return axios
    .get(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=${key}&language=en-US`,
    )
    .then(response => {
      return response.data;
    })
    .catch(error => {
      throw new Error(error);
    });
};

export { getMoviesByInput, getGenres, getMovieById };
