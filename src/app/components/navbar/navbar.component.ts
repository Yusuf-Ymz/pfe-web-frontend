import { Injectable, OnDestroy } from '@angular/core';
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
export class NavbarComponent implements OnInit, OnDestroy {
  afficherBoutonLg:boolean = false;

  constructor( private authService : AuthentificationService) {
  }

  ngOnInit(): void {
    this.afficherBoutonLg = this.btnLg()
  }

  ngOnDestroy() {
    this.logout();
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
