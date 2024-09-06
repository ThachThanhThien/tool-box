import { Component } from '@angular/core';
import {PageHeaderComponent} from "../../../shared/components/page-header/page-header.component";
import {ZXingScannerModule} from "@zxing/ngx-scanner";
import jsQR from "jsqr";
import {MatIconButton} from "@angular/material/button";
import {MatFormField, MatSuffix} from "@angular/material/form-field";
import {AppBaseComponent} from "../../../shared/components/app-base/app-base.component";
import {MatInput} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-qr-scanner',
  standalone: true,
  imports: [
    PageHeaderComponent,
    ZXingScannerModule,
    MatIconButton,
    MatSuffix,
    MatFormField,
    MatInput,
    ReactiveFormsModule
  ],
  templateUrl: './qr-scanner.component.html',
  styleUrl: './qr-scanner.component.scss'
})
export class QrScannerComponent extends AppBaseComponent {
  cameraEnabled = false;
  scannedContent: string | null = null;

  // Toggle the camera on or off
  toggleCamera(): void {
    this.cameraEnabled = !this.cameraEnabled;
  }

  // Handle scanning success from camera
  onCodeScanned(result: string): void {
    this.scannedContent = result;
  }

  // Handle file selection and scan for QR code
  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const imageData = e.target?.result as string;
        this.scanQrFromImage(imageData);
      };
      reader.readAsDataURL(file);
    }
  }

  // Decode the QR code from an image
  scanQrFromImage(imageData: string): void {
    const img = new Image();
    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = img.width;
      canvas.height = img.height;
      const context = canvas.getContext('2d');

      if (context) {
        context.drawImage(img, 0, 0);
        const imageData = context.getImageData(0, 0, img.width, img.height);
        const code = jsQR(imageData.data, imageData.width, imageData.height);

        if (code) {
          this.scannedContent = code.data;
        } else {
          this.scannedContent = 'No QR code found in the image.';
        }
      }
    };
    img.src = imageData;
  }

}
