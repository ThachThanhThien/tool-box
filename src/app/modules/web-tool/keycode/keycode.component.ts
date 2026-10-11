import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { PageHeaderComponent } from '../../../shared/components/page-header/page-header.component';
import { copyToClipboard } from '../../../shared/Helper';

interface KeyRecord {
  key: string;
  code: string;
  keyCode: number;
  location: string;
  shift: boolean;
  ctrl: boolean;
  alt: boolean;
  meta: boolean;
  time: string;
}

@Component({
  selector: 'app-keycode',
  standalone: true,
  imports: [
    CommonModule,
    MatSnackBarModule,
    PageHeaderComponent
  ],
  templateUrl: './keycode.component.html',
  styleUrl: './keycode.component.scss'
})
export class KeycodeComponent {
  currentKey: KeyRecord = {
    key: 'Space',
    code: 'Space',
    keyCode: 32,
    location: 'Standard',
    shift: false,
    ctrl: false,
    alt: false,
    meta: false,
    time: new Date().toLocaleTimeString()
  };

  hasPressed = false;
  history: KeyRecord[] = [];

  constructor(private snackBar: MatSnackBar) {}

  @HostListener('window:keydown', ['$event'])
  onKeyDown(e: KeyboardEvent): void {
    // Prevent default scrolling for Space & Arrows when inspecting keycode
    if (['Space', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.code)) {
      e.preventDefault();
    }

    const locations = ['Standard (0)', 'Left (1)', 'Right (2)', 'Numpad (3)'];

    this.currentKey = {
      key: e.key === ' ' ? 'Space' : e.key,
      code: e.code,
      keyCode: e.keyCode,
      location: locations[e.location] || `Unknown (${e.location})`,
      shift: e.shiftKey,
      ctrl: e.ctrlKey,
      alt: e.altKey,
      meta: e.metaKey,
      time: new Date().toLocaleTimeString()
    };

    this.hasPressed = true;
    this.history = [this.currentKey, ...this.history].slice(0, 8);
  }

  copyVal(val: string | number, label: string): void {
    copyToClipboard(String(val));
    this.snackBar.open(`Copied ${label}: ${val}`, '', { duration: 2000 });
  }
}
