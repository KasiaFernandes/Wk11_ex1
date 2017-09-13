function Phone(brand, price, color) {
    this.brand = brand;
    this.price = price;
    this.color = color;
}

Phone.prototype.printInfo = function() {
    console.log(`The phone brand is ${this.brand}, color is ${this.color}, and the price is ${this.price}.`);
}

var iPhone6 = new Phone("Apple", 2250, "silver");
iPhone6.printInfo();

var SamsungGalaxyS6 = new Phone("Samsung Galaxy S6", 2000, "black");
SamsungGalaxyS6.printInfo();

var OnePlusOne = new Phone("OnePlusOne", 1500, "pink");
OnePlusOne.printInfo();