import { NgModule} from "@angular/core";
import { RouterModule , Routes} from "@angular/router";

//Componentes
import { LoginComponent } from "./components/login/login.component";
import { SignInComponent } from "./components/sign-in/sign-in.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { InmuebleComponent } from "./components/inmueble/inmueble.component";

//Guards
import { AuthGuard } from "./utils/auth.guard";
import { InmuCrearComponent } from "./components/inmueble/inmu-crear/inmu-crear.component";
import { BuscarComponent } from "./components/inmueble/buscar/buscar.component";
import { VisitaComponent } from "./components/inmueble/visita/visita.component";

const routes: Routes = [
  {path:'', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'signin', component: SignInComponent},
  {path: 'dashboard', component: DashboardComponent , canActivate:[AuthGuard]},
  {path: 'inmueble', component: InmuebleComponent , canActivate:[AuthGuard]},
  {path: 'inmueble/crear', component: InmuCrearComponent , canActivate:[AuthGuard]},
  {path: 'buscar', component: BuscarComponent , canActivate:[AuthGuard]},
  {path: 'inmueble/visita', component: VisitaComponent, canActivate:[AuthGuard]},
  {path: '**', redirectTo: 'login', pathMatch: 'full'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {

}
