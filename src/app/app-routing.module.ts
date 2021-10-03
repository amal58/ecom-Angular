import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from './admin.guard';
import { AuthGuard } from './auth.guard';
import { ClientGuard } from './client.guard';
import { AddcategoryComponent } from './components/private/admin/category/addcategory/addcategory.component';
import { ListcategoryComponent } from './components/private/admin/category/listcategory/listcategory.component';
import { UpdatecategoryComponent } from './components/private/admin/category/updatecategory/updatecategory.component';
import { AddproductComponent } from './components/private/admin/product/addproduct/addproduct.component';
import { ListproductComponent } from './components/private/admin/product/listproduct/listproduct.component';
import { UpdateproductComponent } from './components/private/admin/product/updateproduct/updateproduct.component';
import { ClientManagementComponent } from './components/private/client/client-management/client-management.component';
import { DashboardComponent } from './components/private/shared/dashboard/dashboard.component';
import { HomeComponent } from './components/public/home/home.component';
import { LoginComponent } from './components/public/login/login.component';
import { Page404Component } from './components/public/page404/page404.component';
import { RegisterComponent } from './components/public/register/register.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'login',
    component:LoginComponent
  } ,
  {
    path:'register',
    component:RegisterComponent
  },
  
  {
    path:'dashboard',
    component:DashboardComponent,
    canActivate:[AuthGuard]
  },
  
  {
    path:'admin/category/list',
    component:ListcategoryComponent,
    canActivate:[AdminGuard]
    
  },
   {
    path:'admin/category/add',
    component:AddcategoryComponent,
    canActivate:[AdminGuard]
  }, 
  {
    path:'admin/category/update/:id',
    component:UpdatecategoryComponent,
    canActivate:[AdminGuard]
  },
  {
    path:'admin/product/add',
    component:AddproductComponent, 
    canActivate:[AdminGuard]
  },
   {
    path:'admin/product/update/:id',
    component:UpdateproductComponent,
    canActivate:[AdminGuard]
  },
   {
    path:'admin/product/list',
    component:ListproductComponent,
    canActivate:[AdminGuard]
  },
   {
    path:'client/client-management',
    component:ClientManagementComponent,
    canActivate:[ClientGuard]
  },

  {
    path:'**',
    component:Page404Component
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
