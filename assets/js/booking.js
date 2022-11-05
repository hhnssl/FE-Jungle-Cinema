let movieTitle = document.getElementById('movieTitle');
const container = document.querySelector('.container');
const seats = document.querySelectorAll(
  '.row .seat:not(.occupied):not(.impossible)'
);
let count = document.getElementById('count');
let total = document.getElementById('total');

// 영화 제목
movieTitle.innerHTML = sessionStorage.getItem('movieTitle');

// 좌석 선택
seats.forEach((seat) => {
  seat.addEventListener('click', (clickedSeat) => {
    clickedSeat.target.classList.toggle('selected');

    // toggle 할 때마다 count와 total 출력하는 UI 변경
    updateSelectedState(seat);
  });
});

let addCount = 0;
let addTotal = 0;

function updateSelectedState(seat) {
  if (seat.classList.contains('selected')) {
    addCount++;
    addTotal = addTotal + 12000;
  } else {
    addCount--;
    addTotal = addTotal - 12000;
  }

  count.innerText = addCount;
  total.innerText = addTotal;
}
