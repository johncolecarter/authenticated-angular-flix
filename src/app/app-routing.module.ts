import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { SignUpLoginComponent } from './sign-up-login/sign-up-login.component';


const routes: Routes = [
  { path: 'main', component: MainComponent },
  { path: '', component: SignUpLoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
