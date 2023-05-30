let itemsCart = [];
let totalPrice = 0;

function addToCart(cardId) {
  var cardElement = document.getElementById(cardId);
  var productName = cardElement.querySelector(".productName").innerHTML;
  var productPrice = cardElement.querySelector(".productPrice").innerHTML;

  console.log(productName + " " + productPrice);

  let product = {
    name: productName,
    price: productPrice,
    quantity: 1
  };

  let productToFind = itemsCart.find(item => item.name === productName);
  if (productToFind) {
    productToFind.quantity++;
    totalPrice += productToFind.price;
  } else {
    itemsCart.push(product);
    totalPrice += productPrice;
  }
  console.log(JSON.stringify(itemsCart));

}
