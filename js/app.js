const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
];

const DELAY = 1000;
let timerId = null;

const refs = {
    start: document.querySelector('button[data-action="start"]'),
    stop: document.querySelector('button[data-action="stop"]'),
};

const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

function onColorSwitch() {
    timerId = setInterval(() => {
        document.body.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length - 1)];
    }, DELAY);
    refs.start.setAttribute('disabled', 'true');
}

function offColorSwitch() {
    clearInterval(timerId);
    refs.start.removeAttribute('disabled');
}

refs.start.addEventListener('click', onColorSwitch);
refs.stop.addEventListener('click', offColorSwitch);