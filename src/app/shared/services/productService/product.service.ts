import { Injectable } from '@angular/core';
import {ProductModel} from "../../../core/models/product.model";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  dataInit: ProductModel[] = []

  dataSet: ProductModel[] = [
    {id: 1, title: 'burger fromage', price: 10000, promotion: 0, rating: 4, shortDescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad dolores molestiae necessitatibus optio quidem quod? Culpa dicta dolor doloremque porro', category: 'burger', taste: ['Double Fromage', 'Viande Porc'], description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad dolores molestiae necessitatibus optio quidem quod? Culpa dicta dolor doloremque porro Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad dolores molestiae necessitatibus optio quidem quod? Culpa dicta dolor doloremque porro', reviews: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad dolores molestiae necessitatibus optio quidem quod? Culpa dicta dolor doloremque porro'},
    {id: 2, title: 'burger love', price: 10000, promotion: 12000, rating: 3, shortDescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad dolores molestiae necessitatibus optio quidem quod? Culpa dicta dolor doloremque porro', category: 'burger', taste: ['1 acheter + 1 gratuit', 'Pack love'], description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad dolores molestiae necessitatibus optio quidem quod? Culpa dicta dolor doloremque porro Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad dolores molestiae necessitatibus optio quidem quod? Culpa dicta dolor doloremque porro', reviews: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad dolores molestiae necessitatibus optio quidem quod? Culpa dicta dolor doloremque porro'},
    {id: 3, title: 'big burger', price: 15000, promotion: 0, rating: 4, shortDescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad dolores molestiae necessitatibus optio quidem quod? Culpa dicta dolor doloremque porro', category: 'burger', taste: ['Double fromage', 'Double poulet', '1 frite offert'], description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad dolores molestiae necessitatibus optio quidem quod? Culpa dicta dolor doloremque porro Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad dolores molestiae necessitatibus optio quidem quod? Culpa dicta dolor doloremque porro', reviews: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad dolores molestiae necessitatibus optio quidem quod? Culpa dicta dolor doloremque porro'},
    {id: 4, title: 'burger poulet', price: 10000, promotion: 0, rating: 2, shortDescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad dolores molestiae necessitatibus optio quidem quod? Culpa dicta dolor doloremque porro', category: 'burger', taste: ['Poulet'], description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad dolores molestiae necessitatibus optio quidem quod? Culpa dicta dolor doloremque porro Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad dolores molestiae necessitatibus optio quidem quod? Culpa dicta dolor doloremque porro', reviews: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad dolores molestiae necessitatibus optio quidem quod? Culpa dicta dolor doloremque porro'},
    {id: 5, title: 'burger charcuterie', price: 10000, promotion: 0, rating: 4, shortDescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad dolores molestiae necessitatibus optio quidem quod? Culpa dicta dolor doloremque porro', category: 'burger', taste: ['Charcuterie'], description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad dolores molestiae necessitatibus optio quidem quod? Culpa dicta dolor doloremque porro Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad dolores molestiae necessitatibus optio quidem quod? Culpa dicta dolor doloremque porro', reviews: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad dolores molestiae necessitatibus optio quidem quod? Culpa dicta dolor doloremque porro'},
    {id: 6, title: 'pizza fruit de mer', price: 20000, promotion: 0, rating: 5, shortDescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad dolores molestiae necessitatibus optio quidem quod? Culpa dicta dolor doloremque porro', category: 'pizza', taste: ['Charcuterie'], description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad dolores molestiae necessitatibus optio quidem quod? Culpa dicta dolor doloremque porro Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad dolores molestiae necessitatibus optio quidem quod? Culpa dicta dolor doloremque porro', reviews: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad dolores molestiae necessitatibus optio quidem quod? Culpa dicta dolor doloremque porro'},
    {id: 7, title: 'pizza duo', price: 30000, promotion: 0, rating: 4, shortDescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad dolores molestiae necessitatibus optio quidem quod? Culpa dicta dolor doloremque porro', category: 'pizza', taste: ['Charcuterie'], description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad dolores molestiae necessitatibus optio quidem quod? Culpa dicta dolor doloremque porro Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad dolores molestiae necessitatibus optio quidem quod? Culpa dicta dolor doloremque porro', reviews: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad dolores molestiae necessitatibus optio quidem quod? Culpa dicta dolor doloremque porro'},
    {id: 8, title: 'glace chocolate', price: 5000, promotion: 0, rating: 6, shortDescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad dolores molestiae necessitatibus optio quidem quod? Culpa dicta dolor doloremque porro', category: 'glace', taste: ['Charcuterie'], description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad dolores molestiae necessitatibus optio quidem quod? Culpa dicta dolor doloremque porro Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad dolores molestiae necessitatibus optio quidem quod? Culpa dicta dolor doloremque porro', reviews: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad dolores molestiae necessitatibus optio quidem quod? Culpa dicta dolor doloremque porro'},
  ]

  // Recupere tous les product
  getAllProduct(): Observable<ProductModel[]>{
    this.dataInit = this.dataSet
    return of(this.dataInit)
  }

  // (Interne) parcours et selectionne en fonction du category
  private _loopFilterCategory(category: string){
    this.dataInit = []
    for( let product of this.dataSet){
      (product.category === category)? this.dataInit.push(product) : null
    }
  }

  // Filtre tous les Product selon category
  filterProduct(category: string): Observable<ProductModel[]>{
    switch (category){
      case 'pizza':
        this._loopFilterCategory('pizza');
        break;
      case 'burger':
        this._loopFilterCategory('burger');
        break;
      case 'glace':
        this._loopFilterCategory('glace');
        break;
      default:
        // this._loopFilterCategory('burger');
        break;
    }
    return of(this.dataInit)
  }

}
