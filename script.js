const inputCalc = document.querySelector('.account'),
      resultCalc = document.querySelector('.result');

let arrlogss = new Array();
document.querySelector("textarea[class=logs]").value = JSON.parse(localStorage.getItem('a'));
arrlogss = JSON.parse(localStorage.getItem('a'));

function input(i) {
    if (resultCalc.value != '0.') {
        resultCalc.value = '0.';
        inputCalc.value = '0.';
    }
    if (inputCalc.value == '0.') {
        inputCalc.value = null;
    }
    

    inputCalc.value = inputCalc.value + i;
    
}

function result() {
    if(eval(inputCalc.value) == undefined){
        resultCalc.value = '0.';
        inputCalc.value = '0.';
    }

    if(eval(inputCalc.value) == Infinity){
        resultCalc.value = '0.';
        inputCalc.value = 'Деление на ноль невозможно';
    }
    resultCalc.value = eval(inputCalc.value);
    if(arrlogss.length < 100){
        arrlogss.push(inputCalc.value +"="+ resultCalc.value+"\n");
    } else{
        arrlogss.splice(0,1);
        arrlogss.push(inputCalc.value +"="+ resultCalc.value+"\n");
    } 

    inputCalc.value = eval(inputCalc.value);
    resultCalc.value = eval(inputCalc.value);
    localStorage.setItem( 'a', JSON.stringify(arrlogss));
    document.querySelector("textarea[class=logs]").value = JSON.parse(localStorage.getItem('a'));
}

function reset() {
    resultCalc.value = null;
    inputCalc.value = null;
}

function sqrt(){
    resultCalc.value = Math.sqrt(inputCalc.value)
}

function pow(){
    resultCalc.value=Math.pow(a,b);
}
