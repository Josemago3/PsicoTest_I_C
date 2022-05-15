import { Component, OnInit } from '@angular/core';
import {ConService} from '../../services/con.service';

@Component({
  selector: 'app-dashboard-resultados',
  templateUrl: './dashboard-resultados.component.html',
  styleUrls: ['./dashboard-resultados.component.css']
})
export class DashboardResultadosComponent implements OnInit {

  items:any;

  constructor(private con:ConService) { 
    this.con.returnItems().subscribe(items => {
      this.items = items;
      console.log(items);
    })

    // this.con.item().subscribe((item: any) => {
    //   this.item = item;
    //   console.log(item);

    // })
  }

  ngOnInit(): void {
  }

}
