import {Component, inject, Input} from '@angular/core';
import {AsyncPipe, UpperCasePipe} from "@angular/common";
import {ProductModel} from "../../core/models/product.model";
import {ActivatedRoute, Router} from "@angular/router";
import {ProductService} from "../../shared/services/productService/product.service";
import {toNumbers} from "@angular/compiler-cli/src/version_helpers";
import {Observable} from "rxjs";
import {FormsModule} from "@angular/forms";
import {StarRatingComponent} from "../../shared/components/star-rating/star-rating.component";

@Component({
  selector: 'app-show-product-page',
  standalone: true,
  imports: [
    UpperCasePipe,
    AsyncPipe,
    FormsModule,
    StarRatingComponent
  ],
  templateUrl: './show-product-page.component.html',
  styleUrl: './show-product-page.component.scss'
})
export class ShowProductPageComponent {
  activeRoute:ActivatedRoute = inject(ActivatedRoute)
  productService: ProductService = inject(ProductService)

  starAll: number[] = Array.from(Array(6).keys())
  private _id = (this.activeRoute.snapshot.paramMap.get('id')) ?? '0'
  @Input() product$: Observable<ProductModel | undefined> = this.productService.getProductId(parseInt(this._id))
  quantity: number = 1

  addQuantity(){
    this.quantity += 1
  }

  subtractQuantity(){
    if(this.quantity > 1){
      this.quantity -= 1
    }
  }

}
