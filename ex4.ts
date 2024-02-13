//boolean
let isTrue:boolean = true;
console.log(isTrue);

//any
let noName:any = "anything";
console.log(noName);

//string
let nm:string = "Tiff";
console.log(nm);

//enum
enum Color {Red = 1, Green, Blue}
let colorName: string = Color[2];
let c: Color = Color.Green;
console.log("Enum: Value of colorName is: "+colorName);
console.log("Enum: Value of c is: "+c);
console.log("Enum: Name of c is: " + Color[c]);

//number
let num:number = 2;
console.log(num);