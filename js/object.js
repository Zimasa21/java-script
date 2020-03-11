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