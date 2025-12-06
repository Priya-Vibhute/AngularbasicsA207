import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface Product 
{
  id:number,
  title:string,
  price:number,
  description:string,
  category:string,
  image:string,
  rating:{rate:number,count:number}
}

@Injectable({
  providedIn: 'root'
})
export class ApiProductsService {

  constructor(private httpClient:HttpClient)
  {

  }

  getAllProducts()
  {
    return this.httpClient.get<Product[]>('https://fakestoreapi.com/products');
  }

  deleteProduct(id:number)
  {
    return this.httpClient.delete<Product>(`https://fakestoreapi.com/products/${id}`);

  }

  addProduct(product:Product)
  {
     return this.httpClient.post<Product>('https://fakestoreapi.com/products',product);
  }

  updateProoduct(product:Product,id:number)
  {
     return this.httpClient.put(`https://fakestoreapi.com/products/${id}`,product);
  }

  
}
