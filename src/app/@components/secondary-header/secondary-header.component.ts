import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  OnInit,
  Output,} from '@angular/core';
import {Path} from "@core/structs";
import {ThemeList, ThemeService} from "@core/services/theme";

@Component({
  selector: 'app-secondary-header',
  templateUrl: './secondary-header.component.html',
  styleUrls: ['./secondary-header.component.scss']
})
export class SecondaryHeaderComponent implements OnInit {
  @Output() logout = new EventEmitter<void>();

  path = Path;
  theme = ThemeList;

  constructor(private themeService: ThemeService) {}

  ngOnInit(): void {}

  onClickLogout(): void {
    this.logout.emit();
  }

  onClickToggleTheme(theme: ThemeList): void {
    this.themeService.changeTheme(theme);
  }

}
