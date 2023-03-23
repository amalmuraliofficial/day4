import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactpageComponent } from './pages/contactpage/contactpage.component';
import { DistrictpageComponent } from './pages/districtpage/districtpage.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { SignuppageComponent } from './pages/signuppage/signuppage.component';
import { SinglepageComponent } from './pages/singlepage/singlepage.component';

const routes: Routes = [
  {
    path:'',component:HomepageComponent
  },
  {
    path:'Districts',component:DistrictpageComponent
  },
  {
    path:'Contact',component:ContactpageComponent
  },
  {
    path:'SignUP',component:SignuppageComponent
  },
  {
    path:'Singlepage',component:SinglepageComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }