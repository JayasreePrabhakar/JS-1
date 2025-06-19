function hello() {
    console.log("Hello Jayasree");
}

hello();

function add(a, b){
    console.log(a+b);
}

add(1, 2);

function displayAnotherFunction(func) {
    func(1,2);
}

displayAnotherFunction(add);//Higher order functions

let varFunc = add;
varFunc(1, 4);//can avoid console.log here

let newFuncVar = function () {
    console.log("Variable Function");
};//Anonymous functions inside a variable  

newFuncVar();//Straight away declaring the function

//Arrow functions
const arrowFuncVar = () => {
    console.log("Arrow functions");
};

arrowFuncVar();//here the "let" keyword can be changed to "CONST", in order to maintain the same


//Filter, Map, Reduce 
//Filter
let nums = [1, 2, 3, 4, 5];

let evens = nums.filter((n) => {//((n) => n % 2 === 0); can give without any parameters , because its single line not a multi line one
    return (n % 2 === 0);
});

console.log(evens);


let newList = [];
for (let i =0;i < nums.length; i++) {
    if(nums[i]%2 === 0) {
        newList.push(nums[i]);
    }
}
console.log(newList);

//Maps
console.log("Using Map method")
let squares = nums.map((n) => {
    return n * n;
});
console.log(squares);

//Reduce method
//for calculating, and to give singular output
console.log("Using Reduce method");
let newSum = nums.reduce((sum, n) => {
    return sum + n;
}, (sum = 0));
console.log(newSum);

