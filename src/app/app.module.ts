import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';

//Routes will be evaluted line by line. So the last one should be the default route.
export const routes: Routes = [
  { 
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then((x) => x.AdminModule)
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'admin'
  },
  {
    path: '**',
    redirectTo: 'admin'
  }
];
/*Here we need to add all the magic, we can add imports modules and reference from here.
TypeScript decorator NGModule call.*/

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, RouterModule.forRoot(routes),HttpClientModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
