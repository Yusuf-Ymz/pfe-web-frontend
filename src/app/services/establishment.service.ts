import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { ToastrService} from 'ngx-toastr'
import { environment} from '../../environments/environment';
import { locationData } from '../models/location-data.model';

@Injectable({
  providedIn: 'root'
})
export class EstablishmentService {

  private locations = [{
    "name":"Local1",
    "description":"c\'est un local",
    "establishment":"0"
  }];

  constructor(private http: HttpClient, private router: Router, private toastr: ToastrService) { }

  getLocations(){
    return this.locations;
    // this.http.get(environment.serverUrl+'establishment')
    //   .subscribe(response => {
    //        return response.data
    //   })
  }
  
  createLocation(name : string, description: string) {
    const locationData : locationData ={
      name: name,
      description : description,
      establishment:{
        id: localStorage.getItem("establishmentId"),
        name: localStorage.getItem("establishmentName")
      }
    }
    // return this.locations = [locationData, ...this.locations]
    //requete vers la Db
    this.http.post(environment.serverUrl+'establishments/generateQRCode', locationData)
      .subscribe(response => {
        //repondre par une liste de qr code ? ou ajouter le qrcode generé ?
        this.toastr.success("Vous avez généré un nouveau QRCode")
      }, (error: HttpErrorResponse) => {
        if (error.status === 401) {
          this.toastr.error("Erreur serveur lors de l'ajout")
        }
      });
  }
}
