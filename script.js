//desafio

//declaracion de variables globales
alert("             Bienvenido"+
    "\n A continuacion le solicitaremos sus datos"+
    "\n para poder iniciar la operacion, gracias!");

const requestName = () => {
    let name = prompt("Ingrese su nombre");
    while ((name === "" )||(!isNaN(name))) {
        alert("error");
        name = prompt("Debe ingresar su Nombre")
    }
    return name
}

const requestSurname = () => {
    let surname = prompt("Ingrese su apellido");
    while (( surname === "")||(!isNaN(surname))){
        alert("error");
        surname = prompt("Debe ingresar su Apellido");
    }
    return surname
}

const requestBudget = () => {
    let budget = (prompt("Ingrese su presupuesto"));
    while ((isNaN( budget))|| (budget ==="")){
            alert("error");
            budget = (prompt("vuelva a ingresar su presupuesto"));
        }
        return parseInt(budget)
}


let name1 =requestName()
let surname1 = requestSurname()
let budget1 = requestBudget()
alert("Bienvenido "+ name1+" " + surname1+" !!!"+"\n"+"Usted cuenta con un presupuesto de: "+ budget1 + "- pesos");


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


