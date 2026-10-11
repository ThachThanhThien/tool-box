import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { QRCodeModule } from 'angularx-qrcode';
import { MatSliderModule } from '@angular/material/slider';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { PageHeaderComponent } from '../../../shared/components/page-header/page-header.component';
import { copyToClipboard } from '../../../shared/Helper';

@Component({
  selector: 'app-qr-generator',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    QRCodeModule,
    MatSliderModule,
    MatSnackBarModule,
    PageHeaderComponent
  ],
  templateUrl: './qr-generator.component.html',
  styleUrl: './qr-generator.component.scss'
})
export class QrGeneratorComponent implements OnInit {
  presetType: 'url' | 'text' | 'wifi' | 'email' | 'phone' = 'url';

  // Common or specific fields
  value = 'https://toolhub.studio';
  urlInput = 'https://toolhub.studio';
  textInput = '';
  wifiSsid = 'MyHomeNetwork';
  wifiPassword = 'SecurePassword123';
  wifiEncryption: 'WPA' | 'WEP' | 'nopass' = 'WPA';
  emailAddress = 'support@toolhub.studio';
  emailSubject = 'General Inquiry';
  phoneNumber = '+1-555-0199';

  colorDark = '#090d16';
  colorLight = '#ffffff';
  qrSize = 220;
  errorCorrectionLevel: 'L' | 'M' | 'Q' | 'H' = 'M';

  @ViewChild('qrcode', { read: ElementRef }) qrcodeRef?: ElementRef;

  constructor(private snackBar: MatSnackBar) {}

  ngOnInit(): void {
    this.updateQrData();
  }

  setPreset(type: 'url' | 'text' | 'wifi' | 'email' | 'phone'): void {
    this.presetType = type;
    this.updateQrData();
  }

  updateQrData(): void {
    if (this.presetType === 'url') {
      this.value = this.urlInput || 'https://';
    } else if (this.presetType === 'text') {
      this.value = this.textInput || 'Hello World';
    } else if (this.presetType === 'wifi') {
      this.value = `WIFI:S:${this.wifiSsid};T:${this.wifiEncryption};P:${this.wifiPassword};;`;
    } else if (this.presetType === 'email') {
      this.value = `mailto:${this.emailAddress}?subject=${encodeURIComponent(this.emailSubject)}`;
    } else if (this.presetType === 'phone') {
      this.value = `tel:${this.phoneNumber}`;
    }
  }

  downloadPng(): void {
    try {
      const container = this.qrcodeRef?.nativeElement;
      const canvas = container?.querySelector('canvas');
      if (canvas) {
        const link = document.createElement('a');
        link.download = `QRCode-${Date.now()}.png`;
        link.href = canvas.toDataURL('image/png');
        link.click();
        this.snackBar.open('Downloaded QR Code as PNG', '', { duration: 2000 });
      } else {
        this.snackBar.open('Unable to export canvas image', '', { duration: 2000 });
      }
    } catch (e: any) {
      this.snackBar.open(`Export failed: ${e.message}`, '', { duration: 2000 });
    }
  }

  copyContent(): void {
    copyToClipboard(this.value);
    this.snackBar.open('Copied QR raw payload to clipboard', '', { duration: 2000 });
  }
}
