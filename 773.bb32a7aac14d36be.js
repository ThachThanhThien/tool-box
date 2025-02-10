"use strict";(self.webpackChunktool_box=self.webpackChunktool_box||[]).push([[773],{1773:(f,s,n)=>{n.r(s),n.d(s,{JsSnippetComponent:()=>_});var p=n(3301),c=n(3902),l=n(1418),d=n(177),e=n(4438);function m(t,r){if(1&t){const o=e.RV6();e.j41(0,"mat-list-item")(1,"span",6),e.bIt("click",function(){const i=e.eBV(o).$implicit,g=e.XpG();return e.Njj(g.selectedSnippet=i.code)}),e.EFF(2),e.k0s()()}if(2&t){const o=r.$implicit;e.R7$(2),e.JRh(o.name)}}function u(t,r){if(1&t&&e.nrm(0,"app-code-snippet",7),2&t){const o=e.XpG();e.Y8G("code",o.selectedSnippet)}}let _=(()=>{class t{constructor(){this.codeSnippets=[{name:"Debounce Function (Optimize function calls)",code:'\n    function debounce(func, delay) {\n      let timer;\n      return function (...args) {\n        clearTimeout(timer);\n        timer = setTimeout(() => func.apply(this, args), delay);\n      };\n    }\n\n    // Usage\n    window.addEventListener("resize", debounce(() => {\n      console.log("Resized!");\n    }, 500));\n    '},{name:"Throttle Function (Limit function execution)",code:'\n      function throttle(func, limit) {\n        let inThrottle;\n        return function (...args) {\n          if (!inThrottle) {\n            func.apply(this, args);\n            inThrottle = true;\n            setTimeout(() => (inThrottle = false), limit);\n          }\n        };\n      }\n\n      // Usage\n      window.addEventListener("scroll", throttle(() => {\n        console.log("Scrolled!");\n      }, 1000));\n\n      '},{name:"Copy Text to Clipboard",code:'\n    function copyToClipboard(text) {\n      navigator.clipboard.writeText(text).then(() => {\n        console.log("Text copied to clipboard!");\n      });\n    }\n\n    // Usage\n    copyToClipboard("Hello, World!");\n    '},{name:"Generate a Random Number in a Range",code:"\n      function getRandom(min, max) {\n        return Math.floor(Math.random() * (max - min + 1)) + min;\n      }\n\n      // Usage\n      console.log(getRandom(1, 100));\n      "},{name:"Remove Duplicates from an Array",code:"\n      function removeDuplicates(arr) {\n        return [...new Set(arr)];\n      }\n\n      // Usage\n      console.log(removeDuplicates([1, 2, 2, 3, 4, 4])); // [1, 2, 3, 4]\n      "},{name:"Sort array",code:"\n      //Ascending\n      const sortAscending = (array) => array.sort((a, b) => a - b);\n\n      //Descending\n      const sortDescending = (array) => array.sort((a, b) => b - a);\n      "},{name:"Remove duplicated values in an array",code:"\n      function removeDuplicatedVal(arr) {\n        return [...new Set(arr)];\n      }\n\n      // Usage\n      console.log(removeDuplicatedVal([1, 2, 2, 3, 4, 4])); // [1, 2, 3, 4]\n      "}],this.selectedSnippet=""}static{this.\u0275fac=function(a){return new(a||t)}}static{this.\u0275cmp=e.VBU({type:t,selectors:[["app-js-snippet"]],standalone:!0,features:[e.aNF],decls:9,vars:1,consts:[["header","JS Snippets","description","JS Snippets"],[1,"row"],[1,"col-4"],[1,"snippet-list"],[1,"col-8"],["language","javascript",3,"code",4,"ngIf"],[1,"pointer",3,"click"],["language","javascript",3,"code"]],template:function(a,i){1&a&&(e.nrm(0,"app-page-header",0),e.j41(1,"div",1)(2,"div",2)(3,"div",3)(4,"mat-list"),e.Z7z(5,m,3,1,"mat-list-item",null,e.fX1),e.k0s()()(),e.j41(7,"div",4),e.DNE(8,u,1,1,"app-code-snippet",5),e.k0s()()),2&a&&(e.R7$(5),e.Dyx(i.codeSnippets),e.R7$(3),e.Y8G("ngIf",i.selectedSnippet))},dependencies:[p.y,c.jt,c.YE,l.W,d.bT],styles:[".snippet-list[_ngcontent-%COMP%]{height:400px;overflow-y:auto}"]})}}return t})()}}]);