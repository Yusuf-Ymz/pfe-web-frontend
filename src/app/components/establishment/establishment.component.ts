import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { locationData } from 'src/app/models/location-data.model';
import { EstablishmentService } from 'src/app/services/establishment.service';

@Component({
  selector: 'app-establishment',
  templateUrl: './establishment.component.html',
  styleUrls: ['./establishment.component.css']
})
export class EstablishmentComponent implements OnInit {

  locations: Array<locationData>;
  displayedColumns : Array<String>;

  urlQrCode;
  elementType;

  constructor(private establishmentService : EstablishmentService) {
    this.locations = []
    this.displayedColumns = ["id", "nom", "description", "url"]
    this.urlQrCode = "https://www.google."
    this.elementType = "img"
   }


  ngOnInit(): void {
    this.getLocations();
  }

  addLocation(form: NgForm){
    console.log(form)
    this.establishmentService.createLocation(form.value.location_name, form.value.location_description)
    form.reset()
    this.getLocations();
  }

  getLocations(){
    this.locations= [...this.establishmentService.getLocations()];
    this.urlQrCode += "be" //this.locations[0].id;
    console.log(this.locations)
  }

}
