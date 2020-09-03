// Dom Multiselector


// document.getElementsByClassName();

let list = document.getElementsByClassName('sample-class');

list[0].style.background = 'cyan';
list[0].style.color = 'white';
list[0].style.padding = '10px';
list[0].style.display = 'inline-block';
list[0].textContent = 'Hello Programmer';

//console.log(list);


//document.getElementsByTagName();
list = document.getElementsByTagName('li');
list = document.querySelector('ol').getElementsByTagName('li');

let lis = Array.from(list);
lis.forEach(function(item) {
    //console.log(item);
});


//document.querySelectorAll();
//id -> #
//classname -> .
//tag -> nothing
//we can use forEach loop in document.querySelectorAll()
//wihtout convert in array. 
list = document.querySelectorAll('ul li');
list.forEach(function(item) {
   // console.log(item);
});

let liOdd = document.querySelectorAll('li:nth-child(odd)');

let liEven = document.querySelectorAll('li:nth-child(even)');

liOdd.forEach(function(item) {
    item.style.background = 'grey';
    item.style.color = 'white';
});


liEven.forEach(function(item) {
    item.style.background = 'red';
    item.style.color = 'white';
});

console.log(list);


