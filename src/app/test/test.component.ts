import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-test',
  // template: `
        
  //         <div *ngIf="displayName; then thenBlock; else elseBlock"></div>

  //         <ng-template #thenBlock>
  //           <h2>AMS TEAM VISIBLE</h2>
  //         </ng-template>
  //         <ng-template #elseBlock>
  //           <h2>AMS TEAM NON VISIBLE</h2>
  //         </ng-template>

  //         <h1> this ng switch</h1>
  //         <div [ngSwitch]="color">
  //           <div *ngSwitchCase="'red'">picked red</div>
  //           <div *ngSwitchCase="'yellow'">picked yellow</div>
  //           <div *ngSwitchCase="'blue'">picked blue</div>
  //           <div *ngSwitchDefault>picked again</div>
  //         </div>
  //         <h2>this ngfor</h2>
  //         <div *ngFor="let color of colors; index as i">
  //           <h3> {{i}} {{color}} </h3>
  //         </div>

  //         <h2>this ngfor first index</h2>
  //         <div *ngFor="let color of colors; first as f">
  //           <h3> {{f}} {{color}} </h3>
  //         </div>

  //         <h2>this ngfor last index</h2>
  //         <div *ngFor="let color of colors; last as l">
  //           <h3> {{l}} {{color}} </h3>
  //         </div>

  //         <h2>this ngfor even index</h2>
  //         <div *ngFor="let color of colors; even as e">
  //           <h3> {{e}} {{color}} </h3>
  //         </div>




  //         <input #myInput type="text">
  //         <button (click)="logMessage(myInput.value)">log</button>
  //         <h1>This two way data binding</h1>
  //         <input [(ngModel)]="user" type="text">
  //         {{user}}
  // `
  // ,
  template: `
  <h2>{{"hello " + name }}</h2>
  <button (click)="fireEvent()">Send Event</button>
  `,
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  // public color = "black";
  @Input('parentData') public name; 
  @Output() public childEvent = new EventEmitter();
  public colors = ["red","blue","green", "yellow"];
  public displayName = true;
  // public name = "AMS TEAM";
  public user = "";
  constructor() { }

  ngOnInit() {
  }
  logMessage(value){
    console.log(value)
  }
  fireEvent(){
    this.childEvent.emit('hey AMS TEAM')
  }

}
