function Init(){
    document.querySelector('.allBorders').style.display = "none";
}

function disableInput(){
    let checked = document.querySelector('.check').checked;
    if (checked){
        document.querySelector('.input1').disabled = true;
        document.querySelector('.input2').disabled = true;
        document.querySelector('.input3').disabled = true;
        document.querySelector('.input4').disabled = true;
        document.querySelector('textarea').innerHTML = '';
        document.querySelector('.container').style.borderRadius = "0px";
        document.querySelector('.input1').value = 0;
        document.querySelector('.input2').value = 0;
        document.querySelector('.input3').value = 0;
        document.querySelector('.input4').value = 0;
        document.querySelector('.allBorders').style.display = "flex";
    }else{
        document.querySelector('.input1').disabled = false;
        document.querySelector('.input2').disabled = false;
        document.querySelector('.input3').disabled = false;
        document.querySelector('.input4').disabled = false;
        document.querySelector('textarea').innerHTML = '';
        document.querySelector('.container').style.borderRadius = "0px";
        document.querySelector('.allBorders').style.display = "none";
    }
}
function AllBorders(){
        let value = document.querySelector('.allBorders').value;
        let valueString = value.toString();
        let texto = document.querySelector('textarea').innerHTML;
        let res = valueString.match(/^[0-9]*/gi);
        let codeAllBorda = /-\sborder-radius:\s[0-9]*px;/gi;
        document.querySelector('.container').style.borderRadius = res+"px";
        if(codeAllBorda.test(texto)){
            document.querySelector('textarea').innerHTML = texto.replace(codeAllBorda, "- border-radius: " + res+"px;");
        }else{
            document.querySelector('textarea').innerHTML = texto + "- border-radius: " + res+"px;\n";
        }
   
}
function AlteraBorda1(){
    let value = document.querySelector('.input1').value;
    valueString = value.toString();
    let res = valueString.match(/^[0-9]*/gi);
    document.querySelector('.container').style.borderTopLeftRadius = res+"px";
    let codeBorda1 = /-\sborder-top-left-radius:\s[0-9]*px;/gi
    let texto = document.querySelector('textarea').innerHTML;
    if(codeBorda1.test(texto)){
        document.querySelector('textarea').innerHTML = texto.replace(codeBorda1, "- border-top-left-radius: " + res+"px;");
    }else{
        document.querySelector('textarea').innerHTML = texto + "- border-top-left-radius: " + res+"px;\n";
    }
};
function AlteraBorda2(){
    let value = document.querySelector('.input2').value;
    valueString = value.toString();
    let res = valueString.match(/^[0-9]*/gi);
    document.querySelector('.container').style.borderTopRightRadius = res+"px";
    let codeBorda2 = /-\sborder-top-right-radius:\s[0-9]*px;/gi
    let texto = document.querySelector('textarea').innerHTML;
    if(codeBorda2.test(texto)){
        document.querySelector('textarea').innerHTML = texto.replace(codeBorda2, "- border-top-right-radius: " + res+"px;");
    }else{
        document.querySelector('textarea').innerHTML = texto + "- border-top-right-radius: " + res+"px;\n";
    }
};
function AlteraBorda3(){
    let value = document.querySelector('.input3').value;
    valueString = value.toString();
    let res = valueString.match(/^[0-9]*/gi);
    document.querySelector('.container').style.borderBottomLeftRadius = res+"px"; 
    let codeBorda3 = /-\sborder-bottom-left-radius:\s[0-9]*px;/gi
    let texto = document.querySelector('textarea').innerHTML;
    if(codeBorda3.test(texto)){
        document.querySelector('textarea').innerHTML = texto.replace(codeBorda3, "- border-bottom-left-radius: " + res+"px;");
    }else{
        document.querySelector('textarea').innerHTML = texto + "- border-bottom-left-radius: " + res+"px;\n";
    }
};
function AlteraBorda4(){
    let value = document.querySelector('.input4').value;
    valueString = value.toString();
    let res = valueString.match(/^[0-9]*/gi);
    document.querySelector('.container').style.borderBottomRightRadius = res+"px";
    let codeBorda4 = /-\sborder-bottom-right-radius:\s[0-9]*px;/gi
    let texto = document.querySelector('textarea').innerHTML;
    if(codeBorda4.test(texto)){
        document.querySelector('textarea').innerHTML = texto.replace(codeBorda4, "- border-bottom-right-radius: " + res+"px;");
    }else{
        document.querySelector('textarea').innerHTML = texto + "- border-bottom-right-radius: " + res+"px;\n";
    }
};

