import {Component, inject, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {ActivatedRoute, ActivatedRouteSnapshot, Router, RouterOutlet} from '@angular/router';
import {delay, filter, interval, map, mergeMap, Observable, of, take, tap} from "rxjs";
import {FormsModule} from "@angular/forms";
import {NavbarComponent} from "./shared/components/navbar/navbar.component";
import {FooterComponent} from "./shared/components/footer/footer.component";
import {ServiceComponent} from "./shared/components/service/service.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    NavbarComponent,
    FooterComponent,
    ServiceComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent{
}
