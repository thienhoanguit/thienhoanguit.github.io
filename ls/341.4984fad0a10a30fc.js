"use strict";(self.webpackChunklanguage_study=self.webpackChunklanguage_study||[]).push([[341],{4341:(On,fe,c)=>{c.d(fe,{YN:()=>En,kq:()=>h,vO:()=>f,vS:()=>nt});var i=c(3953),ct=c(177),pe=c(8455),ge=c(1985),me=c(3073),_e=c(8750),ye=c(9326),ve=c(4360),Ce=c(6450),Ve=c(8496),Ae=c(1413),De=c(6354);let dt=(()=>{class n{constructor(t,r){this._renderer=t,this._elementRef=r,this.onChange=s=>{},this.onTouched=()=>{}}setProperty(t,r){this._renderer.setProperty(this._elementRef.nativeElement,t,r)}registerOnTouched(t){this.onTouched=t}registerOnChange(t){this.onChange=t}setDisabledState(t){this.setProperty("disabled",t)}static{this.\u0275fac=function(r){return new(r||n)(i.rXU(i.sFG),i.rXU(i.aKT))}}static{this.\u0275dir=i.FsC({type:n})}}return n})(),m=(()=>{class n extends dt{static{this.\u0275fac=(()=>{let t;return function(s){return(t||(t=i.xGo(n)))(s||n)}})()}static{this.\u0275dir=i.FsC({type:n,features:[i.Vt3]})}}return n})();const h=new i.nKC(""),Fe={provide:h,useExisting:(0,i.Rfq)(()=>I),multi:!0},we=new i.nKC("");let I=(()=>{class n extends dt{constructor(t,r,s){super(t,r),this._compositionMode=s,this._composing=!1,null==this._compositionMode&&(this._compositionMode=!function Ee(){const n=(0,ct.QT)()?(0,ct.QT)().getUserAgent():"";return/android (\d+)/.test(n.toLowerCase())}())}writeValue(t){this.setProperty("value",t??"")}_handleInput(t){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(t)}_compositionStart(){this._composing=!0}_compositionEnd(t){this._composing=!1,this._compositionMode&&this.onChange(t)}static{this.\u0275fac=function(r){return new(r||n)(i.rXU(i.sFG),i.rXU(i.aKT),i.rXU(we,8))}}static{this.\u0275dir=i.FsC({type:n,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(r,s){1&r&&i.bIt("input",function(a){return s._handleInput(a.target.value)})("blur",function(){return s.onTouched()})("compositionstart",function(){return s._compositionStart()})("compositionend",function(a){return s._compositionEnd(a.target.value)})},features:[i.Jv_([Fe]),i.Vt3]})}}return n})();const l=new i.nKC(""),g=new i.nKC("");function bt(n){return null!=n}function At(n){return(0,i.jNT)(n)?(0,pe.H)(n):n}function Dt(n){let e={};return n.forEach(t=>{e=null!=t?{...e,...t}:e}),0===Object.keys(e).length?null:e}function Mt(n,e){return e.map(t=>t(n))}function Ft(n){return n.map(e=>function Se(n){return!n.validate}(e)?e:t=>e.validate(t))}function k(n){return null!=n?function Et(n){if(!n)return null;const e=n.filter(bt);return 0==e.length?null:function(t){return Dt(Mt(t,e))}}(Ft(n)):null}function H(n){return null!=n?function wt(n){if(!n)return null;const e=n.filter(bt);return 0==e.length?null:function(t){return function be(...n){const e=(0,ye.ms)(n),{args:t,keys:r}=(0,me.D)(n),s=new ge.c(o=>{const{length:a}=t;if(!a)return void o.complete();const d=new Array(a);let y=a,b=a;for(let P=0;P<a;P++){let ut=!1;(0,_e.Tg)(t[P]).subscribe((0,ve._)(o,wn=>{ut||(ut=!0,b--),d[P]=wn},()=>y--,void 0,()=>{(!y||!ut)&&(b||o.next(r?(0,Ve.e)(r,d):d),o.complete())}))}});return e?s.pipe((0,Ce.I)(e)):s}(Mt(t,e).map(At)).pipe((0,De.T)(Dt))}}(Ft(n)):null}function Ot(n,e){return null===n?[e]:Array.isArray(n)?[...n,e]:[n,e]}function L(n){return n?Array.isArray(n)?n:[n]:[]}function w(n,e){return Array.isArray(n)?n.includes(e):n===e}function xt(n,e){const t=L(e);return L(n).forEach(s=>{w(t,s)||t.push(s)}),t}function Gt(n,e){return L(e).filter(t=>!w(n,t))}class Ut{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(e){this._rawValidators=e||[],this._composedValidatorFn=k(this._rawValidators)}_setAsyncValidators(e){this._rawAsyncValidators=e||[],this._composedAsyncValidatorFn=H(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(e){this._onDestroyCallbacks.push(e)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(e=>e()),this._onDestroyCallbacks=[]}reset(e=void 0){this.control&&this.control.reset(e)}hasError(e,t){return!!this.control&&this.control.hasError(e,t)}getError(e,t){return this.control?this.control.getError(e,t):null}}class u extends Ut{get formDirective(){return null}get path(){return null}}class f extends Ut{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}}const A="VALID",S="INVALID",v="PENDING",D="DISABLED";class C{}class Tt extends C{constructor(e,t){super(),this.value=e,this.source=t}}class W extends C{constructor(e,t){super(),this.pristine=e,this.source=t}}class j extends C{constructor(e,t){super(),this.touched=e,this.source=t}}class N extends C{constructor(e,t){super(),this.status=e,this.source=t}}function x(n){return null!=n&&!Array.isArray(n)&&"object"==typeof n}class z{constructor(e,t){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=null,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this._status=(0,i.EWP)(()=>this.statusReactive()),this.statusReactive=(0,i.vPA)(void 0),this._pristine=(0,i.EWP)(()=>this.pristineReactive()),this.pristineReactive=(0,i.vPA)(!0),this._touched=(0,i.EWP)(()=>this.touchedReactive()),this.touchedReactive=(0,i.vPA)(!1),this._events=new Ae.B,this.events=this._events.asObservable(),this._onDisabledChange=[],this._assignValidators(e),this._assignAsyncValidators(t)}get validator(){return this._composedValidatorFn}set validator(e){this._rawValidators=this._composedValidatorFn=e}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(e){this._rawAsyncValidators=this._composedAsyncValidatorFn=e}get parent(){return this._parent}get status(){return(0,i.O8t)(this.statusReactive)}set status(e){(0,i.O8t)(()=>this.statusReactive.set(e))}get valid(){return this.status===A}get invalid(){return this.status===S}get pending(){return this.status==v}get disabled(){return this.status===D}get enabled(){return this.status!==D}get pristine(){return(0,i.O8t)(this.pristineReactive)}set pristine(e){(0,i.O8t)(()=>this.pristineReactive.set(e))}get dirty(){return!this.pristine}get touched(){return(0,i.O8t)(this.touchedReactive)}set touched(e){(0,i.O8t)(()=>this.touchedReactive.set(e))}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(e){this._assignValidators(e)}setAsyncValidators(e){this._assignAsyncValidators(e)}addValidators(e){this.setValidators(xt(e,this._rawValidators))}addAsyncValidators(e){this.setAsyncValidators(xt(e,this._rawAsyncValidators))}removeValidators(e){this.setValidators(Gt(e,this._rawValidators))}removeAsyncValidators(e){this.setAsyncValidators(Gt(e,this._rawAsyncValidators))}hasValidator(e){return w(this._rawValidators,e)}hasAsyncValidator(e){return w(this._rawAsyncValidators,e)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(e={}){const t=!1===this.touched;this.touched=!0;const r=e.sourceControl??this;this._parent&&!e.onlySelf&&this._parent.markAsTouched({...e,sourceControl:r}),t&&!1!==e.emitEvent&&this._events.next(new j(!0,r))}markAllAsTouched(e={}){this.markAsTouched({onlySelf:!0,emitEvent:e.emitEvent,sourceControl:this}),this._forEachChild(t=>t.markAllAsTouched(e))}markAsUntouched(e={}){const t=!0===this.touched;this.touched=!1,this._pendingTouched=!1;const r=e.sourceControl??this;this._forEachChild(s=>{s.markAsUntouched({onlySelf:!0,emitEvent:e.emitEvent,sourceControl:r})}),this._parent&&!e.onlySelf&&this._parent._updateTouched(e,r),t&&!1!==e.emitEvent&&this._events.next(new j(!1,r))}markAsDirty(e={}){const t=!0===this.pristine;this.pristine=!1;const r=e.sourceControl??this;this._parent&&!e.onlySelf&&this._parent.markAsDirty({...e,sourceControl:r}),t&&!1!==e.emitEvent&&this._events.next(new W(!1,r))}markAsPristine(e={}){const t=!1===this.pristine;this.pristine=!0,this._pendingDirty=!1;const r=e.sourceControl??this;this._forEachChild(s=>{s.markAsPristine({onlySelf:!0,emitEvent:e.emitEvent})}),this._parent&&!e.onlySelf&&this._parent._updatePristine(e,r),t&&!1!==e.emitEvent&&this._events.next(new W(!0,r))}markAsPending(e={}){this.status=v;const t=e.sourceControl??this;!1!==e.emitEvent&&(this._events.next(new N(this.status,t)),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.markAsPending({...e,sourceControl:t})}disable(e={}){const t=this._parentMarkedDirty(e.onlySelf);this.status=D,this.errors=null,this._forEachChild(s=>{s.disable({...e,onlySelf:!0})}),this._updateValue();const r=e.sourceControl??this;!1!==e.emitEvent&&(this._events.next(new Tt(this.value,r)),this._events.next(new N(this.status,r)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors({...e,skipPristineCheck:t},this),this._onDisabledChange.forEach(s=>s(!0))}enable(e={}){const t=this._parentMarkedDirty(e.onlySelf);this.status=A,this._forEachChild(r=>{r.enable({...e,onlySelf:!0})}),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent}),this._updateAncestors({...e,skipPristineCheck:t},this),this._onDisabledChange.forEach(r=>r(!1))}_updateAncestors(e,t){this._parent&&!e.onlySelf&&(this._parent.updateValueAndValidity(e),e.skipPristineCheck||this._parent._updatePristine({},t),this._parent._updateTouched({},t))}setParent(e){this._parent=e}getRawValue(){return this.value}updateValueAndValidity(e={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){const r=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===A||this.status===v)&&this._runAsyncValidator(r,e.emitEvent)}const t=e.sourceControl??this;!1!==e.emitEvent&&(this._events.next(new Tt(this.value,t)),this._events.next(new N(this.status,t)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.updateValueAndValidity({...e,sourceControl:t})}_updateTreeValidity(e={emitEvent:!0}){this._forEachChild(t=>t._updateTreeValidity(e)),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?D:A}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(e,t){if(this.asyncValidator){this.status=v,this._hasOwnPendingAsyncValidator={emitEvent:!1!==t};const r=At(this.asyncValidator(this));this._asyncValidationSubscription=r.subscribe(s=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(s,{emitEvent:t,shouldHaveEmitted:e})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();const e=this._hasOwnPendingAsyncValidator?.emitEvent??!1;return this._hasOwnPendingAsyncValidator=null,e}return!1}setErrors(e,t={}){this.errors=e,this._updateControlsErrors(!1!==t.emitEvent,this,t.shouldHaveEmitted)}get(e){let t=e;return null==t||(Array.isArray(t)||(t=t.split(".")),0===t.length)?null:t.reduce((r,s)=>r&&r._find(s),this)}getError(e,t){const r=t?this.get(t):this;return r&&r.errors?r.errors[e]:null}hasError(e,t){return!!this.getError(e,t)}get root(){let e=this;for(;e._parent;)e=e._parent;return e}_updateControlsErrors(e,t,r){this.status=this._calculateStatus(),e&&this.statusChanges.emit(this.status),(e||r)&&this._events.next(new N(this.status,t)),this._parent&&this._parent._updateControlsErrors(e,t,r)}_initObservables(){this.valueChanges=new i.bkB,this.statusChanges=new i.bkB}_calculateStatus(){return this._allControlsDisabled()?D:this.errors?S:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(v)?v:this._anyControlsHaveStatus(S)?S:A}_anyControlsHaveStatus(e){return this._anyControls(t=>t.status===e)}_anyControlsDirty(){return this._anyControls(e=>e.dirty)}_anyControlsTouched(){return this._anyControls(e=>e.touched)}_updatePristine(e,t){const r=!this._anyControlsDirty(),s=this.pristine!==r;this.pristine=r,this._parent&&!e.onlySelf&&this._parent._updatePristine(e,t),s&&this._events.next(new W(this.pristine,t))}_updateTouched(e={},t){this.touched=this._anyControlsTouched(),this._events.next(new j(this.touched,t)),this._parent&&!e.onlySelf&&this._parent._updateTouched(e,t)}_registerOnCollectionChange(e){this._onCollectionChange=e}_setUpdateStrategy(e){x(e)&&null!=e.updateOn&&(this._updateOn=e.updateOn)}_parentMarkedDirty(e){return!e&&!(!this._parent||!this._parent.dirty)&&!this._parent._anyControlsDirty()}_find(e){return null}_assignValidators(e){this._rawValidators=Array.isArray(e)?e.slice():e,this._composedValidatorFn=function Ie(n){return Array.isArray(n)?k(n):n||null}(this._rawValidators)}_assignAsyncValidators(e){this._rawAsyncValidators=Array.isArray(e)?e.slice():e,this._composedAsyncValidatorFn=function ke(n){return Array.isArray(n)?H(n):n||null}(this._rawAsyncValidators)}}const V=new i.nKC("CallSetDisabledState",{providedIn:"root",factory:()=>G}),G="always";function M(n,e,t=G){(function Q(n,e){const t=function St(n){return n._rawValidators}(n);null!==e.validator?n.setValidators(Ot(t,e.validator)):"function"==typeof t&&n.setValidators([t]);const r=function Nt(n){return n._rawAsyncValidators}(n);null!==e.asyncValidator?n.setAsyncValidators(Ot(r,e.asyncValidator)):"function"==typeof r&&n.setAsyncValidators([r]);const s=()=>n.updateValueAndValidity();B(e._rawValidators,s),B(e._rawAsyncValidators,s)})(n,e),e.valueAccessor.writeValue(n.value),(n.disabled||"always"===t)&&e.valueAccessor.setDisabledState?.(n.disabled),function $e(n,e){e.valueAccessor.registerOnChange(t=>{n._pendingValue=t,n._pendingChange=!0,n._pendingDirty=!0,"change"===n.updateOn&&kt(n,e)})}(n,e),function We(n,e){const t=(r,s)=>{e.valueAccessor.writeValue(r),s&&e.viewToModelUpdate(r)};n.registerOnChange(t),e._registerOnDestroy(()=>{n._unregisterOnChange(t)})}(n,e),function Xe(n,e){e.valueAccessor.registerOnTouched(()=>{n._pendingTouched=!0,"blur"===n.updateOn&&n._pendingChange&&kt(n,e),"submit"!==n.updateOn&&n.markAsTouched()})}(n,e),function Le(n,e){if(e.valueAccessor.setDisabledState){const t=r=>{e.valueAccessor.setDisabledState(r)};n.registerOnDisabledChange(t),e._registerOnDestroy(()=>{n._unregisterOnDisabledChange(t)})}}(n,e)}function B(n,e){n.forEach(t=>{t.registerOnValidatorChange&&t.registerOnValidatorChange(e)})}function kt(n,e){n._pendingDirty&&n.markAsDirty(),n.setValue(n._pendingValue,{emitModelToViewChange:!1}),e.viewToModelUpdate(n._pendingValue),n._pendingChange=!1}function $t(n,e){const t=n.indexOf(e);t>-1&&n.splice(t,1)}function Xt(n){return"object"==typeof n&&null!==n&&2===Object.keys(n).length&&"value"in n&&"disabled"in n}Promise.resolve();const Wt=class extends z{constructor(e=null,t,r){super(function q(n){return(x(n)?n.validators:n)||null}(t),function J(n,e){return(x(e)?e.asyncValidators:n)||null}(r,t)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(e),this._setUpdateStrategy(t),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),x(t)&&(t.nonNullable||t.initialValueIsDefault)&&(this.defaultValue=Xt(e)?e.value:e)}setValue(e,t={}){this.value=this._pendingValue=e,this._onChange.length&&!1!==t.emitModelToViewChange&&this._onChange.forEach(r=>r(this.value,!1!==t.emitViewToModelChange)),this.updateValueAndValidity(t)}patchValue(e,t={}){this.setValue(e,t)}reset(e=this.defaultValue,t={}){this._applyFormState(e),this.markAsPristine(t),this.markAsUntouched(t),this.setValue(this.value,t),this._pendingChange=!1}_updateValue(){}_anyControls(e){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(e){this._onChange.push(e)}_unregisterOnChange(e){$t(this._onChange,e)}registerOnDisabledChange(e){this._onDisabledChange.push(e)}_unregisterOnDisabledChange(e){$t(this._onDisabledChange,e)}_forEachChild(e){}_syncPendingControls(){return!("submit"!==this.updateOn||(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),!this._pendingChange)||(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),0))}_applyFormState(e){Xt(e)?(this.value=this._pendingValue=e.value,e.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=e}},Ye={provide:f,useExisting:(0,i.Rfq)(()=>nt)},Jt=Promise.resolve();let nt=(()=>{class n extends f{constructor(t,r,s,o,a,d){super(),this._changeDetectorRef=a,this.callSetDisabledState=d,this.control=new Wt,this._registered=!1,this.name="",this.update=new i.bkB,this._parent=t,this._setValidators(r),this._setAsyncValidators(s),this.valueAccessor=function tt(n,e){if(!e)return null;let t,r,s;return Array.isArray(e),e.forEach(o=>{o.constructor===I?t=o:function Je(n){return Object.getPrototypeOf(n.constructor)===m}(o)?r=o:s=o}),s||r||t||null}(0,o)}ngOnChanges(t){if(this._checkForErrors(),!this._registered||"name"in t){if(this._registered&&(this._checkName(),this.formDirective)){const r=t.name.previousValue;this.formDirective.removeControl({name:r,path:this._getPath(r)})}this._setUpControl()}"isDisabled"in t&&this._updateDisabled(t),function Y(n,e){if(!n.hasOwnProperty("model"))return!1;const t=n.model;return!!t.isFirstChange()||!Object.is(e,t.currentValue)}(t,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(t){this.viewModel=t,this.update.emit(t)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&null!=this.options.updateOn&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!(!this.options||!this.options.standalone)}_setUpStandalone(){M(this.control,this,this.callSetDisabledState),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._isStandalone()||this._checkParentType(),this._checkName()}_checkParentType(){}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),this._isStandalone()}_updateValue(t){Jt.then(()=>{this.control.setValue(t,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(t){const r=t.isDisabled.currentValue,s=0!==r&&(0,i.L39)(r);Jt.then(()=>{s&&!this.control.disabled?this.control.disable():!s&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(t){return this._parent?function U(n,e){return[...e.path,n]}(t,this._parent):[t]}static{this.\u0275fac=function(r){return new(r||n)(i.rXU(u,9),i.rXU(l,10),i.rXU(g,10),i.rXU(h,10),i.rXU(i.gRc,8),i.rXU(V,8))}}static{this.\u0275dir=i.FsC({type:n,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"],options:[0,"ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],features:[i.Jv_([Ye]),i.Vt3,i.OA$]})}}return n})(),Mn=(()=>{class n{static{this.\u0275fac=function(r){return new(r||n)}}static{this.\u0275mod=i.$C({type:n})}static{this.\u0275inj=i.G2t({})}}return n})(),En=(()=>{class n{static withConfig(t){return{ngModule:n,providers:[{provide:V,useValue:t.callSetDisabledState??G}]}}static{this.\u0275fac=function(r){return new(r||n)}}static{this.\u0275mod=i.$C({type:n})}static{this.\u0275inj=i.G2t({imports:[Mn]})}}return n})()}}]);