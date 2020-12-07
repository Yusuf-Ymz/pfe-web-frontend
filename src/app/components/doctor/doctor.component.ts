import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgxQRCodeModule } from '@techiediaries/ngx-qrcode';
import { PdfService } from 'src/app/pdf.service';
import { DoctorService } from 'src/app/services/doctor.service';
import { UUID } from 'angular2-uuid'; 
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
      const uuid = UUID.UUID();
      const element = { qr:`${JSON.stringify({doctorId: this.doctorId, QrcodeId: uuid })}`, foreground: 'black', background: 'white', fit: 500 };
      this.qrCodes.push(element);
    }

    this.pdfService.generatePdf(this.qrCodes);
  }

}