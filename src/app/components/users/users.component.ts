import { Component, OnInit } from '@angular/core';
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
    age: null,
    address: {
      street: '',
      city: '',
      state: ''
    }
  };
  users: User[];
  loaded: Boolean = true;
  enableAdd: Boolean = false;
  showUserForm: Boolean = false;
  constructor() { }

  ngOnInit() {
    this.users = [
      {
        firstName: 'John',
        lastName: 'Doe',
        age: 30,
        address: {
          street: '50 Main st',
          city: 'Boston',
          state: 'MA'
        },
        isActive: true,
        registered: new Date('01/02/2018 06:30:00'),
        hide: true
      },
      {
        firstName: 'Kevin',
        lastName: 'Doe',
        age: 32,
        address: {
          street: '51 Main st',
          city: 'Boston',
          state: 'MA'
        },
        isActive: false,
        registered: new Date('11/13/2017 07:10:00'),
        hide: true
      },
      {
        firstName: 'Karen',
        lastName: 'Doe',
        age: 22,
        address: {
          street: '52 Main st',
          city: 'Boston',
          state: 'MA'
        },
        isActive: true,
        registered: new Date('10/13/2018 01:15:00'),
        hide: true
      }
    ];
  }

  addUser = () => {
    this.user.isActive = true;
    this.user.registered = new Date();
    this.users.unshift(this.user);
    this.user = {
      firstName: '',
      lastName: '',
      age: null,
      address: {
        street: '',
        city: '',
        state: ''
      }
    };
  }

  submitForm = (e) => {
    e.preventDefault();
  }

}
