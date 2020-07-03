import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignments-info',
  templateUrl: './assignments-info.component.html',
  styleUrls: ['./assignments-info.component.css']
})
export class AssignmentsInfoComponent implements OnInit {
  @Input() currentAssignment: any;

  constructor() { }

  ngOnInit(): void {
  }

}
