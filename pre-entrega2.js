const SI = 'si';
const NO = 'no';

function Entrada(categoria, precio) {
    this.categoria = categoria;
    this.precio = precio;
    this.cantidad = 0;
}

Entrada.prototype.calcularTotal = function () {
    return this.precio * this.cantidad;
};

function CompraPersona(nombre, apellido, edad, email) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.email = email;
    this.entradas = {};
    this.total = 0;
}

CompraPersona.prototype.agregarEntrada = function (categoria, cantidad) {
    if (!this.entradas[categoria]) {
        alert('Categoría no válida.');
        return;
    }

    this.entradas[categoria].cantidad += cantidad;
    this.total += this.entradas[categoria].calcularTotal();
};

CompraPersona.prototype.mostrarResumen = function () {
    let mensajeFinal = `Gracias por tu compra, ${this.nombre} ${this.apellido}. Estas son tus entradas:\n`;
    for (let categoria in this.entradas) {
        mensajeFinal += `${this.entradas[categoria].categoria}: ${this.entradas[categoria].cantidad} entradas\n`;
    }
    mensajeFinal += `Total a pagar: $${this.total}`;
    alert(mensajeFinal);
};

function comprarEntrada() {
    let mail;
    do {
        mail = prompt('Bienvenido a la plataforma de entradas de River Plate\n Ingrese su email: ');
        if (!/\S+@\S+\.\S+/.test(mail)) {
            alert('Por favor, ingresa un correo electrónico válido.');
        }
    } while (!/\S+@\S+\.\S+/.test(mail));

    let nombre = prompt('Ingrese su nombre: ');
    let apellido = prompt('Ingrese su apellido: ');
    let edad = prompt('Ingrese su edad: ');

    let compraPersona = new CompraPersona(nombre, apellido, edad, mail);

    let categorias = {
        '1': new Entrada('Popular $100', 100),
        '2': new Entrada('Platea Baja $200', 200),
        '3': new Entrada('Platea Alta $300', 300),
        '4': new Entrada('Palco Vip $500', 500),
    };

    let comprarMas = SI;

    while (comprarMas.toLowerCase() === SI) {
        let tipoEntrada = prompt('Elegi la categoría que deseas: ' + '\n' +
            '1. Popular $100' + '\n' +
            '2. Platea Baja $200' + '\n' +
            '3. Platea Alta $300' + '\n' +
            '4. Palco Vip $500');

        if (!categorias[tipoEntrada]) {
            alert('Ingresaste una categoría que no existe!');
        } else {
            let cantidad = prompt('Ingrese la cantidad de entradas');

            if (!/^\d+$/.test(cantidad)) {
                alert('Por favor, ingresa una cantidad válida');
            } else {
                cantidad = parseInt(cantidad);
                compraPersona.entradas[tipoEntrada] = categorias[tipoEntrada];
                compraPersona.agregarEntrada(tipoEntrada, cantidad);
            }
        }

        comprarMas = prompt('¿Quieres comprar más entradas? (' + SI + '/' + NO + ')').toLowerCase();
        if (comprarMas !== SI && comprarMas !== NO) {
            alert('Por favor, ingresa "si" o "no"');
        }
    }

    compraPersona.mostrarResumen();
}

comprarEntrada();
