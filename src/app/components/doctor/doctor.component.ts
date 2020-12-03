import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DoctorService } from 'src/app/services/doctor.service';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent implements OnInit {

  constructor(private doctorService : DoctorService) { }

  ngOnInit(): void {
  }

  addLocation(form: NgForm){
    console.log(form)
    this.doctorService.createLocation(form.value.location_name, form.value.location_description)
  }

}
