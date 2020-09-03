//Asynchronous Programming
//Ajax  =  Asynchronous javaScript And XML
//Get data without loading the page



//Asynchronous bolte bujhai jeta synchronous na
//amra ato khon je programme gulo kore asci sob synchronous programming
//Asynchroous programming ar subidha holo dhoro akta function run hote somoy lagse tkhn r akta function sei ager function
//ar jonno bose thakbe na nichoi tai Asynchronous programming korle sei osubidha ta dur kora jai

//kivabe data gulo server a connect kore kono loading sara page ta run kora jai setar technique
//AJAX.  abar Fetch API use koreo seta kora somvob nxt session a dekhbo seta


document.getElementById("get_data").addEventListener('click',loadData);

function loadData() {
    //console.log("Button Clicked");
    //Create XHR object (XMl Http request);
    let xhr = new XMLHttpRequest();

    //open function use korte hobe(mane xhr boject ar akta method use korte hobe) jeta file a acess korbe thn file thk data niye asbe
    //method a 3 ta parameter pass korte hovbe 1st GET 2nd file name jetai acess nibo(data.txt),3rd holo true
    xhr.open('GET','data.txt',true);



    //r akta function use hoi spinners ar jonno mane jkhn data load hoche tkhn amra spiners dekhai
    //se somoy loading ar jonno abong 3 num option mane processing request ar jonno ai
    //onprogress data ta use hoi

    xhr.onprogress = function(){
        console.log(xhr.readyState);
    }



    //arpor kaj hoche onload namer akta function call kora ortaht jkhn data ta call hobe tkhn seta load kora
    xhr.onload = function() {
        //function a chk korbo status thick asa kina
        //Http status
        //200: 'ok';
        //403: "Forbiden";
        //404: "Not Found".

        if(this.status === 200){
            //console.log(this.responseText);
            document.getElementById('output').innerHTML=`<h4>${this.responseText}</h4>`; //responseText ar madhomme data ta show korbe
        }

    }


    /*
    //onereadyStatechange ai function ar moadhomeo information gulo niye asa jai but ata puraton style akhn use hoi na
    xhr.onreadystatechange = function() {
    //readyState value
    //0: request not initializzed
    //1: server connection established
    //2: request recieved
    //3: processing request 
    //4: request finished and response is ready

    //console.log(this.readyState);
    
        if(this.status === 200 &&  this.readyState === 4){
            console.log(this.responseText);
        }
    }

    */

    xhr.send();//send function k call na korle kono data ba kono kisui pabo na .kaj korbe na
    //ai function ta oboshhoi call korte hobe na hole kono information asbe na

    
    console.log(xhr);
}