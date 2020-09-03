// document.getElementById

let val;


//Getting an Element
val = document.getElementById('document-title');
val = document.getElementById('document-title').id;
val = document.getElementById('document-title').className;


//changing style

document.getElementById('document-title')
.style.background = "#333";

document.getElementById('document-title')
.style.color = "#fff";

document.getElementById('document-title')
.style.padding = '10px';
document.getElementById('document-title')
.style.display='block';


//changing content
document.getElementById('document-title').textContent='New content';
document.getElementById('document-title').innerText="Again New Content";
//jodi innerText use kori tahole html ar tag gulo dileo seta print 
//korbe ajonno innerHtml use korbo
document.getElementById('document-title').innerHTML='<i>Again Inner HTML</i>';

//jodi ato boro line likhte pblm hoi thn varable ar modhhe niye kaj kora jabe

let val1 = document.getElementById('document-title');
val1.innerHTML = '<i>Hello this is Variable ar karsaji</i>';



//document.querySelector()
//document.getElementById() je akta element niye kaj kore document.querySelector()
// o same vabe akta element niye kaj kore

val = document.querySelector('#document-title');//id ar jonno # dite hobe
val = document.querySelector('.title-class');//class ar jonno . use korbo
val = document.querySelector('h3');//tag ar jonno kisui use kora lagbe na

val = document.querySelector('ol');
//akhne ol diye 1st order list k bujhabe mane joto ol tag thakuk na kano
//seta 1st ol tag k dhorei kaj korbe.(important).
val = document.querySelector('ol li');
//ata mane ol holo parent class and li holo child class
val.style.background='red';
val.style.color='white';

val = document.querySelector('li:last-child');
//last child bolte akta tag ar last element ta k bujhai
document.querySelector('li:nth-child(4)').innerHTML='scala';
//nth-child use korle kon child k dhore kaj korbo seta bujhai
document.querySelector('li:nth-child(odd)').innerHTML='Rubi';
//jodi odd use kori tahole 1st ar value niye kaj korbe
document.querySelector('li:nth-child(even)').innerHTML='Golang';
//jodi even nei tahole 2nd value niye kaj korbe


console.log(val);