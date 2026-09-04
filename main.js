// Смена цвета одной карточки
const productCard = document.querySelector('.card');
const cardColorChangeButton = document.querySelector('.color-card');
const yellowishColor = ' #F6A503';

cardColorChangeButton.addEventListener('click', () => {
  productCard.style.backgroundColor = yellowishColor;
})


// Смена цветов всех карточек
const productCards = document.querySelectorAll('.card');
const cardsColorChangeButton = document.querySelector('.color-cards');
const blueColor = 'rgb(1, 242, 255)';

cardsColorChangeButton.addEventListener('click', () => {
  productCards.forEach((card) => card.style.backgroundColor = blueColor);
})


// Открыть Google
const openGoogleButton = document.querySelector('.open-google');

function openGoogle() {
  const answer = confirm('Вы действительно хотите открыть Google?');

  if (answer === true) {
    window.open('https://www.google.com');
  }
}

openGoogleButton.addEventListener('click', () => { openGoogle() })


// Вывод консоль лога и алерт
const outputConsoleLogButton = document.querySelector('.output-console-log');

outputConsoleLogButton.addEventListener('click', () => { outputConsoleMess('ДЗ №6') })

function outputConsoleMess(message) {
  console.log(message);
  alert(message);
}


// Наведение курсора на элементы
const h1 = document.getElementsByTagName('h1')[0]

h1.addEventListener('mouseover', function () {
  console.log(h1.textContent);
})


// Добавить новую кнопку и сменить ее цвет
const changeButtonColor = document.querySelector('.new-button');

changeButtonColor.addEventListener('click', () => {
  changeButtonColor.classList.toggle('sky-color');
})