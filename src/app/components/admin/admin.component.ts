import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { UsersModel } from 'src/app/models/user.model';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
    public users:UsersModel[];
  constructor(private myUserService:UsersService) { }

  async ngOnInit() {
      try{
        this.users=await this.myUserService.getAllUsersAsync();
      }catch(err){
          console.log(err);
      }
  }

    async delete(phone:string){
        try{
            const index=this.users.findIndex(us=>us.phone===phone);
            this.users.splice(index,1);
          await this.myUserService.deleteUserAsync(phone);  
        }catch(err){
            console.log(err)
        }
  }

}
