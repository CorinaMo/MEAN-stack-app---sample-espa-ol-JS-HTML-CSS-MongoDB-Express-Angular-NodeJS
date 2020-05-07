import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NewServiceService } from 'src/app/services/new-service.service';
let FormComponent = class FormComponent {
    constructor(newServiceService, route, router) {
        this.newServiceService = newServiceService;
        this.route = route;
        this.router = router;
        this.route.queryParams
            .subscribe(params => {
            this.index = parseInt(params.index);
            if (this.index === -1) {
                this.nombre = null;
                this.apellidos = null;
                this.edad = null;
                this.dni = null;
                this.cumple = new Date();
                this.color = null;
                this.sexo = "No especificado";
                this.notas = null;
            }
            else {
                this.nombre = this.newServiceService.contacto[this.index].getnombre();
                this.apellidos = this.newServiceService.contacto[this.index].getapellidos();
                this.edad = this.newServiceService.contacto[this.index].getedad();
                this.dni = this.newServiceService.contacto[this.index].getDNI();
                this.cumple = this.newServiceService.contacto[this.index].getcumple();
                this.color = this.newServiceService.contacto[this.index].getcolor();
                this.sexo = this.newServiceService.contacto[this.index].getsexo();
                this.notas = this.newServiceService.contacto[this.index].getnotas();
            }
        });
    }
    ngOnInit() {
    }
    onSubmit() {
        if (this.index === -1) {
            this.newServiceService.nuevo(this.nombre, this.apellidos, this.edad, this.dni, this.cumple, this.color, this.sexo, this.notas);
        }
        else {
            this.newServiceService.actualizar(this.index, this.nombre, this.apellidos, this.edad, this.dni, this.cumple, this.color, this.sexo, this.notas);
        }
        this.router.navigate(['']);
        event.preventDefault();
    }
    cerrar() {
        this.router.navigate(['']);
        event.preventDefault();
    }
};
FormComponent = tslib_1.__decorate([
    Component({
        selector: 'app-form',
        templateUrl: './form.component.html',
        styleUrls: ['./form.component.css']
    }),
    tslib_1.__metadata("design:paramtypes", [NewServiceService, ActivatedRoute, Router])
], FormComponent);
export { FormComponent };
//# sourceMappingURL=form.component.js.map