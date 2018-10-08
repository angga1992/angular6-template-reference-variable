import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
        
          <div *ngIf="displayName; then thenBlock; else elseBlock"></div>

          <ng-template #thenBlock>
            <h2>AMS TEAM VISIBLE</h2>
          </ng-template>
          <ng-template #elseBlock>
            <h2>AMS TEAM NON VISIBLE</h2>
          </ng-template>

          <h1> this ng switch</h1>
          <div [ngSwitch]="color">
            <div *ngSwitchCase="'red'">picked red</div>
            <div *ngSwitchCase="'yellow'">picked yellow</div>
            <div *ngSwitchCase="'blue'">picked blue</div>
            <div *ngSwitchCase="'brown'">picked blue</div>
          </div>




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
  public color = "blue";
  public displayName = true;
  public name = "AMS TEAM";
  public user = "";
  constructor() { }

  ngOnInit() {
  }
  logMessage(value){
    console.log(value)
  }

}
