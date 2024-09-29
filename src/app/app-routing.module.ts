import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: 'color-picker',
    loadComponent: () => import('./modules/web-tool/color-picker/color-picker.component').then(mod => mod.ColorPickerComponent)
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
