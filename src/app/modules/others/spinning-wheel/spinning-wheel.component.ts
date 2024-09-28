import {AfterViewInit, Component, ElementRef, inject, OnInit, ViewChild} from '@angular/core';
import {MatFormField} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {PageHeaderComponent} from "../../../shared/components/page-header/page-header.component";
import {MatDialog} from "@angular/material/dialog";
import {DialogComponent} from "../../../shared/components/dialog/dialog.component";
import {DialogData} from "../../../core/models/dialog-data";
import {size} from "lodash";

@Component({
  selector: 'app-spinning-wheel',
  standalone: true,
  imports: [
    MatFormField,
    MatInput,
    ReactiveFormsModule,
    FormsModule,
    PageHeaderComponent
  ],
  templateUrl: './spinning-wheel.component.html',
  styleUrl: './spinning-wheel.component.scss'
})
export class SpinningWheelComponent implements OnInit, AfterViewInit {
  @ViewChild('canvas') canvasRef!: ElementRef<HTMLCanvasElement>;
  values: string[] = [];
  selectedValue: string | null = null;
  inputValues = '';
  dialog = inject(MatDialog);
  private context!: CanvasRenderingContext2D;
  private startAngle = 0;
  private spinAngle = 0;
  private isSpinning = false;
  private colors = ['#3369e8', '#d50f25', '#eeb211', '#009925'];

  ngOnInit() {
    this.values = ['Anne', 'Ben', 'Camile', 'Dick'];
  }

  ngAfterViewInit(): void {
    this.context = this.canvasRef.nativeElement.getContext('2d')!;
    this.drawWheel();
  }

  onValuesChanged() {
    this.values = (this.inputValues.split(/\r?\n|\r|\n/g) || []).filter(item => item);
    this.drawWheel();
  }

  // Draw the spinning wheel on the canvas
  drawWheel(): void {
    const canvas = this.canvasRef.nativeElement;
    const ctx = this.context;
    const numValues = this.values.length;
    const arcSize = (2 * Math.PI) / numValues;
    const centerX = canvas.width / 2 - 2;
    const centerY = canvas.height / 2 - 2;
    const radius = canvas.width / 2 - 2;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    this.values.forEach((value, i) => {
      const startAngle = this.startAngle + i * arcSize;
      const endAngle = startAngle + arcSize;

      // Segment background color
      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.arc(centerX, centerY, radius, startAngle, endAngle);
      ctx.fillStyle = this.colors[i % 4];
      ctx.fill();
      ctx.stroke();

      // Text (the value)
      ctx.save();
      ctx.translate(centerX, centerY);
      ctx.rotate(startAngle + arcSize / 2);
      ctx.textAlign = 'right';
      ctx.fillStyle = '#fff';
      ctx.font = '16px Arial';
      ctx.fillText(value, radius - 10, 10);
      ctx.restore();
    });

    // Draw the static triangle on the right side of the wheel
    this.drawStaticTriangle();
  }

  // Spin the wheel with acceleration and deceleration
  spin(): void {
    if (this.isSpinning || !size(this.values)) return;

    this.isSpinning = true;
    const spinDuration = 5000; // Spin time in milliseconds
    const totalRotationDegrees = Math.random() * 360 + 360 * 10; // Total random degrees to spin (at least 10 full rotations)
    let currentAngle = 0;
    let startTime: number;

    // Ease-in and ease-out cubic function for smooth acceleration and deceleration
    const easeInOutCubic = (t: number) =>
      t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

    const animateSpin = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / spinDuration, 1); // Progress between 0 and 1

      // Apply ease-in-out effect for smoother acceleration and deceleration
      const easingFactor = easeInOutCubic(progress);
      const targetAngle = totalRotationDegrees * easingFactor;
      const deltaAngle = targetAngle - currentAngle;
      currentAngle = targetAngle;

      // Update the wheel angle
      this.startAngle = (this.startAngle + (deltaAngle * Math.PI) / 180) % (2 * Math.PI);
      this.drawWheel();

      // Continue the animation until the progress is 1 (completed)
      if (progress < 1) {
        requestAnimationFrame(animateSpin);
      } else {
        this.isSpinning = false;
        this.determineSelectedValue(this.startAngle);
      }
    };

    requestAnimationFrame(animateSpin);
  }

  // Draw a static triangle on the right side of the canvas
  drawStaticTriangle(): void {
    const canvas = this.canvasRef.nativeElement;
    const ctx = this.context;
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = canvas.width / 2;
    const triangleSize = 30; // Increased triangle size for visibility

    // Set the triangle position on the right edge of the wheel
    const triangleX = centerX + radius - 15; // Slightly inside the wheel edge
    const triangleY = centerY; // Vertically centered with the wheel

    // Draw the triangle pointing inward toward the center
    ctx.fillStyle = 'white'; // Make sure the color contrasts with the background
    ctx.beginPath();
    ctx.moveTo(triangleX, triangleY); // Tip of the triangle (inside the wheel)
    ctx.lineTo(triangleX + triangleSize, triangleY - triangleSize / 2); // Top right corner
    ctx.lineTo(triangleX + triangleSize, triangleY + triangleSize / 2); // Bottom right corner
    ctx.closePath();
    ctx.fill();
  }

  // Determine the selected value based on the final spin angle
  determineSelectedValue(finalAngle: number): void {
    const numValues = this.values.length;
    const segmentAngle = (2 * Math.PI) / numValues;
    const selectedIndex = Math.floor((2 * Math.PI - finalAngle) / segmentAngle) % numValues;
    this.selectedValue = this.values[selectedIndex];
    const dialogData = new DialogData();
    dialogData.title = 'Congratulation'
    dialogData.message = this.selectedValue;
    this.dialog.open(DialogComponent, {
      data: dialogData
    })
  }
}
