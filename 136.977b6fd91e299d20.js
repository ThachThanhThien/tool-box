"use strict";(self.webpackChunktool_box=self.webpackChunktool_box||[]).push([[136],{136:(m,s,a)=>{a.r(s),a.d(s,{WordCounterComponent:()=>c});var t=a(9417),d=a(7376),i=a(1532),l=a(9631),n=a(3301),e=a(4438);let c=(()=>{class u{constructor(){this.value="",this.wordNumber=0,this.characterNumber=0}count(){this.wordNumber=this.value.trim()?this.value.trim().split(/\s+/).length:0,this.characterNumber=(0,d.size)(this.value)}static#e=this.\u0275fac=function(_){return new(_||u)};static#t=this.\u0275cmp=e.VBU({type:u,selectors:[["app-word-counter"]],standalone:!0,features:[e.aNF],decls:12,vars:5,consts:[["header","Word Counter","description","Count the number of words and characters"],[1,"mt-4","mb-2",2,"font-size","20px"],[1,"row"],[1,"col-12"],[1,"w-100"],["matInput","","rows","13",3,"ngModelChange","ngModel"]],template:function(_,r){1&_&&(e.nrm(0,"app-page-header",0),e.j41(1,"div",1)(2,"b"),e.EFF(3),e.k0s(),e.EFF(4),e.j41(5,"b"),e.EFF(6),e.k0s(),e.EFF(7),e.k0s(),e.j41(8,"div",2)(9,"div",3)(10,"mat-form-field",4)(11,"textarea",5),e.mxI("ngModelChange",function(h){return e.DH7(r.value,h)||(r.value=h),h}),e.bIt("ngModelChange",function(){return r.count()}),e.k0s()()()()),2&_&&(e.R7$(3),e.JRh(r.wordNumber),e.R7$(),e.SpI(" word",1===r.wordNumber?"":"s"," "),e.R7$(2),e.JRh(r.characterNumber),e.R7$(),e.SpI(" character",1===r.characterNumber?"":"s","\n"),e.R7$(4),e.R50("ngModel",r.value))},dependencies:[t.YN,t.me,t.BC,t.vS,i.RG,i.rl,l.fS,l.fg,n.y],styles:["textarea[_ngcontent-%COMP%]{width:100%}"]})}return u})()},3301:(m,s,a)=>{a.d(s,{y:()=>d});var t=a(4438);let d=(()=>{class o{constructor(){this.header="",this.description=""}static#e=this.\u0275fac=function(n){return new(n||o)};static#t=this.\u0275cmp=t.VBU({type:o,selectors:[["app-page-header"]],inputs:{header:"header",description:"description"},standalone:!0,features:[t.aNF],decls:5,vars:2,consts:[[1,"mb-0"],[1,"my-1"],[1,"text-muted"]],template:function(n,e){1&n&&(t.j41(0,"h1",0),t.EFF(1),t.k0s(),t.nrm(2,"hr",1),t.j41(3,"small",2),t.EFF(4),t.k0s()),2&n&&(t.R7$(),t.JRh(e.header),t.R7$(3),t.JRh(e.description))}})}return o})()}}]);