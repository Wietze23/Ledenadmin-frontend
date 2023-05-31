
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LidFormComponent} from "./lid-form/lid-form.component";
import {TeamFormComponent} from "./team-form/team-form.component";

const routes: Routes = [
  { path: 'lid', component: LidFormComponent },
  { path: 'team', component: TeamFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
