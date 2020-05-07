export class Personas {
    constructor(nombre, apellidos, edad, dni, cumple, color, sexo, notas) {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.edad = edad;
        this.dni = dni;
        this.cumple = cumple;
        this.color = color;
        this.sexo = sexo;
        this.notas = notas;
    }
    getnombre() {
        return this.nombre;
    }
    setnombre(nombre) {
        this.nombre = nombre;
    }
    getapellidos() {
        return this.apellidos;
    }
    setapellidos(apellidos) {
        this.apellidos = apellidos;
    }
    getedad() {
        return this.edad;
    }
    setedad(edad) {
        this.edad = edad;
    }
    getcumple() {
        return this.cumple;
    }
    setcumple(cumple) {
        this.cumple = cumple;
    }
    getcolor() {
        return this.color;
    }
    setcolor(color) {
        this.color = color;
    }
    getsexo() {
        return this.sexo;
    }
    setsexo(sexo) {
        this.sexo = sexo;
    }
    getnotas() {
        return this.notas;
    }
    setnotas(notas) {
        this.notas = notas;
    }
    getDNI() {
        return this.dni;
    }
    setDNI(dni) {
        this.dni = dni;
    }
    getDatos() {
        return `
        Nombre: ${this.nombre}. 
        Apellidos: ${this.apellidos}.
        Edad: ${this.edad}; Cumpleaños: ${this.cumple.toLocaleDateString()}. 
        DNI: ${this.dni}. 
        Color favorito: ${this.color}.
        Sexo: ${this.sexo}. 
        Notas: ${this.notas}.
        `;
    }
}
//# sourceMappingURL=personas.js.map