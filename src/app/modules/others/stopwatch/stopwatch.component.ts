import { Component } from '@angular/core';
import {PageHeaderComponent} from "../../../shared/components/page-header/page-header.component";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-stopwatch',
  standalone: true,
  imports: [
    PageHeaderComponent,
    NgIf
  ],
  templateUrl: './stopwatch.component.html',
  styleUrl: './stopwatch.component.scss'
})
export class StopwatchComponent {
  time: number = 0; // Time in milliseconds
  interval: any;
  running = false;
  pausing = false;

  // Start the stopwatch
  start() {
    if (!this.running) {
      this.interval = setInterval(() => {
        this.time += 10;
      }, 10);
      this.running = true;
      this.pausing = false;
    }
  }

  // Stop the stopwatch
  pause() {
    if (this.running) {
      clearInterval(this.interval);
      this.running = false;
      this.pausing = true;
    }
  }

  // Reset the stopwatch
  stop() {
    this.pause();
    this.time = 0;
    this.pausing = false;
  }

  // Format the time (mm:ss:ms)
  getFormattedTime() {
    const minutes = Math.floor(this.time / 60000);
    const seconds = Math.floor((this.time % 60000) / 1000);
    const milliseconds = Math.floor((this.time % 1000) / 10);

    return (
      this.padZero(minutes) + ':' + this.padZero(seconds) + '.' + this.padZero(milliseconds)
    );
  }

  // Pad numbers with leading zeros
  padZero(num: number) {
    return num < 10 ? '0' + num : num.toString();
  }
}
