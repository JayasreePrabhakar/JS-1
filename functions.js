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