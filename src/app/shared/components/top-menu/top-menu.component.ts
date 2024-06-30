import {Component, OnInit} from '@angular/core';
import {MenuItem} from "../../../core/models/menu-item";
import {AppConst} from "../../app-const";

const {appMenu} = AppConst;

@Component({
  selector: 'app-top-menu',
  standalone: true,
  imports: [
  ],
  templateUrl: './top-menu.component.html',
  styleUrl: './top-menu.component.scss'
})
export class TopMenuComponent implements OnInit {
  items: MenuItem[] = [];

  ngOnInit() {
    this.items = appMenu
  }

}
