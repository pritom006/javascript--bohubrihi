//https://www.icndb.com/api/
//API -> ai api ar madhomme onno website thk json file niye asa amr file a open korte parbo
//RETSfull API 
//api or restfull api ar madhomme amra onno akta site a request pathaici then seta amra amdr site a use koreci.ai json file amdr banano na
//ata sompurno onno akta website ar api.
//amra javaScript diye ata niye asci amra chaile jekono programming language diye external information nijeder site a niye aste pari
//jemon python php c++ jesob web aplication srver site language segulo diye amra api use korte pari




document.getElementById('get_data').addEventListener('click',loadJokes);

function loadJokes() {
    let number = document.getElementById('numberJokes').value;
    //console.log(number);
    let xhr = new XMLHttpRequest();

    xhr.open('GET',`http://api.icndb.com/jokes/random/${number}`,true);//akhane 2nd line ar link tai holo RESTfull API

    xhr.onprogress = function() {
        document.getElementById('output').innerHTML="<h3>Loading............</h3>";

    }

    xhr.onload = function() {
        if(this.status === 200) {
           let data = JSON.parse(this.responseText); //using JSON.parse json data convert into js object
           let jokes = data.value; //akhne value diye bujhaise je website thk api niye asci oitar value gulo just iterate korlam
           //console.log(jokes);
          // console.log(data);
           let output = "<ol>"; //akhane order list nici karon pore akta akta kore order list jeno barte thake
            
            jokes.forEach(function(item){
                output += `<li> ${item.joke}</li>`; //akhane forEach ar maadhomme itetarate korla mane output = ol so output+=<li> mane orderlist ar modhhe list mane nicher line jodi thake thn seta ol ar modhhe li akare dekha jabe
                //akhane item dici karon amra shudhu joke gulo dekhbo mane forEach loop ar 1st ta jehutu item so amrao shudhu joke guloi dekhbo mane index ba whole array dekhbo na
                //so item.joke diye bujhai shudhu joke gulo k iterate kora.akahne joke ai kotha ta kintu amra api mane je site use korci oikahn thk paici
                //joke ta amra object ba kisu hisebe declare kori nai ata sompurno onno website a cilo sekhan thk itearte koreci.
                //so item.joke  diye amra joke gulo k iterate korlam
                //ami jodi shudhu item ditam tahole id then joke soho sob kisu chole asto but amra chai shudhu joke gulo asuk tai item.joke use lorci
            });


           output += "</ol>"; //akhne += korlam mane 1st a output = ol,then ol+ol thn ol+ol+ol,mane joto number dibo order list akare seta barte thakbe


           document.getElementById('output').innerHTML=output; //arpor innerHTML a output daoai joke gulo order list akare print hobe

        }
    }

    xhr.send();

}