//ADIVINAR UN COLOR
//Creas una variable con un color que tú decidas.
//Sigue preguntando el programa hasta que el usuario adivine el color
//Si lo adivina, das mensaje de “felicidades!”

   
    let intentos = "0";
    let color = ""
    while ( color != "rojo" ){
        color = prompt("Adivina el color: ");
        intentos++;

    }
    document.write("FELICIDADES: Lo logro en " + intentos + "intento/s.")
    



