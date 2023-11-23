import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { LoadingComponent } from './components/loading/loading.component';
import { NotificationComponent } from './components/notification/notification.component';
import { UserService } from './services/user.service';
import { HomeComponent } from './components/home/home.component';
import { LoginPageComponent } from './modules/authentication/components/login-page/login-page.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    LoadingComponent,
    NotificationComponent,
    HomeComponent,
    LoginPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
