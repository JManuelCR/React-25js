
let firstName : string = 'Manuel' // saignacion implicita
let age : number = 31;
let isAwesome : boolean = true;


firstName = "Manuel Cabrera";

function saludar (nombre : string){
    console.log(`Hola ${nombre}`);
}

saludar("Manuel")

function suma(a: number, b: number) : number | null{
    return a + b;
}

let resultado: number | null    // podriamos poner el null aca para soportar el null de la funcion 
resultado = suma(50, 60) as number // o podriamos pedirlo como as para pedir la parte numerica
console.log(resultado);

interface Koder {
    firstName: string
    lastName: string
    email: string
    phone: string
}

function DetalleKoder (koder: Koder) {
    console.log(`Koder`);
    console.log(`nombre: `, koder.firstName);
    console.log(`apellido: `, koder.lastName);
    console.log(`email: `, koder.email);
    console.log(`numero: `, koder.phone);
}

const Karla: Koder = {
    firstName: 'Karla',
    lastName: 'Hernandez',
    email: 'karla@gmail.com',
    phone: '+521 55 4562 2156'
}

function DetalleKoders(kodersList: Koder[]) {
    kodersList.forEach((koder) => {
        DetalleKoder(koder);
    });
}

const koders: Koder[] = [
    Karla,
    {
        firstName: "Manuel",
        lastName: "Cabrera",
        email: "manuel@gmial.com",
        phone: "+521 55 4026 1932"
    }

]

DetalleKoders(koders)