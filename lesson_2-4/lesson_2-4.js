const screensValues = "template, unique, animated";
const screenPrice = 1000;
const percentage = 0.1;

let titleProject = prompt("Название проекта?");
console.log(titleProject);

let screensValue = prompt(
  "Какой тип экрана? (шаблонный, с уникальным дизайном, с анимациями)"
);
let askForResponsive = prompt("Нужен ли респонсивный сайт? (Да или Нет)");
let responsive = true;
if (askForResponsive === "Да") {
  responsive = true;
} else if (askForResponsive === "Нет") {
  responsive = false;
} else {
  alert("Пожалуйста, введите 'Да' или 'Нет'");
}

let service1 = prompt("Какой сервис нужен?");
let servicePrice1 = +prompt("Сколько это будет стоить?");
let service2 = prompt("Какой еще сервис тебе нужен?");
let servicePrice2 = +prompt("Сколько будет стоить этот второй сервис?");

const getAllServicePrices = function () {
  return servicePrice1 + servicePrice2;
};

const allServicePrices = getAllServicePrices();

function getFullPrice() {
  return allServicePrices + screenPrice;
}

const fullPrice = getFullPrice();

const getTitle = function () {
  return (titleProject =
    titleProject[0].toUpperCase() + titleProject.slice(1).toLowerCase());
};
console.log(getTitle());

const getServicePercentPrices = function () {
  return fullPrice - fullPrice * percentage;
};

const servicePercentPrice = getServicePercentPrices();

const getRollbackMessage = function () {
  if (fullPrice >= 50000) {
    console.log("сделаем скидку в 10%");
  } else if (fullPrice > 20000 && fullPrice < 50000) {
    console.log("сделаем скидку в 5%");
  } else if (fullPrice > screenPrice && fullPrice <= 20000) {
    console.log("скидка не предусмотрена");
  } else if (fullPrice <= screenPrice) {
    console.log("Что то пошло не так");
  }
};
console.log("стоимость всего проекта = ", fullPrice);
console.log("стоимость всех услуг = ", allServicePrices);
console.log(
  "стоимость проекта с учётом скидки подрядчику =",
  servicePercentPrice
);
getRollbackMessage();
