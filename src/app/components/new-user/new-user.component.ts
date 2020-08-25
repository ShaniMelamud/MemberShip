import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { UsersModel } from 'src/app/models/user.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-new-user',
    templateUrl: './new-user.component.html',
    styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {

    public user: UsersModel = new UsersModel();
    constructor(
        private myUserService: UsersService,
        private myRouter: Router,
        private myActivatedRoute: ActivatedRoute
    ) { }

    ngOnInit() {
        this.user.phone = this.myActivatedRoute.snapshot.params.ph;
    }
    public async create() {
        try {
            await this.myUserService.createUserAsync(this.user);
            this.myRouter.navigateByUrl('/home');
        }
        catch (err) {
            console.log(err);
        }
    }
}
