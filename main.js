const section = document.getElementById('section');
const movieListUl = document.getElementById('movie__list');

function loadItems() {
  return fetch('/assets/datas.json') //
    .then((res) => res.json())
    .then((json) => displayItems(json));
}

function displayItems(movies) {
  movies.map((movie) => {
    const movieItem = `
  <li class="moive__item">
    <div class="movie__container">
        <img class="movie__poster" src="${movie.poster}" alt="">
        <strong class="movie__title">${movie.title}</strong>
        <ul class="movie__details">
          <li class="details__key">
            개요
            <span class="details__value">${movie.overview}</span>
          </li>
          <li class="details__key">
            평점
            <span class="rating-img details__value">${movie.rate}</span>
          </li>
          <li class="details__key">
            개봉
            <span class="details__value">${movie.release}</span>
          </li>
          <li class="details__key">
            출연
            <span class="details__value">${movie.cast}</span>
          </li>
        </ul>
    </div>
    <div class="movie__btn">
      <button class="movie__booking-btn">예매하기</button>
      <button class="movie__preview_btn">예고편</button>
    </div>
  </li>
    `;

    movieListUl.insertAdjacentHTML('beforeend', movieItem);
  });
}

loadItems();
