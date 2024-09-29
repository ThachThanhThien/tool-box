import { Component } from '@angular/core';
import { jwtDecode } from "jwt-decode";
import {PageHeaderComponent} from "../../../shared/components/page-header/page-header.component";
import {FormsModule} from "@angular/forms";
import {JsonPipe, NgForOf, NgIf} from "@angular/common";
import {MatFormField} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {size} from "lodash";
import {MatTooltip} from "@angular/material/tooltip";

const propsExplain: {[key: string]: string} = {
  alg: 'Signature or encryption algorithm',
  typ: 'Type of token',
  sub: 'Subject (whom the token refers to)',
  jti: 'JWT ID (unique identifier for this token)',
  iat: 'Issued at (seconds since Unix epoch)',
  nbf: 'Not valid before (seconds since Unix epoch)',
  exp: 'Expiration time (seconds since Unix epoch)',
  iss: 'Issuer (who created and signed this token)',
  aud: 'Audience (who or what the token is intended for)'
};

@Component({
  selector: 'app-jwt-decode',
  standalone: true,
  imports: [
    PageHeaderComponent,
    FormsModule,
    JsonPipe,
    NgIf,
    MatFormField,
    MatInput,
    NgForOf,
    MatTooltip
  ],
  templateUrl: './jwt-decode.component.html',
  styleUrl: './jwt-decode.component.scss'
})
export class JwtDecodeComponent {
  jwtToken: string = '';
  decodedToken: any[] = [];
  decodedHeader: any[] = [];
  errorMessage: string = '';
  protected readonly size = size;

  decodeToken() {
    try {
      const tokenParts = this.jwtToken.split('.');

      if (tokenParts.length !== 3) {
        throw new Error('Invalid JWT Token');
      }

      const header = atob(tokenParts[0]);
      this.decodedHeader = Object.entries(JSON.parse(header));
      this.decodedToken = Object.entries(jwtDecode(this.jwtToken));
      this.errorMessage = '';
    } catch (error) {
      this.errorMessage = 'Invalid JWT Token!';
      this.decodedToken = [];
      this.decodedHeader = [];
    }
  }

  getTooltipForJwtProps(key: string): string {
    return propsExplain[key] || '';
  }
}
