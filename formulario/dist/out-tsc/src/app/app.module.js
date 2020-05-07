import * as tslib_1 from "tslib";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularMaterialModule } from './modules/angular-material/angular-material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NewServiceService } from './services/new-service.service';
import { MAT_DATE_LOCALE, MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material';
import { FormComponent } from './components/form/form.component';
let AppModule = class AppModule {
};
AppModule = tslib_1.__decorate([
    NgModule({
        declarations: [
            AppComponent,
            HomeComponent,
            FormComponent,
        ],
        imports: [
            BrowserModule,
            AppRoutingModule,
            FormsModule,
            BrowserAnimationsModule,
            AngularMaterialModule,
        ],
        providers: [
            NewServiceService,
            { provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: { hasBackdrop: false } }, { provide: MAT_DATE_LOCALE, useValue: 'es-ES' },
        ],
        bootstrap: [AppComponent],
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map