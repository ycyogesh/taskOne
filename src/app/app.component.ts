import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'taskOne';
  userDetails = "";
  users : Array<string> = []
  newUserEmit(event: string){
    this.users.push(event);
    console.log(event);
  }
}

