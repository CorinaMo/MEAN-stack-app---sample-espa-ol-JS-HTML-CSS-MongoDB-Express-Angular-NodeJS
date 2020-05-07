import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Personas } from '../classes/personas';
let NewServiceService = class NewServiceService {
    constructor() {
        this.contacto = [];
        this.contacto[0] = new Personas("Rick", "Sánchez", 70, "12345678X", new Date(1949, 11, 28), "azul", "Hombre", "Wabba Lubba dub dub!!!!");
        this.contacto[1] = new Personas("Morty", "Smith", 15, "01234567Y", new Date(2004, 5, 10), "verde", "Hombre", "...");
        this.contacto[2] = new Personas("Summer", "Smith", 17, "23456789Z", new Date(2002, 12, 14), "amarillo", "Mujer", "GirlPower, Bitch!");
        this.contacto.forEach(element => {
            console.log(element.getDatos());
        });
    }
    nuevo(nombre, apellidos, edad, dni, cumple, color, sexo, notas) {
        let persona = new Personas(nombre, apellidos, edad, dni, cumple, color, sexo, notas);
        this.contacto.push(persona);
    }
    actualizar(index, nombre, apellidos, edad, dni, cumple, color, sexo, notas) {
        this.contacto[index].setnombre(nombre);
        this.contacto[index].setapellidos(apellidos);
        this.contacto[index].setedad(edad);
        this.contacto[index].setDNI(dni);
        this.contacto[index].setcumple(cumple);
        this.contacto[index].setcolor(color);
        this.contacto[index].setsexo(sexo);
        this.contacto[index].setnotas(notas);
    }
    borrar(index) {
        this.contacto.splice(index, 1);
    }
};
NewServiceService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    }),
    tslib_1.__metadata("design:paramtypes", [])
], NewServiceService);
export { NewServiceService };
//# sourceMappingURL=new-service.service.js.map