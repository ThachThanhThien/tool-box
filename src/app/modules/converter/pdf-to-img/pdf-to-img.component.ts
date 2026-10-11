import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as pdfjsLib from 'pdfjs-dist';
import { PageHeaderComponent } from '../../../shared/components/page-header/page-header.component';
import { FileUploaderComponent } from '../../../shared/components/file-uploader/file-uploader.component';
import { DocPreviewComponent } from '../../../shared/components/doc-preview/doc-preview.component';

@Component({
  selector: 'app-pdf-to-img',
  standalone: true,
  imports: [
    CommonModule,
    PageHeaderComponent,
    FileUploaderComponent,
    DocPreviewComponent
  ],
  templateUrl: './pdf-to-img.component.html',
  styleUrl: './pdf-to-img.component.scss'
})
export class PdfToImgComponent {
  images: string[] = [];
  isLoading = false;
  progressText = '';

  async onFileSelected(event: any): Promise<void> {
    const file = event.target.files?.[0];
    if (file) {
      this.isLoading = true;
      this.progressText = 'Loading PDF document...';
      const fileReader = new FileReader();
      fileReader.readAsArrayBuffer(file);
      fileReader.onload = async () => {
        if (fileReader.result) {
          try {
            await this.convertPdfToImages(fileReader.result as ArrayBuffer);
          } finally {
            this.isLoading = false;
          }
        }
      };
    }
  }

  async convertPdfToImages(pdfData: ArrayBuffer): Promise<void> {
    pdfjsLib.GlobalWorkerOptions.workerSrc =
      `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.16.105/pdf.worker.min.js`;

    const pdf = await pdfjsLib.getDocument({ data: pdfData }).promise;
    this.images = [];

    for (let i = 1; i <= pdf.numPages; i++) {
      this.progressText = `Rendering page ${i} of ${pdf.numPages}...`;
      const page = await pdf.getPage(i);
      const canvas = document.createElement('canvas');
      const context = canvas.getContext('2d');

      const viewport = page.getViewport({ scale: 2 });
      canvas.width = viewport.width;
      canvas.height = viewport.height;

      if (context) {
        await page.render({ canvasContext: context, viewport }).promise;
        this.images.push(canvas.toDataURL('image/png'));
      }
    }
  }

  downloadImage(imgUrl: string, index: number): void {
    const link = document.createElement('a');
    link.download = `page-${index + 1}.png`;
    link.href = imgUrl;
    link.click();
  }
}
