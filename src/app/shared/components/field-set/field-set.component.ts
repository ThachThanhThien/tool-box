import {Component, ContentChild, ElementRef, Input, TemplateRef} from '@angular/core';
import {NgTemplateOutlet} from "@angular/common";

@Component({
  selector: 'app-field-set',
  standalone: true,
  imports: [
    NgTemplateOutlet,
  ],
  templateUrl: './field-set.component.html',
  styleUrl: './field-set.component.scss'
})
export class FieldSetComponent {
  @Input() legend = '';
  @ContentChild('content') content!: TemplateRef<any>;
}
