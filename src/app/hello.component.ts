import { Component, Input } from '@angular/core';
import twilio from 'twilio';
const ACCOUNT_SID = 'AC009763bc133c85d8a0ae4362662e2165';
const AUTH_TOKEN = '154a2d06f833b6c497efad38e28dcdd1';
const client = twilio(ACCOUNT_SID, AUTH_TOKEN);

@Component({
  selector: 'hello',
  template: `<h1>test call!</h1>
  <input type="text" [(ngModel)]="msg"><br />
  <button type="button" (click)="onCall()" title="bigger">call</button>`,
})
export class HelloComponent {
  msg: string;
  onCall() {
    const requestMsg = {
      body: "What's happened here?",
      from: '+18124192136',
      mediaUrl: ['https://demo.twilio.com/owl.png'],
      to: '+79202909001',
    };
    console.log(requestMsg);

    client.messages.create(requestMsg).then((msg) => console.log(msg));
  }
}
