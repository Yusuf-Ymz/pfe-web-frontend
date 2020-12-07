import { Injectable } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from '../../services/authentification.service'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

@Injectable({
  providedIn : 'root'
})
export class NavbarComponent implements OnInit {
  afficherBoutonLg:boolean;

  constructor( private authService : AuthentificationService) {
    this.afficherBoutonLg=true;
   }

  ngOnInit(): void {
    this.btnLg()
  }

  title = 'pfe-web-frontend';

  logout(){
    this.authService.logout();
  }

  public btnLg() {
    if(localStorage.getItem('token') !== undefined)
      return this.afficherBoutonLg=true;
    else
      return this.afficherBoutonLg=false;
  }

}
