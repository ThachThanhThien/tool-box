import {Component, OnInit} from '@angular/core';
import {MenuItem} from "../../../core/models/menu-item";
import {AppConst} from "../../app-const";
import {FormsModule} from "@angular/forms";
import {MatFormField, MatSuffix} from "@angular/material/form-field";
import {MatIconButton} from "@angular/material/button";
import {MatInput} from "@angular/material/input";

const {appMenu} = AppConst;

@Component({
  selector: 'app-top-menu',
  standalone: true,
  imports: [
    FormsModule,
    MatFormField,
    MatIconButton,
    MatInput,
    MatSuffix
  ],
  templateUrl: './top-menu.component.html',
  styleUrl: './top-menu.component.scss'
})
export class TopMenuComponent implements OnInit {
  items: MenuItem[] = [];
  searchedText = '';

  ngOnInit() {
    this.items = appMenu
  }

  search() {

  }

}
