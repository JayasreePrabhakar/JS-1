//floats and data types
let a = 9
let b = 10
console.log(a + b);

let c = 8.5
let d = 9.5
console.log(c + d);

let res = Math.round((a + b) / 10).toFixed(5);
console.log(res);

let res2 = ((c + d) / 10).toFixed(2);
console.log(res2);

let para = "This is my wed development class!";
let int = 5490;
console.log(para);
console.log(int);

//typing
console.log("33" + 55);
console.log("33" - 55);

console.log("A" + 2);
console.log("A" - 2);

//operators
console.log(a > b && a < b);
console.log(a > b || a < b);

//conditionals
if(a >= 20){
    console.log("Falsy value");
}else{
    console.log("True");
}

//loops
while (a > 10){
    if (a === 5){
        a++;
        continue;
    }
}

//arrays
Disney = ["Rapenzul" , "Frozen" , "Mulan" , "Belle"];
console.log("Original array:");
console.log(Disney);

Disney.push("Aurora");
console.log("Array after push:");
console.log(Disney);

Disney.pop();
console.log("Array after pop operation:")
console.log(Disney);

console.log("2nd element:")
console.log(Disney[1]);
