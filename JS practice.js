console.log("RAIMA ASGHAR");


//Variables
fullName = "Raima";
price = 99.99;
x = null;            //Empty value
y = undefined;       // Unknown value
console.log(x);


// Boolean values
isFollow = false;
console.log(isFollow);


// let : Only Can be updated not re declared
let name = "Aman";
let age = 20;
//let age = 19;       can't do this.
console.log(age);


// var : Can be updated and re declared
var price = 24;
var price = 47;
console.log("New price" , price);


// const : Can't be updated or redeclared
const pencils = 5;
const PI =3.14;
console.log("Pencils", pencils);
console.log("PI" , PI); 

//Data types:
//Primitive : Number, string, boolean, Undefined, Null, BigInt, Symbol
//Non Primitive : Objects, arrays, functions
// We can check it by writing : typeof output 


//FOR DECLARING OBJECTS:

const student = {
    fullName : "Raima Asghar",       // key : value
    age : 18,
    cgpa : 3.8,
    isPass : true,
};
console.log("CGPA" , student["cgpa"]);       // For Access key values  OR
console.log(student.age);


//For update value in objects
student["age"] = student["age"] + 1
console.log(student.age);
student["fullName"] = "Nazahat kanwal";
console.log(student.fullName);

// OPERATORS
// ARITHMETIC OPERATOR:
let a = 5;
let b = 2;
console.log("a = " , a, "& b = " , b);
console.log("a + b = " , a + b);
console.log("a - b = " , a - b);
console.log("a * b = " , a * b);
console.log("a / b = " , a / b);
console.log("a % b = " , a % b);
console.log("a ** b = " , a ** b);          // Exponanciation : 5 power 2
a++;                                        //Increment
console.log("a =", a)
b--;                                        //Decrement
console.log("b = ", b)


//ASSIGNMENT OPERATORS:
let c =5;
console.log("c += 4" , c+=4);
console.log("c -= 4" , c-=4);
console.log("c *= 4" , c*=4);
console.log("c /= 4" , c/=4);
console.log("c **= 4" , c**=4);


//COMPARISON OPERATORS:
let d = 5;
let e = 2;
let f = "5";

console.log("5 == 2", d == e);
console.log("5 != 2", d != e);
console.log("5 == string 5", d == f);            //Not check datatype
console.log("5 === string 5", d === f);          // Check datatype also
console.log("5 !== string 5", d !== f);

console.log("5 > 2", d > e );
console.log("5 < 2", d < e );
console.log("5 <= 2", d <= e );
console.log("5 >= 2", d >= e );


// LOGICAL OPERATORS
console.log("cond1 && cond2 = ", d < e && e === 2);     
console.log("cond1 && cond2 = ", d > e && e === 2);

console.log("cond1 || cond2 = ", d < e || e === 2);
console.log("cond1 || cond2 = ", d > e || e === 2);

console.log("!(5 < 2) = ", !(a < b));
console.log("!(5 > 2) = ", !(a > b));


//CONDITIONAL STATEMENTS

let money = 25;
if (money > 18){
    console.log("You can buy this");
} if (money < 18){
    console.log("You can't buy");
}

// IF-ELSE CONDITION 

let balls = 15;
if (balls > 18){
    console.log("You can play this");
} else {
    console.log("You can't play");
}

// Example 2
let num = 1;
if(num%2 === 0){
    console.log("Even number");
} else {
    console.log("Odd number");
}

// IF ELSE IF STATEMENT
let lifeTime = 69;
if(lifeTime < 18 ){
    console.log("Junior");
} else if(lifeTime > 60){
    console.log("Senior");
} else {
    console.log("Middle");
}


// TERNARY OPERATORS
let epoch = 25;
let result = epoch >= 18 ? "Adult" : "Not adult";
console.log(result);


// Additional points

// alert("hello");            //Gives popup for one time
// prompt("hello");           //also take  input


// PRACTICE QUESTION 

// let number = prompt("Enter a number");
// if(number % 5 === 0){
//     console.log(number , " is a multiple of 5 ");
// } else {
//     console.log(number , " is not multiple of 5");
// }

// LOOPS IN JS


//FOR LOOP 
for( let i = 1; i <= 5; i++) {
    console.log(i);
}
console.log("Loop ended");
// EXAMPLE 2
let sum = 0;
for( i = 1; i <= 5; i++){
    sum = sum + i;
}
console.log("Sum = ", sum);


// WHILE LOOP
let n = 3;
while( n <= 10){
    console.log("Javascript");
    n++;
}


// DO-WHILE LOOP
let k = 5;
do{
    console.log("Love JS");
    k++;
} while (k <= 10);


// FOR-OF LOOP
let string = "RaimaAsghar";               //Used for strings & Arrays
let size = 0;
for(let j of string){
    console.log("j = ", j);
    size++;
}
console.log("String size = ", size);


// FOR-IN LOOP
// let pupil = {                            // Used for objects and also arrays
//     nickName : "Roma",
//     uni: uaf,
//     gpa : 4.0,
// };
// for (let key in pupil) {
//     console.log("key = ", key, "value = ", pupil[key]);
// }                                                          error


// STRINGS IN JAVASCRIPT:
let str = "JavaScript";            //create strings
console.log(str);
console.log(str.length);           //length of strings
console.log(str[0]);
console.log(str[5]);               //string indices


//TEMPLATE LITERALS
let specialString = `This is a template literal`;
console.log(specialString);

//EXAMPLE
let obj = {
    item : "pen",
    cost : 10,
};
let output = `The cost of ${obj.item} is ${obj.cost} rupees.`;
console.log(output);

//string interpolation
let spStr = `This is a template literal ${1 + 2 + 3}`;       
console.log(spStr);

//ESCAPE CHARACTERS
console.log("Sid \n Mal ");                  // Length of \n is 1. Also len of \t is 1.
console.log("Sid \t Mal ");

//STRING METHODS IN JS              // IMP : Strings are immutable. Can't change dynamically. We can create new string. Or can use only replace method(Below).
let String = "    UniversityCampus    ";
console.log(String);
console.log(String.toUpperCase());
console.log(String.toLowerCase());
console.log(String.trim());                 // Remove spaces from start and end

String = "abcdefgh";
console.log(String.slice(1 , 5));          // Retirn slices through index
console.log(String.slice(2));

let str1 = "Raima";                        // Joins strings 
let str2 = "Komal";
console.log(str1.concat(str2));
console.log(str2.concat(str1));
console.log(str1 + str2);

str = "Hello";                             // Replace words
console.log(str.replace("H" , "m"));
console.log(str.replace("lo" , "p"));

str = "hellololo";                           //Replace all matched words
console.log(str.replaceAll("lo" , "p"));  
console.log(str.replace("lo" , "p"));

str = "IloveJS";
console.log(str.charAt(3));                 // Find char at any index


// ARRAYS

let marks = [21, 32, 22, 23, 30];          // IMP : type of array is Object.
console.log(marks);
console.log(marks.length);

console.log(marks[1]);                     // For accessing value at any index

marks[1] = 4;
console.log(marks[1]);                     // IMP : Arrays r mutable. we can change value.

// LOOPING OVER ARRAYS
//FOR-LOOP

let heroes = ["ironman" , "hulk" , "thor" , "spiderman"]
for( let r = 0; r < heroes.length; r++ ){
    console.log(heroes[r]);
}
//FOR-OF LOOP

for(let hero of heroes){
    console.log(hero);
}


//ARRAYS METHODS: BUT NOT CHANGE ORIGINAL ARRAY EXCEPT SPLICE METHOD

let foodItems = ["potato", "apple", "chips", ];
console.log(foodItems);
//PUSH
foodItems.push("litchi", "burger");                  //Add at end
console.log(foodItems);
//POP
foodItems.pop();                                     //Delete from end
console.log(foodItems);

console.log(foodItems.toString());                   //Change array to string
//CONCAT 
console.log(heroes.concat(foodItems));               //Combine two arrays
//UNSHIFT
console.log(heroes.unshift("Baby"));                 //Add at start
//SHIFT
console.log(heroes.shift());                         //Delete from start & return also.
//SLICE METHOD
console.log(heroes.slice(2,4));                      // Get any indices value

//SPLICE 
//splice(start index, delete items, new elements)
let arr = [1,2,3,4,5,6,7];
console.log(arr.splice(2, 2, 101, 102));                  //error






//FUNCTIONS:
function myFunction(){
    console.log("hyyyyyyyyyyyyyyyyyyyyyy");
    console.log("helooooooooooooooooooooo");
}
myFunction();                                            //Funtion call / Invoke
myFunction();

//FUNCTION WITH PARAMETERS:

function fun(msg){
    console.log(msg);
}
fun("I m tired");                            //argument passed

//TO CALCULATE SUM:

function add(x,y){
    //local variables
    s = x + y;
    return s;
}
add(3,6);
console.log(s);


//ARROW FUNCTION
const arrowMul = (a , b) => {
    console.log(a * b);
}
console.log(arrowMul);
arrowMul(3 , 10);

//Example without parameters
const printHello = () => {
    console.log("Hello");
}
printHello();

// IMP : In JS functions can be passed as parameters. Ans also can be return.
// CALLBACK FUNCTION: A fun passed as an argument to another function.

// Higher order function: which use another fun as parameter . Or return another function as value. e.g. FOR EACH 
//METHOD : ForEach Loop in Arrays

let array = [1 , 2, 3, 4, 5, 6];
array.forEach(function printVal(val){
console.log(val);
});

let arrr = ["BRW" , "FSD" , "LHR"];
arrr.forEach((val , idx , arrr) => {         // 3 Parameters
    console.log(val , idx , arrr);
});


//SOME MORE ARRAY METHODS
//MAP:                       =>DIFF: It Return new array. But not foreach returns new array.
let nums = [67, 22, 39];
let newArr = nums.map((val) => {
 return val * 2;                      // It will return new array with double values
});
console.log(newArr);

//FILTER
let ar = [1 , 2, 3, 4, 5, 6 ,7, 8,  9];
let evenArr = ar.filter((val) => {                   //Creates new array on checking condition
    return val % 2 === 0;
});
console.log(evenArr);






