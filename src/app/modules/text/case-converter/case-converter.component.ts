import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { PageHeaderComponent } from '../../../shared/components/page-header/page-header.component';
import { copyToClipboard } from '../../../shared/Helper';

interface CaseFormat {
  id: string;
  label: string;
  description: string;
  example: string;
  value: string;
  convert: (str: string) => string;
}

@Component({
  selector: 'app-case-converter',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatSnackBarModule,
    PageHeaderComponent
  ],
  templateUrl: './case-converter.component.html',
  styleUrl: './case-converter.component.scss'
})
export class CaseConverterComponent implements OnInit {
  inputText = '';

  formats: CaseFormat[] = [
    {
      id: 'lower',
      label: 'lower case',
      description: 'All letters in lower case',
      example: 'hello world',
      value: '',
      convert: (s) => s.toLowerCase()
    },
    {
      id: 'upper',
      label: 'UPPER CASE',
      description: 'All letters in upper case',
      example: 'HELLO WORLD',
      value: '',
      convert: (s) => s.toUpperCase()
    },
    {
      id: 'title',
      label: 'Title Case',
      description: 'Capitalize each major word',
      example: 'Hello World',
      value: '',
      convert: (s) => s.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase())
    },
    {
      id: 'sentence',
      label: 'Sentence case',
      description: 'Capitalize first letter of each sentence',
      example: 'Hello world. How are you?',
      value: '',
      convert: (s) => s.toLowerCase().replace(/(^\s*\w|[.!?]\s*\w)/g, (c) => c.toUpperCase())
    },
    {
      id: 'camel',
      label: 'camelCase',
      description: 'Standard JavaScript / Java variable style',
      example: 'helloWorld',
      value: '',
      convert: (s) => this.toCamelCase(s)
    },
    {
      id: 'pascal',
      label: 'PascalCase',
      description: 'Standard TypeScript / C# class name style',
      example: 'HelloWorld',
      value: '',
      convert: (s) => this.toPascalCase(s)
    },
    {
      id: 'snake',
      label: 'snake_case',
      description: 'Standard Python / database column style',
      example: 'hello_world',
      value: '',
      convert: (s) => this.toDelimited(s, '_')
    },
    {
      id: 'kebab',
      label: 'kebab-case',
      description: 'Standard URL slug and CSS class style',
      example: 'hello-world',
      value: '',
      convert: (s) => this.toDelimited(s, '-')
    },
    {
      id: 'constant',
      label: 'CONSTANT_CASE',
      description: 'Upper snake case for environment variables & constants',
      example: 'HELLO_WORLD',
      value: '',
      convert: (s) => this.toDelimited(s, '_').toUpperCase()
    },
    {
      id: 'dot',
      label: 'dot.case',
      description: 'Dot separated identifiers for namespaces & configs',
      example: 'hello.world',
      value: '',
      convert: (s) => this.toDelimited(s, '.')
    },
    {
      id: 'alternating',
      label: 'aLtErNaTiNg cAsE',
      description: 'Alternating lowercase and uppercase letters',
      example: 'hElLo wOrLd',
      value: '',
      convert: (s) => s.split('').map((c, i) => i % 2 === 0 ? c.toLowerCase() : c.toUpperCase()).join('')
    }
  ];

  constructor(private snackBar: MatSnackBar) {}

  ngOnInit(): void {
    this.inputText = 'Fast and modern developer utilities for everyday productivity';
    this.updateConversions();
  }

  onInputChange(): void {
    this.updateConversions();
  }

  private updateConversions(): void {
    for (const fmt of this.formats) {
      fmt.value = this.inputText ? fmt.convert(this.inputText) : '';
    }
  }

  private toWords(str: string): string[] {
    return str
      .replace(/([a-z])([A-Z])/g, '$1 $2')
      .replace(/[^a-zA-Z0-9]+/g, ' ')
      .trim()
      .split(/\s+/)
      .filter(w => w.length > 0);
  }

  private toCamelCase(str: string): string {
    const words = this.toWords(str);
    return words
      .map((w, i) => i === 0 ? w.toLowerCase() : w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
      .join('');
  }

  private toPascalCase(str: string): string {
    const words = this.toWords(str);
    return words
      .map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
      .join('');
  }

  private toDelimited(str: string, delimiter: string): string {
    const words = this.toWords(str);
    return words.map(w => w.toLowerCase()).join(delimiter);
  }

  copyCase(fmt: CaseFormat): void {
    if (!fmt.value) return;
    copyToClipboard(fmt.value);
    this.snackBar.open(`Copied ${fmt.label} to clipboard`, '', { duration: 1800 });
  }

  clear(): void {
    this.inputText = '';
    this.updateConversions();
  }

  async paste(): Promise<void> {
    try {
      const text = await navigator.clipboard.readText();
      if (text) {
        this.inputText = text;
        this.updateConversions();
        this.snackBar.open('Pasted text', '', { duration: 1500 });
      }
    } catch {
      this.snackBar.open('Clipboard access unavailable', '', { duration: 1500 });
    }
  }
}
