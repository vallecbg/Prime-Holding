import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common'
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ToastrModule } from "ngx-toastr";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material.module'
import { FlexLayoutModule } from '@angular/flex-layout'
import {ShareModule} from './components/shared/share/share.module'


import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
//import home

//import other modules
import { FirebaseModule } from './firebase.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    ToastrModule.forRoot({timeOut: 3000, preventDuplicates: true}),
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MaterialModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    FirebaseModule,
    ShareModule
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
