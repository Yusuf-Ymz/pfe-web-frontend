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

    this.http.post<{ token: string, account: string }>(environment.serverUrl+'login', loginData)
      .subscribe(response => {

        let obj = JSON.stringify(response.account)
        localStorage.setItem("token", response.token);
        localStorage.setItem("account", obj);

        if(JSON.parse(obj).establishment !== undefined){
          this.router.navigate(['/establishment'])
        }
        else {
          this.router.navigate(['/doctor'])
        }

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

