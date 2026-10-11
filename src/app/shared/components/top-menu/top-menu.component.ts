import { Component, EventEmitter, Output, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ThemeService } from '../../../core/services/theme.service';

@Component({
  selector: 'app-top-menu',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './top-menu.component.html',
  styleUrl: './top-menu.component.scss'
})
export class TopMenuComponent {
  @Output() showSearchResult = new EventEmitter<void>();
  readonly themeService = inject(ThemeService);

  readonly isMac = typeof navigator !== 'undefined' && /Mac|iPod|iPhone|iPad/.test(navigator.userAgent);
  readonly shortcutLabel = this.isMac ? '⌘K' : 'Ctrl+K';

  toggleTheme(): void {
    this.themeService.toggleTheme();
  }
}
