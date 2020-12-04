import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {WelcomeComponent} from "./welcome/welcome.component";
import {ErrorsListComponent} from "./errors/errors-list/errors-list.component";
import {ErrorsDetailsComponent} from "./errors/errors-details/errors-details.component";
import {AboutComponent} from "./about/about.component";
import {ProcessListComponent} from "./process/process-list/process-list.component";
import {LoginComponent} from "./login/login/login.component";
import {AuthenticationGuard} from "./shared/guards/authentication.guard";

const routes: Routes = [
  { path: '', component: WelcomeComponent},
  { path: 'login', component: LoginComponent},
  { path: 'errors', component: ErrorsListComponent, canActivate: [AuthenticationGuard]},
  { path: 'errors/:id', component: ErrorsDetailsComponent, canActivate: [AuthenticationGuard]},
  { path: 'process', component: ProcessListComponent, canActivate: [AuthenticationGuard]},
  { path: 'about', component: AboutComponent},

  //other routes redirect to welcome component
  { path: '**', component: WelcomeComponent},
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
