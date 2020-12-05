import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { loginData } from '../models/login-data.model';
import { Router } from '@angular/router';
import { ToastrService} from 'ngx-toastr'
import { environment} from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  constructor(private http: HttpClient, private router: Router, private toastr: ToastrService) { }

  login(username: string, password: string) {
    const loginData: loginData = {
      username: username,
      password: password
    }

    this.http.post<{ token: string, account: any }>(environment.serverUrl+'login', loginData)
      .subscribe(response => {

        localStorage.setItem("token", response.token);

        if(response.account.establishment !== undefined){
          localStorage.setItem("establishmentId", JSON.stringify(response.account.establishment.id));
          this.router.navigate(['/establishment'])
        }
        else {
          localStorage.setItem("doctorId", JSON.stringify(response.account.doctor.id));
          this.router.navigate(['/doctor'])
        }

        this.toastr.success("Bienvenue!")
      }, (error: HttpErrorResponse) => {
        if (error.status === 404 || error.status === 401) {
          //reponse  mdp ou username incorrect
          this.toastr.error("Mot de passe/nom d'utilisateur incorrect")
        } else {
          //connexion fail
          this.toastr.error("Impossible de se connecter")
        }
      });
  }
}

