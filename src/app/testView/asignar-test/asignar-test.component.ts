import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-asignar-test',
  templateUrl: './asignar-test.component.html',
  styleUrls: ['./asignar-test.component.css']
})
export class AsignarTestComponent{

  constructor( private routes: Router) { }

  
  newTest(values:any){
    //FALTA NAVIGATION EXTRAS
    this.routes.navigate([values.test])
  }

  volver() : void {
    this.routes.navigate(['dashboard'])
  }

  
}
