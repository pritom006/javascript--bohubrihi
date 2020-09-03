

//Event of javaScript(DOM)


//event html page theke javascript code run korte help kore
//ar aga ja dekci ta diye pure javaScript code kivabe run kore seta

//mane ata one way amra javScript use kore html k access koreci
//but event ata html a add kore amra javaScript code HTML code a triger ba run korte pari


//Event onk koita asa jemon Onclick,onmouseover,ref-w3school.


// function message(){
//     console.log("Mouse Over Button");
// }


//Event Listener ar madhomme code gulo Html a na likahe pure javascript a likhte pari
//addEvenListner(); ar modhhe duita parmeter pass hobe 1st name 2nd function
//name = kon dhoroner kajer jonno button ta activate hobe ba triger hobe.jemon jodi click dei tahole click korlei event ta kaj korbe
//abr jodi dblclick dei tahole duibar click korle event ta kaj korbe.
//r akta important bepar holo jkhn  addEventListener a click or dblclick be je kono event a likhi na keno
//jkhn html file a likhbo tkhn onlcick ba ondblclick likhbo but addEventListener a likhar
//somoy on dibo na. 

//document.getElementById('sample-btn').addEventListener('click',message);
// document.querySelector('.container').addEventListener('mouseover',message);
// document.querySelector('.container').style.background = 'cyan';

/*
function message() {
    console.log("Button Clicked");
}
*/

//more on event

/*
function message(e) {
    let val = e.target;//e ar je kaj this ar o same kaj
    val = e.target.id;
    val = e.timeStamp; //kto milisecond por click korci seta
    val= e.type;//kon type ar seta
    val = e.clientY;//koto number pixel a mane y axis ar koto number pxel a click korci seta
    val = e.clientX;//x axis a kto number value te print korci seta
    //clientX clientY holo page ar pixel hisebe count kore
    val = e.offsetY;
    val = e.offsetX;
    //offsetX offsetY hochhe je element setar upor basis kore count kore.

    val = this;//e abong this same kaj but this curent element niye kaj kore

    this.style.background = `#${e.offsetX}`;

    //console.log(val);
    console.log(e.offsetX);
    console.log(e.offsetY);
    console.log(val);
}

*/


//form ar jonno event
document.querySelector('#name').addEventListener('focus',test);
document.querySelector('#name').addEventListener('keyup',test2);

function test(e) {
    this.style.background = 'cyan';
}

function test2(e) {
    //console.log(this.value);
    document.getElementById('Demo').innerText = this.value;
}