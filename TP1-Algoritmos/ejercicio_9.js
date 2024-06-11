let i = 0
let notas = [];
let suma = 0;
let nombreCompleto;

nombreCompleto = prompt("Ingrese el Nombre Completo del Alumno");
while (i < 5) {

    let nota = parseInt(prompt("Ingrese la Nota N°" + i));
    if (nota >= 0 && nota < 11) {
        notas[i] = nota
        suma += notas[i];
        i++;
    } else {
        alert("Nota invalida, por favor ingrese otro valor");
    }
}

document.write("Alumno/a: ", nombreCompleto, "<br>");
document.write("Total notas: ", suma + "</br>");

let promedio = (suma / notas.length);


// console.log(notas);
document.write("Promedio: ", promedio);

if (promedio <= 5) {
    document.write("<br>","Reprobado");
} else if (promedio > 5 && promedio <= 8) {
    document.write("<br>","Aprobado");
} else {
    document.write("<br>","Sobresaliente");
}
   