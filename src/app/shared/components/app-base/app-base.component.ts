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
  helperServices: HelperServices;
  router: Router;

  constructor(injector: Injector) {
    this.helperServices = injector.get(HelperServices);
    this.router = injector.get(Router);
  }

  copyString(value: string | null) {
    this.helperServices.copyString(value);
  }
}
