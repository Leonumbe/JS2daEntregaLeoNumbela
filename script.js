//desafio
let nombre = prompt("Ingrese su nombre");
while (( nombre == "")){
    alert("error");
    nombre = prompt("Debe ingresar su Nombre")
}
let apellido = prompt("Ingrese su apellido");
while (( apellido == "")){
    alert("error");
    apellido = prompt("Debe ingresar su Apellido");
}
//Aca estoy en una encrucijada, porque si saco la variable parseInt me reconoce la condicion, evito el NaN pero dps np me realiza la suma como numero
let entrada = parseInt(prompt("Ingrese su presupuesto"));
while (( entrada == "0")||(entrada === "")){
        alert("error");
        entrada = parseInt(prompt("vuelva a ingresar su presupuesto"));
    }
    alert("Bienvenido "+ nombre+" "+apellido+" !!!"+"\n"+"Usted cuenta con un presupuesto de: "+ entrada+"- pesos");

if ((entrada >= 0) && ( entrada <= 1000)) {
    alert("Su presupuesto es bajo");
} else if((entrada >= 1001) && ( entrada <= 7500)) {
    alert("Su presupuesto es intermedio");
} else if(entrada >= 7501) {
    alert("Su presupuesto es Alto");
}
let respuesta = prompt("Desea Ingresar mas efectivo");
if((respuesta == "Si")||(respuesta == "si")){
    let entrada2 = parseInt(prompt("Ingrese el monto que quiere agregar a su presupuesto"));
    let presup = entrada + entrada2;
    alert("Su nuevo presupuesto es de: "+ presup+"- pesos");

    alert("Cuenta con 5 opciones en funcion de su presupuesto")
    let presup2 = prompt("Ahora que conoce su  presupuesto actualizado selecione la opcion correspondiente:" + 
                        "\n Enter: en caso de no contar con suficiente presupuesto"+
                        "\n Box1- Desde 1000 pesos "+
                        "\n Box2- Desde 5000 pesos."+
                        "\n Box3- Mas de 7500 pesos"+
                        "\n Esc");
            switch(presup2){
                case "Box1":
                alert("Caja de chocolates");
                break;
                case "Box2":
                alert("Caja de vino con 2 copas");
                break;
                case "Box3":
                alert("Ramo de rosas con un champagne");
                break;
                case "Esc":
                alert("Operacion Cancelada");
                break;
                default:
                alert("Lo sentimos su presupuesto no alcanza para nada");
            }
            alert("Coordinaremos el envio, gracias.");
}else{
        alert("Use su imaginacion, la va a necesitar....")
    }


//Este fue el ejerciocio que pidio el profe que resolvamos, te lo habia pasado pero me lo pediste zip y colgue.

let numero = parseInt(prompt("ingrese un numero"));

for (let i = numero; i <= 12; i++) {
    numero = + i;
    if (numero == 8) {
        break;
    }
    for (let y = 1; y <= 12; y++) {
    resultado = numero * y;
    alert(numero + " x " + y + " = " + resultado);
    }
}