import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  private dataUrl = 'http://tetervak.dev.fast.sheridanc.on.ca/exams/angular/data/p1200.json';
  private imageUrl = "http://tetervak.dev.fast.sheridanc.on.ca/exams/angular/images/mona_liza.jpg"

  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    return this.http.get<any>(this.dataUrl);
  }
  //image returned
  getImageUrl(): string {
    return this.imageUrl;
  }
}
