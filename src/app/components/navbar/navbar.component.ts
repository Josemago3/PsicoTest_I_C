import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  userLogged = this.authService.getUserLogged();
  constructor(private authService: AuthService, private route: Router) { }

  logout() {
    this.authService.logout();
    this.route.navigate(['home']);
  }

  ngOnInit(): void {
  }

}
