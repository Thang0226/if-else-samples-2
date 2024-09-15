let bill = 0;
let step1 = 1806;
let step2 = 1866;
let step3 = 2167;
let step4 = 2729;
let step5 = 3050;
let step6 = 3151;
let GTGT = 0.08;

function calculate() {
  let num = +document.getElementById("input").value;

  if (num <= 50) {
    bill = num * step1;
  } else if (num <= 100) {
    bill = 50 * step1 + (num - 50) * step2;
  } else if (num <= 200) {
    bill = 50 * step1 + 50 * step2 + (num - 100) * step3;
  } else if (num <= 300) {
    bill = 50 * step1 + 50 * step2 + 100 * step3 + (num - 200) * step4;
  } else if (num <= 400) {
    bill =
      50 * step1 + 50 * step2 + 100 * step3 + 100 * step4 + (num - 300) * step5;
  } else {
    bill =
      50 * step1 +
      50 * step2 +
      100 * step3 +
      100 * step4 +
      100 * step5 +
      (num - 400) * step6;
  }
  bill = bill * (1 + GTGT);
  bill = Math.round(bill);

  document.getElementById("output").innerHTML = `Electrical bill: ${bill} VND.`;
}
