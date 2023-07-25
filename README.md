# Object Literals and the Brackets Notation

By the end of this reading, you'll be able to:
- Explain how to build objects using the brackets notation
- Explain that with the brackets notation you can use the space character inside the keys, since the property keys are strings
- Explain that the keys inside the brackets notation are evaluated.

The alternative syntax to object notation is known as brackets notation.

~~~
var house2 = {};
house2["rooms"] = 4;
house2["color"] = "pink";
house2["priceUSD"] = 12345;
console.log(house2); 

// {rooms: 4, color: "pink", priceUSD: 12345}
~~~

When using bracket notation, wrap each property's key as a string, inside either the single or double quotes - just like with regular strings.
Then wrap the entire property key into an opening and a closing square bracket.

You can both access and update properties on objects using either the dot notation ,or the brackets notation, or a combination of both, like in the following example.

~~~
var car = {};
car.color = "red";
car["color"] = "green";
car["speed"] = 200;
car.speed = 100;
console.log(car);

// {color: "green", speed: 100}
~~~

With the brackets notation, you can add space characters inside the property names, like this:
~~~
car["number of doors"] = 4;
console.log(car);

// {color: 'green', speed: 100, number of doors: 5}
~~~

Additionally, you can add numbers (as the string data type) as property keys:
~~~
car["2022"] = 1901;
console.log(car); 

// {2022: 1901, color: 'green', speed: 100, number of doors: 5}
~~~

Doing this is however discouraged, due to the obvious reasons of having a property key as a number string not really conveying a lot of useful information.

Bracket notation can also evaluate expressions
~~~
var arrOfKeys = ["speed", "altitude", "color"];
var drone = {
    speed: 100,
    altitude: 100,
    color: "red"
}
for (var i=0; i<arrOfKeys.length; i++) {
    console.log(drone[arrOfKeys[i]])
}
~~~

The above code will result in the following output:
~~~
100
200
red
~~~

Using the fact that brackets notation can evaluate expressions, you can access the arrOfKeys[i] property on the drone object.

This value changed on each loop while the for loop was running.

The first time it ran, it was evaluated like this:
- The value of i was 0
- The value of arrOfKeys[i] was arrOfKeys[0], which was "speed"
- Thus, drone[arrOfKeys[i]] was evaluated to drone["speed"] which was equal to 100
This allows you to loop over the values stored inside the drone object, based on each of its properties' keys.