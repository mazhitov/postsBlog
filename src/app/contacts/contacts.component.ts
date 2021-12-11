import { Component, OnInit } from '@angular/core';
import { Contact } from '../../shared/contact.model';
import { HttpService } from '../../shared/http.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  contacts: Contact | undefined = undefined;
  loading = false;

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
    this.getContactsData();
    this.httpService.contactsChange.subscribe(() => {
      this.getContactsData();
    });
  }
  getContactsData() {
    this.loading = true;
    this.httpService.getContactsData().subscribe((contacts) => {
      this.contacts = contacts[0];
      this.loading = false;
    });
  }
}
