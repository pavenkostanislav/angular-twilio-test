import { Component, Input } from '@angular/core';

const ACCOUNT_SID = 'AC009763bc133c85d8a0ae4362662e2165';
const AUTH_TOKEN = '154a2d06f833b6c497efad38e28dcdd1';

@Component({
  selector: 'hello',
  template: `<h1>test call!</h1>
  <input #msg type="text" [(ngModel)]="msg"><br />
  <button type="button" (click)="onCall(msg)" title="bigger">call</button>`
})
export class HelloComponent {
  msg: string;
  onCall(msg: any) {
    console.log(msg);
  }
}
