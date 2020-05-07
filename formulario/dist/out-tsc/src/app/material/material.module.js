import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatCheckboxModule, MatCardModule, MatInputModule, MatListModule, MatDatepickerModule, MatFormFieldModule, MatRadioModule, MatSelectModule, MatIconModule, MatButtonToggleModule, MatNativeDateModule, MatDialogModule, MatSlideToggleModule, MatPaginatorModule, MatExpansionModule, MAT_DATE_LOCALE, MatIconRegistry, MAT_LABEL_GLOBAL_OPTIONS } from '@angular/material';
let MaterialModule = class MaterialModule {
};
MaterialModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            MatButtonModule,
            MatCheckboxModule,
            MatCardModule,
            MatInputModule,
            MatListModule,
            MatDatepickerModule,
            MatFormFieldModule,
            MatRadioModule,
            MatSelectModule,
            MatIconModule,
            MatButtonToggleModule,
            MatNativeDateModule,
            MatDialogModule,
            MatSlideToggleModule,
            MatPaginatorModule,
            MatExpansionModule,
            MAT_DATE_LOCALE, MatIconRegistry, MAT_LABEL_GLOBAL_OPTIONS
        ],
        exports: [
            MatButtonModule,
            MatCheckboxModule,
            MatCardModule,
            MatInputModule,
            MatListModule,
            MatDatepickerModule,
            MatFormFieldModule,
            MatRadioModule,
            MatSelectModule,
            MatIconModule,
            MatButtonToggleModule,
            MatNativeDateModule,
            MatDialogModule,
            MatSlideToggleModule,
            MatPaginatorModule,
            MatExpansionModule,
            MAT_DATE_LOCALE, MatIconRegistry, MAT_LABEL_GLOBAL_OPTIONS
        ],
        providers: [
            { provide: MAT_DATE_LOCALE, useValue: 'es-ES' },
            { provide: MAT_LABEL_GLOBAL_OPTIONS, useValue: { float: 'always' } },
        ]
    })
], MaterialModule);
export { MaterialModule };
//# sourceMappingURL=material.module.js.map