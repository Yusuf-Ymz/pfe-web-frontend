import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { loginData } from '../models/login-data.model';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr'
import { AppConfigService } from '../app-config.service';
@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  protected environment = AppConfigService.settings.environment;

  constructor(private http: HttpClient, private router: Router, private toastr: ToastrService) { }

  login(username: string, password: string) {
    const loginData: loginData = {
      username: username,
      password: password
    }

    this.http.post<{ token: string, idUser: string }>(this.environment.serverUrl + 'login', loginData)
      .subscribe(response => {
        // on récupère le token
        // 
        console.log("a", response.token);
        this.router.navigate(['/doctor'])
        this.toastr.success("Bienvenue")

      }, (error: HttpErrorResponse) => {
        if (error.status === 401) {
          //reponse  mdp ou username incorrect
          console.log("NOT");

        } else {
          //connexion fail
          console.log("NOT1");
          this.toastr.error("Impossible de se connecter")

        }
      });

  }
}

