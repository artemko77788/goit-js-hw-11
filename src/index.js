import './sass/main.scss';

import { appendCard, clearMarcup, createMarcap } from './marcap/createMarcap';
import Notiflix from 'notiflix';
import ApiServis from './servises/servises';
const apiServise = new ApiServis();

const seachForm = document.querySelector('.search-form');

seachForm.addEventListener('submit', onSeach);

function onSeach(event) {
  event.preventDefault();
  clearMarcup();
  apiServise.searchFormValue = event.currentTarget.elements.searchQuery.value;

  apiServise
    .fetchCards()
    .then(response => {
      if (apiServise.searchFormValue === '' || response.data.total === 0) {
        clearMarcup();
        Notiflix.Notify.failure(
          'Sorry, there are no images matching your search query. Please try again.',
        );
      } else {
        Notiflix.Notify.success(`Hooray! We found ${response.data.totalHits} images.`);
        appendCard(response);
      }
    })
    .catch(error => console.log(error));
}

window.addEventListener('scroll', () => {
  const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

  if (clientHeight + scrollTop >= scrollHeight) {
    apiServise.fetchCards().then(response => {
      appendCard(response);
      const { height: cardHeight } = document
        .querySelector('.gallery')
        .firstElementChild.getBoundingClientRect();

      window.scrollBy({
        top: cardHeight * 2,
        behavior: 'smooth',
      });
    });
  }
});
