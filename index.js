const meterFootEl = document.getElementById("meter-foot");
const literGallonEl = document.getElementById("liter-gallon");
const kiloPoundEl = document.getElementById("kilo-pound");
const inputEl = document.getElementById("input-el");
const btnEl = document.getElementById("btn-el");

btnEl.addEventListener("click", function handleConversion() {
  if (inputEl.value) {
    meterFootEl.innerHTML = `
      ${inputEl.value} Meters = ${(inputEl.value * 3.281).toFixed(2)} feet |
      ${inputEl.value} feet = ${(inputEl.value / 3.281).toFixed(2)} meters`;

    literGallonEl.innerHTML = `
      ${inputEl.value} Liters = ${(inputEl.value * 0.264).toFixed(2)} gallons |
      ${inputEl.value} gallons = ${(inputEl.value / 0.264).toFixed(2)} liters`;

    kiloPoundEl.innerHTML = `
      ${inputEl.value} Kilos = ${(inputEl.value * 2.204).toFixed(2)} Pounds |
      ${inputEl.value} Pounds = ${(inputEl.value / 2.204).toFixed(2)} kilos`;
  }

  inputEl.value = "";
});
