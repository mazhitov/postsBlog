import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../shared/http.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  description = '';

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
    this.getAboutData();
    this.httpService.aboutChange.subscribe(() => {
      this.getAboutData();
    });
  }
  getAboutData() {
    this.httpService.getAboutData().subscribe((description) => {
      this.description = Object.values(description)[0];
    });
  }
}
