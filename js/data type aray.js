/*
//numbers 
var s = 12;
var d = isNaN(s);
console.log(d);

s = "pritom"
d=isNaN(s);
console.log(d);

*/

/*
//string
var x= "hello \nworld";
var y = x.length;
console.log(y)

//indexing
console.log(x[2]);
console.log(x[8]);

//upper lower case
console.log(x.toUpperCase());
console.log(x.toLowerCase());
console.log(x.trim()); // space gulo remove kore dei

//slicing
x = "Bohubrihi"
console.log(x.slice());
console.log(x.slice(1,4));
console.log(x.slice(-5,-1));

//substring
var p = "Bohubrihi"
console.log(p.substr(3,2));
console.log(p.substr(3,4));

//replace
console.log(p.replace("br", "em"));

//concat
var a="AbC"
console.log(a.concat("toT",p,"123"));

*/


/*
//Boolean
var x =10;
var y = 3;
console.log(x>y);
console.log(x<y);

console.log(Boolean(x));
var z;
console.log(Boolean(z));

var u = 10/"H";
console.log(Boolean(u));

//undefined,Null,NaN ai 3 ta jinis alada but ader Boolean type false return kore

*/


//Array
/*
//  Array part 1

//array declare
var countries = ["Bangladesh","Usa","Uk"];
console.log(countries);

//array item accesing
console.log(countries[0]);

console.log(countries[2]);
console.log(countries[1]);

//to change item in array
console.log(countries[2]="Polland");

//to add another item by using length
countries[countries.length] = "sewden";
console.log(countries);

//item insert or remove in array using push pop
console.log(countries.push("Chaina"));
console.log(countries);

console.log(countries.pop());
console.log(countries);

//to add or remove first item we have to use shift unshift

//shift() to remove first item
console.log(countries.shift());
console.log(countries);

//to add first item to use unshift()
console.log(countries.unshift("Bangladesh"));
console.log(countries);

*/


//  array part 2

//faka array declaration

var number = [];
console.log(number);
console.log(number.push(12));
console.log(number)

//split
//string split
//convert string to array

var x = "Bangladesh"
var y = x.split("");
console.log(y);

x= "Bangladesh is a country";
y= x.split("n");
console.log(y);

y= x.split(" ");
console.log(y);

x= "Bangladesh,China,Finland";
y=x.split(",");
console.log(y);

//convert array to string
var z = y.toString();
console.log(z);

//using join function to avoid coma, for using toString method()

var s = ["I","Love","Bangladesh"];
var u = s.join(" ");
console.log(u);

//array concat
var my_country = ["I","Love","Country"];
var this_country = ["and","this","is","Bangladesh"];
var concatinate = my_country.concat(this_country);
console.log(concatinate);

//sort method
//sort method returns accending order
console.log(concatinate.sort());

//reverse method
//if we want to reverse a array or anything else then firstly i have to short this array
// and then reverse in deccending order
console.log(concatinate.reverse());

