import {Component, ElementRef, ViewChild} from '@angular/core';
import {NgForOf} from "@angular/common";
import jsPDF from 'jspdf';

@Component({
  selector: 'app-img-to-pdf',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './img-to-pdf.component.html',
  styleUrl: './img-to-pdf.component.scss'
})
export class ImgToPdfComponent {
  images: { file: File, url: string }[] = [];

  // Handle file selection
  onFileSelected(event: any) {
    const files: FileList = event.target.files;
    this.images = [];

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const reader = new FileReader();

      reader.onload = (e: any) => {
        this.images.push({ file, url: e.target.result });
      };
      reader.readAsDataURL(file);
    }
  }

  // Generate PDF with jsPDF
  async generatePDF() {
    const pdf = new jsPDF({
      orientation: 'portrait', // or 'landscape'
      unit: 'mm',
      format: 'a4'
    });

    let yOffset = 10; // Initial vertical position

    for (const img of this.images) {
      const image = new Image();
      image.src = img.url;

      await new Promise<void>((resolve) => {
        image.onload = () => {
          const pageWidth = pdf.internal.pageSize.getWidth();
          const pageHeight = pdf.internal.pageSize.getHeight();

          // Calculate new width & height to fit A4 page
          let imgWidth = pageWidth - 20; // Keep margins
          let imgHeight = (image.height * imgWidth) / image.width;

          if (imgHeight > pageHeight - 20) {
            imgHeight = pageHeight - 20;
            imgWidth = (image.width * imgHeight) / image.height;
          }

          // If not enough space, add a new page
          if (yOffset + imgHeight > pageHeight) {
            pdf.addPage();
            yOffset = 10;
          }

          pdf.addImage(image.src, 'JPEG', 10, yOffset, imgWidth, imgHeight);
          yOffset += imgHeight + 10; // Add spacing
          resolve();
        };
      });
    }

    pdf.save('images.pdf');
  }

}
