import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../../shared/http.service';
import { Router } from '@angular/router';
import { Contact } from '../../../shared/contact.model';

type ContactsBody = {
  phone:string,
  homePhone:string,
  email:string,
  telegram:string,
  twitter:string,
}


@Component({
  selector: 'app-contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrls: ['./contact-edit.component.css']
})
export class ContactEditComponent implements OnInit {
  contacts:Contact|undefined = undefined;
  phoneNumber = '';
  homePhone = ''
  email = '';
  telegram = '';
  twitter = '';
  constructor(private httpService: HttpService, private router: Router) { }

  ngOnInit(): void {
    this.httpService.getContactsData().subscribe((contacts) => {
      this.contacts =contacts[0];
      this.setData();
    });
  }
  setData() {
    if(this.contacts) {
      this.phoneNumber = this.contacts.phone;
      this.homePhone = this.contacts.homePhone;
      this.email = this.contacts.email;
      this.telegram = this.contacts.telegram;
      this.twitter = this.contacts.twitter;
    }
  }

  onSubmit() {
    const body:ContactsBody = {phone:this.phoneNumber,homePhone: this.homePhone,
      email:this.email,telegram: this.telegram,twitter: this.twitter};
    this.httpService.updateContactsData(body);
    void this.router.navigate(['/contacts']);
  }
}
