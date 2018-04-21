import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LeftbarComponent } from './leftbar/leftbar.component';
import { RightbarComponent } from './rightbar/rightbar.component';
import { DataService } from './services/data.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileBarComponent } from './dashboard/profile-bar/profile-bar.component';
import { MsgBarComponent } from './dashboard/msg-bar/msg-bar.component';
import { PostsComponent } from './dashboard/posts/posts.component';
import { ProfileComponent } from './dashboard/menu/profile/profile.component';
import { SettingComponent } from './dashboard/menu/setting/setting.component';
import { MsgComponent } from './dashboard/menu/msg/msg.component';

const appRoutes: Routes = [
  {path: '', component:MainComponent},
  {path: 'dashboard',component:DashboardComponent},
  {path:'profile', component:ProfileComponent},
  {path:'setting', component:SettingComponent},
  {path:'msg', component:MsgComponent}  
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LeftbarComponent,
    RightbarComponent,
    MainComponent,
    FooterComponent,
    DashboardComponent,
    ProfileBarComponent,
    MsgBarComponent,
    PostsComponent,
    ProfileComponent,
    SettingComponent,
    MsgComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)

  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
