import { Component, OnInit } from "@angular/core";
import { AssignmentService } from "src/app/core/services/assignment.service";
import { ActivatedRoute, Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { ToastrConfig } from "src/app/components/shared/models/toastr.config";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: "app-assignment-details",
  templateUrl: "./assignment-details.component.html",
  styleUrls: ["../../shared/styles/create-form.css"],
})
export class AssignmentDetailsComponent implements OnInit {
  currentAssignment = null;
  assignmentForm: FormGroup;
  preferredCommunication: string;
  offerredCommunications: string[] = ['Email', 'Phone'];
  levels: string[] = [
    'A1', 'A1.1', 'B1', 'B1.1', 'B1.2', 'C1', 'C2'
  ];
  englishLevel: string;
  studyFromHome: boolean;
  submitted = false;
  currDate = new Date()

  constructor(
    private fb: FormBuilder,
    private assignmentService: AssignmentService,
    private route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.assignmentForm = this.fb.group({
      name: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]],
      age: [null, [Validators.required]],
      phone: [null, [Validators.required]],
      preferred: [null, [Validators.required]],
      level: [null, [Validators.required]],
      startDate: [null, [Validators.required]],
      skills: [null, null],
      presentation: [null, null],
      studyHome: [true, null]
    });
    this.getAssignment(this.route.snapshot.paramMap.get("id"));
  }

  getAssignment(id): void {
    this.assignmentService.get(id).subscribe(
      (data) => {
        this.currentAssignment = data;
        this.assignmentForm = this.fb.group({
          name: [this.currentAssignment.name, [Validators.required]],
          email: [this.currentAssignment.email, [Validators.required, Validators.email]],
          age: [this.currentAssignment.age, [Validators.required]],
          phone: [this.currentAssignment.phone, [Validators.required]],
          preferred: [this.currentAssignment.preferredCommunication, [Validators.required]],
          level: [this.currentAssignment.englishLevel, [Validators.required]],
          startDate: [this.currentAssignment.availableToStart, [Validators.required]],
          skills: [this.currentAssignment.skills, null],
          presentation: [this.currentAssignment.presentation, null],
          studyHome: [this.currentAssignment.studyFromHome, null]
        });
      },
      (error) => {
        console.error(error);
      }
    );
  }

  updateAssignment(): void {
    const { name, email, age, phone, preferred, level, startDate, skills, presentation, studyHome } = this.assignmentForm.value;

    this.assignmentService
      .update(this.currentAssignment.id, 
        { name, 
          email, 
          age, 
          phone, 
          preferredCommunication: preferred, 
          englishLevel: level, 
          availableToStart: startDate, 
          skills, 
          presentation, 
          studyFromHome: studyHome 
      })
      .subscribe(
        (res) => {
          this.toastr.success(
            "Successfully edited assignment!",
            "Success",
            ToastrConfig
          );
          this.router.navigate(["/assignments"]);
        },
        (error) => {
          this.toastr.error(error, "Error", ToastrConfig);
        }
      );
  }

  deleteAssignment(): void {
    this.assignmentService.delete(this.currentAssignment.id).subscribe(
      (res) => {
        this.toastr.success(
          "Successfully deleted assignment!",
          "Success",
          ToastrConfig
        );
        this.router.navigate(["/assignments"]);
      },
      (error) => {
        this.toastr.error(error, "Error", ToastrConfig);
      }
    );
  }
}
