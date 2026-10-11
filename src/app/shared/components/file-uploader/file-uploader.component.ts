import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-file-uploader',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './file-uploader.component.html',
  styleUrl: './file-uploader.component.scss'
})
export class FileUploaderComponent {
  @Output() onFileUploaded: EventEmitter<any> = new EventEmitter();
  @Input() acceptFile = 'application/pdf';
  @Input() multiple = false;
  @Input() title = 'Upload or Drag & Drop File';
  @Input() description = 'Supports PDF and image formats';

  fileList: File[] = [];
  isDragging = false;

  onFileChosen(event: any): void {
    if (event.target?.files) {
      this.fileList = Array.from(event.target.files);
      this.onFileUploaded.emit(event);
    }
  }

  onDragOver(e: DragEvent): void {
    e.preventDefault();
    this.isDragging = true;
  }

  onDragLeave(e: DragEvent): void {
    e.preventDefault();
    this.isDragging = false;
  }

  onDrop(e: DragEvent): void {
    e.preventDefault();
    this.isDragging = false;
    if (e.dataTransfer?.files && e.dataTransfer.files.length > 0) {
      this.fileList = Array.from(e.dataTransfer.files);
      this.onFileUploaded.emit({ target: { files: e.dataTransfer.files } });
    }
  }

  formatSize(bytes: number): string {
    if (bytes < 1024) return bytes + ' B';
    const kb = bytes / 1024;
    if (kb < 1024) return kb.toFixed(1) + ' KB';
    return (kb / 1024).toFixed(1) + ' MB';
  }
}
