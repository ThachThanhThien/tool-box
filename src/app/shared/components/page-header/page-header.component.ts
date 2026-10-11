import { Component, Input, inject } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ToolHistoryService } from '../../../core/services/tool-history.service';

@Component({
  selector: 'app-page-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './page-header.component.html',
  styleUrl: './page-header.component.scss'
})
export class PageHeaderComponent {
  @Input() header = '';
  @Input() description = '';
  @Input() category = '';
  @Input() toolLink = '';
  @Input() badge = '';

  private historyService = inject(ToolHistoryService, { optional: true });
  private router = inject(Router, { optional: true });

  isFavorite(): boolean {
    if (!this.historyService) return false;
    const link = this.toolLink || (this.router ? this.router.url.replace(/^\//, '') : '');
    return this.historyService.isFavorite(link);
  }

  toggleFavorite(): void {
    if (!this.historyService) return;
    const link = this.toolLink || (this.router ? this.router.url.replace(/^\//, '') : '');
    if (link) {
      this.historyService.toggleFavorite(link);
    }
  }

  navigateHome(): void {
    if (this.router) {
      this.router.navigate(['/']);
    } else {
      window.location.href = '/';
    }
  }
}
