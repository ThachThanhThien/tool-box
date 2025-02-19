import { Component } from '@angular/core';
import {PageHeaderComponent} from "../../../shared/components/page-header/page-header.component";
import * as pdfjsLib from 'pdfjs-dist';
import {NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-pdf-to-img',
  standalone: true,
  imports: [
    PageHeaderComponent,
    NgIf,
    NgForOf
  ],
  templateUrl: './pdf-to-img.component.html',
  styleUrl: './pdf-to-img.component.scss'
})
export class PdfToImgComponent {
  images: string[] = [];

  async onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      const fileReader = new FileReader();
      fileReader.readAsArrayBuffer(file);
      fileReader.onload = async () => {
        if (fileReader.result) {
          await this.convertPdfToImages(fileReader.result as ArrayBuffer);
        }
      };
    }
  }

  async convertPdfToImages(pdfData: ArrayBuffer) {
    pdfjsLib.GlobalWorkerOptions.workerSrc =
      `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.16.105/pdf.worker.min.js`;

    const pdf = await pdfjsLib.getDocument({ data: pdfData }).promise;
    this.images = [];

    for (let i = 1; i <= pdf.numPages; i++) {
      const page = await pdf.getPage(i);
      const canvas = document.createElement('canvas');
      const context = canvas.getContext('2d');

      const viewport = page.getViewport({ scale: 2 }); // Scale for better quality
      canvas.width = viewport.width;
      canvas.height = viewport.height;

      if (context) {
        await page.render({ canvasContext: context, viewport }).promise;
        this.images.push(canvas.toDataURL('image/png')); // Convert to base64 image
      }
    }
  }

}
