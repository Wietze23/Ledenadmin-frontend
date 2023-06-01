
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LidFormComponent} from "./lid-form/lid-form.component";
import {TeamFormComponent} from "./team-form/team-form.component";
import {LidListComponent} from "./lid-list/lid-list.component";
import {TeamListComponent} from "./team-list/team-list.component";

const routes: Routes = [
  { path: 'lid', component: LidFormComponent },
  { path: 'leden', component: LidListComponent },
  { path: 'team', component: TeamFormComponent },
  { path: 'teams', component: TeamListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
