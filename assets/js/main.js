const section = document.getElementById('section');
const movieListUl = document.getElementById('movie__list');
const movieBookingBtn = document.getElementById('movie__booking-btn');

(function loadItems() {
  return fetch(
    'https://raw.githubusercontent.com/hhnssl/FE-Jungle-Cinema/main/assets/datas.json'
  ) //
    .then((res) => res.json())
    .then((json) => displayItems(json));
})();

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
      <button id="movie__booking-btn" class="movie__booking-btn">
        <a href='assets/html/booking.html'>예매하기</a>
      </button>
      <button class="movie__preview_btn">
        <a href='#'>예고편</a>
      </button>
    </div>
  </li>
    `;

    movieListUl.insertAdjacentHTML('beforeend', movieItem);
  });
}

// loadItems();

// 이벤트리스너

// movieBookingBtn.addEventListener('click', () => {
//   window.location.replace('/booking.html');
// });
