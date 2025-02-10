import { Component } from '@angular/core';
import {MatFormField, MatSuffix} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {PageHeaderComponent} from "../../../shared/components/page-header/page-header.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ColorPaletteComponent} from "../../web-tool/color-picker/color-palette/color-palette.component";
import {ColorSliderComponent} from "../../web-tool/color-picker/color-slider/color-slider.component";
import {FieldSetComponent} from "../../../shared/components/field-set/field-set.component";
import {MatButtonToggle, MatButtonToggleGroup} from "@angular/material/button-toggle";
import {NgClass, NgIf} from "@angular/common";
import {MatIconButton} from "@angular/material/button";
import {CodeSnippetComponent} from "../../../shared/components/code-snippet/code-snippet.component";

@Component({
  selector: 'app-css-gradient',
  standalone: true,
  imports: [
    MatFormField,
    MatInput,
    PageHeaderComponent,
    ReactiveFormsModule,
    ColorPaletteComponent,
    ColorSliderComponent,
    FieldSetComponent,
    MatButtonToggleGroup,
    MatButtonToggle,
    FormsModule,
    NgClass,
    MatIconButton,
    MatSuffix,
    CodeSnippetComponent,
    NgIf
  ],
  templateUrl: './css-gradient.component.html',
  styleUrl: './css-gradient.component.scss'
})
export class CssGradientComponent {
  hue = '';
  rgbValue = '';
  hexValue = '';
  colorStops = [
    {color: '#bf1660', stop: 0},
    {color: '#0078ff', stop: 100}
  ];
  currentColorIndex = 0;
  gradientStyle = '';
  angle = 90;
  gradientModes = [
    {name: 'Linear', value: 'linear'},
    {name: 'Radial', value: 'radial'},
  ];
  selectedMode = 'linear'

  onSelectColor(rgbValue: string[]) {
    this.rgbValue = rgbValue.join(', ');
    this.hexValue = this.rgbToHex(rgbValue);
    this.colorStops[this.currentColorIndex].color = this.hexValue;
    this.updateGradient();
  }

  rgbToHex(rgb: any[]) {
    const [r, g, b] = rgb.map(item => parseInt(item));
    return '#' + ((r << 16) + (g << 8) + b).toString(16).padStart(6, '0');
  }

  updateGradient() {
    const gradientStops = this.colorStops
      .map((co) => `${co.color} ${co.stop}%`)
      .join(', ');

    if (this.selectedMode === 'linear') {
      this.gradientStyle = `linear-gradient(${this.angle}deg, ${gradientStops})`;
      return;
    }
    this.gradientStyle = `radial-gradient(circle, ${gradientStops})`;
  }

  removeColor(index: number) {
    if (this.colorStops.length < 3) {
      return;
    }
    this.colorStops.splice(index, 1);
    this.currentColorIndex = 0;
  }

  onColorStopChanged(color: any) {
    if (color.stop < 0) {
      color.stop = 0;
    }
    if (color.stop > 100) {
      color.stop = 100;
    }
    this.colorStops.sort((a, b) => a.stop - b.stop);
    this.updateGradient()
  }

  get gradientCode() {
    return `background: ${this.gradientStyle}`;
  }

  addColorStop() {
    this.colorStops.push({color: '#'+(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0'), stop: 0})
  }
}
