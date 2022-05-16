import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { ConService } from 'src/app/services/con.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  userLogged = this.authService.getUserLogged();
  constructor(private authService: AuthService, private con:ConService) { }

  ngOnInit(): void {
    
  }

  cargarBd(uid: any){
    this.con.uid = uid;
  }
}
