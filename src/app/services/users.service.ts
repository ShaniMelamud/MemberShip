import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {UsersModel} from '../models/user.model';
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private myHttpClient:HttpClient){ }

  public getAllUsersAsync():Promise<UsersModel[]>{
    const observable=this.myHttpClient.get<UsersModel[]>('https://tapuch-api.herokuapp.com/users');
    return observable.toPromise();
  }

  public getUserByPhoneAsync(phone:string):Promise<UsersModel>{
      const observable=this.myHttpClient.get<UsersModel>('https://tapuch-api.herokuapp.com/users/'+phone);
      return observable.toPromise();
  }

  public createUserAsync(user:UsersModel):Promise<UsersModel>{
      const observable=this.myHttpClient.post<UsersModel>('https://tapuch-api.herokuapp.com/users',user);
      return observable.toPromise()
  }

  public updateUserAsync(phone:string, user:UsersModel):Promise<UsersModel>{
      const observable=this.myHttpClient.patch<UsersModel>('https://tapuch-api.herokuapp.com/users/'+phone,user);
      return observable.toPromise();
  }

  public deleteUserAsync(phone:string):Promise<UsersModel>{
      const observable=this.myHttpClient.delete<UsersModel>('https://tapuch-api.herokuapp.com/users/'+phone);
      return observable.toPromise();
  }
}
