import {Component} from '@angular/core';
import {PageHeaderComponent} from "../../../shared/components/page-header/page-header.component";
import {FormsModule} from "@angular/forms";
import {MatFormField, MatSuffix} from "@angular/material/form-field";
import {MatIconButton} from "@angular/material/button";
import {MatInput} from "@angular/material/input";
import {copyToClipboard} from "../../../shared/Helper";
import {MatSnackBar} from "@angular/material/snack-bar";
import {AppBaseComponent} from "../../../shared/components/app-base/app-base.component";

const words = [
  "lorem", "ipsum", "dolor", "sit", "amet", "consectetur", "adipiscing", "elit",
  "sed", "do", "eiusmod", "tempor", "incididunt", "ut", "labore", "et", "dolore",
  "magna", "aliqua", "ut", "enim", "ad", "minim", "veniam", "quis", "nostrud",
  "exercitation", "ullamco", "laboris", "nisi", "ut", "aliquip", "ex", "ea",
  "commodo", "consequat", "duis", "aute", "irure", "dolor", "in", "reprehenderit",
  "in", "voluptate", "velit", "esse", "cillum", "dolore", "eu", "fugiat", "nulla",
  "pariatur", "excepteur", "sint", "occaecat", "cupidatat", "non", "proident",
  "sunt", "in", "culpa", "qui", "officia", "deserunt", "mollit", "anim", "id", "est",
  "laborum"
];

@Component({
  selector: 'app-text-generator',
  standalone: true,
  imports: [
    PageHeaderComponent,
    FormsModule,
    MatFormField,
    MatIconButton,
    MatInput,
    MatSuffix
  ],
  templateUrl: './text-generator.component.html',
  styleUrl: './text-generator.component.scss'
})
export class TextGeneratorComponent extends AppBaseComponent {
  paragraph = '';
  length = 0;

  generateParagraph() {
    let paragraph = '';
    while (paragraph.length < this.length) {
      const randomIndex = Math.floor(Math.random() * words.length);
      paragraph += words[randomIndex] + ' ';
    }
    this.paragraph = paragraph.substring(0, this.length)
  }


}
