import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToolHistoryService {
  private readonly FAVORITES_KEY = 'toolhub_favorites';
  private readonly RECENTS_KEY = 'toolhub_recents';

  readonly favorites = signal<string[]>([]);
  readonly recents = signal<string[]>([]);

  constructor() {
    this.loadState();
  }

  private loadState(): void {
    try {
      const favs = localStorage.getItem(this.FAVORITES_KEY);
      if (favs) {
        this.favorites.set(JSON.parse(favs));
      } else {
        // Sensible default favorites
        this.favorites.set(['color-picker', 'json-formatter', 'base64', 'jwt-parser', 'qr-generator']);
      }

      const rec = localStorage.getItem(this.RECENTS_KEY);
      if (rec) {
        this.recents.set(JSON.parse(rec));
      }
    } catch (e) {
      console.warn('Failed to parse tool history from localStorage', e);
    }
  }

  isFavorite(routerLink: string): boolean {
    return this.favorites().includes(routerLink);
  }

  toggleFavorite(routerLink: string): void {
    const current = this.favorites();
    let updated: string[];
    if (current.includes(routerLink)) {
      updated = current.filter(r => r !== routerLink);
    } else {
      updated = [...current, routerLink];
    }
    this.favorites.set(updated);
    localStorage.setItem(this.FAVORITES_KEY, JSON.stringify(updated));
  }

  recordUsage(routerLink: string): void {
    if (!routerLink || routerLink === '' || routerLink === 'home') return;
    const current = this.recents().filter(r => r !== routerLink);
    const updated = [routerLink, ...current].slice(0, 8);
    this.recents.set(updated);
    localStorage.setItem(this.RECENTS_KEY, JSON.stringify(updated));
  }
}
