export class Personas{
    nombre: string;
     apellidos: string;
     edad: number;
     dni: string;
     cumple: Date;
     color: string;
     sexo: string;
     notas: string;

    constructor({ nombre, apellidos, edad, dni, cumple, color, sexo, notas }: { nombre: string; apellidos: string; edad: number; dni: string; cumple: Date; color: string; sexo: string; notas: string;}, 
        ) {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.edad = edad;
        this.dni = dni;
        this.cumple = cumple;
        this.color = color;
        this.sexo = sexo;
        this.notas = notas;
    } 
}