import {Component} from '@angular/core';
import {PageHeaderComponent} from "../../../shared/components/page-header/page-header.component";
import {MatList, MatListItem} from "@angular/material/list";
import {CodeSnippetComponent} from "../../../shared/components/code-snippet/code-snippet.component";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-js-snippet',
  standalone: true,
  imports: [
    PageHeaderComponent,
    MatList,
    MatListItem,
    CodeSnippetComponent,
    NgIf
  ],
  templateUrl: './js-snippet.component.html',
  styleUrl: './js-snippet.component.scss'
})
export class JsSnippetComponent {
  codeSnippets = [
    {
      name: 'Debounce Function (Optimize function calls)', code: `
    function debounce(func, delay) {
      let timer;
      return function (...args) {
        clearTimeout(timer);
        timer = setTimeout(() => func.apply(this, args), delay);
      };
    }

    // Usage
    window.addEventListener("resize", debounce(() => {
      console.log("Resized!");
    }, 500));
    `
    },
    {
      name: 'Throttle Function (Limit function execution)',
      code: `
      function throttle(func, limit) {
        let inThrottle;
        return function (...args) {
          if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => (inThrottle = false), limit);
          }
        };
      }

      // Usage
      window.addEventListener("scroll", throttle(() => {
        console.log("Scrolled!");
      }, 1000));

      `
    },

    {
      name: 'Copy Text to Clipboard', code: `
    function copyToClipboard(text) {
      navigator.clipboard.writeText(text).then(() => {
        console.log("Text copied to clipboard!");
      });
    }

    // Usage
    copyToClipboard("Hello, World!");
    `
    },
    {
      name: 'Generate a Random Number in a Range',
      code: `
      function getRandom(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }

      // Usage
      console.log(getRandom(1, 100));
      `
    },
    {
      name: 'Remove Duplicates from an Array',
      code: `
      function removeDuplicates(arr) {
        return [...new Set(arr)];
      }

      // Usage
      console.log(removeDuplicates([1, 2, 2, 3, 4, 4])); // [1, 2, 3, 4]
      `
    }
  ];

  selectedSnippet = '';
}
