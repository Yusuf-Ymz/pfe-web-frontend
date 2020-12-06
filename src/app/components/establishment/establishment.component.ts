import { Component, OnInit, ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatTable } from '@angular/material/table';
import { EstablishmentService } from 'src/app/services/establishment.service';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-establishment',
  templateUrl: './establishment.component.html',
  styleUrls: ['./establishment.component.css']
})

export class EstablishmentComponent implements OnInit {
  locations:any;
  displayedColumns : Array<String>;

  urlQrCode;
  elementType;

  constructor(private establishmentService : EstablishmentService) 
  {
    this.locations=[]
    this.displayedColumns = ["id", "nom", "description", "code"]
    this.urlQrCode = "qrcode:" // Remplacer l'url par l'url du backend
    this.elementType = "img"
   }

  ngOnInit(): void {
    this.getLocations();
  }

  addLocation(form: NgForm){
    this.establishmentService.createLocation(form.value.location_name, form.value.location_description)
    form.reset()
    setTimeout(() => {
      this.getLocations()  
    }, 1001);
  }

  getLocations(){
    this.establishmentService.getLocations().subscribe((response :any) => {
      console.log(response)
      this.locations = new MatTableDataSource<any>(response)
    })
   }

   getQrcode(event: any){
     console.log(event.target.src)
     
   }
}
