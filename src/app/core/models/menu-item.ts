export interface ToolItem {
  name: string;
  routerLink: string;
  icon?: string;
  faIcon?: string;
  description: string;
  category: string;
  keywords: string[];
  badge?: string;
}

export interface MenuGroup {
  name: string;
  categoryKey: string;
  icon: string;
  isExpanded: boolean;
  items: ToolItem[];
}

export class MenuItem {
  name: string = '';
  icon?: string;
  routerLink?: string;
  description?: string;
  category?: string;
  keywords?: string[];
  badge?: string;
  items?: MenuItem[];
}
