let totalPrice = 0
function foodShopForInLoop (cart) {
  for (const price in shoppingCart) {
    totalPrice += shoppingCart[price].price * shoppingCart[price].quantity
  }
  return totalPrice
}
console.log(foodShopForInLoop(shoppingCart).toFixed(2))


  let totalPrice2 = 0
  function foodShopForLoop (cart) {
    for (i = 0; i < cart.length; i++) {
    totalPrice2 += cart[i].price * cart[i].quantity
    }
    return totalPrice2
  }
  console.log(foodShopForLoop(shoppingCart).toFixed(2))