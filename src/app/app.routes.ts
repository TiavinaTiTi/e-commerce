import { Routes } from '@angular/router';
import {MenuPageComponent} from "./views/menu-page/menu-page.component";
import {ShowProductPageComponent} from "./views/show-product-page/show-product-page.component";
export const routes: Routes = [
  {path: '', redirectTo: '/menu', pathMatch: 'full'},
  {path: 'menu', component: MenuPageComponent},
  {path: 'show/:id', component: ShowProductPageComponent},
];
