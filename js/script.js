/*Condicional 1*/
var helado = 1;
var topping;
var precio;
var precioFinal;

if (helado === 1) {
  topping = "Oreo";
  precio = 10;
} else if (helado === 2) {
  topping = "KitKat";
  precio = 15;
} else if (helado === 3) {
  topping = "Kinder";
  precio = 25;
} else {
    console.log("No hay ese topping");
}
var precioFinal = precio + helado;
console.log("El helado cuesta $", precioFinal);

/*Condicional 2*/

/*Variables y array de datos*/
var menu = ["carne", "pescado", "verdura"];
var pedido = prompt("¿Qué desea pedir? (carne, pescado o verdura)");

/*Condicional switch para manejar el pedido*/
switch (pedido) {
    case "carne":
        console.log("Ha pedido carne. Como bebida, le ofrecemos vino tinto.");
        break;
    case "pescado":
        console.log("Ha pedido pescado. Como bebida, le ofrecemos vino blanco.");
        break;
    case "verdura":
        console.log("Ha pedido verdura. Como bebida, le ofrecemos agua.");
        break;
    default:
        console.log("Por favor, elija carne, pescado o verdura.");
        break;
}

/*Ciclo for para recorrer el array de datos y agregar un nuevo elemento*/
for (var i = 0; i < menu.length; i++) {
    menu.push("postre");
}

/*Ciclo for para recorrer el array modificado*/
console.log("Array modificado:");
for (var i = 0; i < menu.length; i++) {
    console.log(menu[i]);
}

/*Variable y ciclo while para mostrar mensaje mientras el número sea menor que 11*/
var numero = 5;
while (numero < 11) {
    console.log(numero + " es más chico que 11");
    numero++; /*Incrementar la variable para evitar bucle infinito*/
}
