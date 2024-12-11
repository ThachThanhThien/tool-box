import { Component } from '@angular/core';
import {DatePipe} from "@angular/common";
import {PageHeaderComponent} from "../../../shared/components/page-header/page-header.component";

@Component({
  selector: 'app-current-time',
  standalone: true,
  imports: [
    DatePipe,
    PageHeaderComponent
  ],
  templateUrl: './current-time.component.html',
  styleUrl: './current-time.component.scss'
})
export class CurrentTimeComponent {
  currentTime = new Date();

  ngOnInit() {
    setInterval(() => {
      this.currentTime = new Date();
    }, 1000)
  }
}
