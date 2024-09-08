import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {JsonPipe} from "@angular/common";
import {MatFormField} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {PageHeaderComponent} from "../../../shared/components/page-header/page-header.component";

@Component({
  selector: 'app-json-formatter',
  standalone: true,
    imports: [
        FormsModule,
        JsonPipe,
        MatFormField,
        MatInput,
        PageHeaderComponent
    ],
  templateUrl: './json-formatter.component.html',
  styleUrl: './json-formatter.component.scss'
})
export class JsonFormatterComponent {
  baseValue = '';
  resultValue = '';

  onBaseValueChange() {
    this.resultValue = this.formatJson(this.baseValue);
  }

  formatJson(unformattedJson: string): string {
    try {
      const jsonObject = JSON.parse(unformattedJson);
      return JSON.stringify(jsonObject, null, 2);
    } catch (error) {
      return 'Invalid JSON';
    }
  }
}
