'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  orderDelivery: function ({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(`order received! ${starterIndex} ${mainIndex} ${time} ${address}`)
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(ing1, ing2, ing3)
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  }
};

//ARRAY
let arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['i', 'j', 'k', 'l', 'm']
//SLICE
arr.slice(2) // [c,d,e]
arr.slice(2, 4) //[c,d]
arr.slice(-2) //[d,e]
arr.slice(-1) // [e]

//REVERSE - MUTATE
arr.reverse() //[e,d,c,b,a] 

//CONCAT
const letters = arr.concat(arr2) // = [...arr,...arr2]

//JOIN
letters.join('-') // a-b-c-d-e-f-g-h-i-j-k-l-m

//GETTING LAST ELEMENT
arr[arr.length - 1];
arr.at(-1)

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300]
//FOR OF
for (const movement of movements) {
  if (movement > 0) {
    console.log(movement)
  } else {
    console.log(movement)
  }
}

//FOREACH
movements.forEach(function (movement) {
  if (movement > 0) {
    console.log(movement)
  } else {
    console.log(movement)
  }
})



const menu = [...restaurant.starterMenu, ...restaurant.mainMenu]

for (const item of menu) {
  console.log(item);
}

for (const item of menu.entries()) {
  console.log(item);
}

console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours.fri?.open);

const properties = Object.keys(restaurant.openingHours);
console.log(properties);

for (const day of Object.keys(properties)) {
  console.log(day)
}

const values = Object.values(restaurant.openingHours)
console.log(values)

const entries = Object.entries(restaurant.openingHours);

for (const [key, { open, close }] of entries) {
  console.log(key, open, close)
}

/* 
//Destructuring
const array = [1, 2, ...[3, 4]]

const [a, b, ...others] = [1, 2, 3, 4, 5]
console.log(a, b, others);

const [pizza, , risotto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu]
console.log(pizza, risotto, otherFood);

//Objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays)


//2 Functions
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i]
  }
  console.log(sum)
}
add(2, 3)
add(5, 3, 7, 2)

const x = [23, 5, 7]
add(...x)

restaurant.orderPizza('mushrooms', 'onion', 'olives')
//Destructuring Object
const arr = [7, 8, 9];
const newArr = [1, 2, ...arr]
console.log(newArr)

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu)

//Copy Array
const mainMenuCopy = [...restaurant.mainMenu];

//Join Array
const joinMenu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(joinMenu)

//Iter
const str = 'Jonas'
const letters = [...str, ' ', 'S.']
console.log(letters)
console.log(...letters)

// const ingredients = [prompt('make pasta! Ingredient 1'), prompt('Ingredient 2'), prompt('Ingredient 3')];
// console.log(ingredients)

//iter obj
const newRestaurant = { ...restaurant, founder: 'Guiseppe' }
console.log(newRestaurant)

//Copy
const restaurantCopy = { ...restaurant }
restaurantCopy.name = 'Ristorante roma';
console.log(restaurantCopy.name)
console.log(restaurant.name)

//Destructuring Object
restaurant.orderDelivery({
  time: '22:30',
  address: 'ST Toronto',
  mainIndex: 2,
  starterIndex: 2
})


const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories)

const { name: restaurantName, openingHours: hours, categories: tags } = restaurant
console.log(restaurantName, hours, tags)

const { menu = [], starterMenu: starters = [] } = restaurant
console.log(menu, starters)

// Mutating
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj);
console.log(a, b)

//nested obj
const { fri: { open: o, close: c } } = openingHours;
console.log(o, c)

// Destructuring array
let [main, , secondary] = restaurant.categories
console.log(main, secondary);

[main, secondary] = [secondary, main]
console.log(main, secondary);

const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse)

const nested = [2, 4, [5, 6]];
const [i, , [j, k]] = nested
console.log(i, j, k)

const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r)

*/