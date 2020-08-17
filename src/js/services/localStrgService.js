export default class Library {
  constructor() {
    this._storage = {
      watched: [],
      queue: [],
    };
  }
  get watched() {
    return this._storage.watched;
  }
  get queue() {
    return this._storage.queue;
  }
  get storage() {
    return this._storage;
  }
  getLocalStorage() {
    return JSON.parse(localStorage.getItem('Library'));
  }
  addWatched(object) {
    this._storage.watched.push(object);
    this.updateLocalStorage();
    return this._storage.watched;
  }
  addQueue(object) {
    this._storage.queue.push(object);
    this.updateLocalStorage();
    return this._storage.queue;
  }
  removeWatched(object) {
    this._storage.watched.splice(testLocal.watched.indexOf(object), 1);
    this.updateLocalStorage();
    return this._storage.watched;
  }
  removeQueue(object) {
    this._storage.queue.splice(testLocal.queue.indexOf(object), 1);
    this.updateLocalStorage();
    return this._storage.queue;
  }
  updateLocalStorage() {
    localStorage.setItem('Library', JSON.stringify(this._storage));
  }
  updateСurrentStorage() {
    this._storage = this.getLocalStorage();
  }
}
// ============================= Example =============================

// import apiService from './apiService';
// const testLocal = new Library();
// const testArray = [];

// apiService
//   .getMoviesByInput('james bond')
//   .then(data => testArray.push(...data))
//   .then(data => {
//     testLocal.addWatched(testArray[0]);
//     testLocal.addQueue(testArray[19]);
//     testLocal.addQueue(testArray[18]);
//     testLocal.addWatched(testArray[2]);
//     console.log("I'm test torage :)", testLocal.storage);
//     console.log("I'm localeStorage :)", testLocal.getLocalStorage());
//     return data;
//   })
//   .then(() => {
//     testLocal.removeWatched(testArray[2]);
//     testLocal.removeQueue(testArray[19]);
//     console.log("I'm test torage :)", testLocal.storage);
//     console.log("I'm localeStorage :)", testLocal.getLocalStorage());
//     console.log('=============================================');
//   });
// apiService
//   .getMoviesByInput('james bond')
//   .then(data => testArray.push(...data))
//   .then(data => {
//     console.log("I'm test torage :)", testLocal.storage);
//     console.log("I'm localeStorage :)", testLocal.getLocalStorage());
//     testLocal.updateСurrentStorage();
//     console.log("I'm test torage :)", testLocal.storage);
//     console.log("I'm localeStorage :)", testLocal.getLocalStorage());
//     testLocal.removeWatched(testArray[0]);
//     console.log("I'm test torage :)", testLocal.storage);
//     console.log("I'm localeStorage :)", testLocal.getLocalStorage());
//     return data;
//   });
