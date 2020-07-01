import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { MaterialModule } from 'src/app/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
    declarations: [
    ],
    imports: [
        MaterialModule,
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        RouterModule,
        FlexLayoutModule,
    ],
    exports: [
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
  })
  export class SharedModule {}