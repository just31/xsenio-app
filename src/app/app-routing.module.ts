import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// We configure lazy load of application modules.
const routes: Routes = [
  { path: '', loadChildren: './login/login.module#LoginModule' },
  { path: 'count', loadChildren: './count/count.module#CountModule' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
