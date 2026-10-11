import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { PageHeaderComponent } from '../../../shared/components/page-header/page-header.component';
import { copyToClipboard } from '../../../shared/Helper';

interface RomanSymbol {
  symbol: string;
  value: number;
}

@Component({
  selector: 'app-roman-num',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatSnackBarModule,
    PageHeaderComponent
  ],
  templateUrl: './roman-num.component.html',
  styleUrl: './roman-num.component.scss'
})
export class RomanNumComponent implements OnInit {
  romanInput = 'MMXXVI';
  intInput: number | null = 2026;
  errorMessage = '';
  breakdown: string[] = [];

  readonly referenceSymbols: RomanSymbol[] = [
    { symbol: 'I', value: 1 },
    { symbol: 'V', value: 5 },
    { symbol: 'X', value: 10 },
    { symbol: 'L', value: 50 },
    { symbol: 'C', value: 100 },
    { symbol: 'D', value: 500 },
    { symbol: 'M', value: 1000 }
  ];

  readonly presets = [
    { label: 'Current Year (2026)', intVal: 2026 },
    { label: 'Year 2000 (MM)', intVal: 2000 },
    { label: 'Year 1984 (MCMLXXXIV)', intVal: 1984 },
    { label: 'Founding of Rome (753 BC)', intVal: 753 },
    { label: 'Answer to Life (42)', intVal: 42 }
  ];

  constructor(private snackBar: MatSnackBar) {}

  ngOnInit(): void {
    this.romanToInt();
  }

  onRomanChange(): void {
    this.romanToInt();
  }

  onIntChange(): void {
    this.intToRoman();
  }

  romanToInt(): void {
    this.errorMessage = '';
    this.breakdown = [];
    const raw = (this.romanInput || '').toUpperCase().trim();
    this.romanInput = raw;

    if (!raw) {
      this.intInput = null;
      return;
    }

    if (!/^[IVXLCDM]+$/.test(raw)) {
      this.errorMessage = 'Invalid Roman numeral: Only characters I, V, X, L, C, D, M are allowed.';
      this.intInput = null;
      return;
    }

    const romanMap: Record<string, number> = {
      I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000
    };

    let total = 0;
    const parts: string[] = [];

    for (let i = 0; i < raw.length; i++) {
      const current = romanMap[raw[i]];
      const next = romanMap[raw[i + 1]];

      if (next && current < next) {
        total += (next - current);
        parts.push(`${raw[i]}${raw[i + 1]} (+${next - current})`);
        i++; // skip next
      } else {
        total += current;
        parts.push(`${raw[i]} (+${current})`);
      }
    }

    this.intInput = total;
    this.breakdown = parts;
  }

  intToRoman(): void {
    this.errorMessage = '';
    this.breakdown = [];

    if (this.intInput === null || isNaN(this.intInput)) {
      this.romanInput = '';
      return;
    }

    const num = Math.floor(this.intInput);
    if (num <= 0) {
      this.errorMessage = 'Roman numerals only support positive integers greater than 0.';
      this.romanInput = '';
      return;
    }

    if (num > 3999) {
      this.errorMessage = 'Standard Roman numerals only support integers up to 3999 (MMMCMXCIX).';
      this.romanInput = '';
      return;
    }

    const map: [number, string][] = [
      [1000, 'M'], [900, 'CM'], [500, 'D'], [400, 'CD'],
      [100, 'C'], [90, 'XC'], [50, 'L'], [40, 'XL'],
      [10, 'X'], [9, 'IX'], [5, 'V'], [4, 'IV'], [1, 'I']
    ];

    let remaining = num;
    let result = '';
    const parts: string[] = [];

    for (const [val, sym] of map) {
      while (remaining >= val) {
        result += sym;
        remaining -= val;
        parts.push(`${sym} (+${val})`);
      }
    }

    this.romanInput = result;
    this.breakdown = parts;
  }

  setPreset(intVal: number): void {
    this.intInput = intVal;
    this.intToRoman();
  }

  copy(val: string | number | null, label: string): void {
    if (val === null) return;
    copyToClipboard(String(val));
    this.snackBar.open(`Copied ${label}: ${val}`, '', { duration: 1800 });
  }
}
