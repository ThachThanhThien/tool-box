import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { NgxJsonViewerModule } from 'ngx-json-viewer';
import { PageHeaderComponent } from '../../../shared/components/page-header/page-header.component';
import { copyToClipboard } from '../../../shared/Helper';

@Component({
  selector: 'app-json-formatter',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatSnackBarModule,
    NgxJsonViewerModule,
    PageHeaderComponent
  ],
  templateUrl: './json-formatter.component.html',
  styleUrl: './json-formatter.component.scss'
})
export class JsonFormatterComponent implements OnInit {
  rawJson = '';
  parsedJsonObj: any = null;
  formattedOutput = '';
  isValidJson = true;
  errorMessage = '';
  indentOption: '2' | '4' | 'tab' | 'min' = '2';
  viewMode: 'tree' | 'raw' = 'tree';

  constructor(private snackBar: MatSnackBar) {}

  ngOnInit(): void {
    this.loadSample();
  }

  onJsonInput(): void {
    if (!this.rawJson.trim()) {
      this.parsedJsonObj = null;
      this.formattedOutput = '';
      this.isValidJson = true;
      this.errorMessage = '';
      return;
    }

    try {
      this.parsedJsonObj = JSON.parse(this.rawJson);
      this.isValidJson = true;
      this.errorMessage = '';
      this.formatOutput();
    } catch (e: any) {
      this.isValidJson = false;
      this.errorMessage = e.message;
      this.parsedJsonObj = null;
    }
  }

  setIndent(option: '2' | '4' | 'tab' | 'min'): void {
    this.indentOption = option;
    if (this.isValidJson && this.parsedJsonObj !== null) {
      this.formatOutput();
    }
  }

  private formatOutput(): void {
    if (!this.parsedJsonObj) {
      this.formattedOutput = '';
      return;
    }

    if (this.indentOption === 'min') {
      this.formattedOutput = JSON.stringify(this.parsedJsonObj);
    } else if (this.indentOption === 'tab') {
      this.formattedOutput = JSON.stringify(this.parsedJsonObj, null, '\t');
    } else {
      const spaces = parseInt(this.indentOption, 10);
      this.formattedOutput = JSON.stringify(this.parsedJsonObj, null, spaces);
    }
  }

  loadSample(): void {
    const sample = {
      project: "ToolHub Studio",
      version: "2.0.0",
      active: true,
      features: [
        "Color Palette & WCAG",
        "Base64 Safe UTF-8",
        "JSON Interactive Viewer",
        "JWT Token Inspector",
        "Text Diff Highlighting"
      ],
      author: {
        name: "Antigravity Engineering",
        role: "Senior Frontend Specialist",
        verified: true
      },
      stats: {
        rating: 4.95,
        dailyRuns: 14200
      }
    };
    this.rawJson = JSON.stringify(sample, null, 2);
    this.onJsonInput();
  }

  clear(): void {
    this.rawJson = '';
    this.onJsonInput();
  }

  async paste(): Promise<void> {
    try {
      const text = await navigator.clipboard.readText();
      if (text) {
        this.rawJson = text;
        this.onJsonInput();
        this.snackBar.open('Pasted JSON from clipboard', '', { duration: 2000 });
      }
    } catch {
      this.snackBar.open('Unable to read clipboard', '', { duration: 2000 });
    }
  }

  copy(): void {
    if (!this.formattedOutput) return;
    copyToClipboard(this.formattedOutput);
    this.snackBar.open('Copied formatted JSON to clipboard', '', { duration: 2000 });
  }
}
