var house2 = {};
house2["rooms"] = 4;
house2["color"] = "pink";
house2["priceUSD"] = 12345;
console.log(house2);


console.log("----------------------------")

var car = {};
car.color = "red";
car["color"] = "green";
car["speed"] = 200;
car.speed = 100;
console.log(car);

console.log("-----------------------------------------------")

car["number of doors"] = 5
console.log(car)

console.log("-----------------------------------")

var arrOfKeys = ["speed", "color", "altitude"];
var drone = {
    speed: 100,
    altitude: 100,
    color: "red",
}
for (var i=0; i<arrOfKeys.length; i++) {
    console.log(drone[arrOfKeys[i]])
}