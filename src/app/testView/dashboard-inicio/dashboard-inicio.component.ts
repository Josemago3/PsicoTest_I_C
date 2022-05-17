import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard-inicio',
  templateUrl: './dashboard-inicio.component.html',
  styleUrls: ['./dashboard-inicio.component.css']
})
export class DashboardInicioComponent{

  constructor() { }

  enviar(values : any) : void{

    console.log ("values -> ", values)


    /// routing con navigationExtras esto dejara escoger el tipo de test
    /// extrar del modelo una interfaz de paciente y colocar el atributo para direccioncinar test solicitado
    /// this.route.navigate(['test-ansiedad']);
  }


}
