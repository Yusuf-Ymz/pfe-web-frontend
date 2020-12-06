import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpResponse,
  HttpErrorResponse,
} from '@angular/common/http';
import { loginData } from '../models/login-data.model';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { environment } from '../../environments/environment';
import { doctorData } from '../models/doctor-data.model';
import { establishmentData } from '../models/establishment-data.model';
@Injectable({
  providedIn: 'root',
})
export class AuthentificationService {
  constructor(
    private http: HttpClient,
    private router: Router,
    private toastr: ToastrService
  ) {}


  constructor(private http: HttpClient, private router: Router, private toastr: ToastrService) { }

  login(username: string, password: string) {
    const loginData: loginData = {
      username: username,
      password: password,
    };

    this.http
      .post<{ token: string; account: any }>(
        environment.serverUrl + 'login',
        loginData
      )
      .subscribe(
        (response) => {
          localStorage.setItem('token', response.token);
          localStorage.setItem('account', JSON.stringify(response.account));

          if (response.account.establishment !== undefined) {
            this.router.navigate(['/establishment']);
          } else {
            this.router.navigate(['/doctor']);
          }

          this.toastr.success('Bienvenue!');
        },
        (error: HttpErrorResponse) => {
          if (error.status === 404 || error.status === 401) {
            //reponse  mdp ou username incorrect
            this.toastr.error("Mot de passe/nom d'utilisateur incorrect");
          } else {
            //connexion fail
            this.toastr.error('Impossible de se connecter');
          }
        }
      );
  }

  logout(){
    localStorage.removeItem('token');
    localStorage.removeItem('account');
    this.router.navigate(['/']);
    this.toastr.info('Vous vous êtes déconnecté');
  }


}

  register(
    accountType: string,
    username: string,
    password: string,
    firstname: string,
    lastname: string,
    name: string
  ) {
    if (accountType === 'doctor') {
      const doctor: doctorData = {
        username,
        password,
        doctor: {
          first_name: firstname,
          last_name: lastname,
        },
      };
      this.doPostRegister(doctor);
    } else if (accountType === 'establishment') {
      const establishment: establishmentData = {
        username,
        password,
        establishment: {
          name: name,
        },
      };
      this.doPostRegister(establishment);
    } else {
      this.toastr.error('invalid account type !');
      return;
    }
  }

  doPostRegister(data: any) {
    console.log('Je vais inscrire ', data);
    this.http
      .post<{ token: string; account: any }>(
        environment.serverUrl + 'register',
        data
      )
      .subscribe(
        (response) => {
          if (response.account.username === data.username) {
            this.toastr.success('Bienvenue!');
          } else {
            this.toastr.error('Un problème est survenu !');
          }
        },
        (error: HttpErrorResponse) => {
          this.toastr.error(error.message);
        }
      );
  }
}
