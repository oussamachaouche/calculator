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


saisir.addEventListener("input", () => {
  // Remove any non-numeric characters and operators from the input value
  const newValue = saisir.value.replace(/[^0-9+\-*/.]/g, "");

  // Update the input field value with the cleaned value
  saisir.value = newValue;
});

//saisir.addEventListener("keypress",(event)=>{

//var allowedCharacters = /[0-9.+*/-]/;
/*     var key = event.key;
    console.log("key "+key+" allowed",allowedCharacters.test(key))
    if (!allowedCharacters.test(key)) {
        console.log("allowed");
      event.preventDefault();
    }

}) */



//toggle

var main = document.body;




  var buttonsToggle = document.getElementsByClassName("button_toggle");
var arr = [...buttonsToggle];

arr.forEach((element, index) => {
  element.addEventListener("click", (event) => {
    let themeClass = event.target.getAttribute('theme')
    document.body.classList.remove("theme1","theme2","theme3");
    document.body.classList.add(themeClass)
    element.style.opacity = "1";

    arr
      .filter(function (item) {
        return item != element;
      })
      .forEach((item) => {
        item.style.opacity = "0";
      });
  });
});


