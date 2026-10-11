import {AfterViewInit, Component, ElementRef, inject, OnInit, ViewChild} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {PageHeaderComponent} from "../../../shared/components/page-header/page-header.component";
import {MatDialog} from "@angular/material/dialog";
import {DialogComponent} from "../../../shared/components/dialog/dialog.component";
import {DialogData} from "../../../core/models/dialog-data";
import {NgIf, NgForOf} from "@angular/common";

const WHEEL_COLORS = [
  '#4f46e5', // Indigo
  '#06b6d4', // Cyan
  '#10b981', // Emerald
  '#f59e0b', // Amber
  '#f43f5e', // Rose
  '#8b5cf6', // Violet
  '#14b8a6', // Teal
  '#ec4899', // Pink
  '#3b82f6', // Blue
  '#84cc16'  // Lime
];

const PRESETS = [
  { name: 'Yes / No / Maybe', items: ['Yes', 'No', 'Maybe', 'Definitely', 'Never'] },
  { name: 'Dice Roll (1-6)', items: ['1', '2', '3', '4', '5', '6'] },
  { name: 'Lunch Choices', items: ['Pizza', 'Sushi', 'Burgers', 'Tacos', 'Salad', 'Ramen', 'Pasta'] },
  { name: 'Coin Flip', items: ['Heads', 'Tails'] },
  { name: 'Team Meeting Order', items: ['Alex', 'Brian', 'Chloe', 'David', 'Elena'] }
];

@Component({
  selector: 'app-spinning-wheel',
  standalone: true,
  imports: [
    FormsModule,
    PageHeaderComponent,
    NgIf,
    NgForOf
  ],
  templateUrl: './spinning-wheel.component.html',
  styleUrl: './spinning-wheel.component.scss'
})
export class SpinningWheelComponent implements OnInit, AfterViewInit {
  @ViewChild('canvas') canvasRef!: ElementRef<HTMLCanvasElement>;

  values: string[] = [];
  inputValues = '';
  isSpinning = false;
  selectedValue: string | null = null;
  history: string[] = [];
  presets = PRESETS;

  private context!: CanvasRenderingContext2D;
  private startAngle = 0;
  dialog = inject(MatDialog);

  ngOnInit() {
    this.values = ['Anne', 'Ben', 'Camile', 'Dick', 'Elena', 'Felix'];
    this.inputValues = this.values.join('\n');
  }

  ngAfterViewInit(): void {
    this.context = this.canvasRef.nativeElement.getContext('2d')!;
    this.drawWheel();
  }

  onValuesChanged() {
    this.values = (this.inputValues.split(/\r?\n|\r|\n/g) || [])
      .map(s => s.trim())
      .filter(item => item.length > 0);
    this.drawWheel();
  }

  loadPreset(preset: { name: string; items: string[] }) {
    if (this.isSpinning) return;
    this.values = [...preset.items];
    this.inputValues = this.values.join('\n');
    this.selectedValue = null;
    this.drawWheel();
  }

  shuffleEntries() {
    if (this.isSpinning || this.values.length <= 1) return;
    const array = [...this.values];
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    this.values = array;
    this.inputValues = this.values.join('\n');
    this.drawWheel();
  }

  removeWinner() {
    if (!this.selectedValue) return;
    this.values = this.values.filter(v => v !== this.selectedValue);
    this.inputValues = this.values.join('\n');
    this.selectedValue = null;
    this.drawWheel();
  }

  clearEntries() {
    if (this.isSpinning) return;
    this.values = [];
    this.inputValues = '';
    this.selectedValue = null;
    this.drawWheel();
  }

  drawWheel(): void {
    if (!this.canvasRef) return;
    const canvas = this.canvasRef.nativeElement;
    const ctx = this.context;
    if (!ctx) return;

    const numValues = this.values.length;
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = centerX - 12;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if (numValues === 0) {
      // Empty wheel placeholder
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
      ctx.fillStyle = '#1e293b';
      ctx.fill();
      ctx.strokeStyle = '#475569';
      ctx.lineWidth = 2;
      ctx.stroke();

      ctx.fillStyle = '#94a3b8';
      ctx.font = 'bold 16px sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('Add entries to spin', centerX, centerY);
      return;
    }

    const arcSize = (2 * Math.PI) / numValues;

    // Draw slices
    this.values.forEach((value, i) => {
      const startAngle = this.startAngle + i * arcSize;
      const endAngle = startAngle + arcSize;

      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.arc(centerX, centerY, radius, startAngle, endAngle);
      ctx.fillStyle = WHEEL_COLORS[i % WHEEL_COLORS.length];
      ctx.fill();
      ctx.strokeStyle = '#ffffff';
      ctx.lineWidth = 2;
      ctx.stroke();

      // Text label
      ctx.save();
      ctx.translate(centerX, centerY);
      ctx.rotate(startAngle + arcSize / 2);
      ctx.textAlign = 'right';
      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 15px sans-serif';
      ctx.shadowColor = 'rgba(0, 0, 0, 0.4)';
      ctx.shadowBlur = 4;

      // Truncate long text
      const maxText = value.length > 18 ? value.substring(0, 16) + '...' : value;
      ctx.fillText(maxText, radius - 20, 5);
      ctx.restore();
    });

    // Draw center hub
    ctx.beginPath();
    ctx.arc(centerX, centerY, 34, 0, 2 * Math.PI);
    ctx.fillStyle = '#0f172a';
    ctx.fill();
    ctx.strokeStyle = '#ffffff';
    ctx.lineWidth = 3;
    ctx.stroke();

    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 12px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('SPIN', centerX, centerY + 4);

    // Draw pointer needle at 3 o'clock (right side) pointing inward
    this.drawPointer(centerX, centerY, radius);
  }

  private drawPointer(centerX: number, centerY: number, radius: number): void {
    const ctx = this.context;
    const pointerSize = 24;
    const tipX = centerX + radius - 6;
    const tipY = centerY;

    ctx.save();
    ctx.shadowColor = 'rgba(0, 0, 0, 0.5)';
    ctx.shadowBlur = 6;
    ctx.fillStyle = '#ffffff';
    ctx.beginPath();
    ctx.moveTo(tipX, tipY);
    ctx.lineTo(tipX + pointerSize, tipY - pointerSize / 2);
    ctx.lineTo(tipX + pointerSize, tipY + pointerSize / 2);
    ctx.closePath();
    ctx.fill();

    ctx.strokeStyle = '#0f172a';
    ctx.lineWidth = 2;
    ctx.stroke();
    ctx.restore();
  }

  spin(): void {
    if (this.isSpinning || this.values.length < 2) return;

    this.isSpinning = true;
    this.selectedValue = null;
    const spinDuration = 4500;
    const totalRotationDegrees = Math.random() * 360 + 360 * 8; // At least 8 full rotations
    let currentAngle = 0;
    let startTime: number;

    const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

    const animateSpin = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / spinDuration, 1);

      const easingFactor = easeOutCubic(progress);
      const targetAngle = totalRotationDegrees * easingFactor;
      const deltaAngle = targetAngle - currentAngle;
      currentAngle = targetAngle;

      this.startAngle = (this.startAngle + (deltaAngle * Math.PI) / 180) % (2 * Math.PI);
      this.drawWheel();

      if (progress < 1) {
        requestAnimationFrame(animateSpin);
      } else {
        this.isSpinning = false;
        this.determineSelectedValue(this.startAngle);
      }
    };

    requestAnimationFrame(animateSpin);
  }

  determineSelectedValue(finalAngle: number): void {
    const numValues = this.values.length;
    const segmentAngle = (2 * Math.PI) / numValues;
    const normalizedAngle = (2 * Math.PI - (finalAngle % (2 * Math.PI))) % (2 * Math.PI);
    const selectedIndex = Math.floor(normalizedAngle / segmentAngle) % numValues;
    this.selectedValue = this.values[selectedIndex];

    // Record in history
    this.history.unshift(this.selectedValue);
    if (this.history.length > 8) {
      this.history.pop();
    }

    const dialogData = new DialogData();
    dialogData.title = 'The Chosen Winner!';
    dialogData.message = this.selectedValue;
    this.dialog.open(DialogComponent, {
      data: dialogData
    });
  }
}
