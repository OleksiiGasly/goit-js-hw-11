const refs = {
    bodyEl: document.querySelector('body'),
    startBtn: document.querySelector('[data-action="start"]'),
    stopBtn: document.querySelector('[data-action="stop"]'),
  };

refs.startBtn.addEventListener('click', onStartBtnClick);
refs.stopBtn.addEventListener('click', onStopBtnClick);

let timerId = null;

function onStartBtnClick() {
    refs.startBtn.setAttribute('disabled', '');

    timerId = setInterval(() => 
        refs.bodyEl.style.backgroundColor = getRandomHexColor(),
    1000)
}

function onStopBtnClick() {
    clearInterval(timerId);
    refs.startBtn.removeAttribute('disabled');
}

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}