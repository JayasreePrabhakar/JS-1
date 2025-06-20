let basketball = Math.round(20.95 * 100);
let tshirt = Math.round(7.99 * 100);
let toster = Math.round(18.99 * 100);
let shipping = Math.round(4.99 * 100);//Without multiplying with 100 can give the value directly like 2095

let costOfallProducts = basketball + tshirt + toster;
console.log((costOfallProducts / 100).toFixed(2));

let addShipping = costOfallProducts + shipping;
console.log((addShipping / 100).toFixed(2));

let addTax = Math.round(addShipping * 0.10);
console.log((addTax / 100).toFixed(2));

let finalOrder = addShipping + addTax;
console.log((finalOrder / 100).toFixed(2));