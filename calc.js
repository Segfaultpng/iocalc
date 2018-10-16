/**
 * Calculator Supreme
 * 
 */

 console.log("hello from calc.js")

 window.onload = function () {




 var calcString = "";
 var operating = false;

 var opSection = document.getElementById("calc-operation")

 var numbers = document.getElementsByClassName("number");

 for (var i = 0; i < numbers.length; i++) { 

    numbers[i].addEventListener("click", function(event){

        if(operating == false){


            calcString += event.srcElement.innerHTML;
            //x += event.srcElement.innerHTML;

            opSection.value = calcString;

        }else{
            calcString +=  event.srcElement.innerHTML;

            opSection.value = calcString;
        }

        
        
    
     });
}

var operators = document.getElementsByClassName("operator");

for (var i = 0; i < operators.length; i++) { 

    operators[i].addEventListener("click", function(event){

      
        operating = true;
        
        calcString += " " + event.srcElement.innerHTML + " ";

        opSection.value = calcString;
    
        
    
     });
}

document.getElementById("equals").addEventListener("click", function(event){


    calculate();

    //clearCalc();

})

var clearCalc = function(){
    calcString = "";
    opSection.value = "";
    operating = false;

}

document.getElementById("clear").addEventListener("click", function(event){

    clearCalc();   


console.log(calcString);

})


var add = function(num1, num2){
    return num1 + num2;
};

var subtract = function(num1, num2) {
    return //your answer
}

var multiply = function(num1, num2) {
    return //your answer
}

var divide = function(num1, num2) {
    return //your answer
}

var remainder = function(num1, num2) {
    return //your answer
} 

var pie = function(num1) {
    return Math.PI(num1);
}


var decideWhichMathOperationToPerform = function(theArray) {
    if(theArray[1] === "+"){return add(Number(theArray[0]), Number(theArray[2]))};
    if(theArray[1] === "-"){ return subtract(Number(theArray[0]), Number(theArray[2]))};
    if(theArray[1]=== "x"){return multiply(Number(theArray[0]), Number(theArray[2]))};
    if(theArray[1] === "/"){return divide(Number(theArray[0]),Number(theArray[2]))};
    if(theArray[1] === "%"){return remainder(Number(theArray[0]), Number(theArray[2]))};
}

function calculate (){
   
    var resultArray = parseUserInputReturnAnArrayObject();
    console.log(resultArray);
    var displayValue = decideWhichMathOperationToPerform(resultArray);
    opSection.value = displayValue;

    calcString = "";
}

function parseUserInputReturnAnArrayObject(){
   
    var calcRegex = new RegExp(/([0-9]*)+([\-c\x\+\%\/])+([0-9]*)/g);
    var trimWhiteSpacesOfValue = calcString.replace(/\s/g,'');
    var helper = String(trimWhiteSpacesOfValue);
    helper = helper.replace(/-/g,' ');
    var resultArray = helper.split(calcRegex);
    resultArray.shift();
    resultArray.pop();
    return resultArray;
 }





 
}
