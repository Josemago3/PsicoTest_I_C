import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from "firebase/compat/app";
import { ConService } from './con.service';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  uid:any;

  constructor(private afauth: AngularFireAuth, private con:ConService) { }

  async register(email: string, password: string) {
    try {
      return await this.afauth.createUserWithEmailAndPassword(email, password);
    }
    catch (err) {
      console.log("error en login: ", err);
      return null;
    }
  }
  
  async login(email: string, password: string) {
    try {
      return await this.afauth.signInWithEmailAndPassword(email, password);
    }
    catch (err) {
      console.log("error en login: ", err);
      return null;
    }
  }

  async loginWithGoogle(email: string, password: string) {
    try {
      return await this.afauth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    }
    catch (err) {
      console.log("error en login: ", err);
      return null;
    }
  }

  getUserLogged(){
    return this.afauth.authState;
  }

  logout(){
    this.afauth.signOut();
  }
  obteneruid(uid:any){
    this.con.uid = uid;
    console.log(this.con.uid);
  }
  regresaruid(){
    return this.uid;
  }
}
