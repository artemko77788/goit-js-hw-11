import SimpleLightbox from 'simplelightbox';

import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');

function createMarcap(data) {
  const cards = data.data.hits;

  return cards
    .map(({ webformatURL, tags, likes, views, comments, downloads, largeImageURL }) => {
      return `  <div class="photo-card">
<a class="gallery__item" href="${largeImageURL}">
  <img src="${webformatURL}" alt="${tags}" loading="lazy" />
</a>
  <div class="info">
    <p class="info-item">
      <b>Likes</b>
     ${likes}
    </p>
    <p class="info-item">
      <b>Views</b>
      ${views}
    </p>
    <p class="info-item">
      <b>Comments</b>
      ${comments}
    </p>
    <p class="info-item">
      <b>Downloads</b>
      ${downloads}
    </p>
  </div>
</div> 
`;
    })
    .join('');
}

function appendCard(data) {
  gallery.insertAdjacentHTML('beforeend', createMarcap(data));
  new SimpleLightbox('.gallery a', {
    captionDelay: 250,
    fadeSpeed: 170,
  });
}

function clearMarcup() {
  gallery.innerHTML = ' ';
}

export { createMarcap, clearMarcup, appendCard };
