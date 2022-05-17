import { Component } from '@angular/core';
import { Router } from '@angular/router';

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-asignar-test',
  templateUrl: './asignar-test.component.html',
  styleUrls: ['./asignar-test.component.css']
})
export class AsignarTestComponent{

  title = 'appBootstrap';
  closeResult: string = '';

  constructor(private modalService: NgbModal, private routes: Router) { }

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
  
  newTest(values:any){
    //FALTA NAVIGATION EXTRAS
    if(values.test)
      this.routes.navigate([values.test])
  }

  volver() : void {
    this.routes.navigate(['dashboard'])
  }

  confirm(content:any, form : any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
      if(result == 'save')
        this.newTest(form);
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  
}
