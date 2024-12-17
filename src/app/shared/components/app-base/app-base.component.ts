import {Component, Injector} from '@angular/core';
import {HelperServices} from "../../../core/services/helper-services";

@Component({
  selector: 'app-app-base',
  standalone: true,
  imports: [],
  template: '',
})
export abstract class AppBaseComponent {
  helperServices: HelperServices;

  constructor(injector: Injector) {
    this.helperServices = injector.get(HelperServices);
  }

  copyString(value: string | null) {
    this.helperServices.copyString(value);
  }
}
