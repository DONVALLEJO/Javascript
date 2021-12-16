//const p_while=document.querySelector('#c_while');
let contador=1;
let cont=1;
const tabla_3=3;
const tabla_8=8;
const tabla_4=4;

document.write("<h2>Tabla de multiplicar del "+ tabla_3 +" con ciclo while</h2>");

	document.write("<ul>");
while (contador<=10){
	document.write("<li>");
	
	console.log(tabla_3 +' x '+contador+ ' = '+ (tabla_3*contador));
	
document.write(tabla_3 +' x '+contador+ ' =  '  + (tabla_3*contador));
	contador++;
	document.write("</li>");
}
document.write("</ul>");


document.write("<h2>Tabla de multiplicar del "+ tabla_8 +" con ciclo for</h2>");

	document.write("<ul>");

for(contador = 1;contador<=10;contador++){
		document.write("<li>");
document.write(tabla_8 +' x '+contador+ ' =  '  + (tabla_8*contador));
		document.write("</li>");
	}

	document.write("</ul>");






document.write("<h2>Tabla de multiplicar del "+ tabla_4 +" con ciclo do while</h2>");

	document.write("<ul>");
	
do{
	
	document.write("<li>");
	
	console.log(tabla_4 +' x '+cont+ ' = '+ (tabla_4*cont));
	
document.write(tabla_4 +' x '+cont+ ' =  '  + (tabla_4*cont));
	cont++;
	document.write("</li>");
}while(cont<=10)

document.write("</ul>");




