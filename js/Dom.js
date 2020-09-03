let val;
 val = this;

 val = window;

 val = window.document;
 val = document;
 val = document.all;
 val = document.all[5];
 val = document.all.length;
 val = document.head;
 val = document.body;
 val = document.doctype;
 val = document.domain;
 val = document.URL;
 val = document.characterSet;
 val = document.contentType;
 val = document.images;

 val = document.forms;
 val = document.forms[0];
 val = document.forms[0].method;
 val = document.forms[0].action;
 val = document.links;
 val = document.links[1];
 val = document.links[1].href;
 val = document.links[0].className;
 val = document.scripts;
 val = document.scripts[0].src;
 val = document.scripts[0].getAttribute("src");
 
links = document.links;

let linkArr = Array.from(links);

linkArr.forEach(function(link){
    console.log(link);
});


//console.log(links);
console.log(val);