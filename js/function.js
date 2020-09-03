

//function

/*
//declare and parameter and argument

//Here myFunction is function name and param1 is parameter which
//receive some value from calling the function

function myFunction(param1){
    console.log(`Hello ${param1} !`);
}


//Here I call this function and pass a argument which is received
//By param1

myFunction("Bohubrihi");

*/

/*
//function parameter/argument/default parameter value/override 
//parameter value

function myFunction(fname = 'Rahim', lname='Kuddus'){
    console.log(`Hello ${fname} ${lname} !`);
}

firstname = "Pritom";
lastname = "Banerjee";

//myFunction();

myFunction(firstname,lastname);

*/


/*
//return keyword

function addNumber(a=0,b=0){
    console.log(`${a} + ${b} = ${a+b}`);
    return a+b;
    console.log("return after line doesn't executed");
}

let val = addNumber(3,6);
let val2 = addNumber(3.5,6.7);

console.log(val);
console.log(val2);

//The main theme is after use return keyword no kind of line to
//be executed in a function block.
*/


/*
//Function Expression and Arrow Function

//Normal declaration
function saySomething(name){
    console.log("Hello " + name);
}


//Function Expression
let saySomething1 = function(name1){
    console.log("Hello " + name1);
}


//Arrow Function(ES6)

let saySomething2 = (name3,name4) =>{
    console.log("I am an Arrow function " + name3 + name4);
}


saySomething("Bohubrihi");
saySomething1("Pritom");
saySomething2("Javascript ","ES6 ");

//but ami akhane () parenthesis use nao korte pari tobe
//parameter 1 tai hote hobe kom o na besi o na

*/



//Function in array Iteration

/*
//Array Iteration using forEach

var food = ["cake","ice Cream","chocolate","Brade"];

var numbers = [1,32,3,67];

//1st parameter : Item;
//2nd parameter : Index;
//3rd parameter : Whole Array;

food.forEach(function(item,i,abc){
    console.log(`Item : ${item} , Index : ${i}`);
    console.log(abc);
})
//ami chaile food.forEach()ar modhe akta variable declare kore alda
//jaigai likte pari khatai asa

*/


/*
//Array iteration using map

var food = ["cake","ice Cream","chocolate","Brade"];

var numbers = [1,32,3,67];

function addSomething(Item){
    return `Item is ${Item};`
}

let arr_square = numbers.map(function(item){
    return item*item;
})

let arr_res = food.map(addSomething);
console.log(arr_res);
console.log(arr_square);

*/

/*

//object method

let person ={
    firstname: "pritom",
    lastname: "banerjee",
    dob: "9-10-1996",

    //amra object a arr str num use korci but function use kori nai
    //so object a jkhn function use korbo tkhn ami seta k method 
    //bolte pari

    fullname: function() {
        return `${this.firstname} ${this.lastname}`;
    }
}

console.log(person.firstname);
console.log(person.fullname());

//akhane this keyword use kora mane nijer property k use kora
//bujhai this keyword use na korle just function ta k dekhabe 
//but return korbe na.

*/


/*
//Math object
let val;

val = Math.PI;
val = Math.E;
val = Math.round(3.5);
val = Math.ceil(1.1);
val = Math.floor(1.9);
val = Math.sqrt(25);
val = Math.abs(-8);
val = Math.pow(2,3);
val = Math.min(1,-8,8);
val = Math.max(1,5,4);
val = Math.random();

val = Math.floor(Math.random() * 100 + 1);



console.log(val);

*/



//Date object

/*
//to show recent date i mean today
let val;

let today = new Date();
val = today;
console.log(val);*/

//if we want to pass a parameter as a date to show what date it was

let val;

let birthday = new Date('05-08-1998 12:20:24');

console.log(birthday);

let today = new Date();
val = today.getMonth();
val = today.getDate();
val = today.getDay();
val = today.getFullYear();
val = today.getHours();
val = today.getTime();
console.log(val);