import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BaseModule } from './modules/base/base.module';
import { UserModule } from './modules/user/user.module';

const routes: Routes = [
{
    path: '', pathMatch: 'full', redirectTo: 'user/login'
},
{
 	path: 'user/login', component: UserModule 
},
{
	path: '', loadChildren:'user/user.module#UserRoutingModule'
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
