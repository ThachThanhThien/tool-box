import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { PageHeaderComponent } from '../../../shared/components/page-header/page-header.component';
import { copyToClipboard } from '../../../shared/Helper';

export type LineWrapOption = 'none' | '64' | '76';

@Component({
  selector: 'app-base64',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatSnackBarModule,
    PageHeaderComponent
  ],
  templateUrl: './base64.component.html',
  styleUrl: './base64.component.scss'
})
export class Base64Component implements OnInit {
  @ViewChild('fileInput') fileInputRef?: ElementRef<HTMLInputElement>;

  mode: 'encode' | 'decode' = 'encode';
  inputText = '';
  outputText = '';
  errorMessage = '';
  copied = false;

  // Options
  urlSafe = false;
  lineWrap: LineWrapOption = 'none';
  includeDataUriPrefix = false;

  // Drag and drop state
  isDragging = false;

  constructor(private snackBar: MatSnackBar) {}

  ngOnInit(): void {
    this.inputText = 'Hello World! Welcome to ToolHub Studio 🚀';
    this.process();
  }

  setMode(newMode: 'encode' | 'decode'): void {
    if (this.mode !== newMode) {
      this.mode = newMode;
      this.errorMessage = '';
      this.process();
    }
  }

  swapInputOutput(): void {
    if (this.outputText && !this.errorMessage) {
      this.inputText = this.outputText;
      this.mode = this.mode === 'encode' ? 'decode' : 'encode';
      this.process();
      this.snackBar.open('Swapped input and output', '', { duration: 1500 });
    }
  }

  process(): void {
    this.errorMessage = '';
    if (!this.inputText) {
      this.outputText = '';
      return;
    }

    try {
      if (this.mode === 'encode') {
        let b64 = this.utf8ToBase64(this.inputText, this.urlSafe);
        if (this.lineWrap !== 'none') {
          const chunkLen = parseInt(this.lineWrap, 10);
          b64 = this.chunkString(b64, chunkLen);
        }
        if (this.includeDataUriPrefix) {
          b64 = `data:text/plain;charset=utf-8;base64,${b64}`;
        }
        this.outputText = b64;
      } else {
        this.outputText = this.base64ToUtf8(this.inputText);
      }
    } catch (e: any) {
      this.errorMessage = this.mode === 'decode'
        ? 'Invalid Base64 input: String contains illegal characters, invalid byte sequences, or corrupted padding.'
        : `Encoding error: ${e.message}`;
      this.outputText = '';
    }
  }

  private utf8ToBase64(str: string, urlSafe: boolean): string {
    const bytes = new TextEncoder().encode(str);
    let binary = '';
    const len = bytes.byteLength;
    for (let i = 0; i < len; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    let b64 = btoa(binary);
    if (urlSafe) {
      b64 = b64.replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
    }
    return b64;
  }

  private base64ToUtf8(raw: string): string {
    let clean = raw.trim();
    // Strip data URI scheme if present (e.g., data:text/plain;base64,...)
    if (clean.startsWith('data:')) {
      const commaIdx = clean.indexOf(',');
      if (commaIdx !== -1) {
        clean = clean.substring(commaIdx + 1);
      }
    }
    // Remove all whitespace and line breaks
    clean = clean.replace(/\s+/g, '');

    // Convert URL-safe base64 back to standard base64
    clean = clean.replace(/-/g, '+').replace(/_/g, '/');

    // Restore padding if omitted
    while (clean.length % 4 !== 0) {
      clean += '=';
    }

    const binary = atob(clean);
    const bytes = new Uint8Array(binary.length);
    for (let i = 0; i < binary.length; i++) {
      bytes[i] = binary.charCodeAt(i);
    }
    return new TextDecoder().decode(bytes);
  }

  private chunkString(str: string, size: number): string {
    const regex = new RegExp(`.{1,${size}}`, 'g');
    const chunks = str.match(regex);
    return chunks ? chunks.join('\n') : str;
  }

  // File upload & Drag/Drop
  triggerFileInput(): void {
    this.fileInputRef?.nativeElement.click();
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.readFile(input.files[0]);
    }
    // Reset file input value so user can re-upload same file if desired
    input.value = '';
  }

  onDragOver(event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();
    this.isDragging = true;
  }

  onDragLeave(event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();
    this.isDragging = false;
  }

  onDrop(event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();
    this.isDragging = false;
    if (event.dataTransfer?.files && event.dataTransfer.files.length > 0) {
      this.readFile(event.dataTransfer.files[0]);
    }
  }

  private readFile(file: File): void {
    const reader = new FileReader();
    if (this.mode === 'encode') {
      // If user is encoding, read file as base64 DataURL or ArrayBuffer
      reader.onload = () => {
        const result = reader.result as string;
        if (file.type.startsWith('text/') || file.name.endsWith('.json') || file.name.endsWith('.txt') || file.name.endsWith('.md')) {
          // Read as text
          const textReader = new FileReader();
          textReader.onload = () => {
            this.inputText = textReader.result as string;
            this.process();
            this.snackBar.open(`Loaded "${file.name}" (${file.size} bytes)`, '', { duration: 2000 });
          };
          textReader.readAsText(file);
        } else {
          // Binary file: extract base64 directly from Data URL
          const commaIdx = result.indexOf(',');
          const b64 = commaIdx !== -1 ? result.substring(commaIdx + 1) : result;
          this.outputText = this.urlSafe ? b64.replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '') : b64;
          this.inputText = `[Binary File: ${file.name} - ${file.size} bytes]`;
          this.snackBar.open(`Encoded binary file "${file.name}" to Base64`, '', { duration: 2500 });
        }
      };
      reader.readAsDataURL(file);
    } else {
      // If user is decoding, read file as text
      reader.onload = () => {
        this.inputText = reader.result as string;
        this.process();
        this.snackBar.open(`Loaded "${file.name}" (${file.size} bytes)`, '', { duration: 2000 });
      };
      reader.readAsText(file);
    }
  }

  async pasteFromClipboard(): Promise<void> {
    try {
      const text = await navigator.clipboard.readText();
      if (text) {
        this.inputText = text;
        this.process();
        this.snackBar.open('Pasted content from clipboard', '', { duration: 1800 });
      }
    } catch {
      this.snackBar.open('Clipboard read permission was denied', '', { duration: 2000 });
    }
  }

  copyResult(): void {
    if (!this.outputText) return;
    copyToClipboard(this.outputText);
    this.copied = true;
    setTimeout(() => { this.copied = false; }, 2000);
    this.snackBar.open('Copied result to clipboard', '', { duration: 2000 });
  }

  downloadOutput(): void {
    if (!this.outputText) return;
    const filename = this.mode === 'encode' ? 'encoded-base64.txt' : 'decoded-output.txt';
    const mime = this.mode === 'encode' ? 'text/plain' : 'text/plain;charset=utf-8';
    const blob = new Blob([this.outputText], { type: mime });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }

  clear(): void {
    this.inputText = '';
    this.outputText = '';
    this.errorMessage = '';
  }

  loadSample(sampleType: 'json' | 'quote' | 'image'): void {
    if (sampleType === 'json') {
      if (this.mode === 'encode') {
        this.inputText = JSON.stringify({
          project: 'ToolHub Studio',
          environment: 'production',
          activeFeatures: ['jwt', 'base64', 'diff', 'playground'],
          metrics: { uptime: '99.99%', latencyMs: 14 }
        }, null, 2);
      } else {
        this.inputText = 'eyJprojectIjoiVG9vbEh1YiBTdHVkaW8iLCJlbnZpcm9ubWVudCI6InByb2R1Y3Rpb24iLCJhY3RpdmVGZWF0dXJlcyI6WyJqd3QiLCJiYXNlNjQiLCJkaWZmIiwicGxheWdyb3VuZCJdLCJtZXRyaWNzIjp7InVwdGltZSI6Ijk5Ljk5JSIsImxhdGVuY3lNcyI6MTR9fQ==';
      }
    } else if (sampleType === 'quote') {
      if (this.mode === 'encode') {
        this.inputText = 'Simplicity is the prerequisite for reliability. — Edsger W. Dijkstra 🌟';
      } else {
        this.inputText = 'U2ltcGxpY2l0eSBpcyB0aGUgcHJlcmVxdWlzaXRlIGZvciByZWxpYWJpbGl0eS4g4oCUIEVkc2dlciBXLiBEaWprc3RyYSDwn4yf';
      }
    } else if (sampleType === 'image') {
      this.mode = 'decode';
      // 1x1 transparent PNG / tiny red pixel
      this.inputText = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg==';
    }
    this.process();
  }

  // Image detection for output/input
  get previewImageUrl(): string | null {
    const text = (this.mode === 'decode' ? this.inputText : this.outputText).trim();
    if (!text) return null;
    if (text.startsWith('data:image/')) {
      return text;
    }
    // Check known base64 image headers
    if (text.startsWith('iVBORw0KGgo') || text.startsWith('/9j/4') || text.startsWith('R0lGOD') || text.startsWith('UklGR')) {
      return `data:image/png;base64,${text}`;
    }
    return null;
  }

  // Statistics
  get inputByteCount(): number {
    if (!this.inputText) return 0;
    return new TextEncoder().encode(this.inputText).byteLength;
  }

  get outputByteCount(): number {
    if (!this.outputText) return 0;
    return new TextEncoder().encode(this.outputText).byteLength;
  }

  get sizeChangePercent(): string {
    if (this.inputByteCount === 0 || this.outputByteCount === 0) return '0%';
    const ratio = ((this.outputByteCount - this.inputByteCount) / this.inputByteCount) * 100;
    return `${ratio >= 0 ? '+' : ''}${ratio.toFixed(1)}%`;
  }

  get lineCount(): number {
    if (!this.inputText) return 0;
    return this.inputText.split(/\r\n|\r|\n/).length;
  }
}
