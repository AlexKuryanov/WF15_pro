const screensValues = "template, unique, animated";
const percentage = 10;
let screenPrice;
let titleProject;
let screensValue;
let responsive;
let newTitle;
let service1;
let service2;

const askAboutProject = function () {
  titleProject = prompt("Название проекта?", "Калькулятор");
  screensValue = prompt(
    "Какой тип экрана? (шаблонный, с уникальным дизайном, с анимациями)",
    "шаблонный"
  );
  let askForResponsive = prompt(
    "Нужен ли респонсивный сайт? (Да или Нет)",
    "Да"
  );
  responsive = true;
  if (askForResponsive === "Да") {
    responsive = true;
  } else if (askForResponsive !== "Да") {
    responsive = false;
  } else {
    alert("Пожалуйста, введите 'Да' или 'Нет'");
  }
  screenPrice = prompt("Сколько это будет стоить?", 12000);
};

function isNumber(value) {
  const parsedValue = parseFloat(value);

  console.log(
    typeof parsedValue === "number" &&
      isFinite(parsedValue) &&
      !isNaN(parsedValue)
  );

  return (
    typeof parsedValue === "number" &&
    isFinite(parsedValue) &&
    !isNaN(parsedValue)
  );
}

const getAllServicePrices = function () {
  let servicePrices = 0;

  for (let i = 0; i < 2; i++) {
    if (i === 0) {
      service1 = prompt("Какой сервис нужен?", "Сервис 1");
    } else if (i === 1) {
      service2 = prompt("Какой сервис нужен?", "Сервис 2");
    }

    let chosenServices = "";

    while (
      !isNumber(chosenServices) ||
      chosenServices === null ||
      chosenServices.trim() === ""
    ) {
      chosenServices = prompt("Сколько это будет стоить?");
    }
    servicePrices += Number(chosenServices);
  }

  return servicePrices;
};

function getFullPrice() {
  return allServicePrices + Number(screenPrice);
}

const getTitle = function () {
  return (titleProject =
    titleProject[0].toUpperCase() + titleProject.slice(1).toLowerCase());
};

const getServicePercentPrices = function () {
  return fullPrice - fullPrice * (percentage / 100);
};

const getRollbackMessage = function (price) {
  if (price >= 50000) {
    return "сделаем скидку в 10%";
  } else if (price > 20000 && price < 50000) {
    return "сделаем скидку в 5%";
  } else if (price >= screenPrice && price <= 20000) {
    return "скидка не предусмотрена";
  } else if (price < screenPrice) {
    return "Что то пошло не так";
  }
};

askAboutProject();
const allServicePrices = getAllServicePrices();
const fullPrice = getFullPrice();
const servicePercentPrice = getServicePercentPrices();
newTitle = getTitle();
getRollbackMessage();

console.log("стоимость всего проекта = ", fullPrice);
console.log("стоимость всех услуг = ", allServicePrices);
console.log(
  "стоимость проекта с учётом скидки подрядчику =",
  servicePercentPrice
);
console.log(newTitle);
console.log(getRollbackMessage(fullPrice));
