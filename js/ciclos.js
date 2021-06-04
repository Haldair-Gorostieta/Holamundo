//variables
var num1 =0;
var num2 =11;
var familia=1;
if (num1<num2) {
	document.write("El numero mayor es: "+ num2 +" y el menor es" +num1+"<br>");}
	document.write("<br>");
//while
while(num1<num2){
	document.write(num1+"<br>");
	num1++;
}
	document.write("<br>");
//Ciclo for
//Numeros del 0 al 10:
for (var i = 0; i < 11; i++) {
	document.write(i+"<br>");
}

//Ciclo do while
var x=0;
do{
	document.write("<br>" + " " +x);
	x++;
}while(x<11);
document.write("<br>");

switch(familia){
	case 1:
	document.write("Eres Hijo");
	break;
	case 2:
	document.write("Eres Hija");
	break;
	case 3:
	document.write("Eres padre");
	break;
	case 4:
	document.write("Eres Madre");
	break;
	default:
	document.write("La opción no se encontró en el rango de valores.");}