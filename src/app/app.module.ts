import { NgModule } from '@angular/core';
//Modulos
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';


import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SpinnerComponent } from './shared/spinner/spinner.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { FormsModule } from '@angular/forms';
import { AddTokenInterceptor } from './utils/add-token.interceptor';
import { InmuCrearComponent } from './components/inmueble/inmu-crear/inmu-crear.component';
import { InmuebleComponent } from './components/inmueble/inmueble.component';
import { BuscarComponent } from './components/inmueble/buscar/buscar.component';
import { VisitaComponent } from './components/inmueble/visita/visita.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignInComponent,
    DashboardComponent,
    NavbarComponent,
    SpinnerComponent,
    SignInComponent,
    InmuebleComponent,
    InmuCrearComponent,
    BuscarComponent,
    VisitaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
      progressBar: true,
      progressAnimation: 'increasing',
      closeButton: true
    }),
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS,useClass: AddTokenInterceptor,multi: true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
