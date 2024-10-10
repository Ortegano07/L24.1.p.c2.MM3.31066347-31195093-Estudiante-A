/*El promedio de notas resulta de dividir el acumulado de notas entre la cantidad de materias. 
Se tiene de todo estudiante su nombre, acumulado notas y cantidad materias. 
Un estudiante becado recibe una beca mensual de $30 si su promedio de notas es superior a 
15, ó recibe $20 si es al menos $10; si el promedio es menor de 10, no recibe beca. 
Diseñe las clases Cl_estudiante y Cl_becado, usando herencia, de manera que procese un 
estudiante y reporte el monto de la beca, o si no le corresponde beca. 
Ejemplos de la corrida: 

Nombre del estudiante: Mary 
Acumulado de notas: 132 
Cantidad de materias: 8 
Nota promedio: 16.50 
Mary recibe una beca de $30.00 

Nombre del estudiante: Alirio 
Acumulado de notas: 315 
Cantidad de materias: 35 
Nota promedio: 9.00 
Alirio no le corresponde beca */


import Cl_Becado from "./Cl_Becado.js";

let estudiante = new Cl_Becado("Mary", 132, 8, 16.50, 30);
let estudiante2 = new Cl_Becado("Alirio", 315, 35, 9.00, "no le corresponde beca");

let salida = document.getElementById("salida");

salida.innerHTML = `
<br> Nombre del estudiante: ${estudiante.nombre}
<br> Acumulado de notas: ${estudiante.acumnotas}
<br> Cantidad de materias: ${estudiante.cantmaterias}
<br> Nota promedio: ${estudiante.promedio().toFixed(2)}
<br> ${estudiante.nombre} recibe una beca de $${estudiante.montoBeca()}
<br>
<br> Nombre del estudiante: ${estudiante2.nombre}
<br> Acumulado de notas: ${estudiante2.acumnotas}
<br> Cantidad de materias: ${estudiante2.cantmaterias}
<br> Nota promedio: ${estudiante2.promedio().toFixed(2)}
<br> ${estudiante2.nombre} ${estudiante2.montoBeca()}

`
