const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');

const ONE_SECOND = 1000;

const formatToTwoSymbols = (value) => {
    const valStr = value.toString()
    if(valStr.length === 1) return `0${value}`;

    return valStr;
}

const formatTime = (seconds) => {
    const h = formatToTwoSymbols(Math.floor(seconds / 3600));
    const m = formatToTwoSymbols(Math.floor((seconds - h * 3600) / 60));
    const s = formatToTwoSymbols(Math.floor(seconds - h * 3600 - m * 60));

    return `${h}:${m}:${s}`
}

const createTimerAnimator = () => {
  return (seconds) => {
    timerEl.innerText = formatTime(seconds);
    const interval = setInterval(() => {
        seconds--;
        if(seconds <= 0) {
            clearInterval(interval);
        }
        timerEl.innerText = formatTime(seconds);
    }, ONE_SECOND)
  };
};

const animateTimer = createTimerAnimator();

inputEl.addEventListener('input', (e) => {
  inputEl.value = e.target.value.replace(/\D/g, "")
});

buttonEl.addEventListener('click', () => {
  const seconds = Number(inputEl.value);

  animateTimer(seconds);

  inputEl.value = '';
});
