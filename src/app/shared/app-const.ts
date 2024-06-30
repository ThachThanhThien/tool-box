export class AppConst {
  static appMenu = [
    {
      name: 'Web tool',
      items: [
        {
          name: 'Color picker',
          icon: '/assets/icons/color-picker.png',
          routerLink: 'color-picker'
        },

        {
          name: 'Base64',
          icon: '/assets/icons/base64.png',
          routerLink: 'base64'
        },
        {
          name: 'JSON Formatter',
          icon: '/assets/icons/json.png',
          routerLink: 'json-formatter'
        },
      ],
      isExpanded: true,
    },
    {
      name: 'Text',
      items: [
        {
          name: 'Word counter',
          icon: '/assets/icons/word-counter.png',
          routerLink: 'word-counter'
        },
        {
          name: 'Case converted',
          icon: '/assets/icons/case-converter.png',
          routerLink: 'case-converted'
        },
      ],
      isExpanded: true,
    },
    {
      name: 'Image',
      items: [
        {
          name: 'QR Generator',
          icon: '/assets/icons/qr.webp',
          routerLink: 'qr-generator'
        },
      ],
      isExpanded: true,
    },
  ]
}
