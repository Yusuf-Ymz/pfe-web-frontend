import { Component, OnInit} from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatTable } from '@angular/material/table';
import { EstablishmentService } from 'src/app/services/establishment.service';

@Component({
  selector: 'app-establishment',
  templateUrl: './establishment.component.html',
  styleUrls: ['./establishment.component.css']
})

export class EstablishmentComponent implements OnInit {
  
  locations:any[];
  displayedColumns : Array<String>;

  urlQrCode;
  elementType;

  constructor(private establishmentService : EstablishmentService) 
  {
    this.locations=[]
    this.displayedColumns = ["id", "nom", "description", "code"]
    this.urlQrCode = "qrcode:"
    this.elementType = "img"
   }

  ngOnInit(): void {
    this.getLocations();
  }

  addLocation(form: NgForm){
    this.establishmentService.createLocation(form.value.location_name, form.value.location_description)
    form.reset()
    this.getLocations()
  }

  getLocations(){
    this.establishmentService.getLocations().subscribe((response : any) => {
      this.locations= [...response.locations]
      console.log(this.locations)
    })
  }
}
