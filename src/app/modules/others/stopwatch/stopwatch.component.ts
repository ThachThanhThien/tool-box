import {Component, HostListener, Injector, OnDestroy} from '@angular/core';
import {PageHeaderComponent} from "../../../shared/components/page-header/page-header.component";
import {AppBaseComponent} from "../../../shared/components/app-base/app-base.component";
import {DecimalPipe, NgIf} from "@angular/common";

export interface LapRecord {
  lapNumber: number;
  splitTime: number;   // Duration of this specific lap in ms
  overallTime: number; // Cumulative time in ms
}

@Component({
  selector: 'app-stopwatch',
  standalone: true,
  imports: [
    PageHeaderComponent,
    NgIf,
    DecimalPipe
  ],
  templateUrl: './stopwatch.component.html',
  styleUrl: './stopwatch.component.scss'
})
export class StopwatchComponent extends AppBaseComponent implements OnDestroy {
  time: number = 0; // Total accumulated milliseconds
  running = false;
  pausing = false;
  laps: LapRecord[] = [];

  private animationFrameId: number | null = null;
  private lastTimestamp: number = 0;
  private lastLapTime: number = 0;

  constructor(injector: Injector) {
    super(injector);
  }

  ngOnDestroy(): void {
    this.stopTimer();
  }

  // Keyboard navigation shortcuts
  @HostListener('window:keydown', ['$event'])
  handleKeyboard(event: KeyboardEvent) {
    const target = event.target as HTMLElement;
    if (target && (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA')) {
      return;
    }

    if (event.code === 'Space') {
      event.preventDefault();
      if (this.running) {
        this.pause();
      } else {
        this.start();
      }
    } else if (event.key === 'l' || event.key === 'L') {
      if (this.running) {
        this.recordLap();
      }
    } else if (event.key === 'r' || event.key === 'R') {
      if (this.running || this.pausing) {
        this.reset();
      }
    }
  }

  start() {
    if (!this.running) {
      this.running = true;
      this.pausing = false;
      this.lastTimestamp = performance.now();

      const loop = (currentTimestamp: number) => {
        if (!this.running) return;
        const delta = currentTimestamp - this.lastTimestamp;
        this.time += delta;
        this.lastTimestamp = currentTimestamp;
        this.animationFrameId = requestAnimationFrame(loop);
      };

      this.animationFrameId = requestAnimationFrame(loop);
    }
  }

  pause() {
    if (this.running) {
      this.stopTimer();
      this.running = false;
      this.pausing = true;
    }
  }

  reset() {
    this.stopTimer();
    this.running = false;
    this.pausing = false;
    this.time = 0;
    this.lastLapTime = 0;
    this.laps = [];
  }

  recordLap() {
    if (!this.running && this.time === 0) return;

    const currentOverall = this.time;
    const split = currentOverall - this.lastLapTime;
    this.lastLapTime = currentOverall;

    const newLap: LapRecord = {
      lapNumber: this.laps.length + 1,
      splitTime: Math.max(0, split),
      overallTime: currentOverall
    };

    // Prepend so the newest lap is at top
    this.laps.unshift(newLap);
  }

  private stopTimer() {
    if (this.animationFrameId !== null) {
      cancelAnimationFrame(this.animationFrameId);
      this.animationFrameId = null;
    }
  }

  get formatted(): { hours: string; minutes: string; seconds: string; milliseconds: string } {
    return this.formatTime(this.time);
  }

  // Time formatting helpers
  formatTime(ms: number): { hours: string; minutes: string; seconds: string; milliseconds: string } {
    const totalSeconds = Math.floor(ms / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    const centiseconds = Math.floor((ms % 1000) / 10);

    return {
      hours: hours > 0 ? (hours < 10 ? '0' + hours : hours.toString()) : '',
      minutes: minutes < 10 ? '0' + minutes : minutes.toString(),
      seconds: seconds < 10 ? '0' + seconds : seconds.toString(),
      milliseconds: centiseconds < 10 ? '0' + centiseconds : centiseconds.toString()
    };
  }

  formatMsToString(ms: number): string {
    const t = this.formatTime(ms);
    return t.hours ? `${t.hours}:${t.minutes}:${t.seconds}.${t.milliseconds}` : `${t.minutes}:${t.seconds}.${t.milliseconds}`;
  }

  // Lap statistics
  get fastestLap(): LapRecord | null {
    if (this.laps.length < 2) return null;
    return this.laps.reduce((prev, curr) => (curr.splitTime < prev.splitTime ? curr : prev), this.laps[0]);
  }

  get slowestLap(): LapRecord | null {
    if (this.laps.length < 2) return null;
    return this.laps.reduce((prev, curr) => (curr.splitTime > prev.splitTime ? curr : prev), this.laps[0]);
  }

  get averageLapTime(): number {
    if (this.laps.length === 0) return 0;
    const total = this.laps.reduce((sum, lap) => sum + lap.splitTime, 0);
    return total / this.laps.length;
  }

  copyLaps() {
    if (this.laps.length === 0) return;
    const header = "Lap\tSplit Time\tOverall Time\n";
    const rows = [...this.laps].reverse().map(l => `#${l.lapNumber}\t${this.formatMsToString(l.splitTime)}\t${this.formatMsToString(l.overallTime)}`).join("\n");
    this.copyString(header + rows);
  }

  exportCsv() {
    if (this.laps.length === 0) return;
    const csvContent = "data:text/csv;charset=utf-8,Lap,Split Time,Overall Time\n" +
      [...this.laps].reverse().map(l => `${l.lapNumber},"${this.formatMsToString(l.splitTime)}","${this.formatMsToString(l.overallTime)}"`).join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `stopwatch-laps-${Date.now()}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}
