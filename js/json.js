//JSON
//javaScript object notation


/*
//json syntex


//this is javScript object format
var student = {
    name:"Rahim",
    age:23,
    Hometown:"Dhaka",
};

//this is the json format of javaScript

var student_json = {
    "name" : "Rahim",
    "age" : 23,
    "Hometown" : "Dhaka",
};

//to convert javaScript object to JSON FILE
var student_json = JSON.stringify(student);

console.log(student_json);


//to convert JSON to javaScript object

var student_new = JSON.parse(student_json);

console.log(student_new);

*/



/*
//JSON Data types


//https://jsonlint.com
//string
//number
//object (JSON object)
//array
//boolean
//null

//JSON Doesn't support undefined,Date,function
//jodi string a convert kori then support korbe


var person = {
    name: "Rahim", //string
    age: 23, //Number
    hometown: "Dhaka",
    married: false,           //Bollean
    dob: 1995-02-11,          //Date
    test_null: null,          //null
    test_undefined: undefined,//undefined
    greet: function(){        //function
        console.log(`Hello ${this.name}`);
    }
};


person_json = JSON.stringify(person);
console.log(person_json);

*/



//warning
//JSON.stringify() --> js object to JSON string
//JSON.parse() --> JSON string to javaScript object

//jodi dekhi amon situation asche je js code a amra json ar moto code likhe felci then
//JASON seta k javascript object hisebe dhore nibe tkhn jodi json thk js a jai tkhn 
//parse use korbo na tkhn stringify korbo tahole seta js object hisebe count hobe na
//tkhn seta json hisebe show korbe

//thn parse korle seta abr js object a convert hobe

var person1 = {
    "name": "Rahim",
    "age": 23,
    "hometown": "Dhaka",
    "married": false,
};

var person_json = JSON.stringify(person1);
var person_ob = JSON.parse(person_json);

//console.log(person_json);
console.log(person_ob);
console.log(person1.name);

//main kotha jodi js file a json ar moto kore code declare korio then seta javascript
//object hisebe declare korbe but amra seta k json a format korte chaile
//stringify kore nibo then abr jodi js object a niye aste chai taile parse korbo




