function add(a,b) {
    console.log(a + b);
}


let newObject = {
    name : "Sakthishree",
    age : 14,
    func: (a, b) => {
        console.log(a + b);
    },
};

console.log(newObject.name);
console.log(newObject.age);
newObject.func(2, 3);