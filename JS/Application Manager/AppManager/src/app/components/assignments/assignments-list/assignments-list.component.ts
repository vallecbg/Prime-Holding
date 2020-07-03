import { Component, OnInit } from "@angular/core";
import { AssignmentService } from "src/app/core/services/assignment.service";
import { ToastrService } from "ngx-toastr";
import { ToastrConfig } from "src/app/components/shared/models/toastr.config";

@Component({
  selector: "app-assignments-list",
  templateUrl: "./assignments-list.component.html",
  styleUrls: ["./assignments-list.component.css"],
})
export class AssignmentsListComponent implements OnInit {
  assignments: any;
  currentAssignment = null;
  currentIndex = -1;
  name = "";

  constructor(
    private assignmentService: AssignmentService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.retrieveAssignments();
  }

  retrieveAssignments(): void {
    this.assignmentService.getAll().subscribe(
      (data) => {
        this.assignments = data;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  refreshList(): void {
    this.retrieveAssignments();
    this.currentAssignment = null;
    this.currentIndex = -1;
  }

  setActiveAssignment(assignment, index): void {
    this.currentAssignment = assignment;
    this.currentIndex = index;
  }

  removeAllAssignments(): void {
    this.assignmentService.deleteAll().subscribe(
      (res) => {
        this.toastr.success(
          "Successfully deleted all assignments!",
          "Success",
          ToastrConfig
        );
        this.currentAssignment = null
        this.retrieveAssignments();
      },
      (error) => {
        this.toastr.error(error, "Error", ToastrConfig);
      }
    );
  }

  searchName(): void {
    this.assignmentService.findByName(this.name).subscribe(
      (data) => {
        console.log(data);
        this.assignments = data;
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
