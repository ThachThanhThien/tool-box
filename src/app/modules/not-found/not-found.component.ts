import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="not-found-container fade-in">
      <div class="not-found-card hub-card">
        <div class="icon-wrap">
          <i class="fa-solid fa-triangle-exclamation"></i>
        </div>
        <h1>404 — Tool Not Found</h1>
        <p>The utility or page you requested doesn't exist or may have been moved.</p>
        <div class="actions">
          <a routerLink="/" class="btn-primary">
            <i class="fa-solid fa-house"></i>
            <span>Return to Tool Hub</span>
          </a>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .not-found-container {
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 60vh;
      padding: 24px;
    }
    .not-found-card {
      max-width: 480px;
      width: 100%;
      text-align: center;
      padding: 40px 32px;
      border-radius: var(--radius-xl);
    }
    .icon-wrap {
      width: 64px;
      height: 64px;
      border-radius: 50%;
      background: var(--warning-subtle);
      color: var(--warning);
      display: inline-flex;
      align-items: center;
      justify-content: center;
      font-size: 28px;
      margin-bottom: 20px;
    }
    h1 {
      font-size: 22px;
      font-weight: 700;
      margin-bottom: 10px;
    }
    p {
      color: var(--text-secondary);
      font-size: 14px;
      margin-bottom: 24px;
    }
    .actions {
      display: flex;
      justify-content: center;
    }
  `]
})
export class NotFoundComponent {}
