import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { jwtDecode } from 'jwt-decode';
import { PageHeaderComponent } from '../../../shared/components/page-header/page-header.component';
import { copyToClipboard } from '../../../shared/Helper';

interface ClaimItem {
  key: string;
  value: any;
  description: string;
  humanFormatted?: string;
}

const RFC_CLAIMS: Record<string, string> = {
  alg: 'Algorithm used for cryptographic signing',
  typ: 'Type of token (usually JWT)',
  iss: 'Issuer of the token',
  sub: 'Subject (unique identifier of the user or principal)',
  aud: 'Audience intended for this token',
  exp: 'Expiration timestamp (Unix seconds)',
  nbf: 'Not valid before timestamp (Unix seconds)',
  iat: 'Issued at timestamp (Unix seconds)',
  jti: 'JWT ID (unique token nonce)',
  name: 'Full display name of user',
  email: 'Email address of user',
  roles: 'Assigned roles or authorization privileges'
};

@Component({
  selector: 'app-jwt-decode',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatSnackBarModule,
    MatTooltipModule,
    PageHeaderComponent
  ],
  templateUrl: './jwt-decode.component.html',
  styleUrl: './jwt-decode.component.scss'
})
export class JwtDecodeComponent implements OnInit {
  jwtToken = '';
  errorMessage = '';

  tokenHeaderPart = '';
  tokenPayloadPart = '';
  tokenSignaturePart = '';

  headerClaims: ClaimItem[] = [];
  payloadClaims: ClaimItem[] = [];

  isExpired = false;
  hasExpiration = false;
  expirationText = '';

  constructor(private snackBar: MatSnackBar) {}

  ngOnInit(): void {
    this.loadSample();
  }

  onTokenChange(): void {
    const trimmed = this.jwtToken.trim();
    if (!trimmed) {
      this.clear();
      return;
    }

    const parts = trimmed.split('.');
    if (parts.length !== 3) {
      this.errorMessage = 'Invalid JWT format: A valid token must have exactly three dot-separated segments (Header.Payload.Signature).';
      this.tokenHeaderPart = parts[0] || '';
      this.tokenPayloadPart = parts[1] || '';
      this.tokenSignaturePart = parts[2] || '';
      this.headerClaims = [];
      this.payloadClaims = [];
      this.hasExpiration = false;
      return;
    }

    this.tokenHeaderPart = parts[0];
    this.tokenPayloadPart = parts[1];
    this.tokenSignaturePart = parts[2];
    this.errorMessage = '';

    try {
      // Decode Header
      const decodedHeaderStr = atob(this.base64UrlToBase64(parts[0]));
      const headerObj = JSON.parse(decodedHeaderStr);
      this.headerClaims = Object.entries(headerObj).map(([k, v]) => ({
        key: k,
        value: typeof v === 'object' ? JSON.stringify(v) : v,
        description: RFC_CLAIMS[k] || 'Custom header attribute'
      }));

      // Decode Payload
      const payloadObj: any = jwtDecode(trimmed);
      this.payloadClaims = Object.entries(payloadObj).map(([k, v]) => {
        let humanFormatted: string | undefined;
        if ((k === 'exp' || k === 'iat' || k === 'nbf') && typeof v === 'number') {
          const date = new Date(v * 1000);
          humanFormatted = date.toLocaleString();
        }
        return {
          key: k,
          value: typeof v === 'object' ? JSON.stringify(v, null, 2) : v,
          description: RFC_CLAIMS[k] || 'Custom payload claim',
          humanFormatted
        };
      });

      // Calculate Expiration
      if (typeof payloadObj.exp === 'number') {
        this.hasExpiration = true;
        const now = Math.floor(Date.now() / 1000);
        const diffSeconds = payloadObj.exp - now;
        this.isExpired = diffSeconds <= 0;

        const expDate = new Date(payloadObj.exp * 1000);
        if (this.isExpired) {
          const agoMinutes = Math.abs(Math.round(diffSeconds / 60));
          this.expirationText = `Expired ${this.formatDuration(Math.abs(diffSeconds))} ago (${expDate.toLocaleString()})`;
        } else {
          this.expirationText = `Valid for another ${this.formatDuration(diffSeconds)} (until ${expDate.toLocaleString()})`;
        }
      } else {
        this.hasExpiration = false;
        this.expirationText = 'No expiration claim (exp) defined in this token.';
      }
    } catch (e: any) {
      this.errorMessage = `Failed to decode JWT: ${e.message}`;
      this.headerClaims = [];
      this.payloadClaims = [];
      this.hasExpiration = false;
    }
  }

  private base64UrlToBase64(b64url: string): string {
    let b64 = b64url.replace(/-/g, '+').replace(/_/g, '/');
    while (b64.length % 4 !== 0) {
      b64 += '=';
    }
    return b64;
  }

  private formatDuration(seconds: number): string {
    if (seconds < 60) return `${seconds}s`;
    const minutes = Math.floor(seconds / 60);
    if (minutes < 60) return `${minutes}m`;
    const hours = Math.floor(minutes / 60);
    if (hours < 24) return `${hours}h ${minutes % 60}m`;
    const days = Math.floor(hours / 24);
    return `${days}d ${hours % 24}h`;
  }

  loadSample(): void {
    const futureExp = Math.floor(Date.now() / 1000) + 86400 * 7; // 7 days from now
    const header = btoa(JSON.stringify({ alg: "HS256", typ: "JWT" })).replace(/=/g, '');
    const payload = btoa(JSON.stringify({
      sub: "1234567890",
      name: "Alex Vance",
      email: "alex@toolhub.studio",
      roles: ["engineer", "admin"],
      iat: Math.floor(Date.now() / 1000),
      exp: futureExp
    })).replace(/=/g, '');
    const signature = "SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c";

    this.jwtToken = `${header}.${payload}.${signature}`;
    this.onTokenChange();
  }

  clear(): void {
    this.jwtToken = '';
    this.tokenHeaderPart = '';
    this.tokenPayloadPart = '';
    this.tokenSignaturePart = '';
    this.headerClaims = [];
    this.payloadClaims = [];
    this.errorMessage = '';
    this.hasExpiration = false;
  }

  copyJson(data: ClaimItem[], label: string): void {
    const obj: Record<string, any> = {};
    for (const item of data) {
      try {
        obj[item.key] = JSON.parse(item.value);
      } catch {
        obj[item.key] = item.value;
      }
    }
    copyToClipboard(JSON.stringify(obj, null, 2));
    this.snackBar.open(`Copied ${label} JSON to clipboard`, '', { duration: 2000 });
  }

  copyRawToken(): void {
    copyToClipboard(this.jwtToken);
    this.snackBar.open('Copied raw token to clipboard', '', { duration: 2000 });
  }
}
