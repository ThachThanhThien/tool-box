import {ChangeDetectorRef, Component, ViewChild} from '@angular/core';
import {QRCodeModule} from "angularx-qrcode";
import {FormsModule} from "@angular/forms";
import {MatSlider, MatSliderThumb} from "@angular/material/slider";
import {MatIcon} from "@angular/material/icon";
import {MatButton} from "@angular/material/button";
import {MatFormField} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {PageHeaderComponent} from "../../../shared/components/page-header/page-header.component";

@Component({
  selector: 'app-qr-generator',
  standalone: true,
    imports: [
        QRCodeModule,
        FormsModule,
        MatSlider,
        MatSliderThumb,
        MatIcon,
        MatButton,
        MatFormField,
        MatInput,
        PageHeaderComponent,
    ],
  templateUrl: './qr-generator.component.html',
  styleUrl: './qr-generator.component.scss'
})
export class QrGeneratorComponent {
  value = '';
  colorDark = '#000000';
  colorLight = '#ffffff';
  qrSize = 50;
  @ViewChild('qrcode') qrcode: any;

  constructor(private cdr: ChangeDetectorRef) {
  }

  downloadQrCodeImage() {
    this.cdr.detectChanges();
    const parentElement = this.qrcode.qrcElement.nativeElement.querySelector("canvas");
    const link = document.createElement("a");
    link.download = "Qrcode.jpg";
    link.href = parentElement.toDataURL();
    link.click();
  }
}
