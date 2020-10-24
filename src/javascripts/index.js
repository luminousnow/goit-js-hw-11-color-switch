const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const min = Number(colors.length - colors.length);
const max = Number(colors.length - 1);

const refs = {
  buttons: document.querySelector('.js-buttons'),
  body: document.querySelector('body'),
};

let interval = '';

refs.buttons.addEventListener('click', onBtnClick);

function onBtnClick(e) {
  if (e.target.dataset.action === 'start') {
    // робить кнопку start неактивною
    e.target.disabled = true;

    // задає інтервал
    interval = setInterval(changeColor, 1000);

    console.log('started');
  }

  if (e.target.dataset.action === 'stop') {
    // робить кнопку start активною
    const btnStart = document.querySelector('[data-action="start"]');
    btnStart.disabled = false;

    // очищує інтервал
    clearInterval(interval);

    console.log('stoped');
  }
}

// генерує випадкове число в заданому діапазоні
const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

// змінює колір body
function changeColor() {
  refs.body.style.backgroundColor = colors[randomIntegerFromInterval(min, max)];
  console.log(colors[randomIntegerFromInterval(min, max)]);
}
