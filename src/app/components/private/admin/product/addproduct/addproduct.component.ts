import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Category } from 'src/app/models/category';
import { Product } from 'src/app/models/product';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {
  public categories: any[] = [];
  addProdForm: FormGroup
  constructor(private fb: FormBuilder, private categoryService: CategoryService, private productServvice: ProductService, private router: Router) {
    let FormControls = {

      name: new FormControl('', [
        Validators.required,
        Validators.pattern("[a-z,'-]+"),
        Validators.minLength(2)

      ]),

      description: new FormControl('', [
        Validators.required,
        Validators.pattern("[a-z,'-]+"),
        Validators.minLength(2)

      ]),
      price: new FormControl('', [
        Validators.required,
        Validators.pattern("[0-9]+"),
        Validators.minLength(1),
        Validators.maxLength(13)

      ]),
      category: new FormControl('', [

        Validators.required,

      ]),
      image: new FormControl('', [

        Validators.required


      ])

    }

    this.addProdForm = this.fb.group(FormControls);

  }
  get name() { return this.addProdForm.get('name') }
  get description() { return this.addProdForm.get('description') }
  get price() { return this.addProdForm.get('price') }
  get category() { return this.addProdForm.get('category') }
  get image() { return this.addProdForm.get('image') }

  ngOnInit(): void {

    this.categoryService.allCategory().subscribe(
      res => {
        this.categories = res;


      },
      err => {
        console.log(err);

      }
    )
  }

  addProd() {

    let data = this.addProdForm.value;
 
    let product = new Product(undefined, data.name, data.description, data.image, data.price, new Category(data.category));
    this.productServvice.addProduct(product).subscribe(
      res => {
        console.log(res);
        this.router.navigate(['admin/product/list']);

      },
      err => {
        console.log(err);
      }

    )

  }

}
