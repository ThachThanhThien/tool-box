import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: 'color-picker',
    loadComponent: () => import('./modules/web-tool/color-picker/color-picker.component').then(mod => mod.ColorPickerComponent)
  },
  {
    path: 'keycode-info',
    loadComponent: () => import('./modules/web-tool/keycode/keycode.component').then(mod => mod.KeycodeComponent)
  },
  {
    path: 'qr-generator',
    loadComponent: () => import('./modules/image/qr-generator/qr-generator.component').then(mod => mod.QrGeneratorComponent)
  },
  {
    path: 'word-counter',
    loadComponent: () => import('./modules/text/word-counter/word-counter.component').then(mod => mod.WordCounterComponent)
  },
  {
    path: 'case-converted',
    loadComponent: () => import('./modules/text/case-converter/case-converter.component').then(mod => mod.CaseConverterComponent)
  },
  {
    path: 'base64',
    loadComponent: () => import('./modules/web-tool/base64/base64.component').then(mod => mod.Base64Component)
  },
  {
    path: 'json-formatter',
    loadComponent: () => import('./modules/web-tool/json-formatter/json-formatter.component').then(mod => mod.JsonFormatterComponent)
  },
  {
    path: 'text-generator',
    loadComponent: () => import('./modules/text/text-generator/text-generator.component').then(mod => mod.TextGeneratorComponent)
  },
  {
    path: 'qr-scanner',
    loadComponent: () => import('./modules/image/qr-scanner/qr-scanner.component').then(mod => mod.QrScannerComponent)
  },
  {
    path: 'spinning-wheel',
    loadComponent: () => import('./modules/others/spinning-wheel/spinning-wheel.component').then(mod => mod.SpinningWheelComponent)
  },
  {
    path: 'stopwatch',
    loadComponent: () => import('./modules/others/stopwatch/stopwatch.component').then(mod => mod.StopwatchComponent)
  },
  {
    path: 'jwt-parser',
    loadComponent: () => import('./modules/web-tool/jwt-decode/jwt-decode.component').then(mod => mod.JwtDecodeComponent)
  },
  {
    path: 'temperature',
    loadComponent: () => import('./modules/converter/temperature/temperature.component').then(mod => mod.TemperatureComponent)
  },
  {
    path: 'roman-number',
    loadComponent: () => import('./modules/converter/roman-num/roman-num.component').then(mod => mod.RomanNumComponent)
  },
  {
    path: 'text-diff',
    loadComponent: () => import('./modules/text/text-diff/text-diff.component').then(mod => mod.TextDiffComponent)
  },
  {
    path: 'password-generator',
    loadComponent: () => import('./modules/web-tool/password-generator/password-generator.component').then(mod => mod.PasswordGeneratorComponent)
  },
  {
    path: 'current-time',
    loadComponent: () => import('./modules/others/current-time/current-time.component').then(mod => mod.CurrentTimeComponent)
  },
  {
    path: 'js-snippet',
    loadComponent: () => import('./modules/snippets/js-snippet/js-snippet.component').then(mod => mod.JsSnippetComponent)
  },
  {
    path: 'css-snippet',
    loadComponent: () => import('./modules/snippets/css-snippet/css-snippet.component').then(mod => mod.CssSnippetComponent)
  },
  {
    path: 'calendar',
    loadComponent: () => import('./modules/others/calendar/calendar.component').then(mod => mod.CalendarComponent)
  },
  {
    path: 'js-playground',
    loadComponent: () => import('./modules/playground/js-playground/js-playground.component').then(mod => mod.JsPlaygroundComponent)
  },
  {
    path: 'css-gradient',
    loadComponent: () => import('./modules/playground/css-gradient/css-gradient.component').then(mod => mod.CssGradientComponent)
  },
  {
    path: 'pdf-to-img',
    loadComponent: () => import('./modules/converter/pdf-to-img/pdf-to-img.component').then(mod => mod.PdfToImgComponent)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
