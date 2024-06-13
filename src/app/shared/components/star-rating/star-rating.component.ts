import {Component, Input} from '@angular/core';
import {JsonPipe} from "@angular/common";

@Component({
  selector: 'app-star-rating',
  standalone: true,
  imports: [
    JsonPipe
  ],
  templateUrl: './star-rating.component.html',
  styleUrl: './star-rating.component.scss'
})
export class StarRatingComponent {
  starAll: number[] = Array.from(Array(6).keys())
  @Input() rating: number = 0

}
