import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { UserComponent } from './user/user.component';
import { RouterModule, Routes } from '@angular/router';
import { Component, NgModule } from '@angular/core';
import { UserSkillsComponent } from './user-skills/user-skills.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { ThirdComponent } from './third/third.component';
import { SecondComponent } from './second/second.component';
import { ReactiveComponent } from './reactive/reactive.component';

const routes: Routes=[
  {path:'second', component:SecondComponent},
    { path:'home',component:HomeComponent },
    { path:'about',component:AboutComponent },
    { path:'user',component:UserComponent,
    children:[
      {
        path:'userskills', component:UserSkillsComponent
      },
      {
        path:'userdetails', component:UserDetailsComponent
      }
    ]
    },
    { path:'reactive', component:ReactiveComponent}
  ]
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
  })
  export class AppRoutingModule {}
  export const routingComponents = [HomeComponent, AboutComponent, UserComponent,UserSkillsComponent,UserDetailsComponent,ThirdComponent,SecondComponent,ReactiveComponent]