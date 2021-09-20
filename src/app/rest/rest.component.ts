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
  country: any;
  constructor(private locationService: LocationService){ }

  ngOnInit(): void {
  this.locationService.getLocationStats().subscribe((response) => {
      this.locations = response;
      })
  }

  search(){
    if(this.country == ""){
      this.ngOnInit();
    }else{
      this.locations = this.locations.filter(res =>{
        return res.country.toLocaleLowerCase().match(this.country.toLocaleLowerCase());
      });
    }
  }

  key: string = 'location'; 
  reverse: boolean = true;
  sort(key){
    this.key = key;
    this.reverse = !this.reverse;
  }

}
