import { Component, OnInit } from '@angular/core';
import {AngularFirestore} from '@angular/fire/compat/firestore';
import { arrayRemove } from 'firebase/firestore';
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
  resultados: any;
  public itemEditar: any;
  // public Arr: Array<any> = [];
  pass : any;

  paciente = {
    nombre: '',
    paterno: '',
    materno: '',
    email: '',
    ciudad: '',
    estado: '',
    cp: '',
    id: ''
  }
  
  constructor(private firestone: AngularFirestore, private authService: AuthService, private con:ConService) { 
    this.con.returnItems().subscribe(items => {
      this.items = items;
      console.log(items);
    })
    // this.pass = this.con.returnItem(this.itemEditar);
    // console.log(this.itemEditar);
    // console.log(this.pass);
  }

  ngOnInit(): void {
    
    this.itemEditar = this.con.regresarpaciente();
    this.paciente.id = this.itemEditar.id;
    this.paciente.nombre = this.itemEditar.nombre;
    this.paciente.paterno = this.itemEditar.paterno;
    this.paciente.materno = this.itemEditar.materno;
    this.paciente.email = this.itemEditar.email;
    this.paciente.ciudad =  this.itemEditar.ciudad;
    this.paciente.estado =  this.itemEditar.estado;
    this.paciente.cp = this.itemEditar.cp;

    // this.con.open.subscribe( data => {
    //   // console.log("Id paciente: " ,data.data.nombre);
    //   this.itemEditar = new Object(data.data);
    //   this.Arr.push(this.itemEditar);
    //   console.log(this.itemEditar);
    //   // this.actualizarusuario();
    //   // return data.data;
    //   // this.editar(data.data);
    //   // this.paciente.nombre = this.itemEditar.nombre;
    // })
    
  }

  openMenuList(menuList:any){
    this.selectedList = menuList;
    if(this.selectedList === 'Resultados'){
      this.cargarResultados(this.itemEditar.id);
    }
  }

  cargarResultados(user:any){
    this.con.returnResultados(user).subscribe(items => {
      this.resultados = items;
      console.log(this.resultados);
    })
  }
  // altausuario(user:any){
  //   const { nombre, paterno, materno, email, ciudad, estado, cp } = this.paciente;
  //   console.log(user);
  //   console.log(this.firestone.collection("Psicólogos").doc(user).collection("Pacientes").add({"nombre": nombre, "apellido paterno": paterno, "apellido materno": materno, "correo": email, "ciudad": ciudad, "estado": estado, "codigo postal": cp}));    
  // }

  actualizarusuario(){
    
    // console.log(this.itemEditar.nombre);
    this.con.editar(this.paciente);
    
    // const { nombre, paterno, materno, email, ciudad, estado, cp } = this.paciente;
    // console.log(user);
    // console.log(this.firestone.collection("Psicólogos").doc(user).collection("Pacientes").add({"nombre": nombre, "apellido paterno": paterno, "apellido materno": materno, "correo": email, "ciudad": ciudad, "estado": estado, "codigo postal": cp}));    
  }

}
