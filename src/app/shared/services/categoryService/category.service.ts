import { Injectable } from '@angular/core';
import {CategoryModel} from "../../../core/models/category.model";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  category: CategoryModel[] = [
    {id: 1, title: 'pizza', root: '/pizza'},
    {id: 2, title: 'burger', root: '/burger'},
    {id: 3, title: 'glace', root: '/glace'}
  ]

  getCategoryDefault(): CategoryModel{
    return this.category[1]
  }

  getAllCategory(): CategoryModel[]{
    return this.category;
  }
}
