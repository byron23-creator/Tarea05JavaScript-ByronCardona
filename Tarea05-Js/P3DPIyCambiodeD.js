// Definimos una clase Usuario
class Usuario {
    constructor(nombre, apellido, email, direccion, dpi) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.direccion = direccion;
        this.dpi = dpi; // Nueva propiedad
    }

    // Método para mostrar información del usuario
    mostrarInfo() {
        console.log(`Nombre: ${this.nombre} ${this.apellido}`);
        console.log(`Email: ${this.email}`);
        console.log(`DPI: ${this.dpi}`);
        console.log(`Dirección: ${this.direccion.municipio}, ${this.direccion.calle} No. ${this.direccion.numero}`);
        console.log('--------------------------------');
    }

    // Método para recuperar clave
    recuperarClave() {
        console.log(`Se ha enviado un correo de recuperación de contraseña a ${this.email}`);
        console.log('--------------------------------');
    }

    // Método para cambiar la dirección del usuario
    cambiarDireccion(nuevaDireccion) {
        this.direccion = nuevaDireccion;
        console.log(`La dirección de ${this.nombre} ${this.apellido} ha sido cambiada a: ${this.direccion.municipio}, ${this.direccion.calle} No. ${this.direccion.numero}`);
        console.log('--------------------------------');
    }
}

// Creamos instancias de usuarios
let usuario1 = new Usuario('Paola', 'Ortiz', 'paola@company.ru', {
    municipio: 'Jocotenando',
    calle: 'Calle ancha',
    numero: 25
}, '2957869650101');

let usuario2 = new Usuario('Paolo', 'Ortega', 'paolo@company.ru', {
    municipio: 'Jocotenando',
    calle: 'Calle ancha',
    numero: 25
}, '2957869650102');

let usuario3 = new Usuario('Sergio', 'Hernandez', 'sergio@company.ru', {
    municipio: 'Mixco',
    calle: 'Calle Corta',
    numero: 25
}, '2957869650103');

let usuario4 = new Usuario('Josue', 'Sanchez', 'josue@company.ru', {
    municipio: 'Ciudad Central',
    calle: 'Calle larga',
    numero: 25
}, '2957869650104');

let usuario5 = new Usuario('Pedro', 'Rivas', 'pedro@company.ru', {
    municipio: 'Chinautla',
    calle: 'Calle nueva',
    numero: 25
}, '2957869650105');

// Mostramos la información de los usuarios en la consola
usuario1.mostrarInfo();
usuario2.mostrarInfo();
usuario3.mostrarInfo();
usuario4.mostrarInfo();
usuario5.mostrarInfo();

// Ejemplo de recuperar clave para algunos usuarios
usuario1.recuperarClave();
usuario3.recuperarClave();
usuario5.recuperarClave();

// Ejemplo de cambiar la dirección de un usuario
usuario2.cambiarDireccion({
    municipio: 'Nueva Ciudad',
    calle: 'Avenida Principal',
    numero: 123
});

usuario4.cambiarDireccion({
    municipio: 'Otro Municipio',
    calle: 'Otra Calle',
    numero: 456
});
