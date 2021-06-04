function suma(numero1,numero2){
let	n1,n2,res;
n1=parseFloat(numero1);
n2=parseFloat(numero2);
res=n1+n2;
//alert("la suma es: "+res);
document.getElementById("resultadoSuma").innerHTML=res}
function res(numero1,numero2){
let	n1,n2,res;
n1=parseFloat(numero1);
n2=parseFloat(numero2);
res=n1-n2;
alert("la resta es: "+res);
document.getElementById("resultadoRes").innerHTML=res}
function mul(numero1,numero2){
let	n1,n2,res;
n1=parseFloat(numero1);
n2=parseFloat(numero2);
res=n1*n2;
alert("la multiplicacion es: "+res);
document.getElementById("resultadoMul").innerHTML=res}
function div(numero1,numero2){
let	n1,n2,res;
n1=parseFloat(numero1);
n2=parseFloat(numero2);
res=n1/n2;
alert("la divicion es: "+res);
document.getElementById("resultadoDiv").innerHTML=res}
