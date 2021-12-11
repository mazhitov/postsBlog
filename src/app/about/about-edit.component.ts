import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../shared/http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about-edit',
  template: `<form (ngSubmit)="onSubmit()" class="card">
                <div class="form-group card-body">
                  <label>Description: <br>
                    <input type="text" name="description" [(ngModel)]="description">
                  </label>
                  <br>
                  <button type="submit" class="btn btn-success align-self-start" [disabled]="description===''">Save</button>
                </div>
            </form>
  `
})

export class AboutEditComponent implements OnInit{
  description = '';

  constructor(private httpService: HttpService, private router: Router) {}

  ngOnInit() {
    this.httpService.getAboutData().subscribe((description) => {
      this.description = Object.values(description)[0];
    });
  }

  onSubmit() {
    const description = this.description;
    this.httpService.updateAboutData({description});
    void this.router.navigate(['/about']);
    this.description = ''
  }
}
