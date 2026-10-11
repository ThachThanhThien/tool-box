import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppConst } from '../../shared/app-const';
import { MenuGroup, ToolItem } from '../../core/models/menu-item';
import { ToolHistoryService } from '../../core/services/tool-history.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  public historyService = inject(ToolHistoryService);

  searchQuery = '';
  selectedCategory = 'all';

  readonly menuGroups: MenuGroup[] = AppConst.appMenu;
  readonly allTools: ToolItem[] = AppConst.getAllTools();

  readonly categories = [
    { key: 'all', label: 'All Tools', icon: 'fa-solid fa-shapes' },
    { key: 'Web Tools', label: 'Web Tools', icon: 'fa-solid fa-code' },
    { key: 'Text Utilities', label: 'Text Utilities', icon: 'fa-solid fa-align-left' },
    { key: 'Image & Media', label: 'Image & Media', icon: 'fa-solid fa-image' },
    { key: 'Converters', label: 'Converters', icon: 'fa-solid fa-arrows-rotate' },
    { key: 'Playground & Code', label: 'Playground & Code', icon: 'fa-solid fa-laptop-code' },
    { key: 'Everyday Tools', label: 'Everyday Tools', icon: 'fa-solid fa-toolbox' }
  ];

  ngOnInit(): void {}

  setCategory(cat: string): void {
    this.selectedCategory = cat;
  }

  get filteredTools(): ToolItem[] {
    let list = this.allTools;

    if (this.selectedCategory !== 'all') {
      list = list.filter(t => t.category === this.selectedCategory);
    }

    if (this.searchQuery.trim()) {
      const q = this.searchQuery.toLowerCase().trim();
      list = list.filter(t =>
        t.name.toLowerCase().includes(q) ||
        t.description.toLowerCase().includes(q) ||
        t.keywords.some(k => k.toLowerCase().includes(q))
      );
    }

    return list;
  }

  get favoriteTools(): ToolItem[] {
    const favLinks = this.historyService.favorites();
    return this.allTools.filter(t => favLinks.includes(t.routerLink));
  }

  get recentTools(): ToolItem[] {
    const recentLinks = this.historyService.recents();
    return recentLinks
      .map(link => this.allTools.find(t => t.routerLink === link))
      .filter((t): t is ToolItem => !!t)
      .slice(0, 6);
  }

  isFavorite(link: string): boolean {
    return this.historyService.isFavorite(link);
  }

  toggleFavorite(event: Event, link: string): void {
    event.stopPropagation();
    event.preventDefault();
    this.historyService.toggleFavorite(link);
  }

  onToolClick(link: string): void {
    this.historyService.recordUsage(link);
  }
}
