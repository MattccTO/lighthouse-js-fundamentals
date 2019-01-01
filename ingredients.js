var ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];
var repeat = 0;

// Write a while loop that prints out the contents of ingredients:
console.log("While loop list:");
while (repeat < ingredients.length) {
  console.log(ingredients[repeat]);
  repeat++
}

// Write a for loop that prints out the contents of ingredients:
console.log("\nFor loop list:");
for (repeat = 0; repeat < ingredients.length; repeat++) {
  console.log(ingredients[repeat]);
}

// Write any loop (while or for) that prints out the contents of ingredients backwards:
console.log("\nFor loop list backwards:");
for (repeat = (ingredients.length - 1); repeat >= 0; repeat--) {
  console.log(ingredients[repeat]);
}