let comida = prompt("Pide un plato: (cuando no quieras mas pon 'salir')");
let veces = "1"

while (comida != "salir"){
    comida = prompt("Has pedido: " + comida + " ; pon 'salir' cuando no desees mas.");
    veces++;
    if (veces > "4"){
        alert("Has pedido: " +veces+ " platos. VAS A REVENTAR. Recuerda poner 'salir' para terminar.");
    
}
}

    document.write("Has pedido: " +(veces)+ " platos");




