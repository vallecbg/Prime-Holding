import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
//import auth guard

import {HomeComponent} from './components/home/home.component'


const routes: Route[] = [
  {path: "", component: HomeComponent},
  {path: "index", component: HomeComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
