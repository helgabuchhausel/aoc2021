import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { FirstdayComponent } from './firstday/firstday.component';
import { SecondDayComponent } from './second-day/second-day.component';
import { ThirdDayComponent } from './third-day/third-day.component';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'first',
    component: FirstdayComponent
  }
  ,
  {
    path: 'second',
    component: SecondDayComponent
  }
  ,
  {
    path: 'third',
    component: ThirdDayComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
