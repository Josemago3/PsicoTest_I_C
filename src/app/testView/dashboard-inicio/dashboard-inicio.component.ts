import { Component } from '@angular/core';
import { Router } from '@angular/router';

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-dashboard-inicio',
  templateUrl: './dashboard-inicio.component.html',
  styleUrls: ['./dashboard-inicio.component.css']
})
export class DashboardInicioComponent{

  title = 'appBootstrap';
  
  closeResult: string = '';

  constructor(private modalService: NgbModal, private route:Router) { }

  /**
   * Write code on Method
   *
   * @return response()
   */
   private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

  enviar(values : any) : void{
    console.log ("values -> ", values)
    /// routing con navigationExtras esto dejara escoger el tipo de test
    /// extrar del modelo una interfaz de paciente y colocar el atributo para direccioncinar test solicitado
    /// this.route.navigate(['test-ansiedad']);
  }

  stateGuardar(content:any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  volver() : void {
    this.route.navigate(['dashboard']);
  }
}
