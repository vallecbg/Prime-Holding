import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { MaterialModule } from "../../material.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { FlexLayoutModule } from "@angular/flex-layout";

import { AddAssignmentComponent } from './add-assignment/add-assignment.component';
import { AssignmentsListComponent } from './assignments-list/assignments-list.component'
import { AssignmentDetailsComponent } from './assignment-details/assignment-details.component'

@NgModule({
  declarations: [
    AddAssignmentComponent,
    AssignmentsListComponent,
    AssignmentDetailsComponent
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
    AddAssignmentComponent,
    AssignmentsListComponent,
    AssignmentDetailsComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AssignmentModule {}
