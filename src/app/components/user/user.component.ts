import { Component } from '@angular/core';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css']
  })
  export class UserComponent {
      firstName: String = 'John';
      lastName: String = 'Doe';
      age: Number = 30;
      address: Object = {
          street: '50 Main st',
          city: 'Boston',
          state: 'MA'
      };
  }
