const display = document.getElementById("display");

// logic: number buttons 'onclick' get stored to in
function appendToDisplay(input){
    display.value += input;
}
function allClear(){
    display.value = ''
}
function backspace(){
    display.value = display.value.slice(0,-1)
}
function add(){
    display.value.number
}