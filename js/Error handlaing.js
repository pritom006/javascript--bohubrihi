//Error Handling
//error handling duita method niye kaj kore akta try r akta catch()

//try ar modhe je code ta error hoar chance asa seta thakbe
//catch() holo kon dhoroner eror ai catch() block ta catch korbe
//catch(ar modhhe akta bydefault parameter pass korte hobe.mane je error ta hobe seta atr modhe pass hobe)

/*
console.log("Before Error");

try{
    //test();
    undefined.test();//mane undefined jehutu object na tai amra akhane object diye func call
    //korate chachi so TypeError dekhabe
} catch(err){
   // console.log(err);
   console.log(err.message);
   //error type dekte chaile name use korbo
   console.log(err.name);
} finally{ //error hok na hok finally block ta cholbei
    console.log("i am inside finally block");
}

console.log("After Error!");

*/

//we can genrate and handle error

let a = 2;

try{
    if(a<15) throw "Too Big";
    else if(a>5) throw "Too Small";
} catch(err) {
    console.log(err);
}