import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/models/category';
import { Product } from 'src/app/models/product';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-updateproduct',
  templateUrl: './updateproduct.component.html',
  styleUrls: ['./updateproduct.component.css']
})
export class UpdateproductComponent implements OnInit {
  updateProdForm: FormGroup
  public categories: any[] = [];


  constructor(private fb: FormBuilder, private categoryService: CategoryService, private route: ActivatedRoute, private productService: ProductService,
    private router: Router) {


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



    this.updateProdForm = this.fb.group(FormControls);
  }


  get name() { return this.updateProdForm.get('name') }
  get description() { return this.updateProdForm.get('description') }
  get price() { return this.updateProdForm.get('price') }
  get category() { return this.updateProdForm.get('category') }
  get image() { return this.updateProdForm.get('image') }

  ngOnInit(): void {
    //ysir l exu awl m tlechargi l'interface
    let idprod = this.route.snapshot.params.id;

    this.productService.getOneProduct(idprod).subscribe(
      res => {
        let prod = res.data;//si on fait update les donnees sont affichees
        console.log(prod);
        this.updateProdForm.patchValue({
          name: prod.name,
          description: prod.description,
          price: prod.price,
          image: prod.image,
          category: prod.category.id,
        }
        )
      },
      err => {
        console.log(err);
      }

    )

    this.categoryService.allCategory().subscribe(
      res => {
        this.categories = res;


      },
      err => {
        console.log(err);

      }
    )
  }

  updateProd() {

    let idprod = this.route.snapshot.params.id;
    let data = this.updateProdForm.value;
    let product = new Product(idprod, data.name, data.description, data.image, data.price, new Category(data.category));
    this.productService.updateProduct(product).subscribe(
      res => {
        this.router.navigate(['/admin/product/list']);
      },
      err => {
        console.log(err);
      }

    )

  }

}
