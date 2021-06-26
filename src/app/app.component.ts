import { Component } from '@angular/core';
import { HelperService } from './services/helper.service';
import { Contact } from './components/contact-item/contact';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  users!: Contact[] | any;
  filterdUsers!: Contact[] | any;
  loading = true;
  constructor(private helper: HelperService) {}
  ngOnInit() {
    this.getUsers();
  }
  //Fetch contacts
  getUsers = () => {
    this.helper.getUsers().subscribe((data: Contact[] | any) => {
      this.users = data;
      this.filterdUsers = this.sortbyName(data);
      this.loading = false;
    });
  };

  //search for matching name or username
  searchValueChange = (event: any) => {
    let tempList: any[] = [];
    this.users.forEach((element: Contact) => {
      if (
        element.name.toLowerCase().indexOf(event.value.toLowerCase()) !== -1 ||
        element.username.toLowerCase().indexOf(event.value.toLowerCase()) !==
          -1 ||
        element.phone.indexOf(event.value) !== -1
      ) {
        tempList.push(element);
      }
    });
    this.filterdUsers = this.sortbyName(tempList);
  };

  sortbyName = (contacts: Contact[]) => {
    contacts.sort(function (a, b) {
      let name_a = a.name.toLowerCase();
      let name_b = b.name.toLowerCase();
      if (name_a < name_b) {
        return -1;
      }
      if (name_a > name_b) {
        return 1;
      }
      return 0;
    });
    return contacts;
  };
}
