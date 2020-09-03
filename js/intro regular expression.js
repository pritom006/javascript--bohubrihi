//Regular Expression

//Pattern Matching Technique

//jkhn kono website a dhokar somoy mail id chai tkhn mail idr patter ta kamn hobe
//seta suggest kore.abar amra jodi mbl number ar jaigai text dei tkhn o akta suggestion asa
//so string ar akta pattern khoje ai regular expression ar madhomme


//declaration of regular expression

let re;
let str;

re = /Hello/; //akhane first slash and 2nd slas ar majhe ja thkabe tai regular expression
re =/hello/i; //i = case insensitive.
console.log(re);
//if we want to see without slash then
console.log(re.source);

str = "Hello World";
str = "Hell world";//akhne null dekhabe karon pattern match kore nai
str = "asdHellosdf world";//akhane jehutu Hello khuje pabe tai akta result dibe 
str = "Hello world Hello"; //jodi aki string dui bar thake thn 1st ta k aga choice kore nibe
str = "world";

//Regular Expression function
//Execution function exec() -> Returns result in an array or null

let result =  re.exec(str);

//test() function -> it returns true or false.
result = re.test(str);//it returns true because it matches hello string
result = re.test(str); //it returns false because it cant match hello with world. 


//match() function.it returns array and null
//basically its seems to be exec() function.but the different is ,match() function a 
//aga str then re dite hobe mane ulto

str = "Hello world Hello";
result = str.match(re);

//search() -> it returns index of the first match or -1.
str = "Hi and hello there";
result = str.search(re);//it return the index and ans is 7

str = "world";
result = str.search(re); //jehutu match kore  nai tai -1 return korbe


//replace() -> returns new string
str = "Again Hello World Hello";
let newstr = str.replace(re,"Hi");

console.log(str);
console.log(re.source);
console.log(newstr);

console.log(result);
