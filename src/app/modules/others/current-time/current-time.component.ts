import {Component, Injector, OnDestroy, OnInit} from '@angular/core';
import {DatePipe, NgIf} from "@angular/common";
import {PageHeaderComponent} from "../../../shared/components/page-header/page-header.component";
import * as moment from "moment";
import {AppBaseComponent} from "../../../shared/components/app-base/app-base.component";
import {FormsModule} from "@angular/forms";

export interface WorldClockItem {
  city: string;
  country: string;
  timeZone: string;
  timeStr: string;
  dateStr: string;
  offsetStr: string;
}

@Component({
  selector: 'app-current-time',
  standalone: true,
  imports: [
    DatePipe,
    PageHeaderComponent,
    FormsModule,
    NgIf
  ],
  templateUrl: './current-time.component.html',
  styleUrl: './current-time.component.scss'
})
export class CurrentTimeComponent extends AppBaseComponent implements OnInit, OnDestroy {
  currentTime = new Date();
  weekNumber = 0;
  localTimeZone = '';
  localUtcOffset = '';

  // Live Unix Timestamp
  epochSeconds = 0;
  epochMillis = 0;

  // Timestamp Converter Input
  inputEpoch: string = '';
  convertedEpochDate: Date | null = null;
  convertedEpochIso = '';
  convertedEpochUtc = '';
  convertedEpochLocal = '';

  // Date to Timestamp Converter Input
  inputDateString: string = '';
  resultEpochSec: number | null = null;
  resultEpochMs: number | null = null;

  worldClocks: WorldClockItem[] = [];

  private timerInterval: any;

  constructor(injector: Injector) {
    super(injector);
  }

  ngOnInit() {
    this.localTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone || 'Local';
    const now = new Date();
    this.inputEpoch = Math.floor(now.getTime() / 1000).toString();
    this.convertEpoch();

    // Format for datetime-local input: YYYY-MM-DDTHH:mm
    const pad = (n: number) => n < 10 ? '0' + n : n;
    this.inputDateString = `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())}T${pad(now.getHours())}:${pad(now.getMinutes())}`;
    this.convertDateToEpoch();

    this.tick();
    this.timerInterval = setInterval(() => {
      this.tick();
    }, 1000);
  }

  ngOnDestroy(): void {
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
    }
  }

  private tick() {
    this.currentTime = new Date();
    this.weekNumber = moment(this.currentTime).isoWeek();
    this.epochMillis = this.currentTime.getTime();
    this.epochSeconds = Math.floor(this.epochMillis / 1000);

    const offsetMinutes = -this.currentTime.getTimezoneOffset();
    const sign = offsetMinutes >= 0 ? '+' : '-';
    const hours = Math.floor(Math.abs(offsetMinutes) / 60);
    const mins = Math.abs(offsetMinutes) % 60;
    this.localUtcOffset = `UTC${sign}${hours < 10 ? '0' + hours : hours}:${mins < 10 ? '0' + mins : mins}`;

    this.updateWorldClocks();
  }

  private updateWorldClocks() {
    const zones = [
      { city: 'UTC / GMT', country: 'Coordinated Universal', timeZone: 'UTC' },
      { city: 'San Francisco', country: 'United States (PT)', timeZone: 'America/Los_Angeles' },
      { city: 'New York', country: 'United States (ET)', timeZone: 'America/New_York' },
      { city: 'London', country: 'United Kingdom (GMT/BST)', timeZone: 'Europe/London' },
      { city: 'Tokyo', country: 'Japan (JST)', timeZone: 'Asia/Tokyo' }
    ];

    this.worldClocks = zones.map(z => {
      const now = new Date();
      const timeFmt = new Intl.DateTimeFormat('en-US', {
        timeZone: z.timeZone,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      }).format(now);

      const dateFmt = new Intl.DateTimeFormat('en-US', {
        timeZone: z.timeZone,
        weekday: 'short',
        month: 'short',
        day: 'numeric'
      }).format(now);

      // Offset string
      const offsetPart = new Intl.DateTimeFormat('en-US', {
        timeZone: z.timeZone,
        timeZoneName: 'shortOffset'
      }).formatToParts(now).find(p => p.type === 'timeZoneName')?.value || '';

      return {
        city: z.city,
        country: z.country,
        timeZone: z.timeZone,
        timeStr: timeFmt,
        dateStr: dateFmt,
        offsetStr: offsetPart
      };
    });
  }

  convertEpoch() {
    const val = this.inputEpoch.trim();
    if (!val || isNaN(Number(val))) {
      this.convertedEpochDate = null;
      return;
    }
    let num = Number(val);
    // If 10 digits -> seconds, if 13 digits -> milliseconds
    if (val.length <= 11) {
      num = num * 1000;
    }
    const d = new Date(num);
    if (isNaN(d.getTime())) {
      this.convertedEpochDate = null;
      return;
    }
    this.convertedEpochDate = d;
    this.convertedEpochIso = d.toISOString();
    this.convertedEpochUtc = d.toUTCString();
    this.convertedEpochLocal = d.toLocaleString();
  }

  setCurrentEpochToInput() {
    this.inputEpoch = this.epochSeconds.toString();
    this.convertEpoch();
  }

  convertDateToEpoch() {
    if (!this.inputDateString) {
      this.resultEpochSec = null;
      this.resultEpochMs = null;
      return;
    }
    const d = new Date(this.inputDateString);
    if (isNaN(d.getTime())) {
      this.resultEpochSec = null;
      this.resultEpochMs = null;
      return;
    }
    this.resultEpochMs = d.getTime();
    this.resultEpochSec = Math.floor(d.getTime() / 1000);
  }

  openCalendar() {
    this.router?.navigate(['calendar']);
  }
}
