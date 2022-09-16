import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-taskone',
  templateUrl: './taskone.component.html',
  styleUrls: ['./taskone.component.scss']
})
export class TaskoneComponent implements OnInit {

  constructor() { }
  twoWay : any;
  
  isChangeBtn : boolean = true
  ngOnInit(): void {

  }
  enterChar(event : any){
    if(event.target.value){
      this.isChangeBtn = false
      return;
    }
    this.isChangeBtn = true
  }
  clearBtn(){
    this.twoWay = ""
  }
}