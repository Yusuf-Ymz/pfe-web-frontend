import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { ToastrService} from 'ngx-toastr'
import { environment} from '../../environments/environment';
import { locationData } from '../models/location-data.model';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  private locations = [{
    "name":"Local1",
    "description":"c\'est un local"
  }];

  constructor(private http: HttpClient, private router: Router, private toastr: ToastrService) { }

  getLocations(){
    return this.locations;
    // this.http.get(environment.serverUrl+'doctor')
    //   .subscribe(response => {
    //        return response.data
    //   })
  }
  
  createLocation(name : string, description: string) {
    const locationData : locationData ={
      name: name,
      description : description
    }
    return this.locations = [locationData, ...this.locations]
    //requete vers la Db
    // this.http.post(environment.serverUrl+'doctor', locationData)
    //   .subscribe(response => {
    //     //repondre par une liste de qr code ? ou ajouter le qrcode generé ?
    //     console.log(response)
    //   }, (error: HttpErrorResponse) => {
    //     if (error.status === 401) {
    //       this.toastr.error("Erreur serveur lors de l'ajout")
    //     }
    //   });
  }
}
