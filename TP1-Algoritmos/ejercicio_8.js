function encontrar1Vocal(texto) {
    
    var vocales = ['a', 'e', 'i', 'o', 'u'];

    for (var i = 0; i < texto.length; i++) {
        if (vocales.includes(texto[i])) {
            return "letra " + texto[i] + " en la posición Nº" + (i + 1);
        }
    }
    
    return "No se encuntran vocales en el texto ingresado.";
}

var texto = prompt("Introduce un texto:");

alert(encontrar1Vocal(texto));