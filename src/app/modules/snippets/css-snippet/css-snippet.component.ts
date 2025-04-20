import {Component, Injector, OnInit} from '@angular/core';
import {MatList, MatListItem} from "@angular/material/list";
import {NgClass, NgForOf} from "@angular/common";
import {PageHeaderComponent} from "../../../shared/components/page-header/page-header.component";
import {DomSanitizer} from "@angular/platform-browser";
import {AppBaseComponent} from "../../../shared/components/app-base/app-base.component";
import {codeSnippets} from "../../../shared/css-snippets";
import {forEach} from "lodash";

@Component({
  selector: 'app-css-snippet',
  standalone: true,
  imports: [
    MatList,
    MatListItem,
    PageHeaderComponent,
    NgForOf,
    NgClass,
  ],
  templateUrl: './css-snippet.component.html',
  styleUrl: './css-snippet.component.scss'
})
export class CssSnippetComponent extends AppBaseComponent implements OnInit {
  codeSnippets: CssCodeSnippet[] = [];
  safeTemplates: any[] = [];

  constructor(private sanitizer: DomSanitizer,
              private injector: Injector) {
    super(injector)
  }

  ngOnInit() {
    this.codeSnippets = codeSnippets.map((item) => new CssCodeSnippet(item));
    this.onSelect(this.codeSnippets[0]);
  }

  onSelect(selectedSnippet: CssCodeSnippet) {
    forEach(this.codeSnippets, item => {
      item.isSelected = false
    });
    selectedSnippet.isSelected = true;
    this.safeTemplates = selectedSnippet.snippets.map((template: any) => ({
      ...template,
      html: this.sanitizer.bypassSecurityTrustHtml(template.htmlCode)
    }));
  }

  copySnippet(template: any) {
    const fullSnippet = `${template.htmlCode}\n\n<style>\n${template.css}\n</style>`;
    this.copyString(fullSnippet);
  }
}

class CssCodeSnippet {
  name: string;
  snippets: {htmlCode: string, css: string}[];
  isSelected: boolean;

  constructor(data: any) {
    this.name = data.name;
    this.snippets = data.snippets;
    this.isSelected = false;
  }
}
