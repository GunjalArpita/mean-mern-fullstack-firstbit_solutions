let display = document.getElementById('display');
function appendNumber(number){
    display.value +=number;
}
function appendOperator{
    display.value+='${operator}';
}
function calculate(){
    try{
        display.value=eval(display.value);
    }catch(e){
        display.value = ' error '
    }
}
function clearDisplay(){
    display.value='';
}