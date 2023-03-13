const lengthEl = document.getElementById("length");
const volumeEl = document.getElementById("volume");
const massEl = document.getElementById("mass");
const btnEl = document.getElementById("convert-btn");
const inputEl = document.getElementById("ipt");

function feetMeter(num) {
  const toFeet = (num * 3.281).toFixed(2);
  const toMeter = (num / 3.281).toFixed(2);
  const conversion = `${num} meters = ${toFeet} feet | ${num} feet = ${toMeter} meters`;
  return conversion;
}

function gallonLiter(num) {
  const toGallon = (num * 0.264).toFixed(2);
  const toLiter = (num / 0.264).toFixed(2);
  const conversion = `${num} liters = ${toGallon} gallons | ${num} gallons = ${toLiter} liters`;
  return conversion;
}

function poundKilo(num) {
  const toPound = (num * 2.204).toFixed(2);
  const toKilo = (num / 2.204).toFixed(2);
  const conversion = `${num} kilos = ${toPound} pounds | ${num} pounds = ${toKilo} kilos`;
  return conversion;
}

btnEl.addEventListener("click", function () {
  lengthEl.textContent = feetMeter(inputEl.value);
  volumeEl.textContent = gallonLiter(inputEl.value);
  massEl.textContent = poundKilo(inputEl.value);
});
