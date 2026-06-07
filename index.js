let lastAnswer = 0;
let angleMode = "rad";
document.querySelectorAll('button').forEach(button => {
button.addEventListener('click', function() {
const value = this.innerText;
const result = document.getElementById('result');
const op = ['+', '-', '%', 'x', '/','log','(',')','√','.'];

    if (!isNaN(value) || op.includes(value)) {
        result.innerText += value;
    }
    else if(value=="AC"){
        result.innerText="";
    }
    else if(value=='x!'){
        result.innerHTML+='!';
    }
    else if(value=="π"){
        result.innerHTML=Math.PI;
    }
    else if(value=='e'){
        result.innerHTML=Math.E;
    }
    else if(value=="deg"){
        angleMode = "deg";
    }
    else if(value=="Rad"){
        angleMode = "rad";
    }
    else if(value=="Ans"){
        result.innerHTML += lastAnswer;
    }
    else if(value=="⌫"){
        result.innerText = result.innerText.slice(0, -1);
    }
    else if(value=="xy"){
        result.innerHTML += "**";
    }
    else if(value=="sin"){
    result.innerText += "sin(";
    }
    else if(value=="cos"){
        result.innerText += "cos(";
    }
    else if(value=="tan"){
        result.innerText += "tan(";
    }
    else if(value=="log"){
        result.innerText += "log(";
    }
    else if(value=="ln"){
        result.innerText += "ln(";
    }
    else if(value=="exp"){
        result.innerText += "exp(";
    }
    else if (value == '=') {
        try {
        let expression = result.innerText;
        if (expression.endsWith('!')) {
            let num = parseInt(expression.slice(0, -1));
            result.innerText = factorial(num);
        }
    else if (expression.startsWith('sin(')) {
        let num = Number(expression.slice(4, -1));
        if(angleMode=="deg"){
        num = num * Math.PI / 180;
        }
    result.innerText = Math.sin(num).toFixed(10);
    }
    else if (expression.startsWith('cos(')) {
        let num = Number(expression.slice(4, -1));
        if(angleMode=="deg"){
            num = num * Math.PI / 180;
        }
        result.innerText = Math.cos(num).toFixed(10);
    }
    else if (expression.startsWith('tan(')) {
        let num = Number(expression.slice(4, -1));
        if(angleMode=="deg"){
            num = num * Math.PI / 180;
        }
        result.innerText = Math.tan(num).toFixed(10);
    }
    else if(expression.startsWith('log(')){
            let num = Number(expression.slice(4, -1));
            result.innerText = Math.log10(num);      
    }
    else if(expression.startsWith('√')){
        let num=parseInt(expression.slice(1,));
        result.innerText=Math.sqrt(num);
    }
    else if(expression.startsWith('ln(')){
        let num=parseInt(expression.slice(3,-1));
        result.innerText=Math.log(num);
    }
    else if(expression.startsWith('exp(')){
        let num=parseInt(expression.slice(4,-1));
        result.innerText=Math.exp(num);
    }
    else if(expression.startsWith('rad(')){
        let num=parseInt(expression.slice(4,-1));
        result.innerText=Math.rad(num);
    }
    
    else {
    expression = expression.replaceAll('x', '*');
    result.innerText = eval(expression);
    }
    lastAnswer = result.innerText;
    } catch {
        result.innerText = 'Error';
    }
    }
});
});
function factorial(n){
if(n==0){
return 1;
}
else{
return (n*factorial(n-1));
}
}