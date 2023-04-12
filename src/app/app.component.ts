import { Component } from '@angular/core';
import { MenuItem } from './app.interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Products Frontend';

  usersMenu: MenuItem[] = [
    { text: 'List all Users', link: 'user/list' },
    { text: 'Insert a User', link: 'user/insert' },
    { text: 'Delete a User', link: 'not-implemented-yet' },
    { text: 'Update a User', link: 'not-implemented-yet' },
  ];
  productsMenu: MenuItem[] = [
    { text: 'List all Products', link: 'products/list' },
    { text: 'Insert a Product', link: 'products/insert' },
    { text: 'Delete a Product', link: 'not-implemented-yet' },
    { text: 'Update a Product', link: 'not-implemented-yet' },
  ];
}
