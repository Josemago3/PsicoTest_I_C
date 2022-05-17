import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-plantilla-resultados',
  templateUrl: './plantilla-resultados.component.html',
  styleUrls: ['./plantilla-resultados.component.css']
})
export class PlantillaResultadosComponent implements OnInit {

  constructor(private route : ActivatedRoute) { }

  resultado !: number;

  ngOnInit(): void {
    this.route.queryParams.subscribe((params:any) =>{

      this.resultado = params.data;
    
    });
  }

}
