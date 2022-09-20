import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-usersdetail',
  templateUrl: './usersdetail.component.html',
  styleUrls: ['./usersdetail.component.scss']
})
export class UsersdetailComponent implements OnInit {

  @Input() userData:any;
  @Input() userIndex=0;
  @Output() removedUser = new EventEmitter();

  
  constructor() { }

  ngOnInit(): void {
  }

  removeUser(){
    this.removedUser.emit(this.userIndex);    
    console.log("Removed");
    
  }

}
