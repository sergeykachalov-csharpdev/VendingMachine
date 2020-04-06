import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SecretKeyComponent } from './secret-key/secret-key.component';
import { UserViewComponent } from './user-view/user-view.component';

const routes: Routes = [
  { path: '', component: UserViewComponent},
  { path: 'secret_key', component: SecretKeyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
