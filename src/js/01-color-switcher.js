const btnStart = document.querySelector('button[data-start]');
const btnStop = document.querySelector('button[data-stop]');
let timer = null;

btnStart.addEventListener('click', startChangeBc);
btnStop.addEventListener('click', stopChangeBc);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function startChangeBc() {
  timer = setInterval(() => {
    document.body.style.background = getRandomHexColor();
  }, 1000);
  btnStart.disabled = true;
}

function stopChangeBc() {
  clearInterval(timer);
  btnStart.disabled = false;
}
