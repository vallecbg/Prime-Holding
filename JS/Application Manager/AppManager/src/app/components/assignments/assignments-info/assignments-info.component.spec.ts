import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignmentsInfoComponent } from './assignments-info.component';

describe('AssignmentsInfoComponent', () => {
  let component: AssignmentsInfoComponent;
  let fixture: ComponentFixture<AssignmentsInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignmentsInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignmentsInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
