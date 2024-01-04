var cardQuantity = "";

function cart() {
  cardQuantity = cardQuantity + 2;
  document.querySelector(
    ".card-quant"
  ).innerHTML = `Card Quantity: ${cardQuantity}`;
  return cardQuantity;
}

cardQuantity = cart();

function cart1() {
  cardQuantity = cardQuantity + 3;
  document.querySelector(
    ".card-quant"
  ).innerHTML = `Card Quantity: ${cardQuantity}`;
  return cardQuantity;
}
