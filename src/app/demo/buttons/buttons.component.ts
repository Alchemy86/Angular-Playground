import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buttons',
  template: `
  <button mat-raised-button>
    ok <mat-icon>done</mat-icon>
  </button>

  <button mat-button>
    <mat-icon>face</mat-icon>
    Click me</button>
  <mat-checkbox>Check me!</mat-checkbox>
  `,
  styles: []
})
export class ButtonsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
