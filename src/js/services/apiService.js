const apiKey = '315e08344ecf67d3b7c1eb2e8ad237c9';

export default {
  searchQuery: '',
  page: 1,
  async fetchMovie() {
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${this.query}&page=${this.page}`;

    const res = await fetch(url);
    const { results } = await res.json();
    this.incrementPage();
    return results;
  },
  resetPage() {
    this.page = 1;
  },
  incrementPage() {
    this.page += 1;
  },
  get query() {
    return this.searchQuery;
  },
  set query(value) {
    this.searchQuery = value;
  },
};
