import { Component, ContentChild, Input, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-template-one',
  templateUrl: './template-one.component.html',
  styleUrls: ['./template-one.component.css']
})
export class TemplateOneComponent implements OnInit {
  @ContentChild('header',{static: false}) headerTemplateRef: TemplateRef<any>;
  constructor() { }
  ngOnInit(): void {
  }

}
