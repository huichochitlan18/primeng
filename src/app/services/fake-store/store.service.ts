import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Category } from './categories-interface';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { Product } from './product-interface';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  PATH_API = '../../../assets/json/fake-store';
  private _httpClient = inject(HttpClient);

  constructor() {}

  getCategories(): Observable<Category[]> {
    return this._httpClient.get<Category[]>(`${this.PATH_API}/categories.json`);
  }

  getProductsApi(idCategory: number) {
    return this._httpClient
      .get<Product[]>(`${this.PATH_API}/products.json`)
      .pipe(
        map((product) => product.filter((x) => x.category!.id === idCategory))
      );
  }
  getProducts() {
    return this._httpClient
      .get<Product[]>(`${this.PATH_API}/products.json`)
  }
}
