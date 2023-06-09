import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LidFormComponent } from './lid-form/lid-form.component';
import { LidListComponent } from './lid-list/lid-list.component';
import { TeamListComponent } from './team-list/team-list.component';
import { TeamFormComponent } from './team-form/team-form.component';
import {FormsModule} from "@angular/forms";
import {RouterOutlet} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { LidmaatschapFormComponent } from './lidmaatschap-form/lidmaatschap-form.component';
import { LidmaatschapListComponent } from './lidmaatschap-list/lidmaatschap-list.component';
import { DropdownteamComponent } from './dropdownteam/dropdownteam.component';


@NgModule({
  declarations: [
    AppComponent,
    LidFormComponent,
    LidListComponent,
    TeamListComponent,
    TeamFormComponent,
    LidmaatschapFormComponent,
    LidmaatschapListComponent,
    DropdownteamComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterOutlet,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
