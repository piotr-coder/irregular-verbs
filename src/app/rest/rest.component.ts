import { Component, OnInit } from '@angular/core';
import { Location } from '../model/location';
import { LocationService } from 'src/app/services/location.service';


@Component({
  selector: 'app-rest',
  templateUrl: './rest.component.html',
  styleUrls: ['./rest.component.css']
})
export class RestComponent implements OnInit {
  locations: Location[] = [];
  constructor(public locationService: LocationService){ }

  ngOnInit(): void {
  this.locationService.getLocationStats().subscribe((response) => {
      this.locations = response;
      })
  }

}
