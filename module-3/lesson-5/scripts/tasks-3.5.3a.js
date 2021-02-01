function discountType (arr, discountAmount, type) {
    let totalPrice1 = 0;
        for (index = 0; index < arr.length; index++) {
                if (arr[index].type === type) {
                    let discount = (arr[index].price * discountAmount / 100 );
                    totalPrice1 += (arr[index].price - discount) * arr[index].quantity
                } else {
                    totalPrice1 += + arr[index].price * arr[index].quantity
                }
            }
            return totalPrice1
        }

console.log(discountType(shoppingCart,20,"home"))


/*
1. Take your function from the previous task 3.5.2 and copy it into your javascript file
  
  2. Add 2 extra arguments to the function for “discountAmount” and “type”


  3. Replace the logic that takes off 20% for object.type == “food” for object.type == type and allow the 20% to be the {discountAmount}%

  4. Create logic so that if type == “any” all products have a discount applied

  4. Return the totalPrice Variable

  5. console.log the returned value
  
  3. Commit your changes

  4. Push your changes to remote
*/