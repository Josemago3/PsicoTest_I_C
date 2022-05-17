import { Component, OnInit } from '@angular/core';
import { ConService } from 'src/app/services/con.service';

@Component({
  selector: 'app-dashboard-expedientes',
  templateUrl: './dashboard-expedientes.component.html',
  styleUrls: ['./dashboard-expedientes.component.css']
})
export class DashboardExpedientesComponent implements OnInit {

  items:any;

  constructor(private con:ConService) {  
      this.con.returnItems().subscribe(items => {
        this.items = items;
        console.log(items);
      })
  }

  ngOnInit(): void {
  }

  verExpediente(item: any){
    console.log(item);
    this.con.obtenerpaciente(item);
    // this.con.open.emit({
    //   data: item
    // })
    // this.expediente.paciente = item;
  }

}
