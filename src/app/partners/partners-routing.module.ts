import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PartnersListComponent } from './partners-list/partners-list.component';

const routes: Routes = [
  {
    path:'',
    component: PartnersListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PartnersRoutingModule { }
