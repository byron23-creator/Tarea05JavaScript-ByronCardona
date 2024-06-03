
class Usuario {
    constructor(nombre, apellido, email, direccion) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.direccion = direccion;
    }

    // Método para mostrar información del usuario
    mostrarInfo() {
        console.log(`Nombre: ${this.nombre} ${this.apellido}`);
        console.log(`Email: ${this.email}`);
        console.log(`Dirección: ${this.direccion.municipio}, ${this.direccion.calle} No. ${this.direccion.numero}`);
        console.log('--------------------------------');
    }
}

// Creamos instancias de usuarios
let usuario1 = new Usuario('Paola', 'Ortiz', 'paola@company.ru', {
    municipio: 'Jocotenando',
    calle: 'Calle ancha',
    numero: 25
});

let usuario2 = new Usuario('Paolo', 'Ortega', 'paolo@company.ru', {
    municipio: 'Jocotenando',
    calle: 'Calle ancha',
    numero: 25
});

let usuario3 = new Usuario('Sergio', 'Hernandez', 'sergio@company.ru', {
    municipio: 'Mixco',
    calle: 'Calle Corta',
    numero: 25
});

let usuario4 = new Usuario('Josue', 'Sanchez', 'josue@company.ru', {
    municipio: 'Ciudad Central',
    calle: 'Calle larga',
    numero: 25
});

let usuario5 = new Usuario('Pedro', 'Rivas', 'pedro@company.ru', {
    municipio: 'Chinautla',
    calle: 'Calle nueva',
    numero: 25
});

// Mostramos la información de los usuarios en la consola
usuario1.mostrarInfo();
usuario2.mostrarInfo();
usuario3.mostrarInfo();
usuario4.mostrarInfo();
usuario5.mostrarInfo();

