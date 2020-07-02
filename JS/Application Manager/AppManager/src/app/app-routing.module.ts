import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";
//import auth guard

import { HomeComponent } from "./components/home/home.component";
import { AddAssignmentComponent } from './components/assignments/add-assignment/add-assignment.component'
import { AssignmentDetailsComponent } from './components/assignments/assignment-details/assignment-details.component'
import { AssignmentsListComponent } from './components/assignments/assignments-list/assignments-list.component'

const routes: Route[] = [
  { path: "", component: HomeComponent },
  { path: "index", component: HomeComponent },
  { path: "assignments", component: AssignmentsListComponent },
  { path: "assignments/:id", component: AssignmentDetailsComponent },
  { path: "add", component: AddAssignmentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
