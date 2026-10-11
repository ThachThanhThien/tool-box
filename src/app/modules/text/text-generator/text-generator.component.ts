import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { PageHeaderComponent } from '../../../shared/components/page-header/page-header.component';
import { copyToClipboard } from '../../../shared/Helper';

const LOREM_WORDS = [
  "lorem", "ipsum", "dolor", "sit", "amet", "consectetur", "adipiscing", "elit",
  "sed", "do", "eiusmod", "tempor", "incididunt", "ut", "labore", "et", "dolore",
  "magna", "aliqua", "enim", "ad", "minim", "veniam", "quis", "nostrud",
  "exercitation", "ullamco", "laboris", "nisi", "aliquip", "ex", "ea",
  "commodo", "consequat", "duis", "aute", "irure", "in", "reprehenderit",
  "voluptate", "velit", "esse", "cillum", "eu", "fugiat", "nulla",
  "pariatur", "excepteur", "sint", "occaecat", "cupidatat", "non", "proident",
  "sunt", "culpa", "qui", "officia", "deserunt", "mollit", "anim", "id", "est",
  "laborum", "curabitur", "pretium", "tincidunt", "lacus", "sollicitudin", "placerat",
  "pellentesque", "habitant", "morbi", "tristique", "senectus", "netus", "fames", "ac"
];

@Component({
  selector: 'app-text-generator',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatSnackBarModule,
    PageHeaderComponent
  ],
  templateUrl: './text-generator.component.html',
  styleUrl: './text-generator.component.scss'
})
export class TextGeneratorComponent implements OnInit {
  generationUnit: 'paragraphs' | 'sentences' | 'words' = 'paragraphs';
  count = 3;
  startWithLorem = true;
  includeHtmlTags = false;

  generatedText = '';
  wordCount = 0;
  charCount = 0;

  constructor(private snackBar: MatSnackBar) {}

  ngOnInit(): void {
    this.generate();
  }

  generate(): void {
    if (this.count < 1) this.count = 1;
    if (this.count > 100) this.count = 100;

    let result = '';

    if (this.generationUnit === 'words') {
      result = this.generateWords(this.count);
    } else if (this.generationUnit === 'sentences') {
      result = this.generateSentences(this.count);
    } else {
      result = this.generateParagraphs(this.count);
    }

    if (this.startWithLorem) {
      const prefix = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ';
      if (!result.toLowerCase().startsWith('lorem ipsum')) {
        result = prefix + result;
      }
    }

    if (this.includeHtmlTags && this.generationUnit === 'paragraphs') {
      const paragraphs = result.split('\n\n');
      result = paragraphs.map(p => `<p>${p}</p>`).join('\n\n');
    }

    this.generatedText = result.trim();
    this.charCount = this.generatedText.length;
    this.wordCount = this.generatedText.split(/\s+/).filter(w => w.length > 0).length;
  }

  private generateWords(n: number): string {
    const words: string[] = [];
    for (let i = 0; i < n; i++) {
      const idx = Math.floor(Math.random() * LOREM_WORDS.length);
      words.push(LOREM_WORDS[idx]);
    }
    return words.join(' ');
  }

  private generateSentences(n: number): string {
    const sentences: string[] = [];
    for (let i = 0; i < n; i++) {
      const wordCount = 8 + Math.floor(Math.random() * 12);
      const words = this.generateWords(wordCount).split(' ');
      words[0] = words[0].charAt(0).toUpperCase() + words[0].slice(1);
      sentences.push(words.join(' ') + '.');
    }
    return sentences.join(' ');
  }

  private generateParagraphs(n: number): string {
    const paragraphs: string[] = [];
    for (let i = 0; i < n; i++) {
      const sentenceCount = 4 + Math.floor(Math.random() * 4);
      paragraphs.push(this.generateSentences(sentenceCount));
    }
    return paragraphs.join('\n\n');
  }

  setPreset(unit: 'paragraphs' | 'sentences' | 'words', count: number): void {
    this.generationUnit = unit;
    this.count = count;
    this.generate();
  }

  copy(): void {
    if (!this.generatedText) return;
    copyToClipboard(this.generatedText);
    this.snackBar.open('Copied placeholder text to clipboard', '', { duration: 1800 });
  }
}
