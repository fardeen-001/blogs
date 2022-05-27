import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {path: '', redirectTo:'/auth', pathMatch: 'full'},
  { path: '', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
   { path: 'blogs', loadChildren: () => import('./blogs/blogs.module').then(m => m.BlogsModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
