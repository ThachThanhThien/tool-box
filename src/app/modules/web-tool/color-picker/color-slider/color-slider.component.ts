import {AfterViewInit, Component, ElementRef, EventEmitter, HostListener, Output, ViewChild} from '@angular/core';
import {randomInRange} from "../../../../shared/Helper";

@Component({
  selector: 'app-color-slider',
  standalone: true,
  imports: [],
  templateUrl: './color-slider.component.html',
  styleUrl: './color-slider.component.scss'
})
export class ColorSliderComponent implements AfterViewInit {
  @ViewChild('canvas') canvas: ElementRef<HTMLCanvasElement> | any;
  @Output() color: EventEmitter<string> = new EventEmitter()
  private ctx: CanvasRenderingContext2D | any;
  private mousedown: boolean = false
  private selectedWidth = 10;
  width = 400;
  height = 100;
  selectedCircleRadius = 13;
  defaultPositionX = randomInRange(0, this.width);
  defaultPositionY = 40

  ngAfterViewInit() {
    this.selectedWidth = this.defaultPositionX;
    this.draw();
    this.emitColor(this.defaultPositionX, this.defaultPositionY)
  }

  draw() {
    if (!this.ctx) {
      this.ctx = this.canvas.nativeElement.getContext('2d')
    }
    const width = this.width
    const height = this.height

    this.ctx.clearRect(0, 0, width, height)

    const gradient = this.ctx.createLinearGradient(0, 0, width, 0)
    gradient.addColorStop(0, 'rgba(255, 0, 0, 1)')
    gradient.addColorStop(0.17, 'rgba(255, 255, 0, 1)')
    gradient.addColorStop(0.34, 'rgba(0, 255, 0, 1)')
    gradient.addColorStop(0.51, 'rgba(0, 255, 255, 1)')
    gradient.addColorStop(0.68, 'rgba(0, 0, 255, 1)')
    gradient.addColorStop(0.85, 'rgba(255, 0, 255, 1)')
    gradient.addColorStop(1, 'rgba(255, 0, 0, 1)')

    // draw the color slider background
    this.ctx.beginPath()
    this.ctx.roundRect(this.selectedCircleRadius, height / 2 - this.selectedCircleRadius, width - 2 * this.selectedCircleRadius, this.selectedCircleRadius, 8)
    this.ctx.fillStyle = gradient
    this.ctx.fill()
    this.ctx.closePath()

    // draw the color slider
    if (this.selectedWidth) {
      this.ctx.beginPath()
      this.ctx.lineWidth = 2
      this.ctx.arc(
        this.selectedWidth + 5,
        height / 2 - this.selectedCircleRadius / 2,
        this.selectedCircleRadius,
        0,
        2 * Math.PI
      )
      this.ctx.fill()
      this.ctx.strokeStyle = 'white'
      this.ctx.stroke()
      this.ctx.closePath()
    }
  }

  @HostListener('window:mouseup', ['$event'])
  onMouseUp(evt: MouseEvent) {
    this.mousedown = false
  }

  onMouseDown(evt: MouseEvent) {
    this.mousedown = true
    this.selectedWidth = evt.offsetX;
    this.modifySelectedWidth();
    this.draw()
    this.emitColor(evt.offsetX, evt.offsetY)
  }

  onMouseMove(evt: MouseEvent) {
    if (this.mousedown) {
      this.selectedWidth = evt.offsetX;
      this.modifySelectedWidth();
      this.draw();
      this.emitColor(evt.offsetX, evt.offsetY)
    }
  }

  emitColor(x: number, y: number) {
    const rgbaColor = this.getColorAtPosition(x, 40)
    this.color.emit(rgbaColor)
  }

  getColorAtPosition(x: number, y: number) {
    try {
      if (x > this.width - this.selectedCircleRadius) {
        x = this.width - this.selectedCircleRadius;
      }
      if (x < this.selectedCircleRadius) {
        x = this.selectedCircleRadius;
      }
      const imageData = this.ctx.getImageData(x, y, 1, 1).data;
      return 'rgba(' + imageData[0] + ',' + imageData[1] + ',' + imageData[2] + ',1)';
    } catch (e){
      throw e;
    }
  }

  modifySelectedWidth() {
    if (this.selectedWidth > this.width - 2 * this.selectedCircleRadius) {
      this.selectedWidth = this.width - 2 * this.selectedCircleRadius
    }
    if (this.selectedWidth < this.selectedCircleRadius) {
      this.selectedWidth = this.selectedCircleRadius
    }
  }
}
