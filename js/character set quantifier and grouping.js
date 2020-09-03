
//character set quantifier grouping

//character set using brackets []

let re;
let str;


re =/h[ea]llo/; //Must be One of them inside Brackets;
//mane dui jon ar akjon k thakte hobe abar duijon akstahe thakle abr hobe na.hoi e nahoi a
re = /[ha]llo/i; //ata match korbe kaorn ha asa
re = /[^ha]llo/; //Anyhting except those inside brackets.mane ai duita dile ba duitar akta dile match korbe na but ai duita bade onno kisu dile match korbe
re = /^[ha]ello/; //Must start with h or a but not ha at the same time.
//us range important for from
re = /[A-Z]ello/ //start with uppercase.
re = /^[A-Z]/ //First letter Must be Upper
re =/[A-Za-z]/; //ata mane jekono letter use korlei match pabo
//digit
re = /[0-9]ello/;//ata mane ello ar aga 0-9 projonto jekono akta digit thakbe

re = /^[0-9]/;//ata mane 0-9 jekono akta diye suru hotei hobe
re= /^[0-9]ello/; //ata mane 0-9 diye suru abong tar pore ello thakte hobe mane akdom sentense ar surutei thakte hobe
re = /[^0-9]ello/; //ata mane 0-9 diye suru korle match pabo na mane digit sara jekono kisu use korle match pabo
re = /^[0-9][0-9]ello/; //two digit mane 1st ta akta digit 2nd ta akta digit diye suru hote hobe


//Braces {} -> Quantifier
re =/el{2}o/; //ata mane duita ll thakle match korbe //Must occur 2 times
re =/el{2,5}o/;//ata mane 2 theke 5 ar modhhe l thkate hobe //Range
re= /el{2,}o/; //At least 2 times or more than 2 times




str = "heallo";
str = "tello"; //aita match korbe karon ha bade te asa.
str = "aello";
str = "Hello";
str = "Pritom";
str = 't';
str = "Again 1ello";
str = "1hello";
str = "2ello";
str = "tello";
str = "tello2";//ata match pabo karon digit diye suru kori nai
str  = "32elloa";
str = "helllo";
//but "helo" or "hellllllo" ditam tahole hoto na karon 1 ta ba 6 ta l asa akhne
str = "hello";
str = "helllllo";




//Paranthesis -> Grouping()
re = /^([0-9]){3}/; //ar mane holo 0-9 ar modhhhe 3 ta digit diye suru kora lagbe ar besi holeo peroblem nai


str = "124eloooo";


//To check Bangladeshi Phone Number
//Total 11 digits

re = /^01[0-9]{9}$/;

re = /^\+8801[0-9]{9}$/;

str = "01712444444";
str = "+8801812263634";

re = /^([0-9]x){3}/; //ata mane digitx digitx digitx digitx.total 3 bar
str = "2x3x4x";


//Shorthand Character and Assertion

//Shothand Characters

re = /\w/; // Word Character -> alphabet numeric _ aigula niye kaj kore.\w mane word character
re = /\w+/; //ata mane One Or More char.
re = /\W/; //ata mane upoer sorter bairer ja asa tar sathe match korbe mane #%^&* aigulor sathe match korbe
//capital W diye bujhai Non Character

re = /\W+/; //Non One Or More
re = /\d/; //to check digits
re = /\d+/; //One or More digit char
re = /\D/; //Non digit char
re = /\s/; //Match white space
re = /\S/; //Match non white space
re =/Hello\b/; //word boundary //ar  mane holo Hello ar pore white space thakte parbe but 
//onno kisu thakte parbe na





str = "(*&"; //ata match korbe na kaorn uporer 3 ta sorto mane nai
str = "6Xyt34"; //ata match korbe karon digit diye suru hoise abong porer character gulo uporer sorto gulo mene chole
str = "*^&ihiurht"; //ata match korbe karon * diye suru hoise .
str = "&*($";
str = "ur02%6^"; //Match korbe karon digit asa
str = "hffhgu";
str = "hge 344 4ihi";
str = "hello ";
str = "Hello78"; //ata match korbe na karon Hello ar por 78 asa white space thkale pblm cilo na


//Assertons
re = /x(?=y)/; //Matches x if only x is before y
//mane x ar por y thkale milbe

re = /x(?=yz)/;//ata mane x ar por yz thakte hobe

//Assertion ar oposite
re  = /x(?!yz)/;//mane x ar por yz thaka jabe na


str = "hfxyhkols";
str = "hfyzhjuf";






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

