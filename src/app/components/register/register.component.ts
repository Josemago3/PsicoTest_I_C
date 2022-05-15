import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  
  usuario = {
    nombre: '',
    email: '',
    password: '',
    passwordConfirm: ''
  }

  constructor(private authService: AuthService) {

  }

  registrarse() {
    console.log(this.usuario);
    const { email, password, passwordConfirm } = this.usuario;
    if(password == passwordConfirm){
    this.authService.register(email, password).then(res => {
      console.log('se registro: ', res);
    });
  }
  else{
    alert("Las contraseñas no coinciden");
  }
  }

  ngOnInit(): void {
  }

}
