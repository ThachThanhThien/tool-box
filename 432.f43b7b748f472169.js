"use strict";(self.webpackChunktool_box=self.webpackChunktool_box||[]).push([[432],{7432:(C,p,r)=>{r.r(p),r.d(p,{PasswordGeneratorComponent:()=>E});var i=r(9417),g=r(882),m=r(9631),u=r(3301),_=r(3881),l=r(8834),M=r(2765),o=r(1447),e=r(4438);const d={veryWeak:{name:"Very Weak",color:"#f62626",icon:""},weak:{name:"Weak",color:"#dc6916",icon:""},good:{name:"Good",color:"#f8d005",icon:""},strong:{name:"Strong",color:"#32dd82",icon:""},veryStrong:{name:"Very Strong",color:"#3bef05",icon:""}};let E=(()=>{class c extends o.q{constructor(){super(...arguments),this.password="",this.passwordLength=9,this.hasUppercase=!0,this.hasLowerCase=!0,this.hasNumber=!0,this.hasSpecialChar=!1,this.passStrength={}}ngOnInit(){this.generatePassword()}generatePassword(){let a="";if(this.hasUppercase&&(a+="ABCDEFGHIJKLMNOPQRSTUVWXYZ"),this.hasLowerCase&&(a+="abcdefghijklmnopqrstuvwxyz"),this.hasNumber&&(a+="0123456789"),this.hasSpecialChar&&(a+="!@#$%^&*()_+{}[];:<>,./?~-="),this.password="",a){for(let s=0;s<this.passwordLength;s++){const t=Math.floor(Math.random()*a.length);this.password+=a[t]}this.passStrength=this.calculatePasswordEntropy(this.password)}else this.passStrength={}}calculatePasswordEntropy(a){let s=0;/[a-z]/.test(a)&&(s+=26),/[A-Z]/.test(a)&&(s+=26),/[0-9]/.test(a)&&(s+=10),/[@#$%^&*!()_+|~=`{}\[\]:";'<>?,.\/\\]/.test(a)&&(s+=32),/[\u0080-\uFFFF]/.test(a)&&(s+=100);const t=a.length*Math.log2(s);return t<28?d.veryWeak:t<36?d.weak:t<60?d.good:t<128?d.strong:d.veryStrong}static{this.\u0275fac=(()=>{let a;return function(t){return(a||(a=e.xGo(c)))(t||c)}})()}static{this.\u0275cmp=e.VBU({type:c,selectors:[["app-password-generator"]],standalone:!0,features:[e.Vt3,e.aNF],decls:30,vars:14,consts:[["header","Password Generator","description","Create strong and secure passwords to keep your account safe online"],[1,"row","mt-4","d-flex","justify-content-center"],[1,"col-7"],[1,"d-flex","align-items-center"],[1,"w-100"],["matInput","","disabled","","spellcheck","false",1,"text-white",3,"value"],["matSuffix","","disabled","",1,"password-strength"],["mat-icon-button","","matSuffix","",3,"click"],[1,"fa-solid","fa-rotate-right"],[1,"fa-regular","fa-copy","me-2"],["min","1","max","50","step","1",1,"ms-5","w-50"],["matSliderThumb","",3,"ngModelChange","ngModel"],[1,"ms-5"],[3,"ngModelChange","ngModel"]],template:function(s,t){1&s&&(e.nrm(0,"app-page-header",0),e.j41(1,"div",1)(2,"div",2)(3,"div",3)(4,"mat-form-field",4),e.nrm(5,"input",5),e.j41(6,"button",6),e.EFF(7),e.k0s(),e.j41(8,"button",7),e.bIt("click",function(){return t.generatePassword()}),e.nrm(9,"i",8),e.k0s(),e.j41(10,"button",7),e.bIt("click",function(){return t.copyString(t.password)}),e.nrm(11,"i",9),e.k0s()()(),e.j41(12,"div",3)(13,"div"),e.EFF(14," Password length: "),e.j41(15,"strong"),e.EFF(16),e.k0s()(),e.j41(17,"mat-slider",10)(18,"input",11),e.mxI("ngModelChange",function(n){return e.DH7(t.passwordLength,n)||(t.passwordLength=n),n}),e.bIt("ngModelChange",function(){return t.generatePassword()}),e.k0s()()(),e.j41(19,"div",3),e.EFF(20," Characters used: "),e.j41(21,"section",12)(22,"mat-checkbox",13),e.mxI("ngModelChange",function(n){return e.DH7(t.hasUppercase,n)||(t.hasUppercase=n),n}),e.bIt("ngModelChange",function(){return t.generatePassword()}),e.EFF(23,"ABC"),e.k0s(),e.j41(24,"mat-checkbox",13),e.mxI("ngModelChange",function(n){return e.DH7(t.hasLowerCase,n)||(t.hasLowerCase=n),n}),e.bIt("ngModelChange",function(){return t.generatePassword()}),e.EFF(25,"abc"),e.k0s(),e.j41(26,"mat-checkbox",13),e.mxI("ngModelChange",function(n){return e.DH7(t.hasNumber,n)||(t.hasNumber=n),n}),e.bIt("ngModelChange",function(){return t.generatePassword()}),e.EFF(27,"123"),e.k0s(),e.j41(28,"mat-checkbox",13),e.mxI("ngModelChange",function(n){return e.DH7(t.hasSpecialChar,n)||(t.hasSpecialChar=n),n}),e.bIt("ngModelChange",function(){return t.generatePassword()}),e.EFF(29),e.k0s()()()()()),2&s&&(e.R7$(5),e.Y8G("value",t.password),e.R7$(),e.muq("--bgColor: ",t.passStrength.color||"transparent",""),e.R7$(),e.SpI(" ",t.passStrength.name," "),e.R7$(),e.BMQ("aria-label","Generate"),e.R7$(2),e.BMQ("aria-label","Copy"),e.R7$(6),e.JRh(t.passwordLength),e.R7$(2),e.R50("ngModel",t.passwordLength),e.R7$(4),e.R50("ngModel",t.hasUppercase),e.R7$(2),e.R50("ngModel",t.hasLowerCase),e.R7$(2),e.R50("ngModel",t.hasNumber),e.R7$(2),e.R50("ngModel",t.hasSpecialChar),e.R7$(),e.JRh("@#$"))},dependencies:[i.YN,i.me,i.BC,i.vS,g.rl,m.fg,u.y,_.IV,_.OU,l.iY,g.yw,M.So],styles:["i[_ngcontent-%COMP%]{font-size:14px}.password-strength[_ngcontent-%COMP%]{background:var(--bgColor);font-size:11px;color:#393939;--bgColor: red;padding:10px;border:none;border-radius:8px;font-weight:700}  .mat-mdc-form-field-infix input{font-size:13px!important;text-overflow:ellipsis}"]})}}return c})()},1447:(C,p,r)=>{r.d(p,{q:()=>_});var i=r(4438),g=r(5416);let m=(()=>{class l{constructor(o){this._snackBar=o}copyString(o){o&&navigator.clipboard.writeText(o).then(()=>{this._snackBar.open("Copy successfully","",{duration:2e3})})}static{this.\u0275fac=function(e){return new(e||l)(i.KVO(g.UG))}}static{this.\u0275prov=i.jDH({token:l,factory:l.\u0275fac,providedIn:"root"})}}return l})();var u=r(8806);let _=(()=>{class l{constructor(o){this.helperServices=o.get(m),this.router=o.get(u.Ix)}copyString(o){this.helperServices.copyString(o)}static{this.\u0275fac=function(e){return new(e||l)(i.rXU(i.zZn))}}static{this.\u0275cmp=i.VBU({type:l,selectors:[["app-app-base"]],standalone:!0,features:[i.aNF],decls:0,vars:0,template:function(e,f){},encapsulation:2})}}return l})()}}]);