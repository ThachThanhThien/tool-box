import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild
} from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject, debounceTime } from 'rxjs';
import { AppConst } from '../../../app-const';
import { ToolItem } from '../../../../core/models/menu-item';
import { ToolHistoryService } from '../../../../core/services/tool-history.service';

@Component({
  selector: 'app-search-result',
  standalone: true,
  imports: [CommonModule, FormsModule, NgOptimizedImage],
  templateUrl: './search-result.component.html',
  styleUrl: './search-result.component.scss'
})
export class SearchResultComponent implements OnInit {
  isShow = false;
  searchedText = '';
  selectedCategory = 'all';
  selectedIndex = 0;
  searchResults: ToolItem[] = [];

  readonly categories = [
    { key: 'all', label: 'All Tools' },
    { key: 'Web Tools', label: 'Web' },
    { key: 'Text Utilities', label: 'Text' },
    { key: 'Image & Media', label: 'Image' },
    { key: 'Converters', label: 'Converters' },
    { key: 'Playground & Code', label: 'Code' },
    { key: 'Everyday Tools', label: 'Everyday' }
  ];

  @ViewChild('searchInput') searchInput?: ElementRef<HTMLInputElement>;
  @ViewChild('resultsList') resultsList?: ElementRef<HTMLDivElement>;

  private searchTextUpdated = new Subject<string>();

  constructor(
    private router: Router,
    private cdr: ChangeDetectorRef,
    public historyService: ToolHistoryService
  ) {}

  ngOnInit(): void {
    this.searchTextUpdated.pipe(debounceTime(100)).subscribe(query => {
      this.performSearch(query);
    });
  }

  show(): void {
    this.searchedText = '';
    this.selectedCategory = 'all';
    this.selectedIndex = 0;
    this.isShow = true;
    this.performSearch('');
    this.cdr.detectChanges();
    setTimeout(() => {
      this.searchInput?.nativeElement.focus();
    }, 50);
  }

  close(): void {
    this.isShow = false;
  }

  onSearchChange(text: string): void {
    this.searchTextUpdated.next(text);
  }

  setCategory(cat: string): void {
    this.selectedCategory = cat;
    this.performSearch(this.searchedText);
  }

  performSearch(query: string): void {
    let items = AppConst.searchTools(query);
    if (this.selectedCategory !== 'all') {
      items = items.filter(tool => tool.category === this.selectedCategory);
    }
    this.searchResults = items;
    this.selectedIndex = 0;
  }

  selectTool(tool: ToolItem): void {
    this.historyService.recordUsage(tool.routerLink);
    this.close();
    this.router.navigate([tool.routerLink]);
  }

  @HostListener('window:keydown', ['$event'])
  handleKeyDown(e: KeyboardEvent): void {
    if (!this.isShow) return;

    if (e.key === 'Escape') {
      e.preventDefault();
      this.close();
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (this.searchResults.length > 0) {
        this.selectedIndex = (this.selectedIndex + 1) % this.searchResults.length;
        this.scrollSelectedIntoView();
      }
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (this.searchResults.length > 0) {
        this.selectedIndex = (this.selectedIndex - 1 + this.searchResults.length) % this.searchResults.length;
        this.scrollSelectedIntoView();
      }
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (this.searchResults[this.selectedIndex]) {
        this.selectTool(this.searchResults[this.selectedIndex]);
      }
    }
  }

  private scrollSelectedIntoView(): void {
    setTimeout(() => {
      const activeEl = this.resultsList?.nativeElement.querySelector('.search-result-item.selected');
      if (activeEl) {
        activeEl.scrollIntoView({ block: 'nearest' });
      }
    }, 0);
  }
}
