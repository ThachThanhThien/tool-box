import { Component } from '@angular/core';
import {MatSnackBar} from "@angular/material/snack-bar";
import {copyToClipboard} from "../../Helper";

@Component({
  selector: 'app-app-base',
  standalone: true,
  imports: [],
  template: '',
})
export abstract class AppBaseComponent {
  constructor(private _snackBar: MatSnackBar) {
  }

  copyString(value: string) {
    copyToClipboard(value);
    this._snackBar.open('Copy successfully', '', { duration: 2000 });
  }
}
