
//object oriented programming


/*
//Class


class Person {
    constructor(fname,lname,birthday) {
        this.firstname = fname;
        this.lastname = lname;
        this.dob = birthday;
    }
    //we can use a method in class but we have to declare this 
    //method in outside of constructor
    calculateAge() {
        let birthDay = new Date(this.dob);
        let diff = Date.now() - birthDay.getTime();
        let ageDate = new Date(diff);
        let realAge = Math.abs(ageDate.getUTCFullYear() - 1970);
        return `The age is ${realAge}`;
    }

    fullname() {
        console.log(this.firstname, this.lastname);
    }
}

let person1 = new Person("pritom","Banerjee","08-05-1998");
let person2 = new Person("zubayer","hosain","05-06-1997");
let person3 = new Person("badhon","shaha","11-04-1997");

console.log(person1.calculateAge());
console.log(person2.calculateAge());
console.log(person3.calculateAge());

console.log(person1.fullname());
console.log(person2.fullname());
console.log(person3.fullname());

*/



/*

//sub class

//Inheritence

class Person { //Base class
    constructor(fname,lname) {
        //create two property in this class
        this.firstname = fname;
        this.lastname = lname;
    }

    //create a method in class
    greeting() {
        return `Hello ${this.firstname} ${this.lastname}`;
    }
}

//create another class to inherite the Person class

//Sub class
class Customer extends Person {  //here extends means Customer inherite the Person class
    constructor(fname,lname,phone,membership) {
        super(fname,lname);

        this.Phone = phone;
        this.Membership = membership;
    }
}


let person1 = new Person("Zubayer","Hosain");

console.log(person1);
console.log(person1.greeting());

let customer1 = new Customer("Badhon","Shaha");

console.log(customer1);
console.log(customer1.greeting());


*/





//static function

//static function call korar somoy object declare kore kora jai na
//direct class dhore call korte hoi.ar jonno static word ta declare korte hobe

class Person {
    constructor(fname,lname) {
        this.firstname = fname;
        this.lastname = lname;
    }

    greeting() {
        console.log(`Hello ${this.firstname} ${this.lastname}`);
    }

    static test(firstname,lastname) {
        console.log(`Hello ${firstname} ${lastname} I am static function!`);
    }
}

let person1 = new Person("Rahim","Kuduus");

console.log(person1.greeting());
console.log(Person.test("alu","potol"));

//so there is a difference when i declare Person.test() then i have to give parameter 
//like alu potol and the main thing is when i set static method then then i can't use
//this keyword wherease i have to avoid this keyword .i can put firstname,lastname
//and this parameter accept the value of alu,potol

//another thing is we thought in greeting() function i didn't have to use parameter
//like alu potol.but think that we use in 1st when i declare or create object like 
// person1.and we set the parameter like Rahim,Kuddus.