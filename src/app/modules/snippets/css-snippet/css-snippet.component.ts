import {Component, Injector, OnInit} from '@angular/core';
import {DomSanitizer, SafeHtml} from "@angular/platform-browser";
import {AppBaseComponent} from "../../../shared/components/app-base/app-base.component";
import {codeSnippets} from "../../../shared/css-snippets";
import {PageHeaderComponent} from "../../../shared/components/page-header/page-header.component";
import {CodeSnippetComponent} from "../../../shared/components/code-snippet/code-snippet.component";
import {FormsModule} from "@angular/forms";
import {NgIf, NgForOf} from "@angular/common";

export interface RenderedSnippet {
  id: number;
  category: string;
  name: string;
  htmlCode: string;
  css: string;
  safeHtml: SafeHtml;
  copiedType?: string | null;
}

@Component({
  selector: 'app-css-snippet',
  standalone: true,
  imports: [
    PageHeaderComponent,
    CodeSnippetComponent,
    FormsModule,
    NgIf,
    NgForOf
  ],
  templateUrl: './css-snippet.component.html',
  styleUrl: './css-snippet.component.scss'
})
export class CssSnippetComponent extends AppBaseComponent implements OnInit {
  categories: string[] = [];
  selectedCategory = 'Button';
  allSnippets: RenderedSnippet[] = [];
  inspectedSnippet: RenderedSnippet | null = null;
  codeViewMode: 'combined' | 'css' | 'html' = 'combined';

  constructor(
    private sanitizer: DomSanitizer,
    injector: Injector
  ) {
    super(injector);
  }

  ngOnInit() {
    this.categories = codeSnippets.map(c => c.name);
    if (this.categories.length > 0) {
      this.selectedCategory = this.categories[0];
    }
    this.loadSnippets();
  }

  private loadSnippets() {
    let globalIndex = 1;
    const list: RenderedSnippet[] = [];

    for (const group of codeSnippets) {
      group.snippets.forEach((item, index) => {
        if (!item.htmlCode || (!item.css && group.name === 'Loader' && index === 20)) {
          return;
        }
        // Scope CSS using unique class or embed inline style block
        const embedded = `${item.htmlCode}<style>${item.css}</style>`;
        list.push({
          id: globalIndex++,
          category: group.name,
          name: `${group.name} #${index + 1}`,
          htmlCode: item.htmlCode.trim(),
          css: item.css.trim(),
          safeHtml: this.sanitizer.bypassSecurityTrustHtml(embedded),
          copiedType: null
        });
      });
    }
    this.allSnippets = list;
  }

  get currentCategorySnippets(): RenderedSnippet[] {
    return this.allSnippets.filter(s => s.category === this.selectedCategory);
  }

  selectCategory(cat: string) {
    this.selectedCategory = cat;
    if (this.inspectedSnippet && this.inspectedSnippet.category !== cat) {
      this.inspectedSnippet = null;
    }
  }

  copyFullSnippet(snippet: RenderedSnippet) {
    const full = `${snippet.htmlCode}\n\n<style>\n${snippet.css}\n</style>`;
    this.copyString(full);
    this.showCopied(snippet, 'all');
  }

  copyCssOnly(snippet: RenderedSnippet) {
    this.copyString(snippet.css);
    this.showCopied(snippet, 'css');
  }

  copyHtmlOnly(snippet: RenderedSnippet) {
    this.copyString(snippet.htmlCode);
    this.showCopied(snippet, 'html');
  }

  inspectSnippet(snippet: RenderedSnippet) {
    this.inspectedSnippet = this.inspectedSnippet?.id === snippet.id ? null : snippet;
  }

  get inspectCodeContent(): string {
    if (!this.inspectedSnippet) return '';
    if (this.codeViewMode === 'css') return this.inspectedSnippet.css;
    if (this.codeViewMode === 'html') return this.inspectedSnippet.htmlCode;
    return `${this.inspectedSnippet.htmlCode}\n\n<style>\n${this.inspectedSnippet.css}\n</style>`;
  }

  get inspectCodeLanguage(): string {
    if (this.codeViewMode === 'css') return 'css';
    if (this.codeViewMode === 'html') return 'html';
    return 'html';
  }

  private showCopied(snippet: RenderedSnippet, type: string) {
    snippet.copiedType = type;
    setTimeout(() => {
      snippet.copiedType = null;
    }, 1800);
  }
}
