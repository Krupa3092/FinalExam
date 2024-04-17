import { Component } from '@angular/core';
import { DataServiceService } from './data-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rajpukru';
  paintingData: any;
  imageUrl: any;

  constructor(private dataService: DataServiceService) { }

  ngOnInit(): void {
    this.dataService.getData().subscribe(data => {
      this.paintingData = data;
    });
    this.imageUrl = this.dataService.getImageUrl();
  }
}
