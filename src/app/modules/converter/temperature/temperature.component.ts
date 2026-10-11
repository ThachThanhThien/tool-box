import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { PageHeaderComponent } from '../../../shared/components/page-header/page-header.component';
import { copyToClipboard } from '../../../shared/Helper';

interface TempUnit {
  id: string;
  label: string;
  unit: string;
  value: number | string;
  formula: string;
  convertToCelsius: (v: number) => number;
  convertFromCelsius: (c: number) => number;
}

@Component({
  selector: 'app-temperature',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatSnackBarModule,
    PageHeaderComponent
  ],
  templateUrl: './temperature.component.html',
  styleUrl: './temperature.component.scss'
})
export class TemperatureComponent implements OnInit {
  celsiusValue = 37;

  units: TempUnit[] = [
    {
      id: 'celsius',
      label: 'Celsius',
      unit: '°C',
      value: 37,
      formula: 'Base metric scale',
      convertToCelsius: (v) => v,
      convertFromCelsius: (c) => c
    },
    {
      id: 'fahrenheit',
      label: 'Fahrenheit',
      unit: '°F',
      value: 98.6,
      formula: '°F = °C × 9/5 + 32',
      convertToCelsius: (v) => (v - 32) * 5 / 9,
      convertFromCelsius: (c) => c * 9 / 5 + 32
    },
    {
      id: 'kelvin',
      label: 'Kelvin',
      unit: 'K',
      value: 310.15,
      formula: 'K = °C + 273.15',
      convertToCelsius: (v) => v - 273.15,
      convertFromCelsius: (c) => c + 273.15
    },
    {
      id: 'rankine',
      label: 'Rankine',
      unit: '°R',
      value: 558.27,
      formula: '°R = (°C + 273.15) × 9/5',
      convertToCelsius: (v) => (v - 491.67) * 5 / 9,
      convertFromCelsius: (c) => (c + 273.15) * 9 / 5
    },
    {
      id: 'newton',
      label: 'Newton',
      unit: '°N',
      value: 12.21,
      formula: '°N = °C × 33/100',
      convertToCelsius: (v) => v * 100 / 33,
      convertFromCelsius: (c) => c * 33 / 100
    },
    {
      id: 'romer',
      label: 'Rømer',
      unit: '°Rø',
      value: 26.93,
      formula: '°Rø = °C × 21/40 + 7.5',
      convertToCelsius: (v) => (v - 7.5) * 40 / 21,
      convertFromCelsius: (c) => c * 21 / 40 + 7.5
    },
    {
      id: 'reaumur',
      label: 'Réaumur',
      unit: '°Ré',
      value: 29.6,
      formula: '°Ré = °C × 4/5',
      convertToCelsius: (v) => v * 5 / 4,
      convertFromCelsius: (c) => c * 4 / 5
    },
    {
      id: 'delisle',
      label: 'Delisle',
      unit: '°De',
      value: 94.5,
      formula: '°De = (100 - °C) × 3/2',
      convertToCelsius: (v) => 100 - v * 2 / 3,
      convertFromCelsius: (c) => (100 - c) * 3 / 2
    }
  ];

  readonly presets = [
    { label: 'Absolute Zero', celsius: -273.15 },
    { label: 'Freezing Point of Water', celsius: 0 },
    { label: 'Room Temperature', celsius: 20 },
    { label: 'Normal Body Temperature', celsius: 37 },
    { label: 'Boiling Point of Water', celsius: 100 }
  ];

  constructor(private snackBar: MatSnackBar) {}

  ngOnInit(): void {
    this.recalculateAll(37);
  }

  onUnitChange(sourceUnit: TempUnit): void {
    const numeric = parseFloat(String(sourceUnit.value));
    if (isNaN(numeric)) return;
    const celsius = sourceUnit.convertToCelsius(numeric);
    this.celsiusValue = celsius;
    this.recalculateAll(celsius, sourceUnit.id);
  }

  setPreset(celsius: number): void {
    this.celsiusValue = celsius;
    this.recalculateAll(celsius);
  }

  private recalculateAll(celsius: number, excludeId?: string): void {
    for (const u of this.units) {
      if (u.id !== excludeId) {
        const val = u.convertFromCelsius(celsius);
        u.value = parseFloat(val.toFixed(2));
      }
    }
  }

  copyVal(u: TempUnit): void {
    const text = `${u.value}${u.unit}`;
    copyToClipboard(text);
    this.snackBar.open(`Copied ${u.label}: ${text}`, '', { duration: 1800 });
  }
}
