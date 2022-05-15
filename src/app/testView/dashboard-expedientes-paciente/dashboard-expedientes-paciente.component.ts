import { Component, OnInit } from '@angular/core';
import {AngularFirestore} from '@angular/fire/compat/firestore';
import { AuthService } from 'src/app/services/auth.service';
import { ConService } from 'src/app/services/con.service';

@Component({
  selector: 'app-dashboard-expedientes-paciente',
  templateUrl: './dashboard-expedientes-paciente.component.html',
  styleUrls: ['./dashboard-expedientes-paciente.component.css']
})
export class DashboardExpedientesPacienteComponent implements OnInit {

  userLogged = this.authService.getUserLogged();
  menuLists = ['Paciente', 'Resultados'];
  selectedList = 'Paciente';

  items:any;
  public itemEditar:any;

  paciente = {
    nombre: '',
    paterno: '',
    materno: '',
    email: '',
    ciudad: '',
    estado: '',
    cp: ''
  }
  
  constructor(private firestone: AngularFirestore, private authService: AuthService, private con:ConService) { 
    this.con.returnItems().subscribe(items => {
      this.items = items;
      console.log(items);
    })
  }

  ngOnInit(): void {
    this.con.open.subscribe( data => {
      // console.log("Id paciente: " ,data.data.nombre);
      this.itemEditar = data.data;
      console.log(this.itemEditar.nombre);
      // this.editar(data.data);
      // this.paciente.nombre = this.itemEditar.nombre;
    })
    
  }

  openMenuList(menuList:any){
    this.selectedList = menuList;
  }

  // altausuario(user:any){
  //   const { nombre, paterno, materno, email, ciudad, estado, cp } = this.paciente;
  //   console.log(user);
  //   console.log(this.firestone.collection("Psicólogos").doc(user).collection("Pacientes").add({"nombre": nombre, "apellido paterno": paterno, "apellido materno": materno, "correo": email, "ciudad": ciudad, "estado": estado, "codigo postal": cp}));    
  // }

  editar(item:any){
    this.itemEditar = item;
    // console.log(this.paciente.nombre);
  }

  actualizarusuario(){
    console.log(this.itemEditar);
    
    // const { nombre, paterno, materno, email, ciudad, estado, cp } = this.paciente;
    // console.log(user);
    // console.log(this.firestone.collection("Psicólogos").doc(user).collection("Pacientes").add({"nombre": nombre, "apellido paterno": paterno, "apellido materno": materno, "correo": email, "ciudad": ciudad, "estado": estado, "codigo postal": cp}));    
  }

}
