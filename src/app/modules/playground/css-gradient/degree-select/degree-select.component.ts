import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-degree-select',
  standalone: true,
  imports: [],
  templateUrl: './degree-select.component.html',
  styleUrl: './degree-select.component.scss'
})
export class DegreeSelectComponent implements AfterViewInit {
  @ViewChild('degCircle') canvas: ElementRef<HTMLCanvasElement> | any;
  private ctx: CanvasRenderingContext2D | any;

  ngAfterViewInit() {
    this.draw();
  }

  draw(evt?: any) {
    if (!this.ctx) {
      this.ctx = this.canvas.nativeElement.getContext('2d')
    }
    this.ctx.beginPath();
    this.ctx.arc(100, 100, 40, 0, 2 * Math.PI);
    this.ctx.lineWidth = 4;
    this.ctx.strokeStyle = "blue";
    this.ctx.stroke();
    this.ctx.closePath()
if(evt) {
  this.ctx.beginPath();
  let mouseX = evt.clientX - 10;
  let mouseY = evt.clientY - 10;

  let rads = Math.atan2(mouseY - 100, mouseX - 100);
  let x = 100 * Math.cos(rads) + 100;
  let y = 100 * Math.sin(rads) + 100;
  this.ctx.arc(x, y, 20, 0, 100, false);
  this.ctx.fillStyle = "white";
  this.ctx.fill();
}

  }
}
