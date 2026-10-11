import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { ColorPaletteComponent } from './color-palette/color-palette.component';
import { ColorSliderComponent } from './color-slider/color-slider.component';
import { PageHeaderComponent } from '../../../shared/components/page-header/page-header.component';
import { copyToClipboard } from '../../../shared/Helper';

@Component({
  selector: 'app-color-picker',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatSnackBarModule,
    ColorPaletteComponent,
    ColorSliderComponent,
    PageHeaderComponent
  ],
  templateUrl: './color-picker.component.html',
  styleUrl: './color-picker.component.scss'
})
export class ColorPickerComponent implements OnInit {
  hue = '#6366f1';
  hexValue = '#6366f1';
  rgbValue = '99, 102, 241';
  hslValue = '239°, 84%, 67%';
  cmykValue = '59%, 58%, 0%, 5%';
  hsvValue = '239°, 59%, 95%';

  contrastWhite = '3.9:1';
  contrastBlack = '5.4:1';
  passesWhiteAA = false;
  passesBlackAA = true;

  hasEyeDropper = typeof window !== 'undefined' && 'EyeDropper' in window;

  readonly presetPalettes = [
    { name: 'Indigo Accent', hex: '#6366f1' },
    { name: 'Cyan Neon', hex: '#06b6d4' },
    { name: 'Emerald', hex: '#10b981' },
    { name: 'Amber Warm', hex: '#f59e0b' },
    { name: 'Rose Vivid', hex: '#f43f5e' },
    { name: 'Violet Deep', hex: '#8b5cf6' },
    { name: 'Slate Dark', hex: '#1e293b' },
    { name: 'Pure Black', hex: '#000000' },
    { name: 'Pure White', hex: '#ffffff' },
    { name: 'Sky Blue', hex: '#0284c7' },
    { name: 'Fuchsia', hex: '#d946ef' },
    { name: 'Teal Sharp', hex: '#14b8a6' }
  ];

  constructor(private snackBar: MatSnackBar) {}

  ngOnInit(): void {
    this.updateFromHex(this.hexValue);
  }

  onSelectColor(rgb: string[]): void {
    const r = parseInt(rgb[0], 10);
    const g = parseInt(rgb[1], 10);
    const b = parseInt(rgb[2], 10);
    this.setRgbValues(r, g, b);
  }

  onHexInput(hex: string): void {
    if (!hex.startsWith('#')) hex = '#' + hex;
    if (/^#[0-9A-Fa-f]{6}$/.test(hex)) {
      this.updateFromHex(hex);
    }
  }

  applyPreset(hex: string): void {
    this.updateFromHex(hex);
  }

  async openEyeDropper(): Promise<void> {
    if (!this.hasEyeDropper) return;
    try {
      const eyeDropper = new (window as any).EyeDropper();
      const result = await eyeDropper.open();
      if (result?.sRGBHex) {
        this.updateFromHex(result.sRGBHex);
        this.snackBar.open(`Sampled color: ${result.sRGBHex}`, '', { duration: 2500 });
      }
    } catch {
      // User cancelled picker
    }
  }

  private updateFromHex(hex: string): void {
    this.hexValue = hex.toLowerCase();
    const clean = hex.replace('#', '');
    const r = parseInt(clean.substring(0, 2), 16);
    const g = parseInt(clean.substring(2, 4), 16);
    const b = parseInt(clean.substring(4, 6), 16);
    this.setRgbValues(r, g, b);
  }

  private setRgbValues(r: number, g: number, b: number): void {
    this.rgbValue = `${r}, ${g}, ${b}`;
    this.hexValue = this.rgbToHex([r, g, b]);
    this.hslValue = this.rgbToHsl([r, g, b]).join(', ');
    this.cmykValue = this.rgbToCmyk([r, g, b]).map(item => `${Math.round(item * 100)}%`).join(', ');
    this.hsvValue = this.rgbToHsV([r, g, b]).join(', ');
    this.calculateContrast(r, g, b);
  }

  private calculateContrast(r: number, g: number, b: number): void {
    const lum = this.getLuminance(r, g, b);
    const lumWhite = 1.0;
    const lumBlack = 0.0;

    const crWhite = (lumWhite + 0.05) / (lum + 0.05);
    const crBlack = (lum + 0.05) / (lumBlack + 0.05);

    this.contrastWhite = `${crWhite.toFixed(2)}:1`;
    this.contrastBlack = `${crBlack.toFixed(2)}:1`;

    this.passesWhiteAA = crWhite >= 4.5;
    this.passesBlackAA = crBlack >= 4.5;
  }

  private getLuminance(r: number, g: number, b: number): number {
    const a = [r, g, b].map(v => {
      v /= 255;
      return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
    });
    return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
  }

  rgbToHex(rgb: number[]): string {
    const [r, g, b] = rgb;
    return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
  }

  rgbToCmyk(rgb: number[]): number[] {
    const [r, g, b] = rgb;
    const computedC = 1 - (r / 255);
    const computedM = 1 - (g / 255);
    const computedY = 1 - (b / 255);
    const minCMY = Math.min(computedC, Math.min(computedM, computedY));
    const k = minCMY;
    if (k === 1) return [0, 0, 0, 1];
    return [
      (computedC - minCMY) / (1 - minCMY),
      (computedM - minCMY) / (1 - minCMY),
      (computedY - minCMY) / (1 - minCMY),
      k
    ];
  }

  rgbToHsl(rgb: number[]): string[] {
    const [r, g, b] = rgb;
    const nR = r / 255;
    const nG = g / 255;
    const nB = b / 255;
    const max = Math.max(nR, nG, nB);
    const min = Math.min(nR, nG, nB);
    const l = (max + min) / 2;
    let h = 0;
    let s = 0;

    if (max !== min) {
      const d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      switch (max) {
        case nR: h = ((nG - nB) / d + (nG < nB ? 6 : 0)) * 60; break;
        case nG: h = ((nB - nR) / d + 2) * 60; break;
        case nB: h = ((nR - nG) / d + 4) * 60; break;
      }
    }
    return [`${Math.round(h)}°`, `${Math.round(s * 100)}%`, `${Math.round(l * 100)}%`];
  }

  rgbToHsV(rgb: number[]): string[] {
    const [r, g, b] = rgb;
    const nR = r / 255;
    const nG = g / 255;
    const nB = b / 255;
    const max = Math.max(nR, nG, nB);
    const min = Math.min(nR, nG, nB);
    const v = max;
    let h = 0;
    let s = 0;

    if (max !== min) {
      const d = max - min;
      s = d / max;
      switch (max) {
        case nR: h = ((nG - nB) / d + (nG < nB ? 6 : 0)) * 60; break;
        case nG: h = ((nB - nR) / d + 2) * 60; break;
        case nB: h = ((nR - nG) / d + 4) * 60; break;
      }
    }
    return [`${Math.round(h)}°`, `${Math.round(s * 100)}%`, `${Math.round(v * 100)}%`];
  }

  copy(formatName: string, value: string): void {
    let textToCopy = value;
    if (formatName === 'RGB') textToCopy = `rgb(${value})`;
    if (formatName === 'HSL') textToCopy = `hsl(${value.replace(/°/g, '')})`;
    copyToClipboard(textToCopy);
    this.snackBar.open(`Copied ${formatName}: ${textToCopy}`, '', { duration: 2000 });
  }
}
