import { Component } from '@angular/core';
import {PageHeaderComponent} from "../../../shared/components/page-header/page-header.component";
import {
  NgxScannerQrcodeModule,
  NgxScannerQrcodeService,
  ScannerQRCodeConfig,
  ScannerQRCodeSelectedFiles
} from "ngx-scanner-qrcode";

@Component({
  selector: 'app-qr-scanner',
  standalone: true,
  imports: [
    PageHeaderComponent,
    NgxScannerQrcodeModule
  ],
  templateUrl: './qr-scanner.component.html',
  styleUrl: './qr-scanner.component.scss'
})
export class QrScannerComponent {
  public percentage = 80;
  public quality = 100;
  public qrCodeResult: ScannerQRCodeSelectedFiles[] = [];
  public config: ScannerQRCodeConfig = {
    isBeep: false,
    constraints: {
      video: {
        width: window.innerWidth
      },
    },
  };
  constructor(private qrcode: NgxScannerQrcodeService) {
  }

  openCamera(action: any, fn: string) {
    const playDeviceFacingBack = (devices: any[]) => {
      // front camera or back camera check here!
      const device = devices.find(f => (/back|rear|environment/gi.test(f.label))); // Default Back Facing Camera
      action.playDevice(device ? device.deviceId : devices[0].deviceId);
    }

    if (fn === 'start') {
      action[fn](playDeviceFacingBack).subscribe((r: any) => console.log(fn, r), alert);
    } else {
      action[fn]().subscribe((r: any) => console.log(fn, r), alert);
    }
  }

  public onSelects(files: any) {
    this.qrcode.loadFiles(files, this.percentage, this.quality).subscribe((res: ScannerQRCodeSelectedFiles[]) => {
      this.qrCodeResult = res;
    });
  }
}
