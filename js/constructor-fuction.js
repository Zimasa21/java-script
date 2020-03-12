"use script "
//contructor- function
//function Pastry(type, flavor, layers, price, occasion) {
   // this.type = type;
   // this.flavor = flavor;
   //this.layers = layers;
    //this.price = price;
    //this.occasion = occasion;

//}
//Pastry.prototype.descibe = function () {
   // var description ="The " + this.type + " is a " + this.occasion + "pastry, has a " + this.flavor + " flavor, " + " layer(s), and costs " + thsi.price + "",
    //return description;

//};

//let muffin = new Pastry("muffin", "blueberry", 1, "R20", "breakfast");

//console.log(muffin.descibe());

function FurnitureStore(type, color, design, price, image){
   this.type = type;
   this.color = color;
   this.material = material;
   this.price = price;
   this.image = image;

} 

FurnitureStore.prototype.describe = function () {
    var description ="This" + this.type + "cost" + this.price + "its" + this.color + "also made with" + this.material + "see the picture next";
    return description;

let couch = new FurnitureStore("couch", "red", "leather", "R3999.00", "//http.imag//",);
console.log(couch.describe());

let WashingMachine = new FurnitureStore("couch", "red", "leather", "R3999.00",);
console.log(couch.describe());

let TVstand = new FurnitureStore("couch", "red", "leather", "R3999.00",);
console.log(couch.describe());

    
}