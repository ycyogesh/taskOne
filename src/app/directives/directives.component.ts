import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.scss']
})
export class DirectivesComponent implements OnInit {

  constructor() { }

  isActive : boolean = true;
  cities = ['trichy','ariyalur','villupuram','chennai','madurai','thiruvannamalai']

  ngOnInit(): void {
  }

}
