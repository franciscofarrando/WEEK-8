let comida = prompt("Pide un plato: (cuando no quieras mas pon 'salir')");
let veces = "0"

while (comida != "salir"){
    comida = prompt("Has pedido: " + comida + " ; pon 'salir' cuando no desees mas.");
    veces++;
    
}

if (veces < "4"){
    document.write("Has pedido: " +veces+ " platos");
    
}else{
        document.write("Has pedido: " +veces+ " platos. VAS A REVENTAR");
    }
