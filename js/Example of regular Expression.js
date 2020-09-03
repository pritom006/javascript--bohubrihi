//Example of Regular Expression

let re;
let str;

//Postal code
//4000,4700 avbe thake postal code

re =/^[0-9]{4}$/
str = "5067"; //it returns true
str = "67448"; //it returns false


//Phone Number 
//01788888888 +8801723284884  8801723284884 

re = /^01[0-9]{9}$/;
str ="01788888888"; //it returns true

//jodi amra optional rakhte chai
re = /^(\+)?(88)?01[0-9]{9}$/; //bracket abong ? ai sign diye optional kore rakci
str = "+8801723284884"; //it return true
str = "8801723284884"; //its also returns true



//Email Adrees validation
//bohubrihi8.learn@edu.com.bd

re = /^([a-zA-Z0-9]\.?)+[^\.]@([a-zA-Z0-9]\.?)+[^\.]$/ ; //akhne + diye bujhache banerjje then learn ai dhronere jinis bar bar use kora jabe
//r [^\.] diye bujhache je banerje..cse mane double dot avoid korbe . abong \.? ata bolte bujhaise . ta holo optional
str = "banerjeecse08@gmail.com";//it returns true
str = "bohubrihi8.learn@edu.com";//and also it returns true

console.log(re.test(str));