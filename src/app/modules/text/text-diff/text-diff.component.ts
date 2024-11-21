import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";


@Component({
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './text-diff.component.html',
  styleUrl: './text-diff.component.scss'
})
export class TextDiffComponent {

}
