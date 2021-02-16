function AlteraBorda1(){
    let value = document.querySelector('.input1').value;
    valueString = value.toString();
    let res = valueString.match(/^[0-9]*/gi);
    console.log(res+"px");
    document.querySelector('.container').style.borderTopLeftRadius = res+"px";
    document.querySelector('textarea').innerHTML = "- border-top-left-radius: " + res+"px;\n";

};
function AlteraBorda2(){
    let value = document.querySelector('.input2').value;
    valueString = value.toString();
    let res = valueString.match(/^[0-9]*/gi);
    console.log(res+"px");
    document.querySelector('.container').style.borderTopRightRadius = res+"px"; 
    document.querySelector('textarea').innerHTML = " - border-top-right-radius: " + res+"px;"; 
};
function AlteraBorda3(){
    let value = document.querySelector('.input3').value;
    valueString = value.toString();
    let res = valueString.match(/^[0-9]*/gi);
    console.log(res+"px");
    document.querySelector('.container').style.borderBottomLeftRadius = res+"px"; 
    document.querySelector('textarea').innerHTML = " - border-bottom-left-radius: " + res+"px;"; 
};
function AlteraBorda4(){
    let value = document.querySelector('.input4').value;
    valueString = value.toString();
    let res = valueString.match(/^[0-9]*/gi);
    console.log(res+"px");
    document.querySelector('.container').style.borderBottomRightRadius = res+"px"; 
    document.querySelector('textarea').innerHTML = " - border-bottom-right-radius: " + res+"px;"; 
};

