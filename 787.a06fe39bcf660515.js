"use strict";(self.webpackChunktool_box=self.webpackChunktool_box||[]).push([[787],{2787:(lt,y,l)=>{l.r(y),l.d(y,{JwtDecodeComponent:()=>st});class m extends Error{}m.prototype.name="InvalidTokenError";var k=l(3301),f=l(9417),_=l(177),A=l(882),L=l(9631),S=l(7376),h=l(6977),F=l(6697),u=l(4085),T=l(7336),e=l(4438),b=l(6860),w=l(8617),N=l(8203),v=l(7987),Y=l(8348),j=l(6939),I=l(1413);l(9969);const X=["tooltip"],x=new e.nKC("mat-tooltip-scroll-strategy",{providedIn:"root",factory:()=>{const s=(0,e.WQX)(v.hJ);return()=>s.scrollStrategies.reposition({scrollThrottle:20})}}),z=new e.nKC("mat-tooltip-default-options",{providedIn:"root",factory:function G(){return{showDelay:0,hideDelay:0,touchendHideDelay:1500}}}),D="tooltip-panel",R=(0,b.BQ)({passive:!0});let B=(()=>{class s{get position(){return this._position}set position(t){t!==this._position&&(this._position=t,this._overlayRef&&(this._updatePosition(this._overlayRef),this._tooltipInstance?.show(0),this._overlayRef.updatePosition()))}get positionAtOrigin(){return this._positionAtOrigin}set positionAtOrigin(t){this._positionAtOrigin=(0,u.he)(t),this._detach(),this._overlayRef=null}get disabled(){return this._disabled}set disabled(t){this._disabled=(0,u.he)(t),this._disabled?this.hide(0):this._setupPointerEnterEventsIfNeeded()}get showDelay(){return this._showDelay}set showDelay(t){this._showDelay=(0,u.OE)(t)}get hideDelay(){return this._hideDelay}set hideDelay(t){this._hideDelay=(0,u.OE)(t),this._tooltipInstance&&(this._tooltipInstance._mouseLeaveHideDelay=this._hideDelay)}get message(){return this._message}set message(t){this._ariaDescriber.removeDescription(this._elementRef.nativeElement,this._message,"tooltip"),this._message=null!=t?String(t).trim():"",!this._message&&this._isTooltipVisible()?this.hide(0):(this._setupPointerEnterEventsIfNeeded(),this._updateTooltipMessage(),this._ngZone.runOutsideAngular(()=>{Promise.resolve().then(()=>{this._ariaDescriber.describe(this._elementRef.nativeElement,this.message,"tooltip")})}))}get tooltipClass(){return this._tooltipClass}set tooltipClass(t){this._tooltipClass=t,this._tooltipInstance&&this._setTooltipClass(this._tooltipClass)}constructor(t,i,o,n,r,p,g,nt,at,E,d,rt){this._overlay=t,this._elementRef=i,this._scrollDispatcher=o,this._viewContainerRef=n,this._ngZone=r,this._platform=p,this._ariaDescriber=g,this._focusMonitor=nt,this._dir=E,this._defaultOptions=d,this._position="below",this._positionAtOrigin=!1,this._disabled=!1,this._viewInitialized=!1,this._pointerExitEventsInitialized=!1,this._tooltipComponent=Q,this._viewportMargin=8,this._cssClassPrefix="mat-mdc",this.touchGestures="auto",this._message="",this._passiveListeners=[],this._destroyed=new I.B,this._scrollStrategy=at,this._document=rt,d&&(this._showDelay=d.showDelay,this._hideDelay=d.hideDelay,d.position&&(this.position=d.position),d.positionAtOrigin&&(this.positionAtOrigin=d.positionAtOrigin),d.touchGestures&&(this.touchGestures=d.touchGestures)),E.change.pipe((0,h.Q)(this._destroyed)).subscribe(()=>{this._overlayRef&&this._updatePosition(this._overlayRef)}),this._viewportMargin=8}ngAfterViewInit(){this._viewInitialized=!0,this._setupPointerEnterEventsIfNeeded(),this._focusMonitor.monitor(this._elementRef).pipe((0,h.Q)(this._destroyed)).subscribe(t=>{t?"keyboard"===t&&this._ngZone.run(()=>this.show()):this._ngZone.run(()=>this.hide(0))})}ngOnDestroy(){const t=this._elementRef.nativeElement;clearTimeout(this._touchstartTimeout),this._overlayRef&&(this._overlayRef.dispose(),this._tooltipInstance=null),this._passiveListeners.forEach(([i,o])=>{t.removeEventListener(i,o,R)}),this._passiveListeners.length=0,this._destroyed.next(),this._destroyed.complete(),this._ariaDescriber.removeDescription(t,this.message,"tooltip"),this._focusMonitor.stopMonitoring(t)}show(t=this.showDelay,i){if(this.disabled||!this.message||this._isTooltipVisible())return void this._tooltipInstance?._cancelPendingAnimations();const o=this._createOverlay(i);this._detach(),this._portal=this._portal||new j.A8(this._tooltipComponent,this._viewContainerRef);const n=this._tooltipInstance=o.attach(this._portal).instance;n._triggerElement=this._elementRef.nativeElement,n._mouseLeaveHideDelay=this._hideDelay,n.afterHidden().pipe((0,h.Q)(this._destroyed)).subscribe(()=>this._detach()),this._setTooltipClass(this._tooltipClass),this._updateTooltipMessage(),n.show(t)}hide(t=this.hideDelay){const i=this._tooltipInstance;i&&(i.isVisible()?i.hide(t):(i._cancelPendingAnimations(),this._detach()))}toggle(t){this._isTooltipVisible()?this.hide():this.show(void 0,t)}_isTooltipVisible(){return!!this._tooltipInstance&&this._tooltipInstance.isVisible()}_createOverlay(t){if(this._overlayRef){const n=this._overlayRef.getConfig().positionStrategy;if((!this.positionAtOrigin||!t)&&n._origin instanceof e.aKT)return this._overlayRef;this._detach()}const i=this._scrollDispatcher.getAncestorScrollContainers(this._elementRef),o=this._overlay.position().flexibleConnectedTo(this.positionAtOrigin&&t||this._elementRef).withTransformOriginOn(`.${this._cssClassPrefix}-tooltip`).withFlexibleDimensions(!1).withViewportMargin(this._viewportMargin).withScrollableContainers(i);return o.positionChanges.pipe((0,h.Q)(this._destroyed)).subscribe(n=>{this._updateCurrentPositionClass(n.connectionPair),this._tooltipInstance&&n.scrollableViewProperties.isOverlayClipped&&this._tooltipInstance.isVisible()&&this._ngZone.run(()=>this.hide(0))}),this._overlayRef=this._overlay.create({direction:this._dir,positionStrategy:o,panelClass:`${this._cssClassPrefix}-${D}`,scrollStrategy:this._scrollStrategy()}),this._updatePosition(this._overlayRef),this._overlayRef.detachments().pipe((0,h.Q)(this._destroyed)).subscribe(()=>this._detach()),this._overlayRef.outsidePointerEvents().pipe((0,h.Q)(this._destroyed)).subscribe(()=>this._tooltipInstance?._handleBodyInteraction()),this._overlayRef.keydownEvents().pipe((0,h.Q)(this._destroyed)).subscribe(n=>{this._isTooltipVisible()&&n.keyCode===T._f&&!(0,T.rp)(n)&&(n.preventDefault(),n.stopPropagation(),this._ngZone.run(()=>this.hide(0)))}),this._defaultOptions?.disableTooltipInteractivity&&this._overlayRef.addPanelClass(`${this._cssClassPrefix}-tooltip-panel-non-interactive`),this._overlayRef}_detach(){this._overlayRef&&this._overlayRef.hasAttached()&&this._overlayRef.detach(),this._tooltipInstance=null}_updatePosition(t){const i=t.getConfig().positionStrategy,o=this._getOrigin(),n=this._getOverlayPosition();i.withPositions([this._addOffset({...o.main,...n.main}),this._addOffset({...o.fallback,...n.fallback})])}_addOffset(t){const o=!this._dir||"ltr"==this._dir.value;return"top"===t.originY?t.offsetY=-8:"bottom"===t.originY?t.offsetY=8:"start"===t.originX?t.offsetX=o?-8:8:"end"===t.originX&&(t.offsetX=o?8:-8),t}_getOrigin(){const t=!this._dir||"ltr"==this._dir.value,i=this.position;let o;"above"==i||"below"==i?o={originX:"center",originY:"above"==i?"top":"bottom"}:"before"==i||"left"==i&&t||"right"==i&&!t?o={originX:"start",originY:"center"}:("after"==i||"right"==i&&t||"left"==i&&!t)&&(o={originX:"end",originY:"center"});const{x:n,y:r}=this._invertPosition(o.originX,o.originY);return{main:o,fallback:{originX:n,originY:r}}}_getOverlayPosition(){const t=!this._dir||"ltr"==this._dir.value,i=this.position;let o;"above"==i?o={overlayX:"center",overlayY:"bottom"}:"below"==i?o={overlayX:"center",overlayY:"top"}:"before"==i||"left"==i&&t||"right"==i&&!t?o={overlayX:"end",overlayY:"center"}:("after"==i||"right"==i&&t||"left"==i&&!t)&&(o={overlayX:"start",overlayY:"center"});const{x:n,y:r}=this._invertPosition(o.overlayX,o.overlayY);return{main:o,fallback:{overlayX:n,overlayY:r}}}_updateTooltipMessage(){this._tooltipInstance&&(this._tooltipInstance.message=this.message,this._tooltipInstance._markForCheck(),this._ngZone.onMicrotaskEmpty.pipe((0,F.s)(1),(0,h.Q)(this._destroyed)).subscribe(()=>{this._tooltipInstance&&this._overlayRef.updatePosition()}))}_setTooltipClass(t){this._tooltipInstance&&(this._tooltipInstance.tooltipClass=t,this._tooltipInstance._markForCheck())}_invertPosition(t,i){return"above"===this.position||"below"===this.position?"top"===i?i="bottom":"bottom"===i&&(i="top"):"end"===t?t="start":"start"===t&&(t="end"),{x:t,y:i}}_updateCurrentPositionClass(t){const{overlayY:i,originX:o,originY:n}=t;let r;if(r="center"===i?this._dir&&"rtl"===this._dir.value?"end"===o?"left":"right":"start"===o?"left":"right":"bottom"===i&&"top"===n?"above":"below",r!==this._currentPosition){const p=this._overlayRef;if(p){const g=`${this._cssClassPrefix}-${D}-`;p.removePanelClass(g+this._currentPosition),p.addPanelClass(g+r)}this._currentPosition=r}}_setupPointerEnterEventsIfNeeded(){this._disabled||!this.message||!this._viewInitialized||this._passiveListeners.length||(this._platformSupportsMouseEvents()?this._passiveListeners.push(["mouseenter",t=>{let i;this._setupPointerExitEventsIfNeeded(),void 0!==t.x&&void 0!==t.y&&(i=t),this.show(void 0,i)}]):"off"!==this.touchGestures&&(this._disableNativeGesturesIfNecessary(),this._passiveListeners.push(["touchstart",t=>{const i=t.targetTouches?.[0],o=i?{x:i.clientX,y:i.clientY}:void 0;this._setupPointerExitEventsIfNeeded(),clearTimeout(this._touchstartTimeout),this._touchstartTimeout=setTimeout(()=>this.show(void 0,o),this._defaultOptions.touchLongPressShowDelay??500)}])),this._addListeners(this._passiveListeners))}_setupPointerExitEventsIfNeeded(){if(this._pointerExitEventsInitialized)return;this._pointerExitEventsInitialized=!0;const t=[];if(this._platformSupportsMouseEvents())t.push(["mouseleave",i=>{const o=i.relatedTarget;(!o||!this._overlayRef?.overlayElement.contains(o))&&this.hide()}],["wheel",i=>this._wheelListener(i)]);else if("off"!==this.touchGestures){this._disableNativeGesturesIfNecessary();const i=()=>{clearTimeout(this._touchstartTimeout),this.hide(this._defaultOptions.touchendHideDelay)};t.push(["touchend",i],["touchcancel",i])}this._addListeners(t),this._passiveListeners.push(...t)}_addListeners(t){t.forEach(([i,o])=>{this._elementRef.nativeElement.addEventListener(i,o,R)})}_platformSupportsMouseEvents(){return!this._platform.IOS&&!this._platform.ANDROID}_wheelListener(t){if(this._isTooltipVisible()){const i=this._document.elementFromPoint(t.clientX,t.clientY),o=this._elementRef.nativeElement;i!==o&&!o.contains(i)&&this.hide()}}_disableNativeGesturesIfNecessary(){const t=this.touchGestures;if("off"!==t){const i=this._elementRef.nativeElement,o=i.style;("on"===t||"INPUT"!==i.nodeName&&"TEXTAREA"!==i.nodeName)&&(o.userSelect=o.msUserSelect=o.webkitUserSelect=o.MozUserSelect="none"),("on"===t||!i.draggable)&&(o.webkitUserDrag="none"),o.touchAction="none",o.webkitTapHighlightColor="transparent"}}static{this.\u0275fac=function(i){return new(i||s)(e.rXU(v.hJ),e.rXU(e.aKT),e.rXU(Y.R),e.rXU(e.c1b),e.rXU(e.SKi),e.rXU(b.OD),e.rXU(w.vr),e.rXU(w.FN),e.rXU(x),e.rXU(N.dS),e.rXU(z,8),e.rXU(_.qQ))}}static{this.\u0275dir=e.FsC({type:s,selectors:[["","matTooltip",""]],hostAttrs:[1,"mat-mdc-tooltip-trigger"],hostVars:2,hostBindings:function(i,o){2&i&&e.AVh("mat-mdc-tooltip-disabled",o.disabled)},inputs:{position:[e.Mj6.None,"matTooltipPosition","position"],positionAtOrigin:[e.Mj6.None,"matTooltipPositionAtOrigin","positionAtOrigin"],disabled:[e.Mj6.None,"matTooltipDisabled","disabled"],showDelay:[e.Mj6.None,"matTooltipShowDelay","showDelay"],hideDelay:[e.Mj6.None,"matTooltipHideDelay","hideDelay"],touchGestures:[e.Mj6.None,"matTooltipTouchGestures","touchGestures"],message:[e.Mj6.None,"matTooltip","message"],tooltipClass:[e.Mj6.None,"matTooltipClass","tooltipClass"]},exportAs:["matTooltip"],standalone:!0})}}return s})(),Q=(()=>{class s{constructor(t,i,o){this._changeDetectorRef=t,this._elementRef=i,this._isMultiline=!1,this._closeOnInteraction=!1,this._isVisible=!1,this._onHide=new I.B,this._showAnimation="mat-mdc-tooltip-show",this._hideAnimation="mat-mdc-tooltip-hide",this._animationsDisabled="NoopAnimations"===o}show(t){null!=this._hideTimeoutId&&clearTimeout(this._hideTimeoutId),this._showTimeoutId=setTimeout(()=>{this._toggleVisibility(!0),this._showTimeoutId=void 0},t)}hide(t){null!=this._showTimeoutId&&clearTimeout(this._showTimeoutId),this._hideTimeoutId=setTimeout(()=>{this._toggleVisibility(!1),this._hideTimeoutId=void 0},t)}afterHidden(){return this._onHide}isVisible(){return this._isVisible}ngOnDestroy(){this._cancelPendingAnimations(),this._onHide.complete(),this._triggerElement=null}_handleBodyInteraction(){this._closeOnInteraction&&this.hide(0)}_markForCheck(){this._changeDetectorRef.markForCheck()}_handleMouseLeave({relatedTarget:t}){(!t||!this._triggerElement.contains(t))&&(this.isVisible()?this.hide(this._mouseLeaveHideDelay):this._finalizeAnimation(!1))}_onShow(){this._isMultiline=this._isTooltipMultiline(),this._markForCheck()}_isTooltipMultiline(){const t=this._elementRef.nativeElement.getBoundingClientRect();return t.height>24&&t.width>=200}_handleAnimationEnd({animationName:t}){(t===this._showAnimation||t===this._hideAnimation)&&this._finalizeAnimation(t===this._showAnimation)}_cancelPendingAnimations(){null!=this._showTimeoutId&&clearTimeout(this._showTimeoutId),null!=this._hideTimeoutId&&clearTimeout(this._hideTimeoutId),this._showTimeoutId=this._hideTimeoutId=void 0}_finalizeAnimation(t){t?this._closeOnInteraction=!0:this.isVisible()||this._onHide.next()}_toggleVisibility(t){const i=this._tooltip.nativeElement,o=this._showAnimation,n=this._hideAnimation;if(i.classList.remove(t?n:o),i.classList.add(t?o:n),this._isVisible!==t&&(this._isVisible=t,this._changeDetectorRef.markForCheck()),t&&!this._animationsDisabled&&"function"==typeof getComputedStyle){const r=getComputedStyle(i);("0s"===r.getPropertyValue("animation-duration")||"none"===r.getPropertyValue("animation-name"))&&(this._animationsDisabled=!0)}t&&this._onShow(),this._animationsDisabled&&(i.classList.add("_mat-animation-noopable"),this._finalizeAnimation(t))}static{this.\u0275fac=function(i){return new(i||s)(e.rXU(e.gRc),e.rXU(e.aKT),e.rXU(e.bc$,8))}}static{this.\u0275cmp=e.VBU({type:s,selectors:[["mat-tooltip-component"]],viewQuery:function(i,o){if(1&i&&e.GBs(X,7),2&i){let n;e.mGM(n=e.lsd())&&(o._tooltip=n.first)}},hostAttrs:["aria-hidden","true"],hostVars:2,hostBindings:function(i,o){1&i&&e.bIt("mouseleave",function(r){return o._handleMouseLeave(r)}),2&i&&e.xc7("zoom",o.isVisible()?1:null)},standalone:!0,features:[e.aNF],decls:4,vars:4,consts:[["tooltip",""],[1,"mdc-tooltip","mdc-tooltip--shown","mat-mdc-tooltip",3,"animationend","ngClass"],[1,"mdc-tooltip__surface","mdc-tooltip__surface-animation"]],template:function(i,o){if(1&i){const n=e.RV6();e.j41(0,"div",1,0),e.bIt("animationend",function(p){return e.eBV(n),e.Njj(o._handleAnimationEnd(p))}),e.j41(2,"div",2),e.EFF(3),e.k0s()()}2&i&&(e.AVh("mdc-tooltip--multiline",o._isMultiline),e.Y8G("ngClass",o.tooltipClass),e.R7$(3),e.JRh(o.message))},dependencies:[_.YU],styles:['.mdc-tooltip__surface{word-break:break-all;word-break:var(--mdc-tooltip-word-break, normal);overflow-wrap:anywhere}.mdc-tooltip--showing-transition .mdc-tooltip__surface-animation{transition:opacity 150ms 0ms cubic-bezier(0, 0, 0.2, 1),transform 150ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-tooltip--hide-transition .mdc-tooltip__surface-animation{transition:opacity 75ms 0ms cubic-bezier(0.4, 0, 1, 1)}.mdc-tooltip{position:fixed;display:none;z-index:9}.mdc-tooltip-wrapper--rich{position:relative}.mdc-tooltip--shown,.mdc-tooltip--showing,.mdc-tooltip--hide{display:inline-flex}.mdc-tooltip--shown.mdc-tooltip--rich,.mdc-tooltip--showing.mdc-tooltip--rich,.mdc-tooltip--hide.mdc-tooltip--rich{display:inline-block;left:-320px;position:absolute}.mdc-tooltip__surface{line-height:16px;padding:4px 8px;min-width:40px;max-width:200px;min-height:24px;max-height:40vh;box-sizing:border-box;overflow:hidden;text-align:center}.mdc-tooltip__surface::before{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:1px solid rgba(0,0,0,0);border-radius:inherit;content:"";pointer-events:none}@media screen and (forced-colors: active){.mdc-tooltip__surface::before{border-color:CanvasText}}.mdc-tooltip--rich .mdc-tooltip__surface{align-items:flex-start;display:flex;flex-direction:column;min-height:24px;min-width:40px;max-width:320px;position:relative}.mdc-tooltip--multiline .mdc-tooltip__surface{text-align:left}[dir=rtl] .mdc-tooltip--multiline .mdc-tooltip__surface,.mdc-tooltip--multiline .mdc-tooltip__surface[dir=rtl]{text-align:right}.mdc-tooltip__surface .mdc-tooltip__title{margin:0 8px}.mdc-tooltip__surface .mdc-tooltip__content{max-width:calc(200px - 2*8px);margin:8px;text-align:left}[dir=rtl] .mdc-tooltip__surface .mdc-tooltip__content,.mdc-tooltip__surface .mdc-tooltip__content[dir=rtl]{text-align:right}.mdc-tooltip--rich .mdc-tooltip__surface .mdc-tooltip__content{max-width:calc(320px - 2*8px);align-self:stretch}.mdc-tooltip__surface .mdc-tooltip__content-link{text-decoration:none}.mdc-tooltip--rich-actions,.mdc-tooltip__content,.mdc-tooltip__title{z-index:1}.mdc-tooltip__surface-animation{opacity:0;transform:scale(0.8);will-change:transform,opacity}.mdc-tooltip--shown .mdc-tooltip__surface-animation{transform:scale(1);opacity:1}.mdc-tooltip--hide .mdc-tooltip__surface-animation{transform:scale(1)}.mdc-tooltip__caret-surface-top,.mdc-tooltip__caret-surface-bottom{position:absolute;height:24px;width:24px;transform:rotate(35deg) skewY(20deg) scaleX(0.9396926208)}.mdc-tooltip__caret-surface-top .mdc-elevation-overlay,.mdc-tooltip__caret-surface-bottom .mdc-elevation-overlay{width:100%;height:100%;top:0;left:0}.mdc-tooltip__caret-surface-bottom{box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);outline:1px solid rgba(0,0,0,0);z-index:-1}@media screen and (forced-colors: active){.mdc-tooltip__caret-surface-bottom{outline-color:CanvasText}}.mat-mdc-tooltip .mdc-tooltip__surface{background-color:var(--mdc-plain-tooltip-container-color)}.mat-mdc-tooltip .mdc-tooltip__surface{border-radius:var(--mdc-plain-tooltip-container-shape)}.mat-mdc-tooltip .mdc-tooltip__caret-surface-top,.mat-mdc-tooltip .mdc-tooltip__caret-surface-bottom{border-radius:var(--mdc-plain-tooltip-container-shape)}.mat-mdc-tooltip .mdc-tooltip__surface{color:var(--mdc-plain-tooltip-supporting-text-color)}.mat-mdc-tooltip .mdc-tooltip__surface{font-family:var(--mdc-plain-tooltip-supporting-text-font);line-height:var(--mdc-plain-tooltip-supporting-text-line-height);font-size:var(--mdc-plain-tooltip-supporting-text-size);font-weight:var(--mdc-plain-tooltip-supporting-text-weight);letter-spacing:var(--mdc-plain-tooltip-supporting-text-tracking)}.mat-mdc-tooltip{position:relative;transform:scale(0)}.mat-mdc-tooltip::before{content:"";top:0;right:0;bottom:0;left:0;z-index:-1;position:absolute}.mat-mdc-tooltip-panel-below .mat-mdc-tooltip::before{top:-8px}.mat-mdc-tooltip-panel-above .mat-mdc-tooltip::before{bottom:-8px}.mat-mdc-tooltip-panel-right .mat-mdc-tooltip::before{left:-8px}.mat-mdc-tooltip-panel-left .mat-mdc-tooltip::before{right:-8px}.mat-mdc-tooltip._mat-animation-noopable{animation:none;transform:scale(1)}.mat-mdc-tooltip-panel.mat-mdc-tooltip-panel-non-interactive{pointer-events:none}@keyframes mat-mdc-tooltip-show{0%{opacity:0;transform:scale(0.8)}100%{opacity:1;transform:scale(1)}}@keyframes mat-mdc-tooltip-hide{0%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(0.8)}}.mat-mdc-tooltip-show{animation:mat-mdc-tooltip-show 150ms cubic-bezier(0, 0, 0.2, 1) forwards}.mat-mdc-tooltip-hide{animation:mat-mdc-tooltip-hide 75ms cubic-bezier(0.4, 0, 1, 1) forwards}'],encapsulation:2,changeDetection:0})}}return s})();function W(s,a){if(1&s&&(e.j41(0,"div",10),e.EFF(1),e.k0s()),2&s){const t=e.XpG();e.R7$(),e.SpI(" ",t.errorMessage," ")}}function Z(s,a){1&s&&(e.j41(0,"div",7),e.nrm(1,"hr",15),e.k0s())}function K(s,a){if(1&s&&(e.j41(0,"div",12)(1,"div",13)(2,"span",14),e.EFF(3),e.k0s()(),e.j41(4,"div",13),e.EFF(5),e.k0s(),e.DNE(6,Z,2,0,"div",6),e.k0s()),2&s){const t=a.$implicit,i=a.index,o=e.XpG(2);e.R7$(2),e.Y8G("matTooltip",o.getTooltipForJwtProps(t[0])),e.R7$(),e.JRh(t[0]),e.R7$(2),e.JRh(t[1]),e.R7$(),e.Y8G("ngIf",i<o.size(o.decodedHeader)-1)}}function q(s,a){if(1&s&&(e.j41(0,"div",7)(1,"div",11)(2,"label"),e.EFF(3,"Header"),e.k0s()(),e.DNE(4,K,7,4,"div",9),e.k0s()),2&s){const t=e.XpG();e.R7$(4),e.Y8G("ngForOf",t.decodedHeader)}}function tt(s,a){1&s&&(e.j41(0,"div",11)(1,"label"),e.EFF(2,"Payload"),e.k0s()())}function et(s,a){1&s&&(e.j41(0,"div",7),e.nrm(1,"hr",15),e.k0s())}function it(s,a){if(1&s&&(e.j41(0,"div",12)(1,"div",13)(2,"span",14),e.EFF(3),e.k0s()(),e.j41(4,"div",13),e.EFF(5),e.k0s(),e.DNE(6,et,2,0,"div",6),e.k0s()),2&s){const t=a.$implicit,i=a.index,o=e.XpG();e.R7$(2),e.Y8G("matTooltip",o.getTooltipForJwtProps(t[0])),e.R7$(),e.JRh(t[0]),e.R7$(2),e.JRh(t[1]),e.R7$(),e.Y8G("ngIf",i<o.size(o.decodedToken)-1)}}const ot={alg:"Signature or encryption algorithm",typ:"Type of token",sub:"Subject (whom the token refers to)",jti:"JWT ID (unique identifier for this token)",iat:"Issued at (seconds since Unix epoch)",nbf:"Not valid before (seconds since Unix epoch)",exp:"Expiration time (seconds since Unix epoch)",iss:"Issuer (who created and signed this token)",aud:"Audience (who or what the token is intended for)"};let st=(()=>{class s{constructor(){this.jwtToken="",this.decodedToken=[],this.decodedHeader=[],this.errorMessage="",this.size=S.size}decodeToken(){try{const t=this.jwtToken.split(".");if(3!==t.length)throw new Error("Invalid JWT Token");const i=atob(t[0]);this.decodedHeader=Object.entries(JSON.parse(i)),this.decodedToken=Object.entries(function O(s,a){if("string"!=typeof s)throw new m("Invalid token specified: must be a string");a||(a={});const t=!0===a.header?0:1,i=s.split(".")[t];if("string"!=typeof i)throw new m(`Invalid token specified: missing part #${t+1}`);let o;try{o=function P(s){let a=s.replace(/-/g,"+").replace(/_/g,"/");switch(a.length%4){case 0:break;case 2:a+="==";break;case 3:a+="=";break;default:throw new Error("base64 string is not of the correct length")}try{return function M(s){return decodeURIComponent(atob(s).replace(/(.)/g,(a,t)=>{let i=t.charCodeAt(0).toString(16).toUpperCase();return i.length<2&&(i="0"+i),"%"+i}))}(a)}catch{return atob(a)}}(i)}catch(n){throw new m(`Invalid token specified: invalid base64 for part #${t+1} (${n.message})`)}try{return JSON.parse(o)}catch(n){throw new m(`Invalid token specified: invalid json for part #${t+1} (${n.message})`)}}(this.jwtToken)),this.errorMessage=""}catch{this.errorMessage="Invalid JWT Token!",this.decodedToken=[],this.decodedHeader=[]}}getTooltipForJwtProps(t){return ot[t]||""}static{this.\u0275fac=function(i){return new(i||s)}}static{this.\u0275cmp=e.VBU({type:s,selectors:[["app-jwt-decode"]],standalone:!0,features:[e.aNF],decls:12,vars:5,consts:[["header","JWT parser","description","JSON Web Tokens are an open, industry standard RFC 7519 method for representing claims securely between two parties."],[1,"mt-3","px-4"],[1,"w-100"],["matInput","","rows","10",3,"ngModelChange","ngModel"],["class","error",4,"ngIf"],[1,"row","mt-2"],["class","col-12",4,"ngIf"],[1,"col-12"],["class","col-12 header",4,"ngIf"],["class","row",4,"ngFor","ngForOf"],[1,"error"],[1,"col-12","header"],[1,"row"],[1,"col-6","text-break"],["matTooltipPosition","right",3,"matTooltip"],[1,"my-2"]],template:function(i,o){1&i&&(e.nrm(0,"app-page-header",0),e.j41(1,"div",1)(2,"label"),e.EFF(3,"JWT"),e.k0s(),e.j41(4,"mat-form-field",2)(5,"textarea",3),e.mxI("ngModelChange",function(r){return e.DH7(o.jwtToken,r)||(o.jwtToken=r),r}),e.bIt("ngModelChange",function(){return o.decodeToken()}),e.k0s()(),e.DNE(6,W,2,1,"div",4),e.j41(7,"div",5),e.DNE(8,q,5,1,"div",6),e.j41(9,"div",7),e.DNE(10,tt,3,0,"div",8)(11,it,7,4,"div",9),e.k0s()()()),2&i&&(e.R7$(5),e.R50("ngModel",o.jwtToken),e.R7$(),e.Y8G("ngIf",o.errorMessage),e.R7$(2),e.Y8G("ngIf",o.size(o.decodedHeader)),e.R7$(2),e.Y8G("ngIf",o.size(o.decodedToken)),e.R7$(),e.Y8G("ngForOf",o.decodedToken))},dependencies:[k.y,f.YN,f.me,f.BC,f.vS,_.bT,A.rl,L.fg,_.Sq,B],styles:[".header[_ngcontent-%COMP%]{text-align:center;padding:10px;background:#4d4d4d;border-radius:3px;margin-bottom:.5rem;margin-top:1rem}"]})}}return s})()}}]);