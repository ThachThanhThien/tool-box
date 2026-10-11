import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { PageHeaderComponent } from '../../../shared/components/page-header/page-header.component';
import { copyToClipboard } from '../../../shared/Helper';

interface KeywordFrequency {
  word: string;
  count: number;
}

@Component({
  selector: 'app-word-counter',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatSnackBarModule,
    PageHeaderComponent
  ],
  templateUrl: './word-counter.component.html',
  styleUrl: './word-counter.component.scss'
})
export class WordCounterComponent implements OnInit {
  value = '';

  wordNumber = 0;
  characterNumber = 0;
  charNoSpacesNumber = 0;
  sentenceNumber = 0;
  paragraphNumber = 0;
  readingTimeMin = 0;
  speakingTimeMin = 0;

  topKeywords: KeywordFrequency[] = [];

  constructor(private snackBar: MatSnackBar) {}

  ngOnInit(): void {
    this.value = `ToolHub Studio provides a rich suite of developer utilities designed for productivity and privacy. All transformations happen locally in your web browser with zero server roundtrips. You can inspect colors, encode Base64, parse JSON, compare text differences, and generate strong passwords seamlessly.`;
    this.count();
  }

  count(): void {
    const text = this.value;

    this.characterNumber = text.length;
    this.charNoSpacesNumber = text.replace(/\s/g, '').length;

    // Word count
    const words = text.trim() ? text.trim().split(/\s+/).filter(w => w.length > 0) : [];
    this.wordNumber = words.length;

    // Sentences count
    const sentences = text.trim() ? text.split(/[.!?]+/).filter(s => s.trim().length > 0) : [];
    this.sentenceNumber = sentences.length;

    // Paragraphs count
    const paragraphs = text.trim() ? text.split(/\n+/).filter(p => p.trim().length > 0) : [];
    this.paragraphNumber = paragraphs.length;

    // Reading & speaking times
    this.readingTimeMin = Math.ceil(this.wordNumber / 200); // 200 wpm
    this.speakingTimeMin = Math.ceil(this.wordNumber / 130); // 130 wpm

    // Keyword density
    this.calculateKeywordDensity(words);
  }

  private calculateKeywordDensity(words: string[]): void {
    const stopWords = new Set(['the', 'and', 'a', 'to', 'of', 'in', 'is', 'it', 'you', 'that', 'he', 'was', 'for', 'on', 'are', 'as', 'with', 'his', 'they', 'at', 'be', 'this', 'have', 'from', 'or', 'one', 'had', 'by', 'word', 'but', 'not', 'what', 'all', 'were', 'we', 'when', 'your', 'can', 'said', 'there', 'use', 'an', 'each', 'which', 'she', 'do', 'how', 'their', 'if']);
    const freqMap = new Map<string, number>();

    for (const raw of words) {
      const clean = raw.toLowerCase().replace(/[^a-z0-9]/g, '');
      if (clean.length > 2 && !stopWords.has(clean)) {
        freqMap.set(clean, (freqMap.get(clean) || 0) + 1);
      }
    }

    this.topKeywords = Array.from(freqMap.entries())
      .map(([word, count]) => ({ word, count }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 6);
  }

  cleanWhitespace(): void {
    this.value = this.value.replace(/\s+/g, ' ').trim();
    this.count();
    this.snackBar.open('Excessive whitespace cleaned', '', { duration: 1500 });
  }

  async paste(): Promise<void> {
    try {
      const text = await navigator.clipboard.readText();
      if (text) {
        this.value = text;
        this.count();
        this.snackBar.open('Pasted text from clipboard', '', { duration: 1500 });
      }
    } catch {
      this.snackBar.open('Unable to read clipboard', '', { duration: 1500 });
    }
  }

  copy(): void {
    if (!this.value) return;
    copyToClipboard(this.value);
    this.snackBar.open('Text copied to clipboard', '', { duration: 1500 });
  }

  clear(): void {
    this.value = '';
    this.count();
  }
}
