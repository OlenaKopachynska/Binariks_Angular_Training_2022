import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IProduct} from "../models/IProduct";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getProducts() :Observable<IProduct[]>{
    return this.http.get<IProduct[]>(`${environment.apiUrl}/products`)
  }
  deleteProduct(product: IProduct) :Observable<IProduct>{
    return this.http.delete<IProduct>(`${environment.apiUrl}/products/${product.id}`)
  }

  addProduct(newProduct:IProduct): Observable<IProduct>  {
    return this.http.post<IProduct>(`${environment.apiUrl}/products`, newProduct)

  }

}
