import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {ServerComponent} from "./server/server.component";
import {FormsModule} from "@angular/forms";
import { ServersComponent } from './servers/servers.component';
import {WarningAlertComponent} from "./warningAlert/warningAlert.component";
import {SuccessAlertComponent} from "./successAlert/successAlert.component";
import { UserComponent } from './user/user.component';
import { PasswordComponent } from './password/password.component';


@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    SuccessAlertComponent,
    WarningAlertComponent,
    UserComponent,
    PasswordComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
