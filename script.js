//desafio

//declaracion de variables globales
alert("             Bienvenido a Room for Rent"+
    "\n A continuacion le solicitaremos sus datos"+
    "\n para poder iniciar la operacion, gracias!");

const requestName = () => {
    let name = prompt("Ingrese su nombre");
    while ((name === "" )||(!isNaN(name))) {
        alert("error");
        name = prompt("Debe ingresar su Nombre")
    }
    return name;
}

const requestSurname = () => {
    let surname = prompt("Ingrese su apellido");
    while (( surname === "")||(!isNaN(surname))){
        alert("error");
        surname = prompt("Debe ingresar su Apellido");
    }
    return surname;
}

let name1 =requestName()
let surname1 = requestSurname()


alert("Bienvenido a RFR!!!" + "\n"+ name1+" "+ surname1+
                        "\nYa puede selecionar su habitacion y definir la cantidad de dias que la necesita.");
let room;
const selectRoom = () =>{
    room = prompt("-Seleccione una Habitacion-"+"\nLe recordamos las opciones disponibles:"+
                        "\nroom1, "+"room2, "+"room3, "+"room4, "+"room5, "+"room6, "
                        +"\nEn caso de anular operacion digite: "+ "esc");
                        
    while((room === "")|| (!isNaN(room))){
        alert("Seleccione una opcion Valida");
        room = prompt("-Seleccione una Habitacion-"+"\nLe recordamos las opciones disponibles:"+
        "\nroom1, "+"room2, "+"room3, "+"room4, "+"room5, "+"room6, "
        +"En caso de anular la operacion digite: "+ "esc");
    }
    let cost;
    switch(room){
        case "room1":
        cost = 50;
        break;
        case "room2":
        cost = 55;
        break;
        case "room3":
        cost = 45;
        break;
        case "room4":
        cost = 30;
        break;
        case "room5":
        cost = 25;
        break;
        case "room6":
        cost = 60;
        break;
        case "esc":
        alert("Operacion Cancelada");
        break;
        default:
            alert("Debe Selecionar una habitacion");
            room = prompt("Seleccione una Habitacion");
        }
    return cost;
}

const requestQDays = () => {
    let qDays = prompt("Ingrese la cantidad de dias que requiere la habitacion");
    while ((isNaN( qDays))|| (qDays ==="")){
            alert("error");
            qDays = prompt("Ingreso invalido, debe ingresar el nro de dias que requiere la habitacion");
        }
        return parseInt(qDays)
}

let cost1 = selectRoom();
let qDays1 = requestQDays();

alert("Usted ha selecionado la habitacion: " + room+
        "\nEl $ de la hab. seleccionada por dia es de: " + cost1+"-  Euros"+
        "\nLa cantidad de dias solicitados son: "+ qDays1);


let subTotal = 0;    

const subTotalAmount = (A,B) => {
    subTotal += A * B;
    alert("El monto total ha abonar es de: "+ subTotal);
}
subTotalAmount(cost1, qDays1);

let tax= 0;
let gap=0.1
const taxAmount = (c,d) => {
    tax += c * d;
    alert("La comision adicional por la operacion es de: "+ tax);
}
taxAmount(subTotal, gap);

let total = 0;
const totalAmount = (A,B) => {
    total += A + B;
    alert("La operacion total da: "+ total);
}
totalAmount(subTotal, tax);

alert("En resumen usted realizo la siguiente seleccion:"+
    "\nHabitacion seleccionada: "+room+
    "\nPrecio de la habxdia: "+cost1+
    "\nCantidad de dias Selecionados: "+qDays1+
    "\nRecargo de la pagina: "+tax+
    "\nMonto total ha Abonar: " +total )




// if ((entrada >= 0) && ( entrada <= 1000)) {
//     alert("Su presupuesto es bajo");
// } else if((entrada >= 1001) && ( entrada <= 7500)) {
//     alert("Su presupuesto es intermedio");
// } else if(entrada >= 7501) {
//     alert("Su presupuesto es Alto");
// }
// let respuesta = prompt("Desea Ingresar mas efectivo");
// if((respuesta == "Si")||(respuesta == "si")){
//     let entrada2 = parseInt(prompt("Ingrese el monto que quiere agregar a su presupuesto"));
//     let presup = entrada + entrada2;
//     alert("Su nuevo presupuesto es de: "+ presup+"- pesos");

//     alert("Cuenta con 5 opciones en funcion de su presupuesto")
//     let presup2 = prompt("Ahora que conoce su  presupuesto actualizado selecione la opcion correspondiente:" + 
//                         "\n Enter: en caso de no contar con suficiente presupuesto"+
//                         "\n Box1- Desde 1000 pesos "+
//                         "\n Box2- Desde 5000 pesos."+
//                         "\n Box3- Mas de 7500 pesos"+
//                         "\n Esc");
//             switch(presup2){
//                 case "Box1":
//                 alert("Caja de chocolates");
//                 break;
//                 case "Box2":
//                 alert("Caja de vino con 2 copas");
//                 break;
//                 case "Box3":
//                 alert("Ramo de rosas con un champagne");
//                 break;
//                 case "Esc":
//                 alert("Operacion Cancelada");
//                 break;
//                 default:
//                 alert("Lo sentimos su presupuesto no alcanza para nada");
//             }
//             alert("Coordinaremos el envio, gracias.");
// }else{
//         alert("Use su imaginacion, la va a necesitar....")
//     }


