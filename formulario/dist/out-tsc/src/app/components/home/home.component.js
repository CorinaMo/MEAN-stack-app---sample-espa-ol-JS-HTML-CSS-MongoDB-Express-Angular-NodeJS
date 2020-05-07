import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { NewServiceService } from 'src/app/services/new-service.service';
import { Router, ActivatedRoute } from '@angular/router';
let HomeComponent = class HomeComponent {
    constructor(newServiceService, route, router) {
        this.newServiceService = newServiceService;
        this.route = route;
        this.router = router;
    }
    ngOnInit() {
    }
    borrarContacto(index) {
        this.newServiceService.borrar(index);
    }
    actualizarContacto(index) {
        this.router.navigate(['/form'], { queryParams: { 'index': index } });
    }
    nuevoContacto() {
        this.router.navigate(['/form'], { queryParams: { 'index': -1 } });
    }
};
HomeComponent = tslib_1.__decorate([
    Component({
        selector: 'app-home',
        templateUrl: './home.component.html',
        styleUrls: ['./home.component.css']
    }),
    tslib_1.__metadata("design:paramtypes", [NewServiceService, ActivatedRoute, Router])
], HomeComponent);
export { HomeComponent };
//# sourceMappingURL=home.component.js.map