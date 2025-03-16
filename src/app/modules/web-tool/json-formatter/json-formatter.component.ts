import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {JsonPipe} from "@angular/common";
import {MatFormField} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {PageHeaderComponent} from "../../../shared/components/page-header/page-header.component";
import {NgxJsonViewerModule} from "ngx-json-viewer";
import {cloneDeep} from "lodash";

@Component({
  selector: 'app-json-formatter',
  standalone: true,
  imports: [
    FormsModule,
    MatFormField,
    MatInput,
    PageHeaderComponent,
    NgxJsonViewerModule
  ],
  templateUrl: './json-formatter.component.html',
  styleUrl: './json-formatter.component.scss'
})
export class JsonFormatterComponent {
  baseValue = '';
  resultValue = {};

  onBaseValueChange() {
    this.resultValue = JSON.parse(this.baseValue);
  }
}
