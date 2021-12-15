import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { FirstDayComponent } from './first-day/first-day.component';
import { SecondDayComponent } from './second-day/second-day.component';
import { ThirdDayComponent } from './third-day/third-day.component';
import { FourthDayComponent } from './fourth-day/fourth-day.component';
import { FifthDayComponent } from './fifth-day/fifth-day.component';
import { SixthDayComponent } from './sixth-day/sixth-day.component';
import { SeventhDayComponent } from './seventh-day/seventh-day.component';
import { EightthDayComponent } from './eightth-day/eightth-day.component';
import { NinthDayComponent } from './ninth-day/ninth-day.component';
import { TenthDayComponent } from './tenth-day/tenth-day.component';


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
    component: FirstDayComponent
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
  },
  {
    path: 'fourth',
    component: FourthDayComponent
  },
  {
    path: 'fifth',
    component: FifthDayComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
