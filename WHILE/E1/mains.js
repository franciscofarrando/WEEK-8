
function infoCaption(){
   
    let passwordCorrect = "hola";
    let i = 1;
        do{
            let passwordInserted = prompt("Escriba su Contraseña (solo 3 intentos):");

            if(passwordInserted!=passwordCorrect){
            alert("Ups! INCORRECTA! Escriba su Contraseña. Intentos: " + i);
            i++;
            }else {
                window.open("https://www.w3schools.com");
            }
    }
    while (i<4);

    if (i===4)
    document.write("Intentelo mas tarde")


}
infoCaption()