//Traversing the DOM

let val;

let list = document.querySelector('ul');

let listitem = document.querySelector('ul li:last-child');

val = listitem;

val = list;

//Get child nodes
val = list.childNodes;

val = list.childNodes[0];
val = list.childNodes[1];
val = list.childNodes[5];

val = list.childNodes[1].nodeName;
val = list.childNodes[1].nodeType;


//if we want to avoid text node then we have to use children

val = list.children;
val = list.children[1];
val = list.children[0].textContent = 'Hello';
val = list.children[1].children[0].textContent = "Hello Facebook";
val = list.children[1].children[0].href;


val = list.firstChild;

//if we want to avoid text then we have to use firstElementChild;

val = list.firstElementChild;

val = list.lastChild;
//samely if we want to avoid text then we have to use lastElementChild;
val = list.lastElementChild;

//here it can't count text element
val = list.childElementCount;


//parent class aceesing

val = listitem;

val = listitem.parentElement;
val = listitem.parentNode; // duitai same kaj kore;
val = listitem.parentElement.parentElement;


//shibling class accesing

//next Sibling

let shiblingItem= document.querySelector('ul li:first-child');

val = shiblingItem;

val = shiblingItem.nextSibling.nextSibling;

//if we want to avoid text element then we have to use nextElementSibling

val = shiblingItem.nextElementSibling.nextElementSibling;


//previous Sibling

let preShiblingItem= document.querySelector('ul li:last-child');

//we avoid text element so we can use previousElementSibling
val = preShiblingItem.previousElementSibling;
val = preShiblingItem.previousElementSibling.previousElementSibling;

console.log(val);