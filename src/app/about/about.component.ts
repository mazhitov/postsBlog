import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../shared/http.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  description = '';
  loading = false;
  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
    this.getAboutData();
    this.httpService.aboutChange.subscribe(() => {
      this.getAboutData();
    });
  }
  getAboutData() {
    this.loading = true;
    this.httpService.getAboutData().subscribe((description) => {
      this.description = Object.values(description)[0];
      this.loading = false;
    });
  }
}
