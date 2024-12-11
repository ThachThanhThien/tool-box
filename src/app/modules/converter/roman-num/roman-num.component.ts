import { Component } from '@angular/core';
import {MatFormField} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {PageHeaderComponent} from "../../../shared/components/page-header/page-header.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-roman-num',
  standalone: true,
  imports: [
    MatFormField,
    MatInput,
    PageHeaderComponent,
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './roman-num.component.html',
  styleUrl: './roman-num.component.scss'
})
export class RomanNumComponent {
  romanNum: any;
  intNum: any;

  romanToInt() {
    const romanMap: { [key: string]: number } = {
      I: 1,
      V: 5,
      X: 10,
      L: 50,
      C: 100,
      D: 500,
      M: 1000,
    };

    let total = 0;
    for (let i = 0; i < this.romanNum.length; i++) {
      const current = romanMap[this.romanNum[i]];
      const next = romanMap[this.romanNum[i + 1]];

      if (next && current < next) {
        total -= current;
      } else {
        total += current;
      }
    }
    this.intNum = total;
  }

  intToRoman() {
    let num = parseInt(this.intNum);
    const values = [
      1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1
    ];
    const symbols = [
      "M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"
    ];

    let result = "";
    for (let i = 0; i < values.length && num > 0; i++) {
      while (num >= values[i]) {
        num -= values[i];
        result += symbols[i];
      }
    }
    this.romanNum = result;
  }
}
