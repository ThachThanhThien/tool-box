"use strict";(self.webpackChunktool_box=self.webpackChunktool_box||[]).push([[728],{5728:(f,r,a)=>{a.r(r),a.d(r,{Base64Component:()=>C});var s=a(9417),u=a(5752),d=a(882),c=a(9631),m=a(3301),e=a(4438),g=a(5416);function p(t,E){1&t&&e.EFF(0," Encode ")}function h(t,E){1&t&&e.EFF(0," Decode ")}let C=(()=>{class t{constructor(i){this._snackBar=i,this.baseValue="",this.resultValue="",this.isEncoding=!1}ngOnInit(){}onBaseValueChange(){this.resultValue=this.isEncoding?btoa(this.baseValue):atob(this.baseValue)}decode(){this.isEncoding=!this.isEncoding,this.onBaseValueChange()}copy(){(0,u.l)(this.resultValue),this._snackBar.open("Copy successfully","",{duration:2e3})}static{this.\u0275fac=function(l){return new(l||t)(e.rXU(g.UG))}}static{this.\u0275cmp=e.VBU({type:t,selectors:[["app-base64"]],standalone:!0,features:[e.aNF],decls:14,vars:3,consts:[["header","Base64","description","Decode from Base64 encoding and encode into it"],[1,"mt-4"],[1,"w-100"],["matInput","","rows","10",3,"ngModelChange","ngModel"],[1,"btn","btn-primary","my-2",3,"click"],[1,"fa-regular","fa-copy","me-2"]],template:function(l,n){1&l&&(e.nrm(0,"app-page-header",0),e.j41(1,"div",1)(2,"h1"),e.EFF(3,"Base64 Converter"),e.k0s(),e.j41(4,"mat-form-field",2)(5,"textarea",3),e.mxI("ngModelChange",function(o){return e.DH7(n.baseValue,o)||(n.baseValue=o),o}),e.bIt("ngModelChange",function(){return n.onBaseValueChange()}),e.k0s()(),e.j41(6,"button",4),e.bIt("click",function(){return n.decode()}),e.DNE(7,p,1,0)(8,h,1,0),e.k0s(),e.j41(9,"mat-form-field",2)(10,"textarea",3),e.mxI("ngModelChange",function(o){return e.DH7(n.resultValue,o)||(n.resultValue=o),o}),e.k0s()(),e.j41(11,"button",4),e.bIt("click",function(){return n.copy()}),e.nrm(12,"i",5),e.EFF(13,"Copy to clipboard"),e.k0s()()),2&l&&(e.R7$(5),e.R50("ngModel",n.baseValue),e.R7$(2),e.vxM(7,n.isEncoding?7:8),e.R7$(3),e.R50("ngModel",n.resultValue))},dependencies:[s.X1,s.me,s.BC,s.YN,s.vS,d.rl,c.fg,m.y]})}}return t})()}}]);