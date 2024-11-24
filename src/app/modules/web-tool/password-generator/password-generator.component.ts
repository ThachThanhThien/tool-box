import {Component, OnInit} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {MatFormField, MatSuffix} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {PageHeaderComponent} from "../../../shared/components/page-header/page-header.component";
import {MatSlider, MatSliderThumb} from "@angular/material/slider";
import {MatIconButton} from "@angular/material/button";
import {MatCheckbox} from "@angular/material/checkbox";
import {AppBaseComponent} from "../../../shared/components/app-base/app-base.component";
import {NgStyle} from "@angular/common";

const upperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowerCaseChars = 'abcdefghijklmnopqrstuvwxyz';
const numbers = '0123456789';
const specialChars = "!@#$%^&*()_+{}[];:<>,./?~-=";
const passStrengthMeter = {
  veryWeak: {
    name: 'Very Weak',
    color: '#f62626',
    icon: '',
  },
  weak: {
    name: 'Weak',
    color: '#dc6916',
    icon: '',
  },
  good: {
    name: 'Good',
    color: '#f8d005',
    icon: '',
  },
  strong: {
    name: 'Strong',
    color: '#32dd82',
    icon: '',
  },
  veryStrong: {
    name: 'Very Strong',
    color: '#3bef05',
    icon: '',
  },
}

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
    MatCheckbox,
    NgStyle
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
  passStrength: any = {};

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
    this.passStrength = this.calculatePasswordEntropy(this.password);
  }

  calculatePasswordEntropy(password: string): any {
    let charSetSize = 0;

    // Determine character set size
    if (/[a-z]/.test(password)) charSetSize += 26; // Lowercase
    if (/[A-Z]/.test(password)) charSetSize += 26; // Uppercase
    if (/[0-9]/.test(password)) charSetSize += 10; // Numbers
    if (/[@#$%^&*!()_+|~=`{}\[\]:";'<>?,.\/\\]/.test(password)) charSetSize += 32; // Special characters
    if (/[\u0080-\uFFFF]/.test(password)) charSetSize += 100; // Non-ASCII characters (approximation)

    // Calculate entropy
    const entropy = password.length * Math.log2(charSetSize);

    if (entropy < 28) return passStrengthMeter.veryWeak;
    if (entropy < 36) return passStrengthMeter.weak;
    if (entropy < 60) return passStrengthMeter.good;
    if (entropy < 128) return passStrengthMeter.strong;
    return passStrengthMeter.veryStrong;
  }
}
