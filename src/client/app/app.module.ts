import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { NgHttpLoaderModule } from 'ng-http-loader/ng-http-loader.module';

import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

import { ApiService } from './shared/api.service';
import { AuthService } from './shared/auth/auth.service';
import { AuthGuard } from './shared/guard/auth.guard';
import { ListComponent } from './components/list/list.component';
import { BoardsComponent } from './components/boards/boards.component';
import { PopupComponent } from './shared/modal/popup/popup.component';
import { GeneralService } from './shared/common/general.service';



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    LoginComponent,
    SignupComponent,
    PageNotFoundComponent,
    ListComponent,
    BoardsComponent,
    PopupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgHttpLoaderModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [
    ApiService,
    AuthService,
    AuthGuard,
    GeneralService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
