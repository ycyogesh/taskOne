import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.scss']
})
export class DirectivesComponent implements OnInit {

  constructor() { }

  cities = ['trichy','ariyalur','villupuram','chennai','madurai','thiruvannamalai']

  ngOnInit(): void {
  }

}
