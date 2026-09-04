// 3.
function showCityTemp(city, temp) {
  console.log(`Сейчас в ${city} температура — ${temp} градусов по Цельсию`);
}

showCityTemp("Bishkek", 30);

// 4.
const LIGHT_SPEED = 299792458;

function checkSpeed(speed) {
  if (speed > LIGHT_SPEED) {
    console.log("Сверхсветовая скорость");
  } else if (speed < LIGHT_SPEED) {
    console.log("Субсветовая скорость");
  } else if (speed === LIGHT_SPEED) {
    console.log("Скорость света");
  }
}

// 5.
const productName = "Macbook M5";
const productPrice = 1500;

function purchaseProduct(budget) {
  if (budget >= 1500) {
    console.log(`${productName} приобретён. Спасибо за покупку!`);
  } else {
    console.log(`Вам не хватает ${1500 - budget}$, пополните баланс`);
  }
}

purchaseProduct(1300);

// 6.
function setTimer(startTime) { }

// 7.
let sisterName = 'Maria';
let carModel = 'X5';
const currentSpeed = 60;