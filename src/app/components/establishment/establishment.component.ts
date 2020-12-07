import { Component, OnInit, ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatTable } from '@angular/material/table';
import { EstablishmentService } from 'src/app/services/establishment.service';
import {MatTableDataSource} from '@angular/material/table';
import { PdfService } from 'src/app/pdf.service';

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
  loading;

  constructor(private establishmentService : EstablishmentService, private pdfService: PdfService) 
  {
    this.locations=[];
    this.displayedColumns = ["id", "nom", "description", "code"];
    this.urlQrCode = "http://pfe-api-backend.herokuapp.com/citizens/scans/location/";
    this.elementType = "img";
    this.loading=false;
   }

  ngOnInit(): void {
    this.getLocations();
  }

  addLocation(form: NgForm){
    this.loading=true;
    this.establishmentService.createLocation(form.value.location_name, form.value.location_description)
    form.reset()
    setTimeout(() => {
      this.loading=false;
      this.getLocations()  
    }, 1000);
  }

  getLocations(){
    this.establishmentService.getLocations().subscribe((response :any) => {
      console.log(response)
      this.locations = new MatTableDataSource<any>(response)
    })
   }

  getQrcode(event: any){
    this.pdfService.generatePdf({image: event.target.src});
  }
}