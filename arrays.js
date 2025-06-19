fruits = ["apple", "watermenol" , "grapes"];
console.log("Original Array:");
console.log(fruits);

fruits.push("kiwi");
console.log("Array after Push operation:");
console.log(fruits);

fruits.pop();
console.log("Array after Pop operation:");
console.log(fruits);

console.log("Accessing the 1st and Last element:");
console.log(fruits[0]);
let size = fruits.length;
console.log(fruits[size - 1]);

//shift and unshift
console.log("Array after unshift operation:");
fruits.unshift("cherry");
console.log(fruits);


console.log("Array after shift operation:");
fruits.shift();
console.log(fruits);

//Removing the middle element
console.log("Array after splice operation:")
let removedElement = fruits.splice(1,1);
console.log(fruits);

fruits.push("Orange");
fruits.push("Banana");
fruits.push("Mango");
console.log("Accessing an arry using Loop:")
for(let i = 0; i < fruits.length; i++){
    console.log(fruits[i]);
}