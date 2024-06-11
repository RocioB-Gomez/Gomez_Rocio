var valores = [true, false, 2, "hola", "mundo", 3, "char"];

let strings = [];
let num1 = null;
let num2 = null;

for (let valor of valores){
    if (typeof valor === "string"){
        strings.push (valor);
    }else if (typeof valor === "number"){
        if (num1 === null){
            num1 = valor;
        } else if (num2 === null){
            num2 = valor;
        }
    }
}

strings.sort((a,b) => a.length - b.length);
document.write(`El mayor elemento de texto es:', ${strings[strings.length - 1]} <br>`);

document.write("Organizando los elementos de menor a mayor cantidad de letras nos queda: <br>");
for (let i = 0; i < strings.length; i++){
    if (i !== strings.length -1){
        if (strings[i].length === strings[i + 1].length){
            document.write(`${strings[i]} <br>`);
        }else{
            document.write(`${strings[i]} <br>`);
        }
    }else{
        document.write(`${strings[i]}.<br>`);
    }
}

if (num1 !== null && num2 !== null && num2 !== 0){
    document.write(`Los resultados de las operaciones matemáticas báscias son: <br>`);
    document.write(`Suma: ${num1 + num2}<br>`);
    document.write(`Resta: ${num1 - num2}<br>`);
    document.write(`Multiplicación: ${num1 * num2}<br>`);
    document.write(`División: ${num1 / num2}`);
}else {
    document.write("Faltan valores numéricos");
}