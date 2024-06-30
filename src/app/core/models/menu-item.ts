export class MenuItem {
  name: string;
  icon?: string;
  routerLink?: string;
  items?: MenuItem[];

  constructor() {
    this.name = '';
    this.icon = '';
  }
}
