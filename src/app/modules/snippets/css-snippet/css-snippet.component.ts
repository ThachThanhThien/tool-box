import {Compiler, Component, Injector, NgModule, ViewChild, ViewContainerRef} from '@angular/core';
import {MatList, MatListItem} from "@angular/material/list";
import {JsonPipe, NgForOf, NgIf} from "@angular/common";
import {PageHeaderComponent} from "../../../shared/components/page-header/page-header.component";
import {DomSanitizer, SafeHtml} from "@angular/platform-browser";
import {AppBaseComponent} from "../../../shared/components/app-base/app-base.component";
import {codeSnippets} from "../../../shared/css-snippets";

@Component({
  selector: 'app-css-snippet',
  standalone: true,
  imports: [
    MatList,
    MatListItem,
    NgIf,
    PageHeaderComponent,
    NgForOf,
  ],
  templateUrl: './css-snippet.component.html',
  styleUrl: './css-snippet.component.scss'
})
export class CssSnippetComponent extends AppBaseComponent {
  codeSnippets = codeSnippets;
  safeTemplates: any[] = [];

  constructor(private sanitizer: DomSanitizer,
              private injector: Injector) {
    super(injector)
  }

  onSelect(selectedSnippet: any) {
    this.safeTemplates = selectedSnippet.map((template: any) => ({
      ...template,
      html: this.sanitizer.bypassSecurityTrustHtml(template.htmlCode)
    }));
  }

  copySnippet(template: any) {
    const fullSnippet = `${template.htmlCode}\n\n<style>\n${template.css}\n</style>`;
    this.copyString(fullSnippet);
  }
}
