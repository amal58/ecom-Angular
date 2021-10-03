import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { JwtHelperService } from "@auth0/angular-jwt";
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private addUserUrl = 'http://localhost:8080/users/register';
  private allUserUrl="http://localhost:8080/users/all";
  private loginUserUrl="http://localhost:8080/users/login";
  private deleteUserUrl="http://localhost:8080/users/delete/";
  private updateUserUrl="http://localhost:8080/users/update";




  constructor(private http: HttpClient) { }


  public addUser(user: User) {
    let dataFromApi = this.http.post<any>(this.addUserUrl,/*req body*/user);
    return dataFromApi;

  }
  public allUser() {
    let dataFromApi = this.http.get<any>(this.allUserUrl);
    return dataFromApi;

  }
  public loginUser(user: User) {
    let dataFromApi = this.http.post<any>(this.loginUserUrl,user);
    return dataFromApi;

  }
  public deleteUser(id :any) {
    let dataFromApi = this.http.delete<any>(this.deleteUserUrl+id);
    return dataFromApi;

  }
  public updateUser(user :User) {
    let dataFromApi = this.http.post<any>(this.updateUserUrl,user);
    return dataFromApi;

  }

  isLoggedIn(){
    let token=localStorage.getItem("myToken");
    if(token){
      return true;
    }else {
      return false;

    }
  }
  isLoggedInAdmin(){
    let token=localStorage.getItem("myToken");
    if(token){
      //decodage token
      const helper = new JwtHelperService();
      const decodedToken=helper.decodeToken(token);
      //2/verif 3al role,ken admin?true:sinon false
      return decodedToken.role=="admin"? true :false
    
    }else {
      return false;

    }
  }
  isLoggedInClient(){
    let token=localStorage.getItem("myToken");
    if(token){
      //decodage token
      const helper = new JwtHelperService();
      const decodedToken=helper.decodeToken(token);
      //2/verif 3al role,ken admin?true:sinon false
      return decodedToken.role=="client"?true:false
    
    }else {
      return false;

    }
  }
 
}



