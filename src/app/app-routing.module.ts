import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { RegisterComponent } from './components/register/register.component';
import { DashboardConsultaComponent } from './testView/dashboard-consulta/dashboard-consulta.component';
import { DashboardExpedientesPacienteComponent } from './testView/dashboard-expedientes-paciente/dashboard-expedientes-paciente.component';
import { DashboardExpedientesComponent } from './testView/dashboard-expedientes/dashboard-expedientes.component';
import { DashboardInicioComponent } from './testView/dashboard-inicio/dashboard-inicio.component';
import { DashboardResultadosComponent } from './testView/dashboard-resultados/dashboard-resultados.component';
import { DashboardComponent } from './testView/dashboard/dashboard.component';

const routes: Routes = [
  {
    pathMatch:'full',
    path:"",
    redirectTo:'home'
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "register",
    component: RegisterComponent
  },
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "dashboard",
    component:DashboardComponent
  },
  {
    path: "dashboard-consulta",
    component:DashboardConsultaComponent
  },
  {
    path: "dashboard-inicio",
    component:DashboardInicioComponent
  },
  {
    path: "dashboard-expediente",
    component:DashboardExpedientesComponent
  },
  {
    path: "dashboard-resultados",
    component:DashboardResultadosComponent
  },
  {
    path: "dashboard-expediente-paciente",
    component:DashboardExpedientesPacienteComponent
  },
  {
    path: "**",
    component: PageNotFoundComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {  }