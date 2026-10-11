import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { PageHeaderComponent } from '../../../shared/components/page-header/page-header.component';
import { copyToClipboard } from '../../../shared/Helper';

interface ConsoleLogEntry {
  type: 'log' | 'warn' | 'error' | 'info';
  message: string;
  timestamp: string;
}

@Component({
  selector: 'app-js-playground',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatSnackBarModule,
    PageHeaderComponent
  ],
  templateUrl: './js-playground.component.html',
  styleUrl: './js-playground.component.scss'
})
export class JsPlaygroundComponent implements OnInit {
  code = '';
  logs: ConsoleLogEntry[] = [];
  executionTimeMs = 0;
  hasExecuted = false;

  readonly codeTemplates = [
    {
      title: 'Array Operations & Filter',
      code: `// Data filtering & mapping
const users = [
  { name: 'Alice', role: 'admin', active: true },
  { name: 'Bob', role: 'developer', active: false },
  { name: 'Charlie', role: 'designer', active: true },
  { name: 'Dana', role: 'developer', active: true }
];

const activeDevelopers = users
  .filter(u => u.active && u.role === 'developer')
  .map(u => u.name);

console.log('Active Developers:', activeDevelopers);`
    },
    {
      title: 'Async Promise Simulation',
      code: `// Async operations simulation
async function fetchMetrics() {
  console.info('Initiating simulated metrics fetch...');
  const simulatedDelay = (ms) => new Promise(res => setTimeout(res, ms));
  
  await simulatedDelay(300);
  console.log('API Status: 200 OK');
  return { cpuUsage: '24%', memory: '1.2 GB', uptime: '99.98%' };
}

fetchMetrics().then(data => {
  console.log('System Metrics:', data);
});`
    },
    {
      title: 'Fibonacci Sequence',
      code: `// Fibonacci recursive generator
function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log('Calculating first 10 Fibonacci numbers:');
const sequence = Array.from({ length: 10 }, (_, i) => fibonacci(i));
console.log(sequence.join(', '));`
    }
  ];

  constructor(private snackBar: MatSnackBar) {}

  ngOnInit(): void {
    this.code = this.codeTemplates[0].code;
    this.runCode();
  }

  runCode(): void {
    this.logs = [];
    const startTime = performance.now();
    this.hasExecuted = true;

    // Custom console log capture
    const originalConsole = {
      log: console.log,
      warn: console.warn,
      error: console.error,
      info: console.info
    };

    const capture = (type: 'log' | 'warn' | 'error' | 'info', ...args: any[]) => {
      const formatted = args.map(arg => {
        if (typeof arg === 'object') {
          try {
            return JSON.stringify(arg, null, 2);
          } catch {
            return String(arg);
          }
        }
        return String(arg);
      }).join(' ');

      this.logs.push({
        type,
        message: formatted,
        timestamp: new Date().toLocaleTimeString()
      });
    };

    console.log = (...args: any[]) => capture('log', ...args);
    console.warn = (...args: any[]) => capture('warn', ...args);
    console.error = (...args: any[]) => capture('error', ...args);
    console.info = (...args: any[]) => capture('info', ...args);

    try {
      const runner = new Function(this.code);
      const returnedVal = runner();
      if (returnedVal !== undefined) {
        capture('info', 'Return value: ' + JSON.stringify(returnedVal));
      }
    } catch (e: any) {
      capture('error', e.message);
    } finally {
      console.log = originalConsole.log;
      console.warn = originalConsole.warn;
      console.error = originalConsole.error;
      console.info = originalConsole.info;
      this.executionTimeMs = Math.round(performance.now() - startTime);
    }
  }

  clearLogs(): void {
    this.logs = [];
  }

  loadTemplate(t: typeof this.codeTemplates[0]): void {
    this.code = t.code;
    this.runCode();
  }

  copyCode(): void {
    copyToClipboard(this.code);
    this.snackBar.open('Code copied to clipboard', '', { duration: 1800 });
  }

  onKeyDown(e: KeyboardEvent): void {
    if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
      e.preventDefault();
      this.runCode();
    }
  }
}
