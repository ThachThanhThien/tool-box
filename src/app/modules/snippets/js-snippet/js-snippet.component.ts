import {Component, OnInit} from '@angular/core';
import {PageHeaderComponent} from "../../../shared/components/page-header/page-header.component";
import {CodeSnippetComponent} from "../../../shared/components/code-snippet/code-snippet.component";
import {NgClass, NgIf} from "@angular/common";
import {forEach} from "lodash";

const snippets = [
  {
    name: 'Debounce Function (Optimize function calls)',
    code: ` function debounce(func, delay) {
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
    code: ` function throttle(func, limit) {
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
    name: 'Copy Text to Clipboard',
    code: ` function copyToClipboard(text) {
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
    code: ` function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  // Usage
  console.log(getRandom(1, 100));
  `
  },
  {
    name: 'Remove Duplicates from an Array',
    code: ` function removeDuplicates(arr) {
    return [...new Set(arr)];
  }

  // Usage
  console.log(removeDuplicates([1, 2, 2, 3, 4, 4])); // [1, 2, 3, 4]
  `
  },
  {
    name: 'Sort array',
    code: ` //Ascending
  const sortAscending = (array) => array.sort((a, b) => a - b);

  //Descending
  const sortDescending = (array) => array.sort((a, b) => b - a);
  `
  },
  {
    name: 'Check if the array of objects have duplicate property values',
    code: `  function hasDuplicateObjects(array, key = 'id') {
    const seen = new Set();

    for (const obj of array) {
      const val = obj[key];
      if (seen.has(val)) return true;
      seen.add(val);
    }

    return false;
  }
  `
  },
  {
    name: 'Convert numbers to ordinal numbers',
    code: `  function toOrdinal(num) {
    if (!Number.isInteger(num)) return String(num);

    const suffixes = ['th', 'st', 'nd', 'rd'];
    const remainder = num % 100;

    const suffix = remainder >= 11 && remainder <= 13 ? 'th' : suffixes[num % 10] || 'th';

    return num + suffix;
  }
  `
  },
];

@Component({
  selector: 'app-js-snippet',
  standalone: true,
  imports: [
    PageHeaderComponent,
    CodeSnippetComponent,
    NgIf,
    NgClass
  ],
  templateUrl: './js-snippet.component.html',
  styleUrl: './js-snippet.component.scss'
})
export class JsSnippetComponent implements OnInit {
  codeSnippets: CodeSnippet[] = [];
  selectedSnippet = '';

  ngOnInit() {
    this.codeSnippets = snippets.map(item => new CodeSnippet(item))
    this.onSnippetSelected(this.codeSnippets[0])
  }

  onSnippetSelected(item: CodeSnippet) {
    this.selectedSnippet = item.code;
    forEach(this.codeSnippets, (codeSnippet) => {
      codeSnippet.isSelected = false;
    });
    item.isSelected = true;
  }
}

class CodeSnippet {
  name: string;
  code: string;
  isSelected: boolean;

  constructor(data: any) {
    this.name = data.name;
    this.code = data.code;
    this.isSelected = false;
  }
}
