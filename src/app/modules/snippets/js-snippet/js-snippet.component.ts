import {Component, OnInit, inject} from '@angular/core';
import {PageHeaderComponent} from "../../../shared/components/page-header/page-header.component";
import {CodeSnippetComponent} from "../../../shared/components/code-snippet/code-snippet.component";
import {FormsModule} from "@angular/forms";
import {Router} from "@angular/router";

export interface SnippetItem {
  id: string;
  name: string;
  category: string;
  description: string;
  code: string;
}

const SNIPPET_CATALOG: SnippetItem[] = [
  {
    id: 'debounce',
    name: 'Debounce Function',
    category: 'Async & Timing',
    description: 'Postpones function execution until after wait milliseconds have elapsed since the last time it was invoked.',
    code: `function debounce(func, delay = 300) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => func.apply(this, args), delay);
  };
}

// Usage
const onSearch = debounce((query) => {
  console.log("Searching for:", query);
}, 400);

window.addEventListener("resize", debounce(() => {
  console.log("Window resized!");
}, 250));`
  },
  {
    id: 'throttle',
    name: 'Throttle Function',
    category: 'Async & Timing',
    description: 'Limits function calls to at most once in every specified time window.',
    code: `function throttle(func, limit = 200) {
  let inThrottle = false;
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
  console.log("Scroll position:", window.scrollY);
}, 200));`
  },
  {
    id: 'sleep',
    name: 'Sleep / Delay Promise',
    category: 'Async & Timing',
    description: 'Pauses execution in async/await functions for a given number of milliseconds.',
    code: `const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// Usage in async workflows
async function demo() {
  console.log("Start");
  await sleep(1000);
  console.log("1 second later...");
}`
  },
  {
    id: 'retry-async',
    name: 'Retry Async Function',
    category: 'Async & Timing',
    description: 'Retries a promise-returning function up to N times with exponential backoff.',
    code: `async function retryAsync(fn, retries = 3, delay = 500) {
  try {
    return await fn();
  } catch (err) {
    if (retries <= 1) throw err;
    await new Promise((res) => setTimeout(res, delay));
    return retryAsync(fn, retries - 1, delay * 2);
  }
}

// Usage
// retryAsync(() => fetch('/api/status'), 3, 1000);`
  },
  {
    id: 'remove-duplicates',
    name: 'Remove Array Duplicates',
    category: 'Array & Object',
    description: 'Removes duplicate primitive items from an array in O(n) time using Set.',
    code: `function removeDuplicates(arr) {
  return [...new Set(arr)];
}

// Usage
const numbers = [1, 2, 2, 3, 4, 4, 5];
console.log(removeDuplicates(numbers)); // [1, 2, 3, 4, 5]`
  },
  {
    id: 'group-by',
    name: 'Group Array by Key',
    category: 'Array & Object',
    description: 'Groups an array of objects by a property or transform callback.',
    code: `function groupBy(array, keyOrFn) {
  return array.reduce((acc, item) => {
    const key = typeof keyOrFn === 'function' ? keyOrFn(item) : item[keyOrFn];
    (acc[key] = acc[key] || []).push(item);
    return acc;
  }, {});
}

// Usage
const people = [
  { name: 'Alice', role: 'admin' },
  { name: 'Bob', role: 'user' },
  { name: 'Charlie', role: 'admin' }
];
console.log(groupBy(people, 'role'));`
  },
  {
    id: 'chunk-array',
    name: 'Chunk Array into Sub-arrays',
    category: 'Array & Object',
    description: 'Splits an array into smaller chunks of a specified size.',
    code: `function chunk(array, size = 2) {
  const chunks = [];
  for (let i = 0; i < array.length; i += size) {
    chunks.push(array.slice(i, i + size));
  }
  return chunks;
}

// Usage
console.log(chunk([1, 2, 3, 4, 5, 6, 7], 3)); // [[1, 2, 3], [4, 5, 6], [7]]`
  },
  {
    id: 'deep-clone',
    name: 'Deep Clone Object',
    category: 'Array & Object',
    description: 'Performs a deep clone of nested objects using structuredClone or recursive fallback.',
    code: `function deepClone(obj) {
  if (typeof structuredClone === 'function') {
    return structuredClone(obj);
  }
  return JSON.parse(JSON.stringify(obj));
}

// Usage
const original = { a: 1, nested: { b: 2 } };
const copy = deepClone(original);
copy.nested.b = 99;
console.log(original.nested.b); // 2 (unmutated)`
  },
  {
    id: 'copy-clipboard',
    name: 'Copy to Clipboard',
    category: 'Browser & DOM',
    description: 'Copies text to clipboard using the modern Clipboard API with fallback.',
    code: `async function copyToClipboard(text) {
  if (navigator.clipboard && window.isSecureContext) {
    await navigator.clipboard.writeText(text);
    return true;
  }
  // Fallback for older browsers
  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.style.position = "fixed";
  textarea.style.opacity = "0";
  document.body.appendChild(textarea);
  textarea.select();
  const successful = document.execCommand("copy");
  document.body.removeChild(textarea);
  return successful;
}

// Usage
copyToClipboard("Hello, ToolHub!");`
  },
  {
    id: 'download-file',
    name: 'Download File / Blob',
    category: 'Browser & DOM',
    description: 'Triggers a browser file download from string content or Blob data.',
    code: `function downloadFile(content, filename, mimeType = 'text/plain') {
  const blob = new Blob([content], { type: mimeType });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement('a');
  anchor.href = url;
  anchor.download = filename;
  document.body.appendChild(anchor);
  anchor.click();
  document.body.removeChild(anchor);
  URL.revokeObjectURL(url);
}

// Usage
downloadFile('{"hello": "world"}', 'data.json', 'application/json');`
  },
  {
    id: 'get-query-param',
    name: 'Get URL Query Parameters',
    category: 'Browser & DOM',
    description: 'Extracts query string parameters into a clean key-value dictionary.',
    code: `function getQueryParams(url = window.location.href) {
  const params = new URL(url).searchParams;
  return Object.fromEntries(params.entries());
}

// Usage
// On https://toolhub.dev/?tab=snippets&lang=js
console.log(getQueryParams()); // { tab: "snippets", lang: "js" }`
  },
  {
    id: 'format-bytes',
    name: 'Format Bytes to Human Size',
    category: 'Formatting & Math',
    description: 'Converts raw byte counts into human-readable strings (KB, MB, GB).',
    code: `function formatBytes(bytes, decimals = 2) {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}

// Usage
console.log(formatBytes(1048576)); // "1 MB"
console.log(formatBytes(254823948)); // "243.02 MB"`
  },
  {
    id: 'random-range',
    name: 'Random Number in Range',
    category: 'Formatting & Math',
    description: 'Generates a pseudo-random integer between min and max (inclusive).',
    code: `function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Usage
console.log(getRandomInt(1, 100)); // e.g. 42`
  },
  {
    id: 'to-ordinal',
    name: 'Number to Ordinal String',
    category: 'Formatting & Math',
    description: 'Converts an integer to its English ordinal representation (1st, 2nd, 3rd, 4th).',
    code: `function toOrdinal(num) {
  if (!Number.isInteger(num)) return String(num);
  const suffixes = ['th', 'st', 'nd', 'rd'];
  const remainder = num % 100;
  const suffix = remainder >= 11 && remainder <= 13 ? 'th' : suffixes[num % 10] || 'th';
  return num + suffix;
}

// Usage
console.log(toOrdinal(1));  // "1st"
console.log(toOrdinal(22)); // "22nd"
console.log(toOrdinal(103));// "103rd"`
  }
];

@Component({
  selector: 'app-js-snippet',
  standalone: true,
  imports: [
    PageHeaderComponent,
    CodeSnippetComponent,
    FormsModule
  ],
  templateUrl: './js-snippet.component.html',
  styleUrl: './js-snippet.component.scss'
})
export class JsSnippetComponent implements OnInit {
  private router = inject(Router, { optional: true });
  snippets = SNIPPET_CATALOG;
  categories = ['All', 'Async & Timing', 'Array & Object', 'Browser & DOM', 'Formatting & Math'];
  selectedCategory = 'All';
  searchQuery = '';
  selectedSnippet: SnippetItem = SNIPPET_CATALOG[0];

  openPlayground() {
    if (this.router) {
      this.router.navigate(['js-playground']);
    }
  }

  ngOnInit() {
    this.selectedSnippet = this.snippets[0];
  }

  get filteredSnippets(): SnippetItem[] {
    const q = this.searchQuery.trim().toLowerCase();
    return this.snippets.filter(item => {
      const matchesCategory = this.selectedCategory === 'All' || item.category === this.selectedCategory;
      const matchesSearch = !q ||
        item.name.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q) ||
        item.code.toLowerCase().includes(q);
      return matchesCategory && matchesSearch;
    });
  }

  onSelectCategory(cat: string) {
    this.selectedCategory = cat;
    const currentList = this.filteredSnippets;
    if (currentList.length > 0 && !currentList.some(s => s.id === this.selectedSnippet.id)) {
      this.selectedSnippet = currentList[0];
    }
  }

  onSelectSnippet(snippet: SnippetItem) {
    this.selectedSnippet = snippet;
  }
}

