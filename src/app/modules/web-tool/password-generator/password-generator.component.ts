import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatSliderModule } from '@angular/material/slider';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { PageHeaderComponent } from '../../../shared/components/page-header/page-header.component';
import { copyToClipboard } from '../../../shared/Helper';

interface StrengthInfo {
  name: string;
  color: string;
  score: number; // 1 to 5
  entropy: number;
}

@Component({
  selector: 'app-password-generator',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatSliderModule,
    MatCheckboxModule,
    MatSnackBarModule,
    PageHeaderComponent
  ],
  templateUrl: './password-generator.component.html',
  styleUrl: './password-generator.component.scss'
})
export class PasswordGeneratorComponent implements OnInit {
  password = '';
  passwordLength = 16;
  hasUppercase = true;
  hasLowerCase = true;
  hasNumber = true;
  hasSpecialChar = true;
  excludeSimilar = false;

  passStrength: StrengthInfo = { name: 'Strong', color: '#10b981', score: 4, entropy: 90 };
  history: string[] = [];

  readonly presets = [
    { name: 'Maximum Security', length: 24, upper: true, lower: true, num: true, sym: true },
    { name: 'Standard Strong', length: 16, upper: true, lower: true, num: true, sym: true },
    { name: 'Simple Alphanumeric', length: 12, upper: true, lower: true, num: true, sym: false },
    { name: 'Numeric PIN', length: 6, upper: false, lower: false, num: true, sym: false }
  ];

  constructor(private snackBar: MatSnackBar) {}

  ngOnInit(): void {
    this.generatePassword();
  }

  generatePassword(): void {
    let charset = '';
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercase = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()_+~|}{[]:;?><,.-=';

    let guaranteedChars: string[] = [];

    if (this.hasUppercase) {
      charset += uppercase;
      guaranteedChars.push(this.getRandomChar(uppercase));
    }
    if (this.hasLowerCase) {
      charset += lowercase;
      guaranteedChars.push(this.getRandomChar(lowercase));
    }
    if (this.hasNumber) {
      charset += numbers;
      guaranteedChars.push(this.getRandomChar(numbers));
    }
    if (this.hasSpecialChar) {
      charset += symbols;
      guaranteedChars.push(this.getRandomChar(symbols));
    }

    if (this.excludeSimilar) {
      charset = charset.replace(/[il1Lo0O]/g, '');
    }

    if (!charset) {
      this.password = '';
      this.passStrength = { name: 'No Character Types Selected', color: '#f43f5e', score: 0, entropy: 0 };
      return;
    }

    let result = [...guaranteedChars];
    const array = new Uint32Array(this.passwordLength);
    crypto.getRandomValues(array);

    for (let i = result.length; i < this.passwordLength; i++) {
      result.push(charset[array[i] % charset.length]);
    }

    // Shuffle characters
    for (let i = result.length - 1; i > 0; i--) {
      const j = array[i] % (i + 1);
      [result[i], result[j]] = [result[j], result[i]];
    }

    this.password = result.slice(0, this.passwordLength).join('');
    this.calculateStrength(charset.length);

    if (this.password && !this.history.includes(this.password)) {
      this.history = [this.password, ...this.history].slice(0, 5);
    }
  }

  private getRandomChar(set: string): string {
    const array = new Uint32Array(1);
    crypto.getRandomValues(array);
    return set[array[0] % set.length];
  }

  private calculateStrength(poolSize: number): void {
    const entropy = Math.round(this.passwordLength * (Math.log(poolSize || 1) / Math.LN2));

    let score = 1;
    let name = 'Very Weak';
    let color = '#f43f5e';

    if (entropy >= 80) {
      score = 5;
      name = 'Very Strong';
      color = '#10b981';
    } else if (entropy >= 60) {
      score = 4;
      name = 'Strong';
      color = '#06b6d4';
    } else if (entropy >= 40) {
      score = 3;
      name = 'Medium';
      color = '#f59e0b';
    } else if (entropy >= 25) {
      score = 2;
      name = 'Weak';
      color = '#f97316';
    }

    this.passStrength = { name, color, score, entropy };
  }

  applyPreset(preset: typeof this.presets[0]): void {
    this.passwordLength = preset.length;
    this.hasUppercase = preset.upper;
    this.hasLowerCase = preset.lower;
    this.hasNumber = preset.num;
    this.hasSpecialChar = preset.sym;
    this.generatePassword();
  }

  copyString(val: string): void {
    if (!val) return;
    copyToClipboard(val);
    this.snackBar.open('Password copied to clipboard!', '', { duration: 2000 });
  }
}
