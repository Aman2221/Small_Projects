function getHistory(){
    return document.getElementById("history_value").innerText;
}
function printHistory(num){
    document.getElementById("history_value").innerText=num;
}

function getOutput(num){
    return document.getElementById("output_value").innerText=num;
}

function printOutput(num){
    if(num==""){
        document.getElementById("output_value").innerText = num; 
    }
    else{
    document.getElementById("output_value").innerText=getFormatedNumber(num);
    }
}
function getFormatedNumber(num){
    var n = Number(num);
    var value = n.toLocaleString("en");
    return value;
}

function reverseNumberFormat(num){
    var am = Number(num.replace(",",""));
    return am;
}
reverseNumberFormat();
var num= document.getElementById("history_value").innerHTML;


