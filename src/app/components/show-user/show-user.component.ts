import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
import { UsersModel } from 'src/app/models/user.model';
import { ThrowStmt } from '@angular/compiler';
import { async } from 'rxjs/internal/scheduler/async';

@Component({
  selector: 'app-show-user',
  templateUrl: './show-user.component.html',
  styleUrls: ['./show-user.component.css']
})
export class ShowUserComponent implements OnInit,OnDestroy{

    public phone:string;
    public user:UsersModel;
    
  constructor(public myActivatedRoute:ActivatedRoute, public myUserService:UsersService) { }
    

  async ngOnInit() {
    this.phone=this.myActivatedRoute.snapshot.params.ph;// get phone from route parameter
    
    try{
        this.user=await this.myUserService.getUserByPhoneAsync(this.phone);
        if(this.user.bdMonth===new Date().getMonth()+1){
            this.user.gift=true;
        }else if(this.user.bdMonth!=new Date().getMonth()+1){
            this.user.gift=false;
            this.user.usedGift=0;
        }
        
    }catch(err){
        console.log(err);
    }
  }

  async addDrink(){
      try{
          this.user.drinks++;
          this.user=await this.myUserService.updateUserAsync(this.phone,this.user);
          console.log(this.user);
      }catch(err){
          console.log(err);
      }
  }


async ngOnDestroy(){
    try{
        await this.myUserService.updateUserAsync(this.phone,this.user);
    }catch(err){
        console.log(err);
    }
}

}
