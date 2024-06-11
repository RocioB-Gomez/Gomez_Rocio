let meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];



/* PRIMERA OPCIÓN


val1 = prompt("Ingrese un número por favor");

switch (val1) {
    case "1":
        alert("El mes seleccionado es Enero")
        break;
    case "2":
        alert("El mes seleccionado es Febrero")
        break;
    case "3":
        alert("El mes seleccionado es Marzo")
        break;
    case "4":
        alert("El mes seleccionado es Abril")
        break;
    case "5":
        alert("El mes seleccionado es Mayo")
        break;
    case "6":
        alert("El mes seleccionado es Junio")
        break;
    case "7":
        alert("El mes seleccionado es Julio")
        break;
    case "8":
        alert("El mes seleccionado es Agosto")
        break;
    case "9":
        alert("El mes seleccionado es Septiembre")
        break;
    case "10":
        alert("El mes seleccionado es Octubre")
        break;
    case "11":
        alert("El mes seleccionado es Noviembre")
        break;
    case "12":
        alert("El mes seleccionado es Diciembre")
        break;
    default:
        console.log("Mes inexistente")
        break;
}
*/

let mes = parseInt(prompt("Ingrese el numero de algun mes"));
if (mes >= 1 && mes <= 12) {
    alert(meses[mes - 1]);
} else {
    alert("Mira loco, ese mes no existe");
}