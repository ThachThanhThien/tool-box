import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class HelperServices {
  constructor(private _snackBar: MatSnackBar) {}

  copyString(value: string | null): void {
    if (!value) return;

    navigator.clipboard.writeText(value).then(() => {
      this._snackBar.open('Copy successfully', '', { duration: 2000 });
    });
  }
}
