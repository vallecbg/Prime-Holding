import { Component, Input, OnInit, SimpleChange } from '@angular/core';

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

  ngOnChanges(changes: SimpleChange) : void {
    console.log(changes.currentAssignment);
    this.currentAssignment = changes.currentAssignment.currentValue
  }

}
