import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ThemePanelModule } from '../theme-panel/theme-panel.module';
import {MatIconModule} from '@angular/material/icon';
import {SecondaryHeaderComponent} from "@components/secondary-header/secondary-header.component";
@NgModule({
  declarations: [SecondaryHeaderComponent],
  imports: [CommonModule, RouterModule, ThemePanelModule,MatIconModule],
  exports: [SecondaryHeaderComponent],
})
export class SecondaryHeaderModule{}
