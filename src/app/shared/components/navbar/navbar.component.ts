import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  dropdownMenu = [
    {title: 'Our Menu', label: 'Our Menu', icon: '', root: ''},
    {title: 'About Us', label: 'About Us', icon: '', root: ''},
    {title: 'Contact Us', label: 'Contact Us', icon: '', root: ''},
  ]

  itemMenu = [
    {title: 'Contact Us', label: 'Contact Us', icon: '', root: ''},
    {title: 'To cart', label: '', icon: 'bi-cart', root: ''},
  ]

}
