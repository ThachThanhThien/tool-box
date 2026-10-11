import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatSliderModule } from '@angular/material/slider';
import { PageHeaderComponent } from '../../../shared/components/page-header/page-header.component';
import { CodeSnippetComponent } from '../../../shared/components/code-snippet/code-snippet.component';

interface ColorStop {
  color: string;
  stop: number;
}

interface GradientPreset {
  name: string;
  mode: 'linear' | 'radial';
  angle: number;
  stops: ColorStop[];
}

@Component({
  selector: 'app-css-gradient',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatSliderModule,
    PageHeaderComponent,
    CodeSnippetComponent
  ],
  templateUrl: './css-gradient.component.html',
  styleUrl: './css-gradient.component.scss'
})
export class CssGradientComponent implements OnInit {
  selectedMode: 'linear' | 'radial' = 'linear';
  angle = 135;

  colorStops: ColorStop[] = [
    { color: '#6366f1', stop: 0 },
    { color: '#8b5cf6', stop: 50 },
    { color: '#06b6d4', stop: 100 }
  ];

  currentColorIndex = 0;
  gradientStyle = '';

  readonly anglePresets = [
    { label: '0° (Top)', val: 0 },
    { label: '45°', val: 45 },
    { label: '90° (Right)', val: 90 },
    { label: '135°', val: 135 },
    { label: '180° (Bottom)', val: 180 },
    { label: '270° (Left)', val: 270 }
  ];

  readonly presets: GradientPreset[] = [
    {
      name: 'Electric Indigo',
      mode: 'linear',
      angle: 135,
      stops: [{ color: '#6366f1', stop: 0 }, { color: '#8b5cf6', stop: 50 }, { color: '#06b6d4', stop: 100 }]
    },
    {
      name: 'Sunset Horizon',
      mode: 'linear',
      angle: 90,
      stops: [{ color: '#f43f5e', stop: 0 }, { color: '#fb923c', stop: 50 }, { color: '#facc15', stop: 100 }]
    },
    {
      name: 'Ocean Depths',
      mode: 'linear',
      angle: 180,
      stops: [{ color: '#0284c7', stop: 0 }, { color: '#0f172a', stop: 100 }]
    },
    {
      name: 'Emerald Lush',
      mode: 'linear',
      angle: 120,
      stops: [{ color: '#10b981', stop: 0 }, { color: '#06b6d4', stop: 100 }]
    },
    {
      name: 'Cosmic Glow',
      mode: 'radial',
      angle: 0,
      stops: [{ color: '#a855f7', stop: 0 }, { color: '#3b82f6', stop: 60 }, { color: '#0f172a', stop: 100 }]
    }
  ];

  ngOnInit(): void {
    this.updateGradient();
  }

  updateGradient(): void {
    const sorted = [...this.colorStops].sort((a, b) => a.stop - b.stop);
    const stopStrings = sorted.map(s => `${s.color} ${s.stop}%`).join(', ');

    if (this.selectedMode === 'linear') {
      this.gradientStyle = `linear-gradient(${this.angle}deg, ${stopStrings})`;
    } else {
      this.gradientStyle = `radial-gradient(circle, ${stopStrings})`;
    }
  }

  addColorStop(): void {
    const randomHex = '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
    const lastStop = this.colorStops[this.colorStops.length - 1]?.stop || 50;
    const nextStop = Math.min(100, lastStop + 15);
    this.colorStops.push({ color: randomHex, stop: nextStop });
    this.currentColorIndex = this.colorStops.length - 1;
    this.updateGradient();
  }

  removeColor(index: number): void {
    if (this.colorStops.length <= 2) return;
    this.colorStops.splice(index, 1);
    this.currentColorIndex = Math.max(0, this.currentColorIndex - 1);
    this.updateGradient();
  }

  setAngle(newAngle: number): void {
    this.angle = newAngle;
    this.updateGradient();
  }

  applyPreset(preset: GradientPreset): void {
    this.selectedMode = preset.mode;
    this.angle = preset.angle;
    this.colorStops = JSON.parse(JSON.stringify(preset.stops));
    this.currentColorIndex = 0;
    this.updateGradient();
  }

  get gradientCssCode(): string {
    return `/* Generated with ToolHub Studio */
background: ${this.gradientStyle};`;
  }
}
