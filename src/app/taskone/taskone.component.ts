import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-taskone',
  templateUrl: './taskone.component.html',
  styleUrls: ['./taskone.component.scss']
})
export class TaskoneComponent implements OnInit {

  constructor() { }
  userName : string = "";
 
  // isActive : boolean = true
  ngOnInit(): void {

  }

  clearBtn(){
    this.userName = ""
  }
}