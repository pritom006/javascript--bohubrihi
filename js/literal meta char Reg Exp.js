let re;
let str;
//Litertal Character
re = /hello/;
re = /hello/i;


//Meta characters
re = /^hello/i; //Must start with
re = /hello$/i; //Must end with
re = /rLd$/i;
re = /^hello$/i; //ata mane hello diye suru hote hobe hello diye shes hote hobe
re= /^h.llo$/; //matches any one character ai dot diye bujhai 
re =/h.llo/;
re = /h*llo/; //* diye bujhai 0 or more charcter .mane 1 ta ba tar odihk char ba 0 char thakte pare nao pare
//but . diye bujhai 1 ta charcter thaktei hobe

re = /he?llo/; //optional mane e thkaleo hobe na thakleo hobe but onno kisu thakle ba na thakle hobe na
re =/he?a?llo/; //ata mane holo e thakleo ba a thakleo hobe abr duijon akstahe thakleo hobe
//but ai dui jon sara thkale hobe na

//jodi ai question mark kei pattern hisebe nite chai sekhtre \? avbe use korbo
re= /hello\?/; //escaping bole aitak

str = "Hello world";
str = "Hello hELLO";
str = "hello";
str = "hallo";
str = "hllo";//ata doesn't match dekhabe karon . ar jaigai kisui nei
str = 'h llo'; //ata match korbe karon space k akta character hisebe dhore nibe

str = 'hllo';//match korbe star ar khtre
str ='hillo';//match korbe star ar khtre
str = 'hilo';//but ata korbe na karon akta l short asa
str = 'hello';//question mark ar jonno
str = 'hllo'; //atao match korbe karon e nei abr onno kisui nei
str = 'hillo'; //but ata hobe na karon e ar jaigai i asa
str = 'hello';
str = 'hallo';
str = 'heallo';
str = "hiallo";//but a khetre hobe na
str = "hello?";

console.log(re.exec(str));
reTest(re,str);

function reTest(re,str) {
    if(re.test(str)){
        console.log(`'${str}' matches '${re.source}'`);
    }

    else{
        console.log(`'${str}' doesn't matches '${re.source}'`);
    }
}