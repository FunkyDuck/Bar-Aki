import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { MenuDrinksComponent } from './components/menu/menu-drinks/menu-drinks.component';
import { MenuFoodsComponent } from './components/menu/menu-foods/menu-foods.component';
import { MenuComponent } from './components/menu/menu.component';

const routes: Routes = [
  {path:'',pathMatch:'full',redirectTo: 'home'},
  {path:'home',component:HomeComponent},
  {path:'menu',component:MenuComponent,children:[
    {path:'drink',component:MenuDrinksComponent},
    {path:'food',component:MenuFoodsComponent}
  ]},
  {path:'contact',component:ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
