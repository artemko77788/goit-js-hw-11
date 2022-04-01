import './sass/main.scss';
import axios from 'axios';
import { clearMarcup, createMarcap } from './marcap/createMarcap';
import Notiflix from 'notiflix';

const KEY = '26393294-335f15b3263fd329d68c58b33';
const URL = 'https://pixabay.com/api/';

const seachForm = document.querySelector('.search-form');

seachForm.addEventListener('submit', onSeach);

function onSeach(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const searchForm = form.elements.searchQuery.value;

  axios
    .get(
      `${URL}?key=${KEY}&q=${searchForm}&image_type=photo&orientation=horizontal&safesearch=true&page=1&per_page=21`,
    )
    .then(response => {
      if (searchForm === '' || response.data.total === 0) {
        clearMarcup();
        Notiflix.Notify.failure(
          'Sorry, there are no images matching your search query. Please try again.',
        );
      } else {
        Notiflix.Notify.success(`Hooray! We found ${response.data.totalHits} images.`);
        createMarcap(response);
      }
    })
    .catch(error => console.log(error));
}
