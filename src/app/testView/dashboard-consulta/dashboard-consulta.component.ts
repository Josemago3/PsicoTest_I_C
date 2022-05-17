import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-consulta',
  templateUrl: './dashboard-consulta.component.html',
  styleUrls: ['./dashboard-consulta.component.css']
})
export class DashboardConsultaComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }
  evaluarTest() : void {

  }
  volver() : void {
    this.route.navigate(['dashboard']);
  } 
  
  banco = [
    {
      'pregunta':'Hubo días en los que me sentí cansado y fatigado tratando de realizar incluso las tareas o actividades físicas más pequeñas, a pesar de que estaba durmiendo lo suficiente.'
    },
    {
      'pregunta':'Hubo períodos en los que estaba durmiendo demasiado, y / o tenía problemas para conciliar el sueño y permanecer dormido, sin razón aparente.'
    },
    {
      'pregunta':'Hubo días en los que tuve problemas para seguir las conversaciones o instrucciones de otras personas porque me sentía distraído por todas las otras cosas que sucedían a mi alrededor.'
    },
    {
      'pregunta':'Hubo un período de cuatro días consecutivos o más en el que me sentí triste, desesperada o vacía durante la mayor parte del día sin razón aparente.'
    }
  ]
}
