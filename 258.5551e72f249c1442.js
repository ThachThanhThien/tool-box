"use strict";(self.webpackChunktool_box=self.webpackChunktool_box||[]).push([[258],{11258:($,p,d)=>{d.r(p),d.d(p,{JwtDecodeComponent:()=>E});class s extends Error{}s.prototype.name="InvalidTokenError";var v=d(73301),c=d(89417),h=d(60177),u=d(40882),k=d(99631),T=d(67376),w=d(14823),e=d(54438);function J(t,n){if(1&t&&(e.j41(0,"div",10),e.EFF(1),e.k0s()),2&t){const o=e.XpG();e.R7$(),e.SpI(" ",o.errorMessage," ")}}function j(t,n){1&t&&(e.j41(0,"div",7),e.nrm(1,"hr",15),e.k0s())}function F(t,n){if(1&t&&(e.j41(0,"div",12)(1,"div",13)(2,"span",14),e.EFF(3),e.k0s()(),e.j41(4,"div",13),e.EFF(5),e.k0s(),e.DNE(6,j,2,0,"div",6),e.k0s()),2&t){const o=n.$implicit,i=n.index,r=e.XpG(2);e.R7$(2),e.Y8G("matTooltip",r.getTooltipForJwtProps(o[0])),e.R7$(),e.JRh(o[0]),e.R7$(2),e.JRh(o[1]),e.R7$(),e.Y8G("ngIf",i<r.size(r.decodedHeader)-1)}}function C(t,n){if(1&t&&(e.j41(0,"div",7)(1,"div",11)(2,"label"),e.EFF(3,"Header"),e.k0s()(),e.DNE(4,F,7,4,"div",9),e.k0s()),2&t){const o=e.XpG();e.R7$(4),e.Y8G("ngForOf",o.decodedHeader)}}function I(t,n){1&t&&(e.j41(0,"div",11)(1,"label"),e.EFF(2,"Payload"),e.k0s()())}function b(t,n){1&t&&(e.j41(0,"div",7),e.nrm(1,"hr",15),e.k0s())}function D(t,n){if(1&t&&(e.j41(0,"div",12)(1,"div",13)(2,"span",14),e.EFF(3),e.k0s()(),e.j41(4,"div",13),e.EFF(5),e.k0s(),e.DNE(6,b,2,0,"div",6),e.k0s()),2&t){const o=n.$implicit,i=n.index,r=e.XpG();e.R7$(2),e.Y8G("matTooltip",r.getTooltipForJwtProps(o[0])),e.R7$(),e.JRh(o[0]),e.R7$(2),e.JRh(o[1]),e.R7$(),e.Y8G("ngIf",i<r.size(r.decodedToken)-1)}}const R={alg:"Signature or encryption algorithm",typ:"Type of token",sub:"Subject (whom the token refers to)",jti:"JWT ID (unique identifier for this token)",iat:"Issued at (seconds since Unix epoch)",nbf:"Not valid before (seconds since Unix epoch)",exp:"Expiration time (seconds since Unix epoch)",iss:"Issuer (who created and signed this token)",aud:"Audience (who or what the token is intended for)"};let E=(()=>{class t{constructor(){this.jwtToken="",this.decodedToken=[],this.decodedHeader=[],this.errorMessage="",this.size=T.size}decodeToken(){try{const o=this.jwtToken.split(".");if(3!==o.length)throw new Error("Invalid JWT Token");const i=atob(o[0]);this.decodedHeader=Object.entries(JSON.parse(i)),this.decodedToken=Object.entries(function g(t,n){if("string"!=typeof t)throw new s("Invalid token specified: must be a string");n||(n={});const o=!0===n.header?0:1,i=t.split(".")[o];if("string"!=typeof i)throw new s(`Invalid token specified: missing part #${o+1}`);let r;try{r=function m(t){let n=t.replace(/-/g,"+").replace(/_/g,"/");switch(n.length%4){case 0:break;case 2:n+="==";break;case 3:n+="=";break;default:throw new Error("base64 string is not of the correct length")}try{return function f(t){return decodeURIComponent(atob(t).replace(/(.)/g,(n,o)=>{let i=o.charCodeAt(0).toString(16).toUpperCase();return i.length<2&&(i="0"+i),"%"+i}))}(n)}catch{return atob(n)}}(i)}catch(a){throw new s(`Invalid token specified: invalid base64 for part #${o+1} (${a.message})`)}try{return JSON.parse(r)}catch(a){throw new s(`Invalid token specified: invalid json for part #${o+1} (${a.message})`)}}(this.jwtToken)),this.errorMessage=""}catch{this.errorMessage="Invalid JWT Token!",this.decodedToken=[],this.decodedHeader=[]}}getTooltipForJwtProps(o){return R[o]||""}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=e.VBU({type:t,selectors:[["app-jwt-decode"]],standalone:!0,features:[e.aNF],decls:12,vars:5,consts:[["header","JWT parser","description","JSON Web Tokens are an open, industry standard RFC 7519 method for representing claims securely between two parties."],[1,"mt-3"],[1,"w-100"],["matInput","","rows","10",3,"ngModelChange","ngModel"],["class","error",4,"ngIf"],[1,"row","mt-2"],["class","col-12",4,"ngIf"],[1,"col-12"],["class","col-12 header",4,"ngIf"],["class","row",4,"ngFor","ngForOf"],[1,"error"],[1,"col-12","header"],[1,"row"],[1,"col-6","text-break"],["matTooltipPosition","right",3,"matTooltip"],[1,"my-2"]],template:function(i,r){1&i&&(e.nrm(0,"app-page-header",0),e.j41(1,"div",1)(2,"label"),e.EFF(3,"JWT"),e.k0s(),e.j41(4,"mat-form-field",2)(5,"textarea",3),e.mxI("ngModelChange",function(l){return e.DH7(r.jwtToken,l)||(r.jwtToken=l),l}),e.bIt("ngModelChange",function(){return r.decodeToken()}),e.k0s()(),e.DNE(6,J,2,1,"div",4),e.j41(7,"div",5),e.DNE(8,C,5,1,"div",6),e.j41(9,"div",7),e.DNE(10,I,3,0,"div",8)(11,D,7,4,"div",9),e.k0s()()()),2&i&&(e.R7$(5),e.R50("ngModel",r.jwtToken),e.R7$(),e.Y8G("ngIf",r.errorMessage),e.R7$(2),e.Y8G("ngIf",r.size(r.decodedHeader)),e.R7$(2),e.Y8G("ngIf",r.size(r.decodedToken)),e.R7$(),e.Y8G("ngForOf",r.decodedToken))},dependencies:[v.y,c.YN,c.me,c.BC,c.vS,h.bT,u.rl,k.fg,h.Sq,w.oV],styles:[".header[_ngcontent-%COMP%]{text-align:center;padding:10px;background:#4d4d4d;border-radius:3px;margin-bottom:.5rem;margin-top:1rem}"]})}}return t})()}}]);