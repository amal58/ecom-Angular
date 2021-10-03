import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {


  private addProductUrl = 'http://localhost:8080/products/add';
  private allProductUrl="http://localhost:8080/products/all";
  private deleteProductUrl="http://localhost:8080/products/delete/";
  private getOneProductUrl="http://localhost:8080/products/one/";
  private updateProductUrl="http://localhost:8080/products/update";

  constructor( private http: HttpClient) { }




  public addProduct(product: Product) {
    let dataFromApi = this.http.post<any>(this.addProductUrl,/*req body*/product);
    return dataFromApi;

  }
  public allProduct() {
    let dataFromApi = this.http.get<any>(this.allProductUrl);
    return dataFromApi;

  }

  public deleteProduct(id:any) {
    let dataFromApi = this.http.delete<any>(this.deleteProductUrl+id);
    return dataFromApi;

  }
  public updateProduct(product: Product) {
    let dataFromApi = this.http.put<any>(this.updateProductUrl,/*obligatoire body patch and post*/product);
    return dataFromApi;

  }
  public getOneProduct(id:any) {
    let dataFromApi = this.http.get<any>(this.getOneProductUrl+id);
    return dataFromApi;

  }
}
