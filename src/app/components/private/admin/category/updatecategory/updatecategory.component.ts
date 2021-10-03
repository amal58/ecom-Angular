import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,FormBuilder,Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';
@Component({
  selector: 'app-updatecategory',
  templateUrl: './updatecategory.component.html',
  styleUrls: ['./updatecategory.component.css']
})
export class UpdatecategoryComponent implements OnInit {
  updateCatForm:FormGroup
  constructor(private fb :FormBuilder,private route:ActivatedRoute,private categoryService: CategoryService,
    private router:Router) { 

    let FormControls={

      name:new FormControl('',[
        Validators.required,
        Validators.pattern("[a-z,'-]+"),
        Validators.minLength(2)
        
      ])

   }
   this.updateCatForm=this.fb.group(FormControls) ;

  }

  get name(){return this.updateCatForm.get('name')}


  ngOnInit(): void {
    let idCat=this.route.snapshot.params.id;
    this.categoryService. getOneCategory(idCat).subscribe(
     res=>{
       let cat=res;
      console.log(cat);
      this.updateCatForm.patchValue({
        name:cat.name

      }

      )
     },
     err=>{
       console.log(err);
     }




    )
    
  }

  updateCat(){
    let idCat=this.route.snapshot.params.id;
    let data=this.updateCatForm.value;
     let category=new Category( idCat,data.name);
this.categoryService.updateCategory(category).subscribe(
res=>{
this.router.navigate(['/admin/category/list']);

},
err=>{
  console.log(err);
}

)
    
    }



}
