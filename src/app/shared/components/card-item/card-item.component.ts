import {Component, Input} from '@angular/core';
import {ProductModel} from "../../../core/models/product.model";

@Component({
  selector: 'app-card-item',
  standalone: true,
  imports: [],
  templateUrl: './card-item.component.html',
  styleUrl: './card-item.component.scss'
})
export class CardItemComponent {

  @Input() product!: ProductModel

  starAll = [1,2,3,4,5,6]

}
