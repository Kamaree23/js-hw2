//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
};

favfood =  (person3) => {
    for(p in person3){
        console.log(p)
    }

};
favfood(person3)

//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype
class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    };

    printInfo(){
        console.log(`${this.name} is ${this.age} and i can not increase this...`);
    };
    ager(){
        this.age += 1;
        console.log(`level up! Happybirthday ${this.age}`)
    }
};
let user = new Person('Johnny', 21)
user.printInfo();
user.ager();
let oldie = new Person('Sharon', 88)
oldie.printInfo();
oldie.ager()
oldie.ager()
oldie.ager()
let persona1 = new Person('Kamaree Robinson', 22)

console.log(persona1.printInfo)


// Use an arrow to create the printInfo method

// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 


// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/

let stringof = (stg) => {
    return new Promise((resolve, reject)=> {
        if (stg.length > 10){
            resolve(stg);
        }else {
            reject(stg);
        }
    })
    .then( (result) => {
        console.log(`${result} is a Big word`);
    }) 
    .catch( (result) => {
        console.log (`${result} is a Small Number`)
    })
}


let biggie = new stringof('yo whats up!')
let smallie = new stringof('byebye')
