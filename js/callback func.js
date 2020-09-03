//callback function


//callback function use kore kivabe synchronous process k Asynchronous process a
//convert korte pari

//setTimeout() function ar madhomme akta code k aktu late a run korate pari
//ai function 2 ta parameter nei 2nd parameter holo milisecond hiseb kore
//mane koto milisecond por code ta execute hobe seta
/*
setTimeout(function() {
    console.log("Hello there!");
},2000); //2000 milisecond means = 2 second.*/



// let persons = [
//     {firstName: "Simanta", lastName: "Paul"},
//     {firstName: "Fazle", lastName: "Rahat"}
// ]

// function createPerson(person) {
//    setTimeout(function() {
//        persons.push(person);
//    }, 4000); 
// }

// function getPerson() {
//     setTimeout(function(){
//         let output = '';
//         persons.forEach(function(person){
//             output += `<li>${person.firstName} ${person.lastName}</li>`
//         }); 
//         document.getElementById('output').innerHTML = output;
//     }, 1000);
//  }

//  createPerson({firstName:"Rony",lastName:"chy"});
//  getPerson();


let persons = [
    {firstName: "Simanta", lastName: "Paul"},
    {firstName: "Fazle", lastName: "Rahat"}
]

function createPerson(person, callback) {
   setTimeout(function() {
       persons.push(person);
       callback();
   }, 2000); 
}

function getPerson() {
    setTimeout(function(){
        let output = '';
        persons.forEach(function(person){
            output += `<li>${person.firstName} ${person.lastName}</li>`
        }); 
        document.getElementById('output').innerHTML = output;
    }, 500);
}

createPerson({firstName:"Rony", lastName: "Chy"}, getPerson);