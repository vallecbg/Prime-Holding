import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  @Output() onToggleSidenav = new EventEmitter<void>();
  isAuth: boolean;
  userId: string;

  constructor(
  ) { }

  ngOnInit() {
  }

  getUserId(){
  }

  toggleSidenav(){
    this.onToggleSidenav.emit();
  }

  logout(){
  }
}
