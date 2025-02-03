import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import {FormsModule} from "@angular/forms";


@Component({
  selector: 'app-js-playground',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './js-playground.component.html',
  styleUrl: './js-playground.component.scss'
})
export class JsPlaygroundComponent {

}
