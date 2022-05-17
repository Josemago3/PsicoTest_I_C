
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
import { DashboardInicioComponent } from './testView/dashboard-inicio/dashboard-inicio.component';
import { DashboardExpedientesComponent } from './testView/dashboard-expedientes/dashboard-expedientes.component';
import { DashboardResultadosComponent } from './testView/dashboard-resultados/dashboard-resultados.component';
import { DashboardExpedientesPacienteComponent } from './testView/dashboard-expedientes-paciente/dashboard-expedientes-paciente.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { PlantillaTestComponent } from './form/plantilla-test/plantilla-test.component';
import { AsignarTestComponent } from './testView/asignar-test/asignar-test.component';
import { TestAnsiedadComponent } from './form/test-ansiedad/test-ansiedad.component';
import { TestBipolarComponent } from './form/test-bipolar/test-bipolar.component';
import { TestEstresComponent } from './form/test-estres/test-estres.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    PageNotFoundComponent,
    DashboardComponent,
    DashboardInicioComponent,
    DashboardExpedientesComponent,
    DashboardResultadosComponent,
    DashboardExpedientesPacienteComponent,
    PlantillaTestComponent,
    AsignarTestComponent,
    TestAnsiedadComponent,
    TestBipolarComponent,
    TestEstresComponent,
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
