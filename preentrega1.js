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
    let categorias = {
        '1': 'Popular $100',
        '2': 'Platea Baja $200',
        '3': 'Platea Alta $300',
        '4': 'Palco Vip $500'
    };
    let salir = 'S';
    let compras = [];


    do {
        mail = prompt('Bienvenido a la plataforma de entradas de River Plate\n Ingrese su email: ');
        if (!/\S+@\S+\.\S+/.test(mail)) {
            alert('Por favor, ingresa un correo electrónico válido.');
        }
    } while (!/\S+@\S+\.\S+/.test(mail));

    while (comprarMas.toLowerCase() === SI) {
        tipo_entrada = prompt('Elegi la categoría que deseas: ' + '\n' +
            '1. Popular $100' + '\n' +
            '2. Platea Baja $200' + '\n' +
            '3. Platea Alta $300' + '\n' +
            '4. Palco Vip $500' + '\n' +
            '\n' +
            '¿Queres salir? Tocá S');

        if (!categorias[tipo_entrada] && tipo_entrada !== salir) {
            alert('Ingresaste una categoría que no existe!');
        } else if (tipo_entrada !== salir) {

            do {
                cantidad = prompt('Ingrese la cantidad de entradas: ');
                if (!/^\d+$/.test(cantidad)) {
                    alert('Por favor, ingresa una de las opciones.');
                }
            } while (!/^\d+$/.test(cantidad));

            cantidad = parseInt(cantidad);

            switch (tipo_entrada) {
                case '1':
                    precio = 100;
                    break;
                case '2':
                    precio = 200;
                    break;
                case '3':
                    precio = 300;
                    break;
                case '4':
                    precio = 500;
                    break;
                default:
                    precio = 0;
            }
            total += precio * cantidad;


            compras.push({
                categoria: categorias[tipo_entrada],
                cantidad: cantidad
            });

            do {
                comprarMas = prompt('¿Quieres comprar más entradas? (' + SI + '/' + NO + ')').toLowerCase();
                if (comprarMas !== SI && comprarMas !== NO) {
                    alert('Por favor, ingresa "si" o "no".');
                }
            } while (comprarMas !== SI && comprarMas !== NO);
        }
    }

    if (comprarMas === NO) {

        let mensajeFinal = 'Gracias por tu compra. Estas son tus entradas:\n';
        for (let compra of compras) {
            mensajeFinal += `${compra.categoria}: ${compra.cantidad} entradas\n`;
        }
        mensajeFinal += `Total a pagar: $${total}`;
        alert(mensajeFinal);
    }
}


comprar_entrada('correo_ejemplo@gmail.com');
