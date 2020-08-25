import { Component, OnInit, OnDestroy } from '@angular/core';
import { UsersModel } from 'src/app/models/user.model';
import { UsersService } from 'src/app/services/users.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-admin-update',
    templateUrl: './admin-update.component.html',
    styleUrls: ['./admin-update.component.css']
})
export class AdminUpdateComponent implements OnInit, OnDestroy {

    public user: UsersModel;
    public phone: string;
    constructor(
        private myUserService: UsersService,
        private myActivatedRoute: ActivatedRoute
    ) { }

    async ngOnInit() {
        this.phone = await this.myActivatedRoute.snapshot.params.ph;
        try {
            this.user = await this.myUserService.getUserByPhoneAsync(this.phone);
        }
        catch (err) {
            console.log(err);
        }
    }

    async ngOnDestroy() {
        try {
            await this.myUserService.updateUserAsync(this.phone, this.user);
        }
        catch (err) {
            console.log(err);
        }
    }

}
