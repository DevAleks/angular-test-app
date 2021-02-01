import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PeopleListComponent } from './components/people-list/people-list.component';
import { PeopleFormComponent } from './components/people-form/people-form.component';


const routes: Routes = [
  { path: "", component: PeopleListComponent },
  { path: "form", component: PeopleFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
