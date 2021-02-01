/*
let finalPrice = 0
let discountPrice = 0
let dicountPercentage = 20

function foodShopDiscount (cart) {
    for (i = 0; i < cart.length; i++) {
            discountPrice += cart[i].price * cart[i].quantity
            finalPrice = discountPrice * dicountPercentage / 100
            return discountPrice - finalPrice.toFixed(2)
            } else {
                totalPrice2 += cart[i].price * cart[i].quantity
            } 
        }
    }
    */
totalPrice1 = 0

    function foodShopDiscount (cart) {
        for (i = 0; i < cart.length; i++) {
            if (cart[i].type === "food") {
                let discount = (cart[i].price * 20 / 100 );
                totalPrice1 += (cart[i].price - discount) * cart[i].quantity
            } else {
                totalPrice1 += + cart[i].price * cart[i].quantity
            }
        }
            
            return totalPrice1
        }

console.log(foodShopDiscount(shoppingCart))
