let taskBlock = document.getElementById('task');
    
let resultObj = document.createElement('span');

resultObj.setAttribute('id', 'resultBlock');

taskBlock.appendChild(resultObj);

let calculate = function(){

    document.getElementById('resultBlock').innerText = "";

    let a = document.getElementById("task_x");
    let firstVal = parseInt(a.innerHTML);
    console.log (firstVal);
    
    // alert(a.innerHTML);
    
    let b = document.getElementById('task_y');
    let secondVal = parseInt(b.innerHTML);
    console.log(secondVal);
    
    let op = document.getElementById('task_op').innerHTML.toString();
    let result = 0;
    console.log('operation ' + op);
    // console.log(typeof op); 
    
    switch(op){
        case '+':
            // console.log('adding two numbers');
            result = firstVal + secondVal;
        break;
        case '–':
            // console.log('adding two numbers');
            result = firstVal - secondVal;
        break;
        case '×':
            // console.log('adding two numbers');
            result = firstVal * secondVal;
        break;
        case '/':
            // console.log('adding two numbers');
            result = firstVal / secondVal;
        break;
    }
    
    console.log(result);

    resultObj.innerHTML = result;
}

let btnCorrent = document.getElementById('button_correct');

btnCorrent.addEventListener('click', calculate);

let btnWrong = document.getElementById('button_wrong');

btnWrong.addEventListener('click', calculate);

