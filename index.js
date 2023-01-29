const saisir = document.getElementById("result");
const display = document.getElementById("result__output");

const buttons = document.querySelectorAll("button");

buttons.forEach(button=>{button.addEventListener("click",()=>{

const valButoon = button.innerHTML;

if(valButoon==="RESET"){
    saisir.value='';
    display.value='';
}
else if(valButoon==="="){
if(saisir.value.length>0){display.value=eval(saisir.value);}
else{display.value='';}
    
    
    
}
else if(valButoon==="DEL"){
    let saisirValue = saisir.value
    let newSaisirResult = saisirValue.slice(0, saisirValue.length - 1);
    let newDisplayValue = newSaisirResult.replace(/[^\d]+$/, '');
    saisir.value = newSaisirResult
    // console.log({saisirValue, newDisplayValue});
    let finalValue = eval(newDisplayValue)
    finalValue != undefined ? display.value = finalValue : display.value = ''
}
else 
if(isNaN(valButoon)){
    saisir.value += valButoon;
}


else{saisir.value += valButoon;

    display.value=eval(saisir.value);

}


}

)


})