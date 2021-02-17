function AlteraBorda1(){
    let value = document.querySelector('.input1').value;
    valueString = value.toString();
    let res = valueString.match(/^[0-9]*/gi);
    console.log(res+"px");
    document.querySelector('.container').style.borderTopLeftRadius = res+"px";
    let reg = /[0-9]+px/gi;
    document.querySelector('textarea').innerHTML = "- border-top-left-radius: " + res+"px;\n";
    document.querySelector('textarea').innerHTML.replace(reg, res+"px");

};
function AlteraBorda2(){
    let value = document.querySelector('.input2').value;
    valueString = value.toString();
    let res = valueString.match(/^[0-9]*/gi);
    
    document.querySelector('.container').style.borderTopRightRadius = res+"px";

    let codeBorda2 = /-\sborder-top-right-radius:\s[0-9]+px;/gi
    
    let texto = document.querySelector('textarea').innerHTML;

    if(codeBorda2.test(texto)){
        document.querySelector('textarea').innerHTML = texto.replace(codeBorda2, "- border-top-right-radius: " + res+"px;\n");
    }else{
        document.querySelector('textarea').innerHTML = texto + "- border-top-right-radius: " + res+"px;\n";
    }
    
};
function AlteraBorda3(){
    let value = document.querySelector('.input3').value;
    valueString = value.toString();
    let res = valueString.match(/^[0-9]*/gi);
    console.log(res+"px");
    document.querySelector('.container').style.borderBottomLeftRadius = res+"px"; 
    document.querySelector('textarea').innerHTML = "- border-bottom-left-radius: " + res+"px;"; 
};
function AlteraBorda4(){
    let value = document.querySelector('.input4').value;
    valueString = value.toString();
    let res = valueString.match(/^[0-9]*/gi);
    console.log(res+"px");
    document.querySelector('.container').style.borderBottomRightRadius = res+"px"; 
    document.querySelector('textarea').innerHTML = "- border-bottom-right-radius: " + res+"px;"; 
};

