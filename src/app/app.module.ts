import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskoneComponent } from './taskone/taskone.component';
import { FormsModule } from "@angular/forms";
import { DirectivesComponent } from './directives/directives.component';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskoneComponent,
    DirectivesComponent,
    ChildComponent,
    ParentComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
