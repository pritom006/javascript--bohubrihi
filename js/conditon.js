
/*
//IF statement

if(true){
    console.log("if condition executed");
}

console.log("Hello");

//if else statement

if(false){
    console.log("if condition executed");
}

else{
    console.log("Else stament is executed");
}

console.log("Hello");

*/


/*
//if else if if condition

var age = prompt();

if(age>=50){
    console.log("OLD!");
}

else if(age<50 && age>=30 ){
    console.log("Age under 50 but avobe 30");
}

else if(age<30 && age>=18){
    console.log("Age under 30 but avobe 18");
}

else if(age<=18 && age>0) {
    console.log("You are children");
}

else{
    console.log("Invalid Input!");
}

*/


/*

//Find the largest number between 3 numbers using nested if statemnet

var n1 = parseInt(prompt("Enter the first number: "));
var n2 = parseInt(prompt("Enter the second number: "));
var n3 = parseInt(prompt("Enter the third number: "));

if(n1>=n2){
    if(n1>=n3){
        console.log(n1 + " is the largest number!");
    }

    else{
        console.log(n3 + "is the largest number!");
    }
}

else{
    console.log(n2 + "is the largest number!");
}

*/


/*
// switch case

console.log("Select an option:\na.Option 1 \nb. Option 2 \nc. Option 3 ");

var choice = prompt();

var text;
switch(choice){
    case "a":
        text = "Option 1 selected";
        break;
    case "b":
        text = "Option 2 selected";
        break;
    case "c":
        text = "Option 3 selected";
        break;
    default:
        text = "No Option is selected";
        break;
}

console.log(text);

*/

//exercise

/*
//exercise grading system number using if else statement

var n = parseInt(prompt("Enter Your Number: "));

if(n>=80 && n<=100){
    console.log("A+");
}

else if(n<80 && n>=70){
    console.log("A");
}

else if(n<70 && n>=60){
    console.log("A-");
}


else if(n<60 && n>=50){
    console.log("B");
}


else if(n<50 && n>=45){
    console.log("C");
}


else if(n<45 && n>=33){
    console.log("D");
}


else if(n<33 && n>=0){
    console.log("F");
}

else{
    console.log("Invalid Input!");
}

*/

//exercise calculator using switch case

console.log("Select an operation: \n1. Add \n2. Subtract \n3. Multiply \n4. Divide");

var num1 = parseInt(prompt("Enter first  number: "));
var num2 =parseInt(prompt("Enter second number: "));
var option =parseInt(prompt("Enter operation: "));
var result = null;

var num1Con = isNaN(num1);
var num2Con = isNaN(num2);
var optionCon= isNaN(option);

if(num1Con || num2Con || optionCon){
    console.log("Invalid Number!");
}

else{
    switch(option){
        case 1:
            result = num1 + num2;
            break;
        
        case 2:
            result = num1 - num2;
            break;
        
        case 3:
            result = num1 * num2;
            break;
        
        case 4:
            result = num1 / num2;
            break;

        default:
            break;

    }
    if(result == null){
        console.log("No Result");
    }

    else{
        console.log("Result is : " + result);
    }
}

