import { Component, HostListener, ViewChild, OnInit, inject } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { MatSidenav } from '@angular/material/sidenav';
import { filter } from 'rxjs';
import { SearchResultComponent } from './shared/components/top-menu/search-result/search-result.component';
import { ThemeService } from './core/services/theme.service';
import { ToolHistoryService } from './core/services/tool-history.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'ToolHub Studio';

  @ViewChild('searchResult') searchResult?: SearchResultComponent;
  @ViewChild('sidenav') sidenav?: MatSidenav;

  private themeService = inject(ThemeService);
  private toolHistoryService = inject(ToolHistoryService);
  private router = inject(Router);

  isMobile = false;

  ngOnInit(): void {
    this.checkScreenSize();
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        const url = (event.urlAfterRedirects || event.url).replace(/^\//, '');
        if (url && url !== 'home') {
          this.toolHistoryService.recordUsage(url);
        }
        if (this.isMobile && this.sidenav?.opened) {
          this.sidenav.close();
        }
      });
  }

  @HostListener('window:resize')
  onResize(): void {
    this.checkScreenSize();
  }

  @HostListener('window:keydown', ['$event'])
  handleGlobalShortcuts(e: KeyboardEvent): void {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      this.searchResult?.show();
    }
  }

  private checkScreenSize(): void {
    this.isMobile = window.innerWidth < 992;
  }
}
