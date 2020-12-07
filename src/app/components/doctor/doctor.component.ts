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
  doctorId: any = JSON.parse(localStorage.getItem("account") || '').doctor.id;

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
    //todo: verifier que nbrQRCodes > 0
    for (let index = 0; index < this.nbrQrCodes; index++) {
      const element = { qr: `https://backend-api.com/citizens/scans/doctor/${this.doctorId}`, foreground: 'black', background: 'white', fit: 400 };
      this.qrCodes.push(element);
    }

    this.pdfService.generatePdf(this.qrCodes);
  }

}