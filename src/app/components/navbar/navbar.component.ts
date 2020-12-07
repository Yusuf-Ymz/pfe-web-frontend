import { Injectable, OnDestroy } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from '../../services/authentification.service'
import { BehaviorSubject, Subscription } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

@Injectable({
  providedIn : 'root'
})
export class NavbarComponent implements OnInit, OnDestroy{
  afficherBoutonLg:boolean = false;

  isAuthenticated: boolean = false;
  private authenticationListenerSubscription!: Subscription;

  constructor( private authService : AuthentificationService) {
    
  }

  ngOnInit(): void {
    if(localStorage.getItem("token")!==null){
      this.isAuthenticated = true;
    } else if (localStorage.getItem("token")==null){
      this.isAuthenticated = false;
    }
    console.log("il est log ? ", this.isAuthenticated);
    
    console.log(this.isAuthenticated);
    this.authenticationListenerSubscription = this.authService.getAuthenticationStatusListener().subscribe(isAuthenticated => {
      this.isAuthenticated = isAuthenticated;
      console.log(this.isAuthenticated);
    
      if(this.isAuthenticated) this.afficherBoutonLg = true;
      else this.afficherBoutonLg = false;
      
    })
    
    
  }
  ngOnDestroy() {
    this.authenticationListenerSubscription.unsubscribe();
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
