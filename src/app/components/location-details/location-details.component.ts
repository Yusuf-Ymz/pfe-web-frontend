import { Component, Input, OnInit } from '@angular/core';
import { PdfService } from 'src/app/pdf.service';

@Component({
  selector: 'app-location-details',
  templateUrl: './location-details.component.html',
  styleUrls: ['./location-details.component.css']
})
export class LocationDetailsComponent implements OnInit {

  @Input() locationsList! : [];

  displayedColumns : Array<String>;
  
  //valueQrCode: any;
  elementType;
  constructor(private pdfService: PdfService) {
    this.displayedColumns = ["id", "nom", "description", "code"];
    this.elementType = "img";
    //this.valueQrCode = JSON.stringify({id: , type: 'location'});
   }

  ngOnInit(): void {
  }

  getQrcode(event: any){
    this.pdfService.generatePdf({image: event.target.src});
  }
}
