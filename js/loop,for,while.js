
//loop


/*
//while loop

var i = 0;

while(i <= 5){
    console.log("Hello Wold!");
    i++;
}

*/


/*
//print 1 to 10 while loop

i = 1;

while(i<11){
    console.log(i);
    i++;
}


*/


/*
//sum of 1 to 10 and also multyply 1 to 10
var x = 1;
var sum = 0;
var product = 1;

while(x<=10){
    sum = sum + x;
    product = product * x;
    x++;
}
console.log("Result : " + sum);
console.log("Product Result : " + product);

*/



//for loop

/*
var i;

for(i=1;i<=10;i++){
    console.log(i);
}

//To print 5 to 1

for(var x=5; x>=1; x--){
    console.log("Decrement result is : " + x);
}


//Break statement

for(i=0; i<5; i++){
    if(i==3){
        break;
    }
    console.log(i);
}

console.log("After break and start continue");

//continue statement

for(i=1;i<6;i++){
    if(i==4){
        continue;
    }

    console.log(i);
}

*/

/*
//to print 1 to 10 to find even number

for(i=1;i<=10;i++){
    if(i%2==1){
        continue;
    }

    console.log(i);
}
*/



//array string iteration

/*
//string iteration

let name = "Bohubrihi";

for(var i=0;i<=name.length-1; i++){
    console.log(`Index : ${i}`);
    console.log(name[i]);
}

*/

/*
//array iteration
let food = ["cake","chocolate","Icecream"];

let len = food.length;

for(var i=0;i<len;i++){
    console.log(`Index : ${i}`);
    console.log(food[i]);
}

*/

//for-in  ,  for-of
//for-in -> string/array/object
//for-of -> string.array

//usages of for-in

//if we use for-in we will get index

// let name = "I am learing javascript!";

// let food = ["cake","chocolate","Icecream"];

//object doesn't have index
// let person = {
//     name:"Shakib al hasan",
//     proffesion:"cricketer",
//     age:33,
//     team:"Bangladesh",
// }
/*
//accesing name i mean string using for-in
for(var x in name){
    console.log(`Index ${x} and Item ${ name[x]}`);
}
*/

/*
console.log("after for-in use for-of")

//for-of
//if we use for-of we will get item.
//accesing name using for-of
let n = "Hello";

for(var y of n ){
    console.log(y);
}
*/


/*
//using for in for array
//we will get Indexes
for(var x in food){
    console.log(`Indexes ${x} , Item ${food[x]}`);
}

//using for-of for array
//we will get Itemes

for(var y of food){
    console.log(y);
}

*/

/*
//for-in for object

for(var x in person){
    console.log(`Property: ${x} 
    Value: ${person[x]}`);
}
*/

//loop exercise

//sum of the series of square numbers

var n =parseInt(prompt("Enter your numbers in terms: "));
var sum =0;
var series ="";

for(var x=1; x<=n; x++){
    sum += x**2;
    series += (x**2).toString();
    if(x==n){
        continue;
    }
    series+= " + ";
}

console.log(`${series} = ${sum}`);
