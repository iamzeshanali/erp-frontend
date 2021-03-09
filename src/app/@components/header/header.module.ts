import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ThemePanelModule } from '../theme-panel/theme-panel.module';
import { HeaderComponent } from './header.component';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, RouterModule, ThemePanelModule,MatIconModule, MatTooltipModule],
  exports: [HeaderComponent],
})
export class HeaderModule {}
