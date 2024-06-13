import {Component, Input} from '@angular/core';
import {ProductModel} from "../../../core/models/product.model";
import {TitleCasePipe, UpperCasePipe} from "@angular/common";
import {RouterLink} from "@angular/router";
import {StarRatingComponent} from "../star-rating/star-rating.component";

@Component({
  selector: 'app-card-item',
  standalone: true,
  imports: [
    TitleCasePipe,
    UpperCasePipe,
    RouterLink,
    StarRatingComponent
  ],
  templateUrl: './card-item.component.html',
  styleUrl: './card-item.component.scss'
})
export class CardItemComponent {
  @Input() product!: ProductModel
}
