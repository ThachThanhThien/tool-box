import {Component} from '@angular/core';
import {PageHeaderComponent} from "../../../shared/components/page-header/page-header.component";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {provideNativeDateAdapter} from "@angular/material/core";

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [
    PageHeaderComponent,
    MatDatepickerModule
  ],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.scss',
  providers: [provideNativeDateAdapter()],
})
export class CalendarComponent {
  calendar: any[] = [];
  curYear = new Date().getFullYear();

  ngOnInit() {
    this.calendar = [];
    for (let i = 0; i < 12; i++) {
      this.calendar.push({
        name: months[i],
        startDate: new Date(this.curYear, i, 1),
      })
    }
  }
}
