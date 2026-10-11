import {Component, Injector} from '@angular/core';
import {HelperServices} from "../../../core/services/helper-services";
import {Router} from "@angular/router";

@Component({
  selector: 'app-app-base',
  standalone: true,
  imports: [],
  template: '',
})
export abstract class AppBaseComponent {
  helperServices: HelperServices | null;
  router: Router | null;

  constructor(injector: Injector) {
    this.helperServices = injector.get(HelperServices, null);
    this.router = injector.get(Router, null);
  }

  copyString(value: string | null) {
    if (this.helperServices) {
      this.helperServices.copyString(value);
    } else if (value && typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(value);
    }
  }
}
