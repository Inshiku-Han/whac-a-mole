const squares = document.querySelectorAll(".square");
const mole = document.querySelector(".mole");
const timeLeft = document.querySelector("#time-left");
const score = document.querySelector("#score");

let result = 0;
let hitPosition = null;
let currentTime = 60;

squares.forEach((v) => {
  // 두더지 이미지 클릭 시 result 증가, 화면에 출력, 한번만 가능
  v.addEventListener("mousedown", () => {
    if (v.id === hitPosition) {
      result++;
      score.textContent = result;
      hitPosition = null;
    }
  });
});

// 0.5초 간격으로 9개의 square 태그 중 하나에 mole 클래스 추가. id 값 hitPosition에 대입
setInterval(() => {
  squares.forEach((v) => v.classList.remove("mole"));

  let square = squares[Math.floor(Math.random() * squares.length)];
  square.classList.add("mole");

  hitPosition = square.id;
}, 500);

// 60에서 1초간격으로 0 까지 화면에 노출.
let countDownTimerId = setInterval(() => {
  currentTime--;
  timeLeft.textContent = currentTime;

  if (currentTime === 0) {
    clearTimeout(countDownTimerId);
    alert(`GAME OVER! Your final score is ${result}`);
  }
}, 1000);
