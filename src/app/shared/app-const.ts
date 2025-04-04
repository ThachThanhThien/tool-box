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
          icon: 'assets/icons/jwt.png',
          routerLink: 'jwt-parser'
        },
        {
          name: 'Password generator',
          icon: 'assets/icons/password-generator.png',
          routerLink: 'password-generator'
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
          icon: 'assets/icons/text-gen.png',
          routerLink: 'text-generator'
        },
        // {
        //   name: 'Text diff',
        //   icon: 'assets/icons/text-diff.png',
        //   routerLink: 'text-diff'
        // },
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
        // {
        //   name: 'Integer base',
        //   icon: 'assets/icons/integer-base.png',
        //   routerLink: 'integer-base'
        // },
        {
          name: 'Roman Numeral Converter',
          icon: 'assets/icons/roman-number.png',
          routerLink: 'roman-number'
        },
        {
          name: 'PDF to Images',
          icon: 'assets/icons/pdf-to-img.png',
          routerLink: 'pdf-to-img'
        },
        {
          name: 'Images to PDF',
          icon: 'assets/icons/img-to-pdf.png',
          routerLink: 'img-to-pdf'
        },
      ],
      isExpanded: true,
    },
    {
      name: 'Playground',
      items: [
        // {
        //   name: 'Javascript Playground',
        //   icon: 'assets/icons/js.png',
        //   routerLink: 'js-playground'
        // },
        {
          name: 'CSS Gradient',
          icon: 'assets/icons/gradient.png',
          routerLink: 'css-gradient'
        },
      ],
      isExpanded: true,
    },
    {
      name: 'Collection',
      items: [
        {
          name: 'Javascript Snippets',
          icon: 'assets/icons/js.png',
          routerLink: 'js-snippet'
        },
        {
          name: 'CSS Snippets',
          icon: 'assets/icons/css.png',
          routerLink: 'css-snippet'
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
        {
          name: 'Current Local Time',
          icon: 'assets/icons/calendar.png',
          routerLink: 'current-time'
        },
      ],
      isExpanded: true,
    },
  ]
}
