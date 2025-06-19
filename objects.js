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


//De-structuring:
function getDetails() {
    let person = {
        name: "Jayasree",
        age: 25,
    };
    return person;
}

//let returnValue = getDetails();//manually done
//let name = returnValue.name;//no need
//let age = returnValue.age;//no need

//et { newName, newAge } = getDetails();


//using spread operators
let person = {
     name: "Jayasree",
     age: 25,
};

let newDetails ={
    ...person,
    role: "developer",
    company: "ABC Pvt Ltd",
    isMarried: false,
    salary: 2.5,
};

console.log(newDetails);

