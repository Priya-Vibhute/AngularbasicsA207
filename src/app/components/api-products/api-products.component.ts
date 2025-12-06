import { Component } from '@angular/core';
import { ApiProductsService, Product } from '../../services/api-products.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-api-products',
  imports: [CommonModule],
  templateUrl: './api-products.component.html',
  styleUrl: './api-products.component.css'
})
export class ApiProductsComponent {

  products!:Product[];

  constructor(private productService:ApiProductsService)
  {

  }

  ngOnInit()
  {
       this.productService.getAllProducts()
       .subscribe({
        next:(value)=>this.products=value
       })
  }

}
