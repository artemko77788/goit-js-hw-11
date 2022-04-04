import axios from 'axios';

export default class ApiServis {
  constructor() {
    this.searchFormValue = '';
    this.page = 0;
  }

  async fetchCards() {
    const KEY = '26393294-335f15b3263fd329d68c58b33';
    const URL = 'https://pixabay.com/api/';
    this.page += 1;

    return await axios.get(
      `${URL}?key=${KEY}&q=${
        this.searchFormValue
      }&image_type=photo&orientation=horizontal&safesearch=true&page=${this.page}&per_page=21`,
    );
  }

  get query() {
    return this.searchFormValue;
  }

  set query(newQuery) {
    return this.searchFormValue;
  }
}
