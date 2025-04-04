import {Component, OnInit} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {copyToClipboard} from "../../../shared/Helper";
import {PageHeaderComponent} from "../../../shared/components/page-header/page-header.component";
import {AppBaseComponent} from "../../../shared/components/app-base/app-base.component";

@Component({
  standalone: true,
  imports: [
    FormsModule,
    MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule, PageHeaderComponent
  ],
  templateUrl: './case-converter.component.html',
  styleUrl: './case-converter.component.scss'
})
export class CaseConverterComponent extends AppBaseComponent implements OnInit {
  protected readonly copyToClipboard = copyToClipboard;
  primaryValue = '';
  targetValue = [
    {label: 'Lower Case', value: '', func: (val: string) => val.toLowerCase()},
    {label: 'Upper Case', value: '', func: (val: string) => val.toUpperCase()},
    {label: 'Sentence Case', value: '', func: (val: string) => this.toSentenceCase(val)},
    {label: 'Capitalized Case', value: '', func: (val: string) => this.toCapitalizedCase(val)},
    {label: 'Alternating Case', value: '', func: (val: string) => this.toAlternatingCase(val)},
    {label: 'Camel Case', value: '', func: (val: string) => this.toCamelCase(val)},
    {label: 'Snake Case ', value: '', func: (val: string) => this.toSnakeCase(val)},
    {label: 'PascalCase', value: '', func: (val: string) => this.toPascalCase(val)},
  ];

  ngOnInit() {
    this.primaryValue = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit';
    this.onPrimaryValueChanged();
  }

  onPrimaryValueChanged() {
    this.targetValue.forEach(item => {
      item.value = item.func(this.primaryValue);
    })
  }

  toSentenceCase(str: string) {
    if (!str) return '';
    return str
      .toLowerCase()
      .replace(/(^\s*\w|[.!?]\s*\w)/g, (char) => char.toUpperCase());

  }

  toCapitalizedCase(str: string) {
    if (!str) return '';

    return str
      .toLowerCase()
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }

  toAlternatingCase(str: string): string {
    if (!str) return '';

    return str
      .split('')
      .map((char, index) => index % 2 === 0 ? char.toLowerCase() : char.toUpperCase())
      .join('');
  }

  toCamelCase(str: string): string {
    if (!str) return '';

    return str
      .toLowerCase()
      .split(/[^a-zA-Z0-9]/)
      .map((word, index) =>
        index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1)
      )
      .join('');
  }

  toSnakeCase(str: string): string {
    if (!str) return '';

    return str
      .toLowerCase()
      .split(/[^a-zA-Z0-9]/)
      .join('_');
  }

  toPascalCase(str: string): string {
    if (!str) return '';

    return str
      .toLowerCase()
      .split(/[^a-zA-Z0-9]/)
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join('');
  }
}
