import { Component, Input, OnInit } from '@angular/core';
import { locationData } from 'src/app/models/location-data.model';

@Component({
  selector: 'app-location-details',
  templateUrl: './location-details.component.html',
  styleUrls: ['./location-details.component.css']
})
export class LocationDetailsComponent implements OnInit {

  @Input() loca! : locationData;

  constructor() {
   }

  ngOnInit(): void {
  }

}
