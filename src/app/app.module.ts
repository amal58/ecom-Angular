import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/public/home/home.component';
import { LoginComponent } from './components/public/login/login.component';
import { RegisterComponent } from './components/public/register/register.component';
import { FooterComponent } from './components/public/shared/footer/footer.component';
import { NavbarComponent } from './components/public/shared/navbar/navbar.component';
import { Page404Component } from './components/public/page404/page404.component';
import { DashboardComponent } from './components/private/shared/dashboard/dashboard.component';
import { TopbarComponent } from './components/private/shared/topbar/topbar.component';
import { SidebarComponent } from './components/private/shared/sidebar/sidebar.component';
import { AddcategoryComponent } from './components/private/admin/category/addcategory/addcategory.component';
import { ListcategoryComponent } from './components/private/admin/category/listcategory/listcategory.component';
import { UpdatecategoryComponent } from './components/private/admin/category/updatecategory/updatecategory.component';
import { AddproductComponent } from './components/private/admin/product/addproduct/addproduct.component';
import { ListproductComponent } from './components/private/admin/product/listproduct/listproduct.component';
import { UpdateproductComponent } from './components/private/admin/product/updateproduct/updateproduct.component';
import{HttpClientModule} from '@angular/common/http'
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { ToastrModule, ToastNoAnimation, ToastNoAnimationModule } from 'ngx-toastr';
import { ClientManagementComponent } from './components/private/client/client-management/client-management.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    FooterComponent,
    Page404Component,
    DashboardComponent,
    TopbarComponent,
    SidebarComponent,
    AddcategoryComponent,
    ListcategoryComponent,
    UpdatecategoryComponent,
    AddproductComponent,
    ListproductComponent,
    UpdateproductComponent,
    ClientManagementComponent
  
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule , 
    ReactiveFormsModule,
    HttpClientModule,
    ToastNoAnimationModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
