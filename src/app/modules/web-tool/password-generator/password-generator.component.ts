import {Component, OnInit} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {MatFormField, MatSuffix} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {PageHeaderComponent} from "../../../shared/components/page-header/page-header.component";
import {MatSlider, MatSliderThumb} from "@angular/material/slider";
import {MatIconButton} from "@angular/material/button";
import {MatCheckbox} from "@angular/material/checkbox";
import {copyToClipboard} from "../../../shared/Helper";
import {AppBaseComponent} from "../../../shared/components/app-base/app-base.component";

const upperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowerCaseChars = 'abcdefghijklmnopqrstuvwxyz';
const numbers = '0123456789';
const specialChars = "!@#$%^&*()_+{}[];:<>,./?~-=";

@Component({
  selector: 'app-password-generator',
  standalone: true,
  imports: [
    FormsModule,
    MatFormField,
    MatInput,
    PageHeaderComponent,
    MatSlider,
    MatSliderThumb,
    MatIconButton,
    MatSuffix,
    MatCheckbox
  ],
  templateUrl: './password-generator.component.html',
  styleUrl: './password-generator.component.scss'
})
export class PasswordGeneratorComponent extends AppBaseComponent implements OnInit {
  password = '';
  passwordLength = 9;
  hasUppercase = true;
  hasLowerCase = true;
  hasNumber = true;
  hasSpecialChar = false;

  ngOnInit() {
    this.generatePassword();
  }

  generatePassword() {
    let characterPool = "";

    if (this.hasUppercase) characterPool += upperCaseChars;
    if (this.hasLowerCase) characterPool += lowerCaseChars;
    if (this.hasNumber) characterPool += numbers;
    if (this.hasSpecialChar) characterPool += specialChars;
    this.password = '';

    if (!characterPool) {
      return;
    }

    for (let i = 0; i < this.passwordLength; i++) {
      const randomIndex = Math.floor(Math.random() * characterPool.length);
      this.password += characterPool[randomIndex];
    }
  }
}
