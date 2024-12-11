import {Component, HostListener} from '@angular/core';
import {PageHeaderComponent} from "../../../shared/components/page-header/page-header.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatFormField} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {get} from "lodash";

const KeyLocation = {
  0: 'Standard',
  1: 'Left',
  2: 'Right',
  3: 'Numeric Keypad'
};

@Component({
  selector: 'app-keycode',
  standalone: true,
  imports: [
    PageHeaderComponent,
    ReactiveFormsModule,
    MatFormField,
    MatInput,
    FormsModule
  ],
  templateUrl: './keycode.component.html',
  styleUrl: './keycode.component.scss'
})
export class KeycodeComponent {
  keyInfo: any = {};

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    this.keyInfo = event;
  }

  get keyInfoLocation(): string {
    return get(KeyLocation, this.keyInfo.location);
  }
}
