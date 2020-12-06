import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgxQRCodeModule } from '@techiediaries/ngx-qrcode';
import { PdfService } from 'src/app/pdf.service';
import { DoctorService } from 'src/app/services/doctor.service';


@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})

export class DoctorComponent implements OnInit {
  nbrQrCodes: number = 1;
  qrCodes: Array<object> = [];

  constructor(private doctorService : DoctorService, private pdfService: PdfService) { }

  ngOnInit(): void {
  }

  onKey(event: any) { // without type info
    this.nbrQrCodes = event.target.value;
  }

  generateQrcode(form :NgForm){
    console.log(form.value)
  }

  generatePdf() {
    for (let index = 0; index < this.nbrQrCodes; index++) {
      //?? requete to add qrcode for this doctor ??
      const element = { qr: 'https://backend-api.com/scans/{doctorId}', foreground: 'black', background: 'white', fit: 500, doctor: localStorage.getItem('doctorId') };
      console.log({element});
      
      this.qrCodes.push(element);
    }

    this.pdfService.generatePdf(this.qrCodes);
  }

}
