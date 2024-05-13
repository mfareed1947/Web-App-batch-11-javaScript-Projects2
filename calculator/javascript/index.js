//get number
function number(num){
    var result = document.getElementById('screen')
    result.value += num;
 }
 
 //get result
 
 function result(){
    var result = document.getElementById('screen')
    result.value = eval(result.value)
 }
 
 //get clear
 
 function clearResult(){
    var result = document.getElementById('screen')
    result.value = "";
 }
 
 //removechart
 
 
 function removeChart(){
    var number = document.getElementById('screen')
    var remove = number.value
    remove = remove.slice(0,-1) // remove last chart from string
    number.value = remove;
 
 }
 