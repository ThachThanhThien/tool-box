import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZXingScannerModule } from '@zxing/ngx-scanner';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import jsQR from 'jsqr';
import { PageHeaderComponent } from '../../../shared/components/page-header/page-header.component';
import { copyToClipboard } from '../../../shared/Helper';

@Component({
  selector: 'app-qr-scanner',
  standalone: true,
  imports: [
    CommonModule,
    ZXingScannerModule,
    MatSnackBarModule,
    PageHeaderComponent
  ],
  templateUrl: './qr-scanner.component.html',
  styleUrl: './qr-scanner.component.scss'
})
export class QrScannerComponent {
  scanMode: 'file' | 'camera' = 'file';
  cameraEnabled = false;
  scannedContent: string | null = null;
  uploadedImageUrl: string | null = null;
  isDragging = false;
  scanHistory: string[] = [];

  constructor(private snackBar: MatSnackBar) {}

  setMode(mode: 'file' | 'camera'): void {
    this.scanMode = mode;
    if (mode === 'file' && this.cameraEnabled) {
      this.cameraEnabled = false;
    }
  }

  toggleCamera(): void {
    this.cameraEnabled = !this.cameraEnabled;
  }

  onCodeScanned(result: string): void {
    if (result && result !== this.scannedContent) {
      this.handleResult(result);
      this.snackBar.open('QR code detected successfully!', '', { duration: 2000 });
    }
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];
    if (file) {
      this.processImageFile(file);
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
    const file = e.dataTransfer?.files?.[0];
    if (file && file.type.startsWith('image/')) {
      this.processImageFile(file);
    } else {
      this.snackBar.open('Please drop an image file (PNG, JPG, etc.)', '', { duration: 2000 });
    }
  }

  private processImageFile(file: File): void {
    const reader = new FileReader();
    reader.onload = (e) => {
      const dataUrl = e.target?.result as string;
      this.uploadedImageUrl = dataUrl;
      this.scanFromImageDataUrl(dataUrl);
    };
    reader.readAsDataURL(file);
  }

  private scanFromImageDataUrl(dataUrl: string): void {
    const img = new Image();
    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.drawImage(img, 0, 0);
        const imageData = ctx.getImageData(0, 0, img.width, img.height);
        const code = jsQR(imageData.data, imageData.width, imageData.height);

        if (code) {
          this.handleResult(code.data);
          this.snackBar.open('QR code detected from image!', '', { duration: 2000 });
        } else {
          this.scannedContent = null;
          this.snackBar.open('No QR code could be found in the image. Try another image.', '', { duration: 3000 });
        }
      }
    };
    img.src = dataUrl;
  }

  private handleResult(content: string): void {
    this.scannedContent = content;
    if (!this.scanHistory.includes(content)) {
      this.scanHistory = [content, ...this.scanHistory].slice(0, 5);
    }
  }

  isUrl(text: string | null): boolean {
    if (!text) return false;
    return /^https?:\/\//i.test(text.trim());
  }

  openUrl(url: string | null): void {
    if (url && this.isUrl(url)) {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  }

  copyContent(): void {
    if (!this.scannedContent) return;
    copyToClipboard(this.scannedContent);
    this.snackBar.open('Copied scanned content to clipboard', '', { duration: 2000 });
  }

  clear(): void {
    this.scannedContent = null;
    this.uploadedImageUrl = null;
  }
}
