import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { AuthGuardService } from "./_guards/auth-guard.service";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { JwtInterceptor } from './_interceptors/jwt.interceptor';
import { RicercaComponent } from './ricerca/ricerca.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RicercaFormComponent } from './ricerca-form/ricerca-form.component';
import { RicercaTableComponent } from './ricerca-table/ricerca-table.component';
import { ModalComponent } from './modal/modal.component';
import { ModalContainerComponent } from './modal-container.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    RicercaComponent,
    RicercaFormComponent,
    RicercaTableComponent,
    ModalComponent,
    ModalContainerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
    FontAwesomeModule
  ],
  entryComponents: [ModalComponent],
  providers: [AuthGuardService, { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
