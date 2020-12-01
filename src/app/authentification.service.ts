import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { loginData } from './models/login-data.model'
@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  constructor(private http: HttpClient){}

    login(username: string, password: string){
        const loginData: loginData = {
            username: username,
            password: password
        }

        this.http.post<{token: string }>('http://localhost:4200/doctors/login', loginData)
            .subscribe(response => {
              
            console.log("OK");
            


        }, (error: HttpErrorResponse) => {
            if (error.status === 401) {
              //reponse  mdp ou username incorrect
              console.log("NOT");
              
            } else {
              //connexion fail
              console.log("NOT1");
            }
          });

    }
}

