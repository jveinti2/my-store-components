import { Component } from '@angular/core';

import { Product } from '../../models/product.model';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss'],
})
export class ProductosComponent {
  products: Product[] = [
    {
      id: 1,
      name: 'Producto 1',
      image: './assets/',
      price: 1000,
    },
    {
      id: 2,
      name: 'Producto 2',
      image: './assets/',
      price: 1000,
    },
    {
      id: 3,
      name: 'Producto 3',
      image: './assets/',
      price: 1000,
    },
  ];
}
