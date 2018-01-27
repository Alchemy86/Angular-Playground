import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../material/material.module';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { ContactmanagerAppComponent } from './contactmanager-app.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MaincontentComponent } from './components/maincontent/maincontent.component';
import { sidenavComponent } from './components/sidenav/sidenav.component';
import { BookHolidayComponent } from '../pages/book-holiday/book-holiday.component';

import { Routes, RouterModule } from '@angular/router';
import { UserService } from './services/user.service';

const routes: Routes = [
  { path: '', component: ContactmanagerAppComponent,
    children: [
      {path: 'book', component: BookHolidayComponent},
      {path: ':id', component: MaincontentComponent },
      {path: '', component: MaincontentComponent },
    ] },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    UserService
  ],
  declarations: [
    ContactmanagerAppComponent, 
    ToolbarComponent, 
    MaincontentComponent,
    BookHolidayComponent,
    sidenavComponent]
})
export class ContactmanagerModule { }
