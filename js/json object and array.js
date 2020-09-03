var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        var data = this.responseText;
        //console.log(data);
        jsonData(data);

    }
};
xmlhttp.open("GET", "data.json", true);
xmlhttp.send();


function jsonData(json_obj) {
    //console.log(json_obj);
    var jscpt_ob= JSON.parse(json_obj);
    //console.log(js_obj);


for(x in jscpt_ob.persons) {
    //console.log(x);
    var person = jscpt_ob.persons;
    //console.log(person[x]);
    for(y in person[x]){
        console.log(person[x][y]);
    }
}

}