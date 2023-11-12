const SI = 'si';
const NO = 'no';

let mail;
let entrada;
let precio;
let cantidad;
let total = 0;
let comprarMas = SI;
let continuar;

function comprar_entrada(mail) {

    let tipo_entrada;
    let Popular_100 = '1';
    let Platea_Baja_200 = '2';
    let Platea_Alta_300 = '3';
    let Palco_Vip_500 = '4';
    let salir = 'S';

    mail = prompt('Bienvenido a la plataforma de entradas de River Plate\n Ingrese su email: ');

    while (comprarMas.toLowerCase() === SI) {
        tipo_entrada = prompt('Elegi la categoría que deseas: ' + '\n' +
            '1. Popular $100' + '\n' +
            '2. Platea Baja $200' + '\n' +
            '3. Platea Alta $300' + '\n' +
            '4. Palco Vip $500' + '\n' +
            '\n' +
            '¿Queres salir? Tocá S');

        if (
            tipo_entrada !== Popular_100 &&
            tipo_entrada !== Platea_Baja_200 &&
            tipo_entrada !== Platea_Alta_300 &&
            tipo_entrada !== Palco_Vip_500 &&
            tipo_entrada !== salir
        ) {
            alert('Ingresaste una categoría que no existe!');
        } else if (tipo_entrada !== salir) {
            cantidad = parseInt(prompt('Ingrese la cantidad de entradas: '));


            switch (tipo_entrada) {
                case Popular_100:
                    precio = 100;
                    break;
                case Platea_Baja_200:
                    precio = 200;
                    break;
                case Platea_Alta_300:
                    precio = 300;
                    break;
                case Palco_Vip_500:
                    precio = 500;
                    break;
                default:
                    precio = 0;
            }
            total += precio * cantidad;

            comprarMas = prompt('¿Quieres comprar más entradas? (' + SI + '/' + NO + ')');
        }
    }

    if (comprarMas.toLowerCase() === NO) {
        alert('Gracias por tu compra. Estas son tus entradas:\nTotal a pagar: $' + total);
    }
}

// Llamada a la función con un ejemplo de correo
comprar_entrada('correo_ejemplo@gmail.com');
