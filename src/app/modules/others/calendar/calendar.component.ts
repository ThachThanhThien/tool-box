import {Component, OnInit} from '@angular/core';
import {PageHeaderComponent} from "../../../shared/components/page-header/page-header.component";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {provideNativeDateAdapter} from "@angular/material/core";
import {FormsModule} from "@angular/forms";
import {DatePipe, NgIf} from "@angular/common";

const MONTH_NAMES = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

export interface MonthData {
  index: number;
  name: string;
  quarter: number;
  startDate: Date;
  isCurrentMonth: boolean;
}

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [
    PageHeaderComponent,
    MatDatepickerModule,
    FormsModule,
    DatePipe,
    NgIf
  ],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.scss',
  providers: [provideNativeDateAdapter()],
})
export class CalendarComponent implements OnInit {
  calendar: MonthData[] = [];
  today = new Date();
  curYear = new Date().getFullYear();
  yearInput = this.curYear;

  ngOnInit() {
    this.buildYearCalendar(this.curYear);
  }

  buildYearCalendar(year: number) {
    this.curYear = year;
    this.yearInput = year;
    const now = new Date();
    const isThisYear = now.getFullYear() === year;
    const currentMonthIndex = now.getMonth();

    this.calendar = [];
    for (let i = 0; i < 12; i++) {
      this.calendar.push({
        index: i + 1,
        name: MONTH_NAMES[i],
        quarter: Math.floor(i / 3) + 1,
        startDate: new Date(year, i, 1),
        isCurrentMonth: isThisYear && currentMonthIndex === i
      });
    }
  }

  prevYear() {
    this.buildYearCalendar(this.curYear - 1);
  }

  nextYear() {
    this.buildYearCalendar(this.curYear + 1);
  }

  jumpToCurrentYear() {
    this.buildYearCalendar(new Date().getFullYear());
  }

  onYearInputChange() {
    const y = Number(this.yearInput);
    if (y && y >= 1970 && y <= 2100) {
      this.buildYearCalendar(y);
    }
  }
}
