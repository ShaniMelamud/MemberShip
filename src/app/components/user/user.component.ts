import { Component } from '@angular/core';
import { UsersService } from '../../services/users.service'
import { UsersModel } from 'src/app/models/user.model';
import { Router } from '@angular/router';
@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css']
})
export class UserComponent {

    public phone: string;
    public route: string;

    constructor(
        private myUserService: UsersService,
        private myRouter: Router
    ) { }

    public async setRoute() {
        try {
            await this.myUserService.getUserByPhoneAsync(this.phone);
            this.myRouter.navigateByUrl('/show-user/' + this.phone);
        }
        catch (err) {
            this.myRouter.navigateByUrl('/new-user/' + this.phone);
        }
    }

}
