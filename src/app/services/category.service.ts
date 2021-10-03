import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private addCategoryUrl = 'http://localhost:8080/categories/add';
  private allCategoryUrl="http://localhost:8080/categories/all";
  private deleteCategoryUrl="http://localhost:8080/categories/delete/";
  private getOneCategoryUrl="http://localhost:8080/categories/one";
  private updateCategoryUrl="http://localhost:8080/categories/update";
  constructor(
    private http: HttpClient,


  ) { }

  public addCategory(category: Category) {
    let dataFromApi = this.http.post<any>(this.addCategoryUrl,/*req body*/category);
    return dataFromApi;

  }
  public allCategory() {
    let dataFromApi = this.http.get<any>(this.allCategoryUrl);
    return dataFromApi;

  }

  public deleteCategory(id:any) {
    let dataFromApi = this.http.delete<any>(this.deleteCategoryUrl+id);
    return dataFromApi;

  }
  public updateCategory(category: Category) {
    let dataFromApi = this.http.put<any>(this.updateCategoryUrl,/*obligatoire body patch and post*/category);
    return dataFromApi;

  }
  public getOneCategory(id:any) {
    let dataFromApi = this.http.get<any>(this.getOneCategoryUrl+id);
    return dataFromApi;

  }
  

}
