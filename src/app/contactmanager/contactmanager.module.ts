import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../material/material.module';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { ContactmanagerAppComponent } from './contactmanager-app.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MaincontentComponent } from './components/maincontent/maincontent.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: ContactmanagerAppComponent,
    children: [
      {path: '', component: MaincontentComponent }
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
  declarations: [
    ContactmanagerAppComponent, 
    ToolbarComponent, 
    MaincontentComponent,
    SidebarComponent]
})
export class ContactmanagerModule { }
