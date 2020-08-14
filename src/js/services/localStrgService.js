class Library {
  constructor(storage) {
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
  getFromLocalStorage() {
    return JSON.parse(localStorage.getItem('Library'));
  }
  updateLocalStorage() {
    localStorage.setItem('Library', JSON.stringify(this._storage));
  }
  updateWatched(object) {
    this._storage.watched.push(object);
    updateLocalStorage();
    return this._storage.object;
  }
  updateQueue(object) {
    this._storage.queue.push(object);
    updateLocalStorage();
    return this._storage.queue;
  }
  updateStorage() {
    this._storage = this.getFromLocalStorage();
  }
}
