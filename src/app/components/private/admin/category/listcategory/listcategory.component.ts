import { conditionallyCreateMapObjectLiteral } from '@angular/compiler/src/render3/view/util';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';




@Component({
  selector: 'app-listcategory',
  templateUrl: './listcategory.component.html',
  styleUrls: ['./listcategory.component.css']
})
export class ListcategoryComponent implements OnInit {
  public categories: any[] = [];
  constructor(private categoryService: CategoryService,) { }

  ngOnInit(): void {
    this.categoryService.allCategory().subscribe(
      res => {
        console.log(res);
        this.categories = res;
      },
      err => {

        console.log(err);
      }

    )

  }


  delete(category:any) {

    let index = this.categories.indexOf(category);
    this.categories.splice(index, 1);

    this.categoryService.deleteCategory(category.id).subscribe(
      res => {
        console.log(res);

      },
      err => {
        console.log(err);
      }
    )
  }

  



    



}
