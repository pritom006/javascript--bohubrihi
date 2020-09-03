/*
//Adding Replace and Remove Elements


//Adding Element on DOM

//create element

let olItem = document.createElement('li');

//Add Id and Class
olItem.className = "a new-class another-class";

olItem.id = "new-id";

//Add Attribute

//first ar ta property and second ta value

olItem.setAttribute("title","a title to new Element");

//jodi element ar modhhe ksiu add korte chai thaole appenChild use korbo
//r kono kisu likahr jonno createTextNode use korbo
olItem.appendChild(document.createTextNode("javaScript"));

document.querySelector('ol').appendChild(olItem);


console.log(olItem);


//unorder list ar jonno

let ulItem = document.createElement('li');

let link = document.createElement('a');

link.appendChild(document.createTextNode('Instragram'));
link.setAttribute("href","https://www.instagram.com");

ulItem.appendChild(link);

document.querySelector('ul').appendChild(ulItem);

console.log(ulItem);
console.log(link);

*/


/*
//Replacing Elements

let newHeading = document.createElement('h1');

newHeading.appendChild(document.createTextNode('H1 new Heading'));
newHeading.className ='sample-class';

let oldHeading = document.querySelector('h3');

let parent = document.querySelector('.container');
//parent = oldHeading.parentElement; //duivabei kora jabe upor line ar madhomme korle direct container class niye kaj kora jabe

//replaceChild(1st ta replace jeta diye korbo,2nd ta jeta k replace korbo)
parent.replaceChild(newHeading,oldHeading);


console.log(newHeading);
console.log(oldHeading);
console.log(parent);

*/



//Remove Element

let listItem = document.querySelectorAll('li');

let list = document.querySelector('ul');

// listItem[0].remove();
// listItem[5].remove();

//there is an another technique to remove element and we have to use removeChild

//list.removeChild(listItem[5]);

//we can add class Item using classList.add();

list.classList.add('test');

list.classList.add('test-new');

list.classList.remove('sample-class');

//and we can also check atribute name it returns true or flase
let val = list.hasAttribute('class');

//to add attribute we can use setAttribute
list.setAttribute('title','new-Attribute');

//if we want to remove atrribute we can use removeAttribute;
list.removeAttribute('title');


console.log(val);
console.log(listItem);
console.log(list);