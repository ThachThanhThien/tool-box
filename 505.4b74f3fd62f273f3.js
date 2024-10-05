"use strict";(self.webpackChunktool_box=self.webpackChunktool_box||[]).push([[505],{9505:(p,c,r)=>{r.r(c),r.d(c,{TemperatureComponent:()=>m});var n=r(3301),f=r(1532),l=r(9631),u=r(9417),t=r(4438);function s(a,_){if(1&a){const e=t.RV6();t.j41(0,"div",2)(1,"div",3)(2,"label"),t.EFF(3),t.k0s()(),t.j41(4,"div",4)(5,"mat-form-field",5)(6,"input",6),t.mxI("ngModelChange",function(o){const d=t.eBV(e).$implicit;return t.DH7(d.value,o)||(d.value=o),t.Njj(o)}),t.bIt("ngModelChange",function(){const o=t.eBV(e).$implicit,d=t.XpG();return t.Njj(d.onChangeTemperature(o))}),t.k0s()()(),t.j41(7,"div",7)(8,"label"),t.EFF(9),t.k0s()()()}if(2&a){const e=_.$implicit;t.R7$(3),t.JRh(e.label),t.R7$(3),t.R50("ngModel",e.value),t.R7$(3),t.JRh(e.unit)}}let m=(()=>{class a{constructor(){this.targetValue=[{label:"Kelvin",value:0,unit:"K",convertToCelsiusFunc:e=>e-273.15,convertFromCelsiusFunc:e=>e+273.15},{label:"Celsius",value:37,unit:"\xb0C",convertToCelsiusFunc:e=>e,convertFromCelsiusFunc:e=>e},{label:"Fahrenheit",value:0,unit:"\xb0F",convertToCelsiusFunc:e=>5*(e-32)/9,convertFromCelsiusFunc:e=>9*e/5+32},{label:"Rankine",value:0,unit:"\xb0R",convertToCelsiusFunc:e=>5*(e-491.67)/9,convertFromCelsiusFunc:e=>9*(e+273.15)/5},{label:"Newton",value:0,unit:"\xb0N",convertToCelsiusFunc:e=>100*e/33,convertFromCelsiusFunc:e=>33*e/100},{label:"R\xf8mer",value:0,unit:"\xb0R\xf8",convertToCelsiusFunc:e=>40*(e-7.5)/21,convertFromCelsiusFunc:e=>21*e/40+7.5},{label:"R\xe9aumur",value:0,unit:"\xb0R\xe9",convertToCelsiusFunc:e=>5*e/4,convertFromCelsiusFunc:e=>4*e/5},{label:"Delisle",value:0,unit:"\xb0De",convertToCelsiusFunc:e=>100-2*e/3,convertFromCelsiusFunc:e=>3*(100-e)/2}]}ngOnInit(){this.onChangeTemperature(this.targetValue[1])}onChangeTemperature(e){const i=e.convertToCelsiusFunc(Number(e.value));this.targetValue.forEach(o=>{o.unit!==e.unit&&(o.value=o.convertFromCelsiusFunc(i))})}static#e=this.\u0275fac=function(i){return new(i||a)};static#t=this.\u0275cmp=t.VBU({type:a,selectors:[["app-temperature"]],standalone:!0,features:[t.aNF],decls:4,vars:0,consts:[["header","Temperature Converter","description","Temperature Converter"],[1,"row","d-flex","justify-content-center","mt-4"],[1,"row","w-75","mb-2","d-flex","align-items-center"],[1,"col-2","field-prefix"],[1,"col-8","p-0","m-0"],[1,"w-100"],["matInput","","spellcheck","false",3,"ngModelChange","ngModel"],[1,"col-1","field-suffix","justify-content-center"]],template:function(i,o){1&i&&(t.nrm(0,"app-page-header",0),t.j41(1,"div",1),t.Z7z(2,s,10,3,"div",2,t.fX1),t.k0s()),2&i&&(t.R7$(2),t.Dyx(o.targetValue))},dependencies:[n.y,f.rl,l.fg,u.X1,u.me,u.BC,u.YN,u.vS],styles:["[_nghost-%COMP%]     mat-form-field .mdc-text-field--filled{height:40px!important}[_nghost-%COMP%]     mat-form-field .mat-mdc-form-field-infix{min-height:40px!important}[_nghost-%COMP%]     mat-form-field .mat-mdc-form-field-icon-suffix button{height:-moz-fit-content;height:fit-content;padding:0}[_nghost-%COMP%]     mat-form-field .mat-mdc-form-field-icon-suffix button .mat-mdc-button-persistent-ripple:before{background-color:transparent}[_nghost-%COMP%]     mat-form-field .mat-mdc-form-field-icon-suffix button .fa-copy{font-weight:100!important;font-size:17px}[_nghost-%COMP%]     mat-form-field .mdc-text-field{border-radius:0!important}.field-prefix[_ngcontent-%COMP%], .field-suffix[_ngcontent-%COMP%]{height:40px;padding:10px;margin:0;background:#4a4a4a;display:flex;align-items:center}.field-prefix[_ngcontent-%COMP%]{border-right:1px solid #858585;border-top-left-radius:5px;border-bottom-left-radius:5px}.field-suffix[_ngcontent-%COMP%]{border-left:1px solid #858585;border-top-right-radius:5px;border-bottom-right-radius:5px}"]})}return a})()},3301:(p,c,r)=>{r.d(c,{y:()=>f});var n=r(4438);let f=(()=>{class l{constructor(){this.header="",this.description=""}static#e=this.\u0275fac=function(s){return new(s||l)};static#t=this.\u0275cmp=n.VBU({type:l,selectors:[["app-page-header"]],inputs:{header:"header",description:"description"},standalone:!0,features:[n.aNF],decls:5,vars:2,consts:[[1,"mb-0"],[1,"my-1"],[1,"text-muted"]],template:function(s,m){1&s&&(n.j41(0,"h1",0),n.EFF(1),n.k0s(),n.nrm(2,"hr",1),n.j41(3,"small",2),n.EFF(4),n.k0s()),2&s&&(n.R7$(),n.JRh(m.header),n.R7$(3),n.JRh(m.description))}})}return l})()}}]);