import {Component, EventEmitter, Output} from '@angular/core';
import {JsonPipe} from "@angular/common";

@Component({
  selector: 'app-file-uploader',
  standalone: true,
  imports: [
    JsonPipe
  ],
  templateUrl: './file-uploader.component.html',
  styleUrl: './file-uploader.component.scss'
})
export class FileUploaderComponent {
  @Output() onFileUploaded: EventEmitter<any> = new EventEmitter();
  fileList: any[] = [];

  onFileChosen(event: any) {
    this.fileList = event.target?.files;
    this.onFileUploaded.emit(event)
  }
}
