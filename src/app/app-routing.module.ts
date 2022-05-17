import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { RegisterComponent } from './components/register/register.component';
import { TestAnsiedadComponent } from './form/test-ansiedad/test-ansiedad.component';
import { TestBipolarComponent } from './form/test-bipolar/test-bipolar.component';
import { TestEstresComponent } from './form/test-estres/test-estres.component';
import { PlantillaResultadosComponent } from './results/plantilla-resultados/plantilla-resultados.component';
import { AsignarTestComponent } from './testView/asignar-test/asignar-test.component';
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
    path: "select-test",
    component:AsignarTestComponent
  },
  {
    path: "test-ansiedad",
    component:TestAnsiedadComponent
  },
  {
    path: "test-bipolar",
    component:TestBipolarComponent
  },
  {
    path: "test-estres",
    component:TestEstresComponent
  },
  {
    path : "result",
    component: PlantillaResultadosComponent
  },
  {
    path: "**",
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {  }