const inputCalc = document.querySelector('.account'),
      resultCalc = document.querySelector('.result');

let arrlogs = new Array();
document.querySelector("textarea[class=logs]").value = JSON.parse(localStorage.getItem('a'));
arrlogs = JSON.parse(localStorage.getItem("a"));

function input(i) {
    inputCalc.value = inputCalc.value + i;
}

function result() {
    if(eval(inputCalc.value) == undefined){
        resultCalc.value = '0,00';
        inputCalc.value = '0,00';
    }

    if(eval(inputCalc.value) == Infinity){
        resultCalc.value = '0,00';
        inputCalc.value = 'Деление на ноль невозможно';
    }
    resultCalc.value = eval(inputCalc.value);
    if(arrlogs.length < 100){
        arrlogs.push(inputCalc.value +"="+ resultCalc.value+"\n");
    } else{
        arrlogs.splice(0,1);
        arrlogs.push(inputCalc.value +"="+ resultCalc.value+"\n");
    } 

    inputCalc.value = eval(inputCalc.value);
    resultCalc.value = eval(inputCalc.value);
    localStorage.setItem( 'a', JSON.stringify(arrlogs));
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