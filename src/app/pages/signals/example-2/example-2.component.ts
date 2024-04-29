import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { StoreService } from '../../../services/fake-store/store.service';
import { Category } from '../../../services/fake-store/categories-interface';
import { AllPrimeNGModule } from '../../../modules/primeng.module';
import { Product } from '../../../services/fake-store/product-interface';
import { map } from 'rxjs';

@Component({
  selector: 'app-example-2',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, AllPrimeNGModule],
  templateUrl: './example-2.component.html',
  styleUrl: './example-2.component.scss',
})
export class Example2Component implements OnInit {
  private readonly _formBuilder = inject(FormBuilder);
  private readonly _storeService = inject(StoreService);

  categories: Category[] = [];
  prodcuts: Product[] = [];
  product!: Product;

  category = this._formBuilder.group({
    idCategory: [0, Validators.required],
    idProduct: [0, Validators.required],
  });

  constructor() {}

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories() {
    this._storeService.getCategories().subscribe((categories) => {
      this.categories = categories;
    });
  }

  getProductsApiFilter(idCategory: number) {
    this._storeService.getProductsApi(idCategory).subscribe((products) => {
      this.prodcuts = products.map((x) => ({
        ...x,
        category: undefined,
        description: undefined,
      }));
      console.log('from getProductsApiFilter');
      console.log(this.prodcuts);
    });
  }

  getProductsArrayFilter(idCategory: number) {
    this._storeService
      .getProducts()
      .pipe(
        map((product) => product.filter((x) => x.category!.id === idCategory))
      )
      .subscribe((products) => {
        console.log('from getProductsArrayFilter');
        console.log(products);
      });
  }

  selectCategory($event: Category) {
    console.log($event);
    this.getProductsApiFilter($event.id);
    this.getProductsArrayFilter($event.id);
  }

  selectProduct($event: Product) {
    this.product = $event;
  }
}
