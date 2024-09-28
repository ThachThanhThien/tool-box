export class AppConst {
  static appMenu = [
    {
      name: 'Web tool',
      items: [
        {
          name: 'Color picker',
          icon: 'assets/icons/color-picker.png',
          routerLink: 'color-picker'
        },
        {
          name: 'Base64',
          icon: 'assets/icons/base64.png',
          routerLink: 'base64'
        },
        {
          name: 'JSON Formatter',
          icon: 'assets/icons/json.png',
          routerLink: 'json-formatter'
        },
        {
          name: 'Keycode Info',
          icon: 'assets/icons/keycode.png',
          routerLink: 'keycode-info'
        },
        {
          name: 'JWT Parser',
          icon: 'assets/icons/jwt-parser.png',
          routerLink: 'jwt-parser'
        },
      ],
      isExpanded: true,
    },
    {
      name: 'Text',
      items: [
        {
          name: 'Word counter',
          icon: 'assets/icons/word-counter.png',
          routerLink: 'word-counter'
        },
        {
          name: 'Case converted',
          icon: 'assets/icons/case-converter.png',
          routerLink: 'case-converted'
        },
        {
          name: 'Text generator',
          icon: 'assets/icons/case-converter.png',
          routerLink: 'text-generator'
        },
        {
          name: 'Text diff',
          icon: 'assets/icons/text-diff.png',
          routerLink: 'text-diff'
        },
      ],
      isExpanded: true,
    },
    {
      name: 'Image',
      items: [
        {
          name: 'QR Generator',
          icon: 'assets/icons/qr.webp',
          routerLink: 'qr-generator'
        },
        {
          name: 'QR Scanner',
          icon: 'assets/icons/qr-scanner.png',
          routerLink: 'qr-scanner'
        },
      ],
      isExpanded: true,
    },
    {
      name: 'Converter',
      items: [
        {
          name: 'Temperature',
          icon: 'assets/icons/temperature.png',
          routerLink: 'temperature'
        },
        {
          name: 'Integer base',
          icon: 'assets/icons/integer-base.png',
          routerLink: 'integer-base'
        },
        {
          name: 'Roman Number',
          icon: 'assets/icons/roman-number.png',
          routerLink: 'roman-number'
        },
      ],
      isExpanded: true,
    },
    {
      name: 'Others',
      items: [
        {
          name: 'Spinning wheel',
          icon: 'assets/icons/spinningwheel.png',
          routerLink: 'spinning-wheel'
        },
        {
          name: 'Stopwatch',
          icon: 'assets/icons/stopwatch.png',
          routerLink: 'stopwatch'
        },
      ],
      isExpanded: true,
    },
  ]
}
