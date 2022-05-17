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
      'pregunta':'Torpe o entumecido',
      'name' : 'campo1',
      'resp1':'id1',
      'resp2':'id2',
      'resp3':'id3',
    },
    {
      'pregunta':'Acalorado',
      'name' : 'campo2',
      'resp1':'id4',
      'resp2':'id5',
      'resp3':'id6',
    },
    {
      'pregunta':'Con temblor en las piernas',
      'name' : 'campo3',
      'resp1':'id7',
      'resp2':'id8',
      'resp3':'id9',
    },
    {
      'pregunta':'Incapaz de relajarse',
      'name' : 'campo4',
      'resp1':'id10',
      'resp2':'id11',
      'resp3':'id12',
    },
    {
      'pregunta':'Con temor a que ocurra lo peor',
      'name' : 'campo5',
      'resp1':'id13',
      'resp2':'id14',
      'resp3':'id15',
    },
    {
      'pregunta':'Mareado, o que se le va la cabeza',
      'name' : 'campo6',
      'resp1':'id16',
      'resp2':'id17',
      'resp3':'id18',
    },
    {
      'pregunta':'Con latidos del corazón fuertes y acelerados',
      'name' : 'campo7',
      'resp1':'id19',
      'resp2':'id20',
      'resp3':'id21',
    },
    {
      'pregunta':'Inestable',
      'name' : 'campo8',
      'resp1':'id22',
      'resp2':'id23',
      'resp3':'id24',
    },
    {
      'pregunta':'Atemorizado o asustado',
      'name' : 'campo9',
      'resp1':'id25',
      'resp2':'id26',
      'resp3':'id27',
    },
    {
      'pregunta':'Nervioso',
      'name' : 'campo10',
      'resp1':'id28',
      'resp2':'id29',
      'resp3':'id30',
    }
  ]
}
