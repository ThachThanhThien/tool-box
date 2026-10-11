import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { diffLines, diffWords, diffChars, Change } from 'diff';
import { PageHeaderComponent } from '../../../shared/components/page-header/page-header.component';
import { copyToClipboard } from '../../../shared/Helper';

@Component({
  selector: 'app-text-diff',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatSnackBarModule,
    PageHeaderComponent
  ],
  templateUrl: './text-diff.component.html',
  styleUrl: './text-diff.component.scss'
})
export class TextDiffComponent implements OnInit {
  originalText = '';
  modifiedText = '';
  diffMode: 'lines' | 'words' | 'chars' = 'lines';
  viewType: 'split' | 'unified' = 'split';

  diffChanges: Change[] = [];
  addedCount = 0;
  removedCount = 0;

  constructor(private snackBar: MatSnackBar) {}

  ngOnInit(): void {
    this.loadSample();
  }

  computeDiff(): void {
    if (!this.originalText && !this.modifiedText) {
      this.diffChanges = [];
      this.addedCount = 0;
      this.removedCount = 0;
      return;
    }

    if (this.diffMode === 'chars') {
      this.diffChanges = diffChars(this.originalText, this.modifiedText);
    } else if (this.diffMode === 'words') {
      this.diffChanges = diffWords(this.originalText, this.modifiedText);
    } else {
      this.diffChanges = diffLines(this.originalText, this.modifiedText);
    }

    this.addedCount = this.diffChanges.filter(c => c.added).length;
    this.removedCount = this.diffChanges.filter(c => c.removed).length;
  }

  setMode(mode: 'lines' | 'words' | 'chars'): void {
    this.diffMode = mode;
    this.computeDiff();
  }

  swap(): void {
    const temp = this.originalText;
    this.originalText = this.modifiedText;
    this.modifiedText = temp;
    this.computeDiff();
  }

  clear(): void {
    this.originalText = '';
    this.modifiedText = '';
    this.computeDiff();
  }

  loadSample(): void {
    this.originalText = `function calculateTotal(items) {
  let total = 0;
  for (let i = 0; i < items.length; i++) {
    total += items[i].price;
  }
  return total;
}`;

    this.modifiedText = `function calculateTotal(items, discountRate = 0) {
  const subtotal = items.reduce((sum, item) => sum + item.price, 0);
  const discount = subtotal * discountRate;
  return subtotal - discount;
}`;
    this.computeDiff();
  }

  copyResult(): void {
    const formatted = this.diffChanges
      .map(c => {
        const prefix = c.added ? '+ ' : c.removed ? '- ' : '  ';
        return c.value.split('\n').map(line => line ? prefix + line : '').join('\n');
      })
      .join('');
    copyToClipboard(formatted);
    this.snackBar.open('Copied unified diff to clipboard', '', { duration: 2000 });
  }
}
