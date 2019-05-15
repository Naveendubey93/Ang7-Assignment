import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import {}
//const routes: Routes = [];
const routes: Routes = [
{
    path: '',redirectTo: "/user/login",pathMatch: 'full'
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
