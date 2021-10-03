import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-listproduct',
  templateUrl: './listproduct.component.html',
  styleUrls: ['./listproduct.component.css']
})
export class ListproductComponent implements OnInit {
  public products: any[] = [];
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.allProduct().subscribe(
      res => {
        console.log(res);
        this.products = res;
      },
      err => {

        console.log(err);
      }

    )
  }


  delete(product:any) {

    let index = this.products.indexOf(product);
    this.products.splice(index, 1);

    this.productService.deleteProduct(product.id).subscribe(
      res => {
        console.log(res);

      },
      err => {
        console.log(err);
      }
    )
  }

}
