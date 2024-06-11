import {Component, Input} from '@angular/core';
import {UpperCasePipe} from "@angular/common";
import {ProductModel} from "../../core/models/product.model";

@Component({
  selector: 'app-show-product-page',
  standalone: true,
  imports: [
    UpperCasePipe
  ],
  templateUrl: './show-product-page.component.html',
  styleUrl: './show-product-page.component.scss'
})
export class ShowProductPageComponent {

  starAll: number[] = [1,2,3,4,5,6]
  @Input() product!: ProductModel

}
