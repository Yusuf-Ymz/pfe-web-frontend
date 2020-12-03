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

  constructor(private establishmentService : EstablishmentService) { }

  ngOnInit(): void {
    this.getLocations();
  }

  addLocation(form: NgForm){
    console.log(form)
    this.establishmentService.createLocation(form.value.location_name, form.value.location_description)
    form.reset()
  }

  getLocations(){
    return [...this.establishmentService.getLocations()];
  }

}
