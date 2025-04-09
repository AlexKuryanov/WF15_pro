/*const titleProject = "Cost Estimation";*/
const screensValues = "template, unique, animated";
const screenPrice = 1000;
const percentage = 0.1;
/*const fullPrice = 10000;
const responsive = true;*/

let titleProject = prompt("Название проекта?");
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
let fullPrice = screenPrice + servicePrice1 + servicePrice2;
let servicePercentPrice = Math.round(fullPrice - fullPrice * percentage);
console.log(servicePercentPrice);
let discount = 0;
if (fullPrice >= 50000) {
  console.log("сделаем скидку в 10%");
} else if (fullPrice > 20000 && fullPrice < 50000) {
  console.log("сделаем скидку в 5%");
} else if (fullPrice > screenPrice && fullPrice <= 20000) {
  console.log("скидка не предусмотрена");
} else if (fullPrice <= screenPrice) {
  console.log("Что то пошло не так");
}
