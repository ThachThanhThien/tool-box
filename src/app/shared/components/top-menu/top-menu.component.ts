import {Component, EventEmitter, Output} from '@angular/core';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-top-menu',
  standalone: true,
  imports: [
    FormsModule,
  ],
  templateUrl: './top-menu.component.html',
  styleUrl: './top-menu.component.scss'
})
export class TopMenuComponent {
  @Output() showSearchResult = new EventEmitter();
}
