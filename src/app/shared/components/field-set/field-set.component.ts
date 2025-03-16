import {Component, ContentChild, ElementRef, Input, TemplateRef} from '@angular/core';
import {NgTemplateOutlet} from "@angular/common";
import {MatTooltip} from "@angular/material/tooltip";

@Component({
  selector: 'app-field-set',
  standalone: true,
  imports: [
    NgTemplateOutlet,
    MatTooltip,
  ],
  templateUrl: './field-set.component.html',
  styleUrl: './field-set.component.scss'
})
export class FieldSetComponent {
  @Input() legend = '';
  @Input() legendTooltip = '';
  @ContentChild('content') content!: TemplateRef<any>;
}
