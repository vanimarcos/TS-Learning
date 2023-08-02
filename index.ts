/*
This is a multiline comment in Typescript 

*/

// this is a single line comment 


// Variable and data types

var myName:string = "Andrew Tate";
// print out the name var 
console.log(myName) // semicolons are optionals in Typescript

// Primitive data types

var numberOfComputers: number = 12;

var areAllGood: boolean = false;

var nameOfComputerBrand = "MSI";

// The are also composed data types such as:

// Arrays and

var listOfComputersBrands:Array<string> = ["HP", "MSI", "Apple Macbook", "Dell"];

console.log(listOfComputersBrands);


// objects

var computers: object = { "brand": nameOfComputerBrand, "state": areAllGood, "qty": numberOfComputers};

console.log(computers)

// any type

var obj:any={foo : "bar"};

console.log(obj.bar);

// Functions/Methods 

const names = ["Alice", "Bob", "Eve"];

//iterate through a function

names.forEach((s) => {
    console.log(s.toUpperCase());
})


function printCoordinates(pt:{lat:number, lng:number}){
    console.log(pt);
}

printCoordinates({lat:1245.45, lng:22355.566});


// Union types


function printid(id: number | string){
    console.log("your Id is :", id);
}

printid(101);
printid("202");
//Error 
//printid({myID: 13245});


type Point1 = {
    lat: number,
    lng: number
}

interface Point2 {
    lat: number,
    lng: number,
    obs: String 
}


function printCoords(pt: Point1 | Point2){
    console.log(pt)
}

printCoords({lat:23.534, lng:256.5});
printCoords({lat:23.534, lng:256.5, obs: "This is an observation"});


// there is tuples that enable storing multiple fields
// syntax var tuple_name = [value1, value2, value3]
var tuple_name = ["Hello", 5];

// to access the value of tuple use the syntax tuple_name[index]

console.log(`The word ${tuple_name[0]} has ${tuple_name[1]} letter(s)`);


// Tuple operations 
var another_tuple = [10, "Hello", "World", "Typescript"];
console.log("Items before the push " + another_tuple.length);

another_tuple.push("Version", "5.1.6");

console.log("Items after push " + another_tuple.length);

console.log(another_tuple.pop() + " The last item was removed");

// Destructuring a tuple, use this syntax:
var new_tuple = [10, "Hello"];
var [b, c] = new_tuple;

console.log(b, c);

//functions in typescript 
//syntax function function_name(param1[:type], param2[:type]){}

function addValues(value1:number, value2:number){
    return value1 + value2;
}

console.log("Add two values 12 and 10 is: " + addValues(12, 10));

var addedValues = function(a:number, b:number) {
    return a + b; 
}
// Lambda Function 
var secondAddedValues = (a:number ,b:number) => {
    return a + b;
}

console.log(addValues(12, 10));
console.log(secondAddedValues(12, 10));

// recursive function in Typescript 


function factorial(number:number) {
    if (number <= 0) return 1;
    return (number * factorial(number - 1))
}


console.log(factorial(10));









