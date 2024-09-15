let rate1 = 0.05;
let rate2 = 0.1;
let rate3 = 0.15;
let rate4 = 0.2;
let rate5 = 0.25;
let rate6 = 0.3;
let rate7 = 0.35;

function calculate() {
  let total = +document.getElementById("total-income").value;
  let exempt = +document.getElementById("exempt").value;
  let deduct = +document.getElementById("deduct").value;
  let amount = total - exempt - deduct;
  let tax;

  if (amount <= 60) {
    tax = amount * rate1;
  } else if (amount <= 120) {
    tax = 60 * rate1 + (amount - 60) * rate2;
  } else if (amount <= 216) {
    tax = 60 * rate1 + 60 * rate2 + (amount - 120) * rate3;
  } else if (amount <= 384) {
    tax = 60 * rate1 + 60 * rate2 + 96 * rate3 + (amount - 216) * rate4;
  } else if (amount <= 624) {
    tax =
      60 * rate1 +
      60 * rate2 +
      96 * rate3 +
      168 * rate4 +
      (amount - 384) * rate5;
  } else if (amount <= 960) {
    tax =
      60 * rate1 +
      60 * rate2 +
      96 * rate3 +
      168 * rate4 +
      240 * rate5 +
      (amount - 624) * rate6;
  } else {
    tax =
      60 * rate1 +
      60 * rate2 +
      96 * rate3 +
      168 * rate4 +
      240 * rate5 +
      336 * rate6 +
      (amount - 960) * rate7;
  }
  tax = Math.round(tax * 1000) / 1000;

  document.getElementById(
    "output"
  ).innerHTML = `Thuế phải nộp: ${tax} triệu VND.`;
}
