import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { ToastrService} from 'ngx-toastr'
import { environment} from '../../environments/environment';
import { locationData } from '../models/location-data.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EstablishmentService {
  constructor(private http: HttpClient, private router: Router, private toastr: ToastrService) { }

  getLocations(): Observable<[]> {
    const account = JSON.parse(localStorage.getItem("account") || '{}');
    return this.http.get<[]>(environment.serverUrl+'establishments/?id='+account.establishment.id)
  }
  
  createLocation(name : string, description: string) {
    const account = JSON.parse(localStorage.getItem("account") || '{}');
    const locationData : locationData ={
      name: name,
      description : description,
      establishment:{
        id: account.establishment.id,
        name: account.establishment.name
      }
    }
    //requete vers la Db
    this.http.post(environment.serverUrl+'establishments/generateQRCode', locationData)
      .subscribe(response => {
        console.log("location ajouté")
      }, (error: HttpErrorResponse) => {
        if (error.status === 401) {
          this.toastr.error("Erreur serveur lors de l'ajout")
        }
      });
  }
}
