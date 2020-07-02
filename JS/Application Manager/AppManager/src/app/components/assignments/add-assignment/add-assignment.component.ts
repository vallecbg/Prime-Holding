import { Component, OnInit } from "@angular/core";
import { AssignmentService } from "src/app/core/services/assignment.service";
import { FormGroup, FormBuilder, Validators, FormArray } from "@angular/forms";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { ToastrConfig } from "src/app/components/shared/models/toastr.config";

@Component({
  selector: "app-add-assignment",
  templateUrl: "./add-assignment.component.html",
  styleUrls: ["../../shared/styles/create-form.css"],
})
export class AddAssignmentComponent implements OnInit {
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
  }

  saveAssignment(): void {
    const { name, email, age, phone, preferred, level, startDate, skills, presentation, studyHome } = this.assignmentForm.value;

    this.assignmentService
      .create({
        name, 
        email, 
        age, 
        phone, 
        preferred, 
        level, 
        startDate, 
        skills, 
        presentation, 
        studyHome
      })
      .subscribe(
        (res) => {
          this.toastr.success(
            "Successfully created assignment!",
            "Success",
            ToastrConfig
          );
          this.router.navigate(["/assignments"]);
          this.submitted = true;
        },
        (error) => {
          this.toastr.error(error, "Error", ToastrConfig);
        }
      );
  }

  ngOnDestroy() {
    this.assignmentForm.reset();
  }
}
