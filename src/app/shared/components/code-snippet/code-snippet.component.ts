import { Component, Injector, Input, OnChanges, SimpleChanges } from '@angular/core';
import hljs from 'highlight.js';
import { AppBaseComponent } from '../app-base/app-base.component';

@Component({
  selector: 'app-code-snippet',
  standalone: true,
  imports: [],
  templateUrl: './code-snippet.component.html',
  styleUrl: './code-snippet.component.scss'
})
export class CodeSnippetComponent extends AppBaseComponent implements OnChanges {
  @Input() code: string = '';
  @Input() language: string = 'plaintext';
  @Input() title: string = '';
  formattedCode: string = '';
  copied = false;

  constructor(injector: Injector) {
    super(injector);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['code'] || changes['language']) {
      this.updateCode();
    }
  }

  updateCode(): void {
    if (!this.code) {
      this.formattedCode = '';
      return;
    }

    try {
      if (this.language && hljs.getLanguage(this.language)) {
        this.formattedCode = hljs.highlight(this.code, { language: this.language }).value;
      } else {
        this.formattedCode = hljs.highlightAuto(this.code).value;
      }
    } catch {
      this.formattedCode = this.code;
    }
  }

  copy(): void {
    this.copyString(this.code);
    this.copied = true;
    setTimeout(() => {
      this.copied = false;
    }, 2000);
  }
}
