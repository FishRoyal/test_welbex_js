const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');


const formatToTwoSymbols = (value) => {
    const valStr = value.toString()
    if(valStr.length === 1) return `0${value}`;

    return valStr;
}

const formatTime = (seconds) => {
    const h = formatToTwoSymbols(Math.floor(seconds / 3600));
    const m = formatToTwoSymbols(Math.floor((seconds - h * 3600) / 60));
    const s = formatToTwoSymbols(Math.floor(seconds - h * 3600 - m * 60));

    return `${h}:${m}:${s}}`
}

// Напишите реализацию createTimerAnimator
// который будет анимировать timerEl
const createTimerAnimator = () => {
  return (seconds) => {

  };
};

const animateTimer = createTimerAnimator();

inputEl.addEventListener('input', (e) => {
  inputEl.innerText = e.target.value.replace(/\D/g, "")
});

buttonEl.addEventListener('click', () => {
  const seconds = Number(inputEl.value);

  animateTimer(seconds);

  inputEl.value = '';
});
