import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: User[];
  showExtended: Boolean = true;
  loaded: Boolean = true;
  enableAdd: Boolean = true;
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
        image: 'http://lorempixel.com/200/200/people/3',
        isActive: true
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
        image: 'http://lorempixel.com/200/200/people/2',
        isActive: false
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
        image: 'http://lorempixel.com/200/200/people/1',
        isActive: true
      }
    ];
  }

  addUser = (user: User) => {
    this.users.push(user);
  }

}
