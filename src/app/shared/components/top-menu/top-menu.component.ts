import {Component, OnInit} from '@angular/core';
import {MenuItem} from "../../../core/models/menu-item";
import {AppConst} from "../../app-const";
import {FormsModule} from "@angular/forms";
import {MatFormField, MatSuffix} from "@angular/material/form-field";
import {MatIconButton} from "@angular/material/button";
import {MatInput} from "@angular/material/input";
import {debounce} from "lodash";
import {debounceTime, distinctUntilChanged, Subject} from "rxjs";
import {SearchResultComponent} from "./search-result/search-result.component";


@Component({
  selector: 'app-top-menu',
  standalone: true,
  imports: [
    FormsModule,
    MatFormField,
    MatIconButton,
    MatInput,
    MatSuffix,
    SearchResultComponent
  ],
  templateUrl: './top-menu.component.html',
  styleUrl: './top-menu.component.scss'
})
export class TopMenuComponent {

}
