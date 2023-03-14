import { LoginComponent } from './components/login/login.component';
import { DetailsComponent } from './components/details/details.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { ProductComponent } from './components/product/product.component';
import { NgModule, Component } from '@angular/core';
import {  RouterModule, Routes } from '@angular/router';

const routes: Routes = [ 

  {path:'welcome', component : WelcomeComponent},
  {path:'', redirectTo:'welcome' ,pathMatch:'full'},
  { path: 'product', component: ProductComponent },
  { path: 'product/:id', component: DetailsComponent },
  { path: 'login', component: LoginComponent},
  {path :'**',component:PagenotfoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
 }
