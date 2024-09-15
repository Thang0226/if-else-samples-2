function calculate() {
  let amount = +document.getElementById("amount").value;
  let rate = +document.getElementById("rate").value;
  let num = +document.getElementById("num-month").value;

  let total = amount * Math.pow(1 + rate / 100, num);
  let interest = total - amount;
  interest = Math.round(interest);

  document.getElementById(
    "output"
  ).innerHTML = `Total interest = ${interest} VND.`;
}
