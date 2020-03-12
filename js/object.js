"use strict"
//creat an object//

let mobilePhone = {
    type: "smartphone",
    color: "black" ,
    brand: "Nokia"
}

    console.log(mobilePhone.type);
    console.log(mobilePhone.color);
    console.log(mobilePhone.brand);
    console.log("i use " + mobilePhone.brand + mobilePhone.type);


//create a cake//

let cake = { //object//
    flavor: "carrotcake", //properties//
    price: "R69.20",
    layers: "4",
    occasion: "birthday"
};
//console sentence//
    console.log(" The cake price is " + cake.price + " it has " + cake.layers + " layers, for " + cake.occasion + " and the flavor is " + cake.flavor )

function descibe(mobilePhone)  {
    var description = "I use " + mobilePhone.brand + " its " + mobilePhone.color 
    return description;
}
console.log (descibe(mobilePhone));

//create obeject and describe as propertie//

let movies = {
    name: "Twilight",
    genre: "fantecy",
    year: "2008",
    length: "3hrs",
    describe: function() {
        var description =" The " + this.name + " is a " + this.genre + " movie, its " + movies.length + " long, and it came out on the year " + movies.year  + " and the rescriction is " + movies.ageRestriction; 
        return description; 
    },
    ageRestriction: "18" //add the line//
};
console.log(movies.describe());

//function creatict another object from prototype//
var anObject = {
    a: 2
}

var anotherObject = Object.create(anObject);

console.log(anotherObject.a)
console.log(anotherObject.b)

//Pastry is the prototype//
let Pastry = {
    type: "",
    flavor: "",
    price: "",
    layers: "",
    occasion: "",
    describe: function() {
        var description =" The cake price is " + cake.price + " it has " + cake.layers + " layers, for " + cake.occasion + " and the flavor is " + cake.flavor,
        return description; 
    },

}

//muffin, cookie, and cake are object created from pastry//
let muffin = Object.create(Pastry);
muffin.type = "";
muffin.flavor = "";
muffin.price = "";
muffin.layers = "";
muffin.occasion = "";

let muffin = Object.create(Pastry);
muffin.type = "";
muffin.flavor = "";
muffin.price = "";
muffin.layers = "";
muffin.occasion = "";

let muffin = Object.create(Pastry);
muffin.type = "";
muffin.flavor = "";
muffin.price = "";
muffin.layers = "";
muffin.occasion = "";

console.log
console.log
console.log

//initiallize the pastry//
//the method init() takes the initial property values of the pastry as parameter. The pastry creation code is therefore reduced to ony 2 steps

init function(type, flavor, layers, price, occasion) {
    this.type = type;
    this.flavor = flavor;
    this.layers = layers;
    this.price = price;
    this.occasion = occasion;

};


//dectribe the pastry//
descibe: function() {
};

let muffin = Object.create(Pastry);
muffin.init("muffin", "blueberry", 1, "R20", "breakfast");

let muffin = Object.create(Pastry);
muffin.init("muffin", "blueberry", 1, "R20", "breakfast");

let muffin = Object.create(Pastry);
muffin.init("muffin", "blueberry", 1, "R20", "breakfast");

console.log(muffin.bake());
console.log(muffin.bake());
console.log(muffin.bake());

//

