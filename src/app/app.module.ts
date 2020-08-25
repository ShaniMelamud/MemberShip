import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { LayoutComponent } from './components/layout/layout.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainComponent } from './components/main/main.component';
import { UserComponent } from './components/user/user.component';
import { NewUserComponent } from './components/new-user/new-user.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http/';
import { ShowUserComponent } from './components/show-user/show-user.component';
import { MonthsPipe } from './pipes/months.pipe';
import { AdminComponent } from './components/admin/admin.component';
import { AdminUpdateComponent } from './components/admin-update/admin-update.component';
@NgModule({
    declarations: [
        LayoutComponent,
        HeaderComponent,
        FooterComponent,
        MainComponent,
        UserComponent,
        NewUserComponent,
        ShowUserComponent,
        MonthsPipe,
        AdminComponent,
        AdminUpdateComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
        CommonModule
    ],
    providers: [],
    bootstrap: [LayoutComponent]
})
export class AppModule { }
