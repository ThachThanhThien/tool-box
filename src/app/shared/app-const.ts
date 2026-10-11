import { MenuGroup, ToolItem } from '../core/models/menu-item';

export class AppConst {
  static readonly appMenu: MenuGroup[] = [
    {
      name: 'Web Tools',
      categoryKey: 'web-tool',
      icon: 'fa-solid fa-code',
      isExpanded: true,
      items: [
        {
          name: 'Color Picker & Converter',
          routerLink: 'color-picker',
          icon: 'assets/icons/color-picker.png',
          faIcon: 'fa-solid fa-palette',
          description: 'Pick colors, convert HEX, RGB, HSL, CMYK, HSV formats, and test WCAG contrast.',
          category: 'Web Tools',
          keywords: ['color', 'hex', 'rgb', 'hsl', 'cmyk', 'hsv', 'contrast', 'palette', 'picker'],
          badge: 'Popular'
        },
        {
          name: 'Base64 Encoder / Decoder',
          routerLink: 'base64',
          icon: 'assets/icons/base64.png',
          faIcon: 'fa-solid fa-file-code',
          description: 'Encode and decode Base64 strings with UTF-8 support and URL-safe mode.',
          category: 'Web Tools',
          keywords: ['base64', 'encode', 'decode', 'binary', 'ascii', 'utf8', 'url-safe'],
          badge: 'Essential'
        },
        {
          name: 'JSON Formatter & Validator',
          routerLink: 'json-formatter',
          icon: 'assets/icons/json.png',
          faIcon: 'fa-solid fa-brackets-curly',
          description: 'Format, validate, beautify, and minify JSON data with error indicators.',
          category: 'Web Tools',
          keywords: ['json', 'format', 'prettify', 'beautify', 'minify', 'validate', 'parse'],
          badge: 'Essential'
        },
        {
          name: 'Keycode Inspector',
          routerLink: 'keycode-info',
          icon: 'assets/icons/keycode.png',
          faIcon: 'fa-solid fa-keyboard',
          description: 'Press any key to inspect JavaScript key, keyCode, event code, and modifiers.',
          category: 'Web Tools',
          keywords: ['keycode', 'keyboard', 'event', 'ascii', 'key', 'keypress', 'javascript']
        },
        {
          name: 'JWT Parser & Inspector',
          routerLink: 'jwt-parser',
          icon: 'assets/icons/jwt.png',
          faIcon: 'fa-solid fa-shield-halved',
          description: 'Decode and inspect JSON Web Tokens with expiration verification and claims breakdown.',
          category: 'Web Tools',
          keywords: ['jwt', 'token', 'decode', 'header', 'payload', 'signature', 'auth', 'bearer', 'expire'],
          badge: 'Popular'
        },
        {
          name: 'Password Generator',
          routerLink: 'password-generator',
          icon: 'assets/icons/password-generator.png',
          faIcon: 'fa-solid fa-lock',
          description: 'Generate secure, customizable passwords with real-time strength & entropy feedback.',
          category: 'Web Tools',
          keywords: ['password', 'generator', 'security', 'random', 'pin', 'strong', 'entropy']
        },
      ]
    },
    {
      name: 'Text Utilities',
      categoryKey: 'text',
      icon: 'fa-solid fa-align-left',
      isExpanded: true,
      items: [
        {
          name: 'Word & Character Counter',
          routerLink: 'word-counter',
          icon: 'assets/icons/word-counter.png',
          faIcon: 'fa-solid fa-arrow-down-1-9',
          description: 'Count words, characters, sentences, paragraphs, and calculate reading & speaking time.',
          category: 'Text Utilities',
          keywords: ['word', 'counter', 'character', 'reading time', 'statistics', 'length', 'paragraph']
        },
        {
          name: 'Case Converter',
          routerLink: 'case-converted',
          icon: 'assets/icons/case-converter.png',
          faIcon: 'fa-solid fa-font',
          description: 'Convert text between camelCase, snake_case, kebab-case, PascalCase, and UPPERCASE.',
          category: 'Text Utilities',
          keywords: ['case', 'converter', 'camelcase', 'snakecase', 'kebab', 'pascal', 'uppercase', 'lowercase']
        },
        {
          name: 'Text / Lorem Generator',
          routerLink: 'text-generator',
          icon: 'assets/icons/text-gen.png',
          faIcon: 'fa-solid fa-paragraph',
          description: 'Generate placeholder Lorem Ipsum text by words, sentences, or paragraphs.',
          category: 'Text Utilities',
          keywords: ['lorem', 'ipsum', 'text', 'generator', 'placeholder', 'dummy', 'copy']
        },
        {
          name: 'Text Diff Checker',
          routerLink: 'text-diff',
          icon: 'assets/icons/case-converter.png',
          faIcon: 'fa-solid fa-code-compare',
          description: 'Compare two text snippets side-by-side with additions and deletions highlighted.',
          category: 'Text Utilities',
          keywords: ['diff', 'compare', 'difference', 'delta', 'merge', 'changes', 'text'],
          badge: 'New'
        }
      ]
    },
    {
      name: 'Image & Media',
      categoryKey: 'image',
      icon: 'fa-solid fa-image',
      isExpanded: true,
      items: [
        {
          name: 'QR Code Generator',
          routerLink: 'qr-generator',
          icon: 'assets/icons/qr.webp',
          faIcon: 'fa-solid fa-qrcode',
          description: 'Create customized QR codes for URLs, WiFi, contact cards, and text with instant download.',
          category: 'Image & Media',
          keywords: ['qr', 'qrcode', 'generator', 'barcode', 'scan', 'wifi', 'url'],
          badge: 'Popular'
        },
        {
          name: 'QR Code Scanner',
          routerLink: 'qr-scanner',
          icon: 'assets/icons/qr-scanner.png',
          faIcon: 'fa-solid fa-camera',
          description: 'Scan QR codes directly from camera video feed or by dragging and dropping images.',
          category: 'Image & Media',
          keywords: ['qr', 'scanner', 'camera', 'webcam', 'read', 'decode', 'barcode']
        }
      ]
    },
    {
      name: 'Converters',
      categoryKey: 'converter',
      icon: 'fa-solid fa-arrows-rotate',
      isExpanded: true,
      items: [
        {
          name: 'Temperature Converter',
          routerLink: 'temperature',
          icon: 'assets/icons/temperature.png',
          faIcon: 'fa-solid fa-temperature-half',
          description: 'Real-time multi-unit temperature converter for Celsius, Fahrenheit, Kelvin, and more.',
          category: 'Converters',
          keywords: ['temperature', 'celsius', 'fahrenheit', 'kelvin', 'rankine', 'degrees', 'weather']
        },
        {
          name: 'Roman Numeral Converter',
          routerLink: 'roman-number',
          icon: 'assets/icons/roman-number.png',
          faIcon: 'fa-solid fa-landmark',
          description: 'Convert between Roman numerals and integers with breakdown explanation and validation.',
          category: 'Converters',
          keywords: ['roman', 'numeral', 'number', 'converter', 'integer', 'math', 'latin']
        },
        {
          name: 'PDF to Images',
          routerLink: 'pdf-to-img',
          icon: 'assets/icons/pdf-to-img.png',
          faIcon: 'fa-solid fa-file-pdf',
          description: 'Convert multi-page PDF documents into high-resolution images page by page.',
          category: 'Converters',
          keywords: ['pdf', 'images', 'convert', 'extract', 'pages', 'jpg', 'png']
        },
        {
          name: 'Images to PDF',
          routerLink: 'img-to-pdf',
          icon: 'assets/icons/img-to-pdf.png',
          faIcon: 'fa-solid fa-file-export',
          description: 'Combine and convert multiple images into a downloadable single PDF document.',
          category: 'Converters',
          keywords: ['images', 'pdf', 'compile', 'convert', 'create', 'merge']
        }
      ]
    },
    {
      name: 'Playground & Code',
      categoryKey: 'playground',
      icon: 'fa-solid fa-laptop-code',
      isExpanded: true,
      items: [
        {
          name: 'CSS Gradient Studio',
          routerLink: 'css-gradient',
          icon: 'assets/icons/gradient.png',
          faIcon: 'fa-solid fa-wand-magic-sparkles',
          description: 'Design linear and radial gradients with color stops and copy ready-to-use CSS.',
          category: 'Playground & Code',
          keywords: ['css', 'gradient', 'linear', 'radial', 'background', 'designer', 'styles']
        },
        {
          name: 'JavaScript Sandbox',
          routerLink: 'js-playground',
          icon: 'assets/icons/js.png',
          faIcon: 'fa-brands fa-js',
          description: 'Interactive JavaScript scratchpad with real-time evaluation and console output capture.',
          category: 'Playground & Code',
          keywords: ['javascript', 'js', 'playground', 'sandbox', 'run', 'eval', 'console', 'script'],
          badge: 'New'
        },
        {
          name: 'JavaScript Snippets',
          routerLink: 'js-snippet',
          icon: 'assets/icons/js.png',
          faIcon: 'fa-solid fa-code',
          description: 'Curated collection of useful modern JavaScript utility functions and algorithms.',
          category: 'Playground & Code',
          keywords: ['snippets', 'javascript', 'functions', 'utils', 'helper', 'code']
        },
        {
          name: 'CSS Snippets & Components',
          routerLink: 'css-snippet',
          icon: 'assets/icons/css.png',
          faIcon: 'fa-brands fa-css3-alt',
          description: 'Ready-to-use CSS buttons, loaders, animations, and UI component snippets.',
          category: 'Playground & Code',
          keywords: ['css', 'snippets', 'buttons', 'loaders', 'animations', 'components']
        }
      ]
    },
    {
      name: 'Everyday Tools',
      categoryKey: 'others',
      icon: 'fa-solid fa-toolbox',
      isExpanded: true,
      items: [
        {
          name: 'Spinning Wheel Picker',
          routerLink: 'spinning-wheel',
          icon: 'assets/icons/spinningwheel.png',
          faIcon: 'fa-solid fa-dharmachakra',
          description: 'Interactive decision wheel for random selections, raffles, and team decisions.',
          category: 'Everyday Tools',
          keywords: ['spinning', 'wheel', 'random', 'picker', 'decision', 'raffle', 'draw']
        },
        {
          name: 'Digital Stopwatch & Chrono',
          routerLink: 'stopwatch',
          icon: 'assets/icons/stopwatch.png',
          faIcon: 'fa-solid fa-stopwatch',
          description: 'Precision stopwatch with start, pause, reset, and lap split-time tracking.',
          category: 'Everyday Tools',
          keywords: ['stopwatch', 'timer', 'chrono', 'time', 'lap', 'clock', 'milliseconds']
        },
        {
          name: 'World & Local Time',
          routerLink: 'current-time',
          icon: 'assets/icons/calendar.png',
          faIcon: 'fa-solid fa-clock',
          description: 'Display current local time, UTC, week numbers, and Unix epoch timestamps.',
          category: 'Everyday Tools',
          keywords: ['time', 'clock', 'utc', 'timezone', 'epoch', 'timestamp', 'date']
        },
        {
          name: 'Year Calendar View',
          routerLink: 'calendar',
          icon: 'assets/icons/calendar.png',
          faIcon: 'fa-solid fa-calendar-days',
          description: 'Full-year interactive calendar overview with month navigation and date selection.',
          category: 'Everyday Tools',
          keywords: ['calendar', 'month', 'year', 'days', 'schedule', 'date']
        }
      ]
    }
  ];

  static getAllTools(): ToolItem[] {
    return this.appMenu.flatMap(group => group.items);
  }

  static getToolByLink(link: string): ToolItem | undefined {
    return this.getAllTools().find(t => t.routerLink === link);
  }

  static searchTools(query: string): ToolItem[] {
    if (!query || query.trim() === '') return this.getAllTools();
    const q = query.toLowerCase().trim();
    return this.getAllTools().filter(tool =>
      tool.name.toLowerCase().includes(q) ||
      tool.description.toLowerCase().includes(q) ||
      tool.category.toLowerCase().includes(q) ||
      tool.keywords.some(k => k.toLowerCase().includes(q))
    );
  }
}
