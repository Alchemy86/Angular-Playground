// Created to account for MaterialModule not existing 
// anymore in @angular/material 
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatCheckbox,
  MatCheckboxModule,
  MatSidenavModule,
  MatListModule,
  MatDatepickerModule,
  MatFormFieldModule,
  MatNativeDateModule,
  MatInputModule
} from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatListModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule
  ],
  exports: [
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatListModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule
  ]
})
export class MaterialModule { }
