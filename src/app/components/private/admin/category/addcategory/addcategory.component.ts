import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,FormBuilder,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-addcategory',
  templateUrl: './addcategory.component.html',
  styleUrls: ['./addcategory.component.css']
})
export class AddcategoryComponent implements OnInit {
  addCatForm:FormGroup
  constructor(private fb :FormBuilder,private categoryService:CategoryService,private router:Router) {


    let FormControls={

      name:new FormControl('',[
        Validators.required,
        Validators.pattern("[a-z,'-]+"),
        Validators.minLength(2)

      ])

   }
   this.addCatForm=this.fb.group(FormControls);
  }

  get name(){return this.addCatForm.get('name')}

  ngOnInit(): void {
  }

  addCat(){
    console.log(this.addCatForm.value);
    let data = this.addCatForm.value;
    let category=new Category(undefined,data.name);
    console.log(category);
    this.categoryService.addCategory(category).subscribe(
      res=>{

        console.log(res);
        this.router.navigate(['/admin/category/list']);
      },
      err=>{
        console.log(err);

      }
    )
  }



  

}
