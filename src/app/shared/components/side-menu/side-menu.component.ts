import { Component, inject } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Router, RouterModule, NavigationEnd } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { filter } from 'rxjs';
import { AppConst } from '../../app-const';
import { MenuGroup } from '../../../core/models/menu-item';

@Component({
  selector: 'app-side-menu',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    NgOptimizedImage
  ],
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.scss'
})
export class SideMenuComponent {
  private router = inject(Router);

  menu: MenuGroup[] = AppConst.appMenu;
  sidebarFilter = '';
  currentUrl = '';
  readonly totalToolsCount = AppConst.getAllTools().length;

  constructor() {
    this.currentUrl = this.router.url;
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        this.currentUrl = event.urlAfterRedirects || event.url;
      });
  }

  isRouteActive(link: string): boolean {
    const cleanCurrent = this.currentUrl.replace(/^\//, '');
    const cleanTarget = link.replace(/^\//, '');
    return cleanCurrent === cleanTarget;
  }

  toggleGroup(group: MenuGroup): void {
    group.isExpanded = !group.isExpanded;
  }

  filteredItems(group: MenuGroup) {
    if (!this.sidebarFilter) return group.items;
    const q = this.sidebarFilter.toLowerCase().trim();
    return group.items.filter(item =>
      item.name.toLowerCase().includes(q) ||
      item.keywords.some(k => k.toLowerCase().includes(q))
    );
  }

  hasVisibleItems(group: MenuGroup): boolean {
    return this.filteredItems(group).length > 0;
  }

  onMenuClick(link: string): void {
    this.router.navigate([link]);
  }
}
