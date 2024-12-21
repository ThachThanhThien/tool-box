import {Component, Injector} from '@angular/core';
import {DatePipe} from "@angular/common";
import {PageHeaderComponent} from "../../../shared/components/page-header/page-header.component";
import * as moment from "moment";
import {AppBaseComponent} from "../../../shared/components/app-base/app-base.component";

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
export class CurrentTimeComponent extends AppBaseComponent {
  currentTime = new Date();
  weekNumber = 0;

  constructor(private injector: Injector) {
    super(injector);
  }

  ngOnInit() {
    this.setDateData();
    setInterval(() => {
      this.setDateData();
    }, 1000)
  }

  setDateData() {
    this.currentTime = new Date();
    this.weekNumber  = moment(this.currentTime).isoWeek();
  }

  openCalendar() {
    this.router.navigate(['calendar']).then();
  }
}
