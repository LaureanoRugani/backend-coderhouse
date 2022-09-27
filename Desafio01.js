class Usuario {
    constructor(nombre, apellido, libros, mascotas) {
        this._nombre = nombre;
        this._apellido = apellido;
        this._libros = libros;
        this._mascotas = mascotas;;
    }

    getFullName() {
        return `${this._nombre} ${this._apellido}`;
    }

    addMascota(nombreMascota) {
        this._mascotas.push(nombreMascota);
    }

    countMascotas() {
        return this._mascotas.length;
    }

    addBook(titulo, nombreAutor) {
        this._libros.push({nombre: titulo, autor: nombreAutor})
    }

    getBookNames() {
        return this._libros.map( (libro) => libro.nombre)
    }
}

const libros = [
    {
        nombre: "Un elefante ocupa mucho espacio",
        autor: "Elsa Bornemann"
    },
    {
        nombre: "El Alquimista",
        autor: "Paulo Coelho"
    }

]

const randomGuy = new Usuario("Laure", "Ruga", libros ,["Perro", "Gato"])

console.log(randomGuy.getFullName()); // Laure Ruga

console.log(randomGuy.getBookNames()); // 'Un elefante ocupa mucho espacio', 'El Alquimista'
randomGuy.addBook("El Código da Vinci")
console.log(randomGuy.getBookNames()); // 'Un elefante ocupa mucho espacio', 'El Alquimista', 'El Código da Vinci'

console.log(randomGuy.countMascotas()); // 2
randomGuy.addMascota('Loro');
console.log(randomGuy.countMascotas()); // 3