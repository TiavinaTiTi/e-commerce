import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive} from "@angular/router";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  dropdownMenu = [
    {title: 'Our Menu', label: 'Our Menu', icon: '', root: '/menu'},
    {title: 'About Us', label: 'About Us', icon: '', root: '/about'},
    {title: 'Contact Us', label: 'Contact Us', icon: '', root: 'contact'},
  ]

  itemMenu = [
    {title: 'Contact Us', label: 'Contact Us', icon: '', root: ''},
    {title: 'To cart', label: '', icon: 'bi-cart', root: ''},
  ]

}
