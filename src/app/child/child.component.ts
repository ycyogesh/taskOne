import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  @Input() user="";
  newUser = ""

  @Output() addNewUser = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(){
    console.log("Updated");     // Every changes intimation
  }

  addUser(){
    this.addNewUser.emit(this.newUser);
  }

}
