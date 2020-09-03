// console.log("I am form dinajpur");
// console.log("Student of Bsmrstu!");
// document.write("js file is connected!");

// //input method
// prompt("Enter your input");

// //variable
// var a =45;
// let b ="pritom";
// a=35;

// console.log(a);
// console.log(b);

//sum of two variable
/*
var a=23;
var b=33;
var c =a+b;
console.log(c); */

/*
//constant
// constant ar value change kora jai na jeta man setai

const b= 10;
console.log(b); */

/*
//keyword
var 
const 
//aigula holo keyword jegulo javascript ar library ar sathe connected
*/

//   operator  

/*
//arithmetic operator
var a=10;
var b=20;
var c;
c=a+b;
console.log(c)
c=a*b;
console.log(c);
b=21;
c=b%a;
console.log(c);
c=a/b;
console.log(c);

//exponent
console.log(2**3);
*/

/*
//Increment operator
//a++; a=a+1; ++a;
var a=10;
var b=9;
var c=5;
c+=1;
a++;
++b;
console.log(a);
console.log(b);
console.log(c);

//difference betwen pre increment(++a) and post increment(a++)
var x=5;
var y=6;
var w,z;
w=x++; //post increment
z=++y; //pre increment

console.log(w);
console.log(x);
console.log(z);
console.log(y);

//samely for --a or a--

*/


/*
// string operator

var a = "Hello"
var b = "world"

console.log(a+" "+b);

console.log("Hello"+34+4);
console.log("hello"+"23");
console.log("76"-"3");
console.log("76"+"3"); //i think this is the weried part for js developer

console.log("45"-"pritom"); //output a NaN dekhabe,NaN=Not a Number

*/


/*
// comparision operator

var a=4;
var b=4;

console.log(a==b);

//the wired thing is
console.log(3 == "3"); //its ignore the type but it detect it as the same value of each other

//but there is a solution
console.log(3==="3"); // for triple === sign it returns false

*/


/*
//logical operator
  //or operator ||

var a = true || true;
console.log(a);

var b = true||false;
console.log(b);

var c = false|| false;
console.log(c);

  //and operator &&
var d = true && true;
console.log(d);

var e = true && false;
console.log(e);

var f = false && false ;
console.log(f);

//conditonal operator
var a =(1<8)? "Hello":"world";
console.log(a);
var a =(1>8)? "Hello":"world";
console.log(a);

*/

/*
//asignment operators

var a =10;
var b =a;
var c = a+b;
console.log(c);

var x=20;
x+=12; //this is the short cut of x=x+12;
console.log(x);

var y =8;
y -= 2; // this means y=y-2;
console.log(y);

y*=2;
console.log(y)

x /= 2;
console.log(x);

x=8;
x %= 3;
console.log(x);

var name = "Hello ";
name += "Pritom";
console.log(name);

*/

//exercise
var cel = prompt("enter your temperature in celcious: ");
var far ;
far = ((9/5)*cel + 32);
alert("Farenheight: " + far + "Degree");
console.log("task complete!");


