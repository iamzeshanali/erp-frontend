import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OpenItemsRoutingModule } from './open-items-routing.module';
import {OpenItemsComponent} from "@containers/MyView/open-items/open-items.component";
import {DynamicModule} from "@components/dynamic/dynamic.module";
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [OpenItemsComponent],
  imports: [
    CommonModule,
    OpenItemsRoutingModule,
    DynamicModule,
    HttpClientModule
  ]
})
export class OpenItemsModule { }
