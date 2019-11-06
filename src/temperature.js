const readlineSync = require("readline-sync");

const temperature = Number(readlineSync.question("\nEnter a temperature: "));
const scale = readlineSync.question("Enter a scale: ");

const temperatureUnit = scale.toUpperCase();

if (temperature>Number.MAX_SAFE_INTEGER || temperature<Number.MIN_SAFE_INTEGER) {
  console.log("\nInvalid.");
}
else if (Number.isNaN(temperature)) {
  console.log("\nInvalid.");
}
else if (temperatureUnit == "F") {
  if (temperature <= 32) {
    console.log("\nSolid.");
  }
  else if (temperature >= 212) {
    console.log("\nGas.");
  }
  else {
    console.log("\nLiquid.");
  }
}
else if (temperatureUnit == "K") {
  if (temperature <= 273.15) {
    console.log("\nSolid.");
  }
  else if (temperature >= 373.15) {
    console.log("\nGas.");
  }
  else {
    console.log("\nLiquid.");
  }
}
else if (temperatureUnit == "C") {
  if (temperature <= 0) {
    console.log("\nSolid.");
  }
  else if (temperature >= 100) {
    console.log("\nGas.");
  }
  else {
    console.log("\nLiquid.");
  }
}
else {
  console.log("\nInvalid.");
}
