import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Location } from '../model/location';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor(private http: HttpClient) { }

  url: string = "http://wirus.herokuapp.com/api";

  getLocationStats(): Observable<Location[]>{
    return this.http.get<Location[]>(this.url);
  }
}
