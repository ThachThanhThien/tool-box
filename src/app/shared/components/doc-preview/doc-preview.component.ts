import {Component, inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogModule} from "@angular/material/dialog";
import {MatButton} from "@angular/material/button";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-doc-preview',
  standalone: true,
  template: '',
  imports: [
  ],
})
export class DocPreviewComponent {
  readonly dialog = inject(MatDialog);

  show(doc: any) {
    this.dialog.open(DocPreviewContentComponent, {data: doc});
  }
}

@Component({
  templateUrl: 'doc-preview-content.component.html',
  imports: [MatDialogModule, MatButton],
  standalone: true
})
export class DocPreviewContentComponent {
  doc = inject(MAT_DIALOG_DATA)

  constructor(private sanitizer: DomSanitizer) {}

  downloadDoc() {
    const downloadLink = document.createElement('a');
    downloadLink.href = this.doc;
    downloadLink.download = 'image';
    downloadLink.click();
  }
}
