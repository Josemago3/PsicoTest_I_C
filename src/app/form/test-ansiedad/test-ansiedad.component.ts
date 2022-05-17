import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-test-ansiedad',
  templateUrl: './test-ansiedad.component.html',
  styleUrls: ['./test-ansiedad.component.css']
})
export class TestAnsiedadComponent{

  constructor(/*private route:ActivatedRoute,*/ private router:Router) { }

  resultado : number = 0;

  evaluar() :void {
    this.router.navigate(['result'], {queryParams:{data:this.resultado}})
  }

  volver() : void {
    this.router.navigate(['select-test']);
  }

  addItem(value:any) : void {
    this.resultado = value += this.resultado;
  }

  banco = [
    {
      'pregunta':'Hubo días en los que me sentí cansado y fatigado tratando de realizar incluso las tareas o actividades físicas más pequeñas, a pesar de que estaba durmiendo lo suficiente.',
      'name' : 'campo1',
      'resp1':'id1',
      'resp2':'id2',
      'resp3':'id3',
    },
    {
      'pregunta':'Hubo períodos en los que estaba durmiendo demasiado, y / o tenía problemas para conciliar el sueño y permanecer dormido, sin razón aparente.',
      'name' : 'campo2',
      'resp1':'id4',
      'resp2':'id5',
      'resp3':'id6',
    },
    {
      'pregunta':'Hubo días en los que tuve problemas para seguir las conversaciones o instrucciones de otras personas porque me sentía distraído por todas las otras cosas que sucedían a mi alrededor.',
      'name' : 'campo3',
      'resp1':'id7',
      'resp2':'id8',
      'resp3':'id9',
    },
    {
      'pregunta':'Hubo un período de cuatro días consecutivos o más en el que me sentí triste, desesperada o vacía durante la mayor parte del día sin razón aparente.',
      'name' : 'campo4',
      'resp1':'id10',
      'resp2':'id11',
      'resp3':'id12',
    }
  ]

}
