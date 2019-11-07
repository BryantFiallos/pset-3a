const readlineSync = require("readline-sync");

const monthEntered = readlineSync.question("\nEnter a month: ");
const month = monthEntered.toUpperCase();

if (month == "JANUARY" || month == "JAN") {
  console.log("\n31 days.");
}
else if (month == "FEBRUARY" || month == "FEB") {
  console.log("\n28 or 29 days.");
}
else if (month == "MARCH" || month == "MAR") {
  console.log("\n31 days.");
}
else if (month == "APR" || month == "APRIL") {
  console.log("\n30 days.");
}
else if (month == "MAY") {
  console.log("\n31 days.");
}
else if (month == "JUNE" || month == "JUN") {
  console.log("\n30 days.");
}
else if (month == "JULY" || month == "JUL") {
  console.log("\n31 days.");
}
else if (month == "AUGUST" || month == "AUG") {
  console.log("\n31 days.");
}
else if (month == "SEPTEMBER" || month == "SEP") {
  console.log("\n30 days.");
}
else if (month == "OCTOBER" || month == "OCT") {
  console.log("\n31 days.");
}
else if (month == "NOVEMBER" || month == "NOV") {
  console.log("\n30 days.");
}
else if (month == "DECEMBER" || month == "DEC") {
  console.log("\n31 days.");
}
else {
  console.log("\nInvalid.");
}
