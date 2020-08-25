import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { NewUserComponent } from './components/new-user/new-user.component';
import { UserComponent } from './components/user/user.component';
import { ShowUserComponent } from './components/show-user/show-user.component';
import { AdminComponent } from './components/admin/admin.component';
import { AdminUpdateComponent } from './components/admin-update/admin-update.component';


const routes: Routes = [
    //{path:'home', component:MainComponent},
    { path: 'new-user/:ph', component: NewUserComponent },
    { path: 'home', component: UserComponent },
    { path: 'show-user/:ph', component: ShowUserComponent },
    { path: 'admin', component: AdminComponent },
    { path: 'update/:ph', component: AdminUpdateComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
