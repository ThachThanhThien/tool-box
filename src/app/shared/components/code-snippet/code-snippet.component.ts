import {Component, ElementRef, Injector, Input, OnChanges, SimpleChanges} from '@angular/core';
import hljs from 'highlight.js';
import {AppBaseComponent} from "../app-base/app-base.component";

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
  formattedCode: string = '';

  constructor(private elRef: ElementRef,
              private injector: Injector) {
    super(injector);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['code'] && changes['code'].currentValue !== changes['code'].previousValue) {
      this.updateCode();
    }
  }

  updateCode() {
    if (this.code) {
      const highlighted = hljs.highlight(this.language, this.code).value;
      this.formattedCode = highlighted;
    }
  }

  copy() {
    this.copyString(this.code);
  }
}
