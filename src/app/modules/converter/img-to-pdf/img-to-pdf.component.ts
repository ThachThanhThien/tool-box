import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import jsPDF from 'jspdf';
import { PageHeaderComponent } from '../../../shared/components/page-header/page-header.component';
import { FileUploaderComponent } from '../../../shared/components/file-uploader/file-uploader.component';
import { DocPreviewComponent } from '../../../shared/components/doc-preview/doc-preview.component';

interface ImageItem {
  file: File;
  url: string;
}

@Component({
  selector: 'app-img-to-pdf',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatSnackBarModule,
    PageHeaderComponent,
    FileUploaderComponent,
    DocPreviewComponent
  ],
  templateUrl: './img-to-pdf.component.html',
  styleUrl: './img-to-pdf.component.scss'
})
export class ImgToPdfComponent {
  images: ImageItem[] = [];
  orientation: 'portrait' | 'landscape' = 'portrait';
  isGenerating = false;

  constructor(private snackBar: MatSnackBar) {}

  onFileSelected(event: any): void {
    const files: FileList = event.target.files;
    if (!files || files.length === 0) return;

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.images.push({ file, url: e.target.result });
      };
      reader.readAsDataURL(file);
    }
  }

  removeImage(index: number): void {
    this.images.splice(index, 1);
  }

  clearAll(): void {
    this.images = [];
  }

  async generatePDF(): Promise<void> {
    if (this.images.length === 0) return;
    this.isGenerating = true;

    try {
      const pdf = new jsPDF({
        orientation: this.orientation,
        unit: 'mm',
        format: 'a4'
      });

      const pageWidth = pdf.internal.pageSize.getWidth();
      const pageHeight = pdf.internal.pageSize.getHeight();

      for (let i = 0; i < this.images.length; i++) {
        if (i > 0) {
          pdf.addPage();
        }

        const imgData = this.images[i];
        const image = new Image();
        image.src = imgData.url;

        await new Promise<void>((resolve) => {
          image.onload = () => {
            const margin = 10;
            const maxWidth = pageWidth - (margin * 2);
            const maxHeight = pageHeight - (margin * 2);

            let renderWidth = maxWidth;
            let renderHeight = (image.height * maxWidth) / image.width;

            if (renderHeight > maxHeight) {
              renderHeight = maxHeight;
              renderWidth = (image.width * maxHeight) / image.height;
            }

            const x = (pageWidth - renderWidth) / 2;
            const y = (pageHeight - renderHeight) / 2;

            pdf.addImage(image.src, 'JPEG', x, y, renderWidth, renderHeight);
            resolve();
          };
        });
      }

      pdf.save(`compiled-document-${Date.now()}.pdf`);
      this.snackBar.open('PDF generated and downloaded successfully!', '', { duration: 2500 });
    } catch (e: any) {
      this.snackBar.open(`Failed to generate PDF: ${e.message}`, '', { duration: 3000 });
    } finally {
      this.isGenerating = false;
    }
  }
}
