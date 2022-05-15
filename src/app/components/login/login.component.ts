import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  
  usuario = {
    email: '',
    password: ''
  }

  constructor(private authService: AuthService, private router: Router) {

  }

  ingresar() {
    console.log(this.usuario);
    const { email, password } = this.usuario;
    this.authService.login(email, password).then(res => {
      console.log('se registro: ', res);
      //navigate extras para pasar datos de usuarios
      this.router.navigate(['/dashboard']);

    });
  }

  ingresarConGoogle() {
    const { email, password } = this.usuario;
    this.authService.loginWithGoogle(email, password).then(res => {

      console.log('se registro: ', res);
      //navigate extras para pasar datos de usuarios
      this.router.navigate(['/dashboard']);

    });
  }

  // obtenerUsuarioLogeado() {
  //   this.authService.getUserLogged().subscribe(res =>{
  //     console.log(res?.email);
  //   });
  // }

  

  ngOnInit(): void {
  }

}
