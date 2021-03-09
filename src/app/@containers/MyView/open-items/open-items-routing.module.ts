import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {OpenItemsComponent} from "@containers/MyView/open-items/open-items.component";

const routes: Routes = [
  {
    path: 'open-items', component: OpenItemsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OpenItemsRoutingModule { }
