const startNums = [-3, -2, -1, 0, 1, 2, 3];
const positiveNums = startNums.filter(num => num > 0);

console.log(positiveNums);

const availableToppings = [
    { name: "Sausage", cost: 0.50 },
    { name: "Cheese", cost: 0.0 },
    { name: "Mushrooms", cost: 1.00 },
];

availableToppings.map((topping) => { topping.checked = false; return topping; });

const numSum = startNums.reduce((total, num) => total += num);

console.log(numSum);