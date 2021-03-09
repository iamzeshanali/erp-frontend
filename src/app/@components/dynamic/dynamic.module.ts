import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DynamicRoutingModule } from './dynamic-routing.module';
import {ListTableComponent} from "@components/dynamic/list-table/list-table.component";
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatFormFieldModule} from "@angular/material/form-field";
import { DtableComponent } from './dtable/dtable.component';
import {MatTooltipModule} from '@angular/material/tooltip';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ListTableComponent, DtableComponent],
  imports: [
    CommonModule,
    DynamicRoutingModule,
    MatCardModule,
    MatIconModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatSlideToggleModule,
    MatTooltipModule,
    RouterModule

  ],
  exports: [
    ListTableComponent,
    DtableComponent,
  ]
})
export class DynamicModule { }
