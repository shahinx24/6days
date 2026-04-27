// Cart total using reduce
let cart = [
  { name: "Shirt", price: 500 },
  { name: "Shoes", price: 1500 },
  { name: "Cap", price: 300 }
];
let total = cart.reduce((a,c)=>a+c.price,0)
console.log(total)
// 2300