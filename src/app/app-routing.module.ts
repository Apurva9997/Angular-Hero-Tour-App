import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HeroesComponent} from './heroes/heroes.component'
import {DashboardComponent as DashBoard} from './dashboard/dashboard.component'
import {HeroDetailComponent} from './hero-detail/hero-detail.component'

const routes: Routes = [{path:'heroes',component:HeroesComponent},{path:'details/:id',component:HeroDetailComponent},{path:'Dashboard',component:DashBoard},{path:'',redirectTo:'/Dashboard',pathMatch:'full'}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
