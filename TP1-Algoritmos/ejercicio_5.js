let dato, resultado; // declara dos variables llamadas dato y resultado
val1 = window.prompt("Introduce tu nombre", "..."); // pide al usuario que ingrese un nombre y se almacena en la variable val1
val2 = window.prompt("Introduce tu apellido", "..."); // pide al usuario que ingrese un apellido y se almacena en la variable val2
resultado = `Concatenado tu nombre y apellido es: ${val1} ${val2} ` ; // los datos ingresados por el usuario se guardan en la variable resultado
document.write(resultado); // muestra por pantalla la variable donde fueron almacenados dichos datos
