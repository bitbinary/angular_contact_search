import { Component, Input, OnInit } from '@angular/core';
import { Contact } from './contact';
@Component({
  selector: 'app-contact-item',
  templateUrl: './contact-item.component.html',
  styleUrls: ['./contact-item.component.css'],
})
export class ContactItemComponent implements OnInit {
  @Input()
  contact!: Contact;
  hideDetails = true;
  constructor() {}

  ngOnInit(): void {}
  toggleDetails = () => {
    this.hideDetails = !this.hideDetails;
  };
}
