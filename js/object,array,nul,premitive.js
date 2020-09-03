//   object 


/*
//object declare
var student = {name:"Rahim",age:21,hometown:"Dhaka"};
console.log(student);

//object access rule1
console.log(student["name"]);
console.log(student["age"]);
console.log(student["hometown"]);

//object access part2
console.log(student.age);
console.log(student.hometown);
console.log(student.name);

//add a property
student["ocupation"] = "Student";
console.log(student);

student.village = "ranigonj";
console.log(student);

//delete object 
delete student.village;
console.log(student);

*/


//array and object mix

//array r vitor array

var arr= ["i","love",[1,2],"Bangladesh"];
console.log(arr);

console.log(arr[2][1]);

//null undefined Empty value NaN agulo note a asa


// Important topic about primitive and reference data type

//Primitive Type
// number string boolean

// deals with Value

// diference address

let a =7;
let b =a; // b = 7

a=45;
console.log(b); //so the output of b is 7 cause in first 
//it store the value of a where a is 7


//Reference Type
// array object
//deals with address
// same adrees 

let numbers = [1,2,3,4];
let newNumber = numbers;
console.log(newNumber);

numbers[1] = 500;
console.log(numbers);

console.log(newNumber);

// so here is the different between Primitive data Type and Reference data Type
//jkhn numbers a element change korlam tkhn newNumber ao same poriborton ghotbe


//Template Literals
//use Backtick
console.log(`first line
second line`);

let age = 35;

console.log(`His age is ${age}`);

let name = "Rahim";
let age_1 = 35;
let dob = "21 june 1983";

console.log(`His Name is ${name}
He is ${age_1}
His Date of Birth is ${dob}`);

let s =32;
let u =43;

console.log(`${s} + ${u} = ${s+u}`);