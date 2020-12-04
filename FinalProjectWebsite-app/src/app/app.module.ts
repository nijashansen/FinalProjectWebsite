import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ErrorsListComponent } from './errors/errors-list/errors-list.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AppRoutingModule } from './app-routing.module';
import { ErrorsDetailsComponent } from './errors/errors-details/errors-details.component';
import { AboutComponent } from './about/about.component';
import {HttpClientModule} from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {MatListModule} from "@angular/material/list";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import { ProcessListComponent } from './process/process-list/process-list.component';
import {MatExpansionModule} from "@angular/material/expansion";
import { ProcessDetailsComponent } from './process/process-details/process-details.component';
import {MatDialogModule} from "@angular/material/dialog";
import { DeleteDialogComponent } from './shared/dialogComponent/delete-dialog/delete-dialog.component';
import { LoginComponent } from './login/login/login.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    ErrorsListComponent,
    NavbarComponent,
    WelcomeComponent,
    ErrorsDetailsComponent,
    AboutComponent,
    ProcessListComponent,
    ProcessDetailsComponent,
    DeleteDialogComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatListModule,
    MatProgressSpinnerModule,
    MatExpansionModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
