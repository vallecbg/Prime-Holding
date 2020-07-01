import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { MaterialModule } from "src/app/material.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { FlexLayoutModule } from "@angular/flex-layout";

import { ToolbarComponent } from "../toolbar/toolbar.component";
import { SidebarListComponent } from "../sidebar-list/sidebar-list.component";

@NgModule({
  declarations: [ToolbarComponent, SidebarListComponent],
  imports: [
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule,
    FlexLayoutModule,
  ],
  exports: [ToolbarComponent, SidebarListComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ShareModule {}
