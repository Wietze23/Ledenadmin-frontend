
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LidFormComponent} from "./lid-form/lid-form.component";
import {TeamFormComponent} from "./team-form/team-form.component";
import {LidListComponent} from "./lid-list/lid-list.component";
import {TeamListComponent} from "./team-list/team-list.component";
import {LidmaatschapFormComponent} from "./lidmaatschap-form/lidmaatschap-form.component";
import {LidmaatschapListComponent} from "./lidmaatschap-list/lidmaatschap-list.component";

const routes: Routes = [
  { path: 'lid', component: LidFormComponent },
  { path: 'leden', component: LidListComponent },
  { path: 'team', component: TeamFormComponent },
  { path: 'teams', component: TeamListComponent },
  { path: 'lidmaatschap', component: LidmaatschapFormComponent },
  { path: 'lidmaatschappen', component: LidmaatschapListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
