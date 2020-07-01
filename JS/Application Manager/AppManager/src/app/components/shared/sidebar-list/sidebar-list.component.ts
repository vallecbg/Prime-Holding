import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sidebar-list',
  templateUrl: './sidebar-list.component.html',
  styleUrls: ['./sidebar-list.component.css']
})
export class SidebarListComponent implements OnInit {
  isAuth: boolean;
  userId: string;

  constructor() { }

  ngOnInit() {
    this.isAuth = false
  }

  getUserId(){
    
  }

  logout(){
    
  }

}
