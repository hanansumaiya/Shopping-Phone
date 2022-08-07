function updateProduct(product, price, isIncrease) {
  const phoneNumberValue = document.getElementById(product + "-number");
  let phoneNumber = phoneNumberValue.value;
  if (isIncrease) {
    phoneNumber = parseInt(phoneNumber) + 1;
  } else if (phoneNumber > 0) {
    phoneNumber = parseInt(phoneNumber) - 1;
  }
  phoneNumberValue.value = phoneNumber;
  const phoneTotal = document.getElementById(product + "-total");
  phoneTotal.innerText = phoneNumber * price;
  //////
  calculateTotal();
}
function getInput(product) {
  const productNumber = document.getElementById(product + "-number");
  const productValue = parseInt(productNumber.value);
  return productValue;
}
function calculateTotal() {
  const phoneTotal = getInput("phone") * 100;
  const caseTotal = getInput("case") * 20;
  const subtotal = phoneTotal + caseTotal;
  const tax = (subtotal * 10) / 100;
  const total = subtotal + tax;
  document.getElementById("subtotal").innerText = subtotal;
  document.getElementById("tax").innerText = tax;
  document.getElementById("total").innerText = total;
}
/////
/////phone
document.getElementById("phone-plus").addEventListener("click", function () {
  updateProduct("phone", 100, true);
});
document.getElementById("phone-minus").addEventListener("click", function () {
  updateProduct("phone", 100, false);
});
///////case
document.getElementById("case-plus").addEventListener("click", function () {
  updateProduct("case", 20, true);
});
document.getElementById("case-minus").addEventListener("click", function () {
  updateProduct("case", 20, false);
});
