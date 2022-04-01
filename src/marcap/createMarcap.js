const gallery = document.querySelector('.gallery');

function createMarcap(data) {
  const cards = data.data.hits;

  const marcup = cards
    .map(({ webformatURL, tags, likes, views, comments, downloads }) => {
      return `  <div class="photo-card">
  <img src="${webformatURL}" alt="${tags}" loading="lazy" />
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

  gallery.innerHTML = marcup;
}

function clearMarcup() {
  gallery.innerHTML = ' ';
}

export { createMarcap, clearMarcup };
