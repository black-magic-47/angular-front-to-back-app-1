import { Component, OnInit, ViewChild} from '@angular/core';
import { User } from '../../models/User';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  user: User = {
    firstName: '',
    lastName: '',
    email: ''
  };
  users: User[];
  loaded: Boolean = true;
  enableAdd: Boolean = false;
  showUserForm: Boolean = false;
  @ViewChild('userForm') form: any;
  constructor() { }

  ngOnInit() {
    this.users = [
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'jpohn@gmail.com',
        isActive: true,
        registered: new Date('01/02/2018 06:30:00'),
        hide: true
      },
      {
        firstName: 'Kevin',
        lastName: 'Doe',
        email: 'kevin@gmail.com',
        isActive: false,
        registered: new Date('11/13/2017 07:10:00'),
        hide: true
      },
      {
        firstName: 'Karen',
        lastName: 'Doe',
        email: 'karen@gmail.com',
        isActive: true,
        registered: new Date('10/13/2018 01:15:00'),
        hide: true
      }
    ];
  }

  submitForm = ({value, valid}: {value: User, valid: boolean}) => {
    if (!valid) {
      console.log('Form is invalid');
    } else {
      value.isActive = true;
      value.hide = true;
      value.registered = new Date();
      this.users.unshift(value);
      this.form.reset();
    }
  }

}
