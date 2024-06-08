import {Component, inject, OnInit} from '@angular/core';
import {RouterLink, RouterLinkActive} from "@angular/router";
import {CardItemComponent} from "../../shared/components/card-item/card-item.component";
import {ProductService} from "../../shared/services/productService/product.service";
import {Observable} from "rxjs";
import {ProductModel} from "../../core/models/product.model";
import {AsyncPipe, JsonPipe, NgClass} from "@angular/common";

@Component({
  selector: 'app-menu-page',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    CardItemComponent,
    AsyncPipe,
    NgClass,
    JsonPipe
  ],
  templateUrl: './menu-page.component.html',
  styleUrl: './menu-page.component.scss'
})
export class MenuPageComponent{

  productService: ProductService = inject(ProductService)

  category = [
    {title: 'Pizza', root: '/pizza'},
    {title: 'Burger', root: '/burger'},
    {title: 'Glace', root: '/ice'},
  ]

  categoryDefault: string = 'burger'
  activecategory: string = 'burger'

  product$: Observable<ProductModel[]> = this.productService.filterProduct(this.categoryDefault.toLowerCase());

  changeCategory(category: string): Observable<ProductModel[]>{
    this.activecategory = category;
    return this.product$ = this.productService.filterProduct(category.toLowerCase());
  }

}
