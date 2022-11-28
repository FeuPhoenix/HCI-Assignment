import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FirstpageComponent } from './firstpage/firstpage.component';
import { ScndpageComponent } from './scndpage/scndpage.component';
import { ThirdpageComponent } from './thirdpage/thirdpage.component';

const routes: Routes = [
  {path: '',component: HomeComponent},
  {path: 'firstpage',component: FirstpageComponent},
  {path: 'scndpage',component: ScndpageComponent},
  {path: 'thirdpage',component: ThirdpageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
