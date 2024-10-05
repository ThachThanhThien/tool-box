import {Component, OnInit} from '@angular/core';
import {PageHeaderComponent} from "../../../shared/components/page-header/page-header.component";
import {MatFormField, MatSuffix} from "@angular/material/form-field";
import {MatIconButton} from "@angular/material/button";
import {MatInput} from "@angular/material/input";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-temperature',
  standalone: true,
  imports: [
    PageHeaderComponent,
    MatFormField,
    MatIconButton,
    MatInput,
    MatSuffix,
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './temperature.component.html',
  styleUrl: './temperature.component.scss'
})
export class TemperatureComponent implements OnInit {
  targetValue = [
    {
      label: 'Kelvin',
      value: 0,
      unit: 'K',
      convertToCelsiusFunc: (t: number) => t - 273.15,
      convertFromCelsiusFunc: (t: number) => t + 273.15
    },
    {label: 'Celsius', value: 37, unit: '°C', convertToCelsiusFunc: (t: number) => t, convertFromCelsiusFunc: (t: number) => t},
    {
      label: 'Fahrenheit',
      value: 0,
      unit: '°F',
      convertToCelsiusFunc: (t: number) => (t - 32) * 5 / 9,
      convertFromCelsiusFunc: (t: number) => t * 9 / 5 + 32
    },
    {
      label: 'Rankine',
      value: 0,
      unit: '°R',
      convertToCelsiusFunc: (t: number) => (t - 491.67) * 5 / 9,
      convertFromCelsiusFunc: (t: number) => (t + 273.15) * 9 / 5
    },
    {
      label: 'Newton',
      value: 0,
      unit: '°N',
      convertToCelsiusFunc: (t: number) => t * 100 / 33,
      convertFromCelsiusFunc: (t: number) => t * 33 / 100
    },
    {
      label: 'Rømer',
      value: 0,
      unit: '°Rø',
      convertToCelsiusFunc: (t: number) => (t - 7.5) * 40 / 21,
      convertFromCelsiusFunc: (t: number) => t * 21 / 40 + 7.5
    },
    {
      label: 'Réaumur',
      value: 0,
      unit: '°Ré',
      convertToCelsiusFunc: (t: number) => t * 5 / 4,
      convertFromCelsiusFunc: (t: number) => t * 4 / 5
    },
    {
      label: 'Delisle',
      value: 0,
      unit: '°De',
      convertToCelsiusFunc: (t: number) => 100 - t * 2 / 3,
      convertFromCelsiusFunc: (t: number) => (100 - t) * 3 / 2
    },
  ];

  ngOnInit() {
    this.onChangeTemperature(this.targetValue[1]);
  }

  onChangeTemperature(tem: any) {
    const celsiusDegree = tem.convertToCelsiusFunc(Number(tem.value));
    this.targetValue.forEach(item => {
      if (item.unit !== tem.unit) {
        item.value = item.convertFromCelsiusFunc(celsiusDegree);
      }
    })
  }

}
