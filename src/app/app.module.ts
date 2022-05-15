
import { NgModule } from '@angular/core'; 
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { DashboardComponent } from './testView/dashboard/dashboard.component';
import { DashboardConsultaComponent } from './testView/dashboard-consulta/dashboard-consulta.component';
import { DashboardInicioComponent } from './testView/dashboard-inicio/dashboard-inicio.component';
import { DashboardExpedientesComponent } from './testView/dashboard-expedientes/dashboard-expedientes.component';
import { DashboardResultadosComponent } from './testView/dashboard-resultados/dashboard-resultados.component';
import { DashboardExpedientesPacienteComponent } from './testView/dashboard-expedientes-paciente/dashboard-expedientes-paciente.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    PageNotFoundComponent,
    DashboardComponent,
    DashboardConsultaComponent,
    DashboardInicioComponent,
    DashboardExpedientesComponent,
    DashboardResultadosComponent,
    DashboardExpedientesPacienteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
