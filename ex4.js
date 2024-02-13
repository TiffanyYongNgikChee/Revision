//boolean
var isTrue = true;
console.log(isTrue);
//any
var noName = "anything";
console.log(noName);
//string
var nm = "Tiff";
console.log(nm);
//enum
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Blue"] = 3] = "Blue";
})(Color || (Color = {}));
var colorName = Color[2];
var c = Color.Green;
console.log("Enum: Value of colorName is: " + colorName);
console.log("Enum: Value of c is: " + c);
console.log("Enum: Name of c is: " + Color[c]);
//number
var num = 2;
console.log(num);
