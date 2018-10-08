import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
          <h2>{{"welcome to " + name }}</h2>
          <input #myInput type="text">
          <button (click)="logMessage(myInput.value)">log</button>
          <h1>This two way data binding</h1>
          <input [(ngModel)]="user" type="text">
          {{user}}
  `
  ,
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  public name = "AMS TEAM";
  public user = "";
  constructor() { }

  ngOnInit() {
  }
  logMessage(value){
    console.log(value)
  }

}
