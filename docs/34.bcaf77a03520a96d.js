"use strict";(self.webpackChunklanguage_study=self.webpackChunklanguage_study||[]).push([[34],{6034:($,f,l)=>{l.r(f),l.d(f,{NoteModule:()=>H});var a=l(177),d=l(1069),t=l(3953),E=l(4454),v=l(1141);let T=(()=>{class n{_authService;_router;user;constructor(e,i){this._authService=e,this._router=i,this.user=e.user}createOrEdit(e){this._router.navigateByUrl("/note/detail/",{onSameUrlNavigation:"reload",skipLocationChange:!0})}static \u0275fac=function(i){return new(i||n)(t.rXU(E.u),t.rXU(d.Ix))};static \u0275cmp=t.VBU({type:n,selectors:[["app-note"]],decls:3,vars:0,consts:[[1,"grid"],[1,"col-12"],["label","Th\xeam m\u1edbi",3,"onClick"]],template:function(i,o){1&i&&(t.j41(0,"div",0)(1,"div",1)(2,"p-button",2),t.bIt("onClick",function(){return o.createOrEdit()}),t.k0s()()())},dependencies:[v.$n]})}return n})();var u=l(4341),m=l(5779),p=l(1455);const M=[[["p-header"]]],j=["p-header"];function q(n,C){1&n&&t.eu8(0)}function F(n,C){if(1&n&&(t.j41(0,"div",3),t.SdG(1),t.DNE(2,q,1,0,"ng-container",4),t.k0s()),2&n){const e=t.XpG();t.R7$(2),t.Y8G("ngTemplateOutlet",e.headerTemplate)}}function I(n,C){1&n&&(t.j41(0,"div",3)(1,"span",5)(2,"select",6)(3,"option",7),t.EFF(4,"Heading"),t.k0s(),t.j41(5,"option",8),t.EFF(6,"Subheading"),t.k0s(),t.j41(7,"option",9),t.EFF(8,"Normal"),t.k0s()(),t.j41(9,"select",10)(10,"option",9),t.EFF(11,"Sans Serif"),t.k0s(),t.j41(12,"option",11),t.EFF(13,"Serif"),t.k0s(),t.j41(14,"option",12),t.EFF(15,"Monospace"),t.k0s()()(),t.j41(16,"span",5),t.nrm(17,"button",13)(18,"button",14)(19,"button",15),t.k0s(),t.j41(20,"span",5),t.nrm(21,"select",16)(22,"select",17),t.k0s(),t.j41(23,"span",5),t.nrm(24,"button",18)(25,"button",19),t.j41(26,"select",20),t.nrm(27,"option",9),t.j41(28,"option",21),t.EFF(29,"center"),t.k0s(),t.j41(30,"option",22),t.EFF(31,"right"),t.k0s(),t.j41(32,"option",23),t.EFF(33,"justify"),t.k0s()()(),t.j41(34,"span",5),t.nrm(35,"button",24)(36,"button",25)(37,"button",26),t.k0s(),t.j41(38,"span",5),t.nrm(39,"button",27),t.k0s()())}const D={provide:u.kq,useExisting:(0,t.Rfq)(()=>y),multi:!0};let y=(()=>{class n{el;platformId;style;styleClass;placeholder;formats;modules;bounds;scrollingContainer;debug;get readonly(){return this._readonly}set readonly(e){this._readonly=e,this.quill&&(this._readonly?this.quill.disable():this.quill.enable())}onInit=new t.bkB;onTextChange=new t.bkB;onSelectionChange=new t.bkB;templates;toolbar;value;delayedCommand=null;_readonly=!1;onModelChange=()=>{};onModelTouched=()=>{};quill;dynamicQuill;headerTemplate;get isAttachedQuillEditorToDOM(){return this.quillElements?.editorElement?.isConnected}quillElements;constructor(e,i){this.el=e,this.platformId=i,(0,t.mal)(()=>{this.initQuillElements(),this.initQuillEditor()})}ngAfterContentInit(){this.templates.forEach(e=>{"header"===e.getType()&&(this.headerTemplate=e.template)})}writeValue(e){if(this.value=e,this.quill)if(e){const i=()=>{this.quill.setContents(this.quill.clipboard.convert(this.dynamicQuill.version.startsWith("2")?{html:this.value}:this.value))};this.isAttachedQuillEditorToDOM?i():this.delayedCommand=i}else{const i=()=>{this.quill.setText("")};this.isAttachedQuillEditorToDOM?i():this.delayedCommand=i}}registerOnChange(e){this.onModelChange=e}registerOnTouched(e){this.onModelTouched=e}getQuill(){return this.quill}initQuillEditor(){(0,a.Vy)(this.platformId)||(this.dynamicQuill?this.createQuillEditor():l.e(206).then(l.bind(l,1206)).then(e=>{this.dynamicQuill=e.default,this.createQuillEditor()}).catch(e=>console.error(e.message)))}createQuillEditor(){this.initQuillElements();const{toolbarElement:e,editorElement:i}=this.quillElements;let o={toolbar:e},r=this.modules?{...o,...this.modules}:o;this.quill=new this.dynamicQuill(i,{modules:r,placeholder:this.placeholder,readOnly:this.readonly,theme:"snow",formats:this.formats,bounds:this.bounds,debug:this.debug,scrollingContainer:this.scrollingContainer});const s=this.dynamicQuill.version.startsWith("2");this.value&&this.quill.setContents(this.quill.clipboard.convert(s?{html:this.value}:this.value)),this.quill.on("text-change",(g,b,c)=>{if("user"===c){let h=s?this.quill.getSemanticHTML():p.D.findSingle(i,".ql-editor").innerHTML,X=this.quill.getText().trim();"<p><br></p>"===h&&(h=null),this.onTextChange.emit({htmlValue:h,textValue:X,delta:g,source:c}),this.onModelChange(h),this.onModelTouched()}}),this.quill.on("selection-change",(g,b,c)=>{this.onSelectionChange.emit({range:g,oldRange:b,source:c})}),this.onInit.emit({editor:this.quill})}initQuillElements(){this.quillElements||(this.quillElements={editorElement:p.D.findSingle(this.el.nativeElement,"div.p-editor-content"),toolbarElement:p.D.findSingle(this.el.nativeElement,"div.p-editor-toolbar")})}static \u0275fac=function(i){return new(i||n)(t.rXU(t.aKT),t.rXU(t.Agw))};static \u0275cmp=t.VBU({type:n,selectors:[["p-editor"]],contentQueries:function(i,o,r){if(1&i&&(t.wni(r,m.Y9,5),t.wni(r,m.Ei,4)),2&i){let s;t.mGM(s=t.lsd())&&(o.toolbar=s.first),t.mGM(s=t.lsd())&&(o.templates=s)}},hostAttrs:[1,"p-element"],inputs:{style:"style",styleClass:"styleClass",placeholder:"placeholder",formats:"formats",modules:"modules",bounds:"bounds",scrollingContainer:"scrollingContainer",debug:"debug",readonly:"readonly"},outputs:{onInit:"onInit",onTextChange:"onTextChange",onSelectionChange:"onSelectionChange"},features:[t.Jv_([D])],ngContentSelectors:j,decls:4,vars:6,consts:[[3,"ngClass"],["class","p-editor-toolbar",4,"ngIf"],[1,"p-editor-content",3,"ngStyle"],[1,"p-editor-toolbar"],[4,"ngTemplateOutlet"],[1,"ql-formats"],[1,"ql-header"],["value","1"],["value","2"],["selected",""],[1,"ql-font"],["value","serif"],["value","monospace"],["aria-label","Bold","type","button",1,"ql-bold"],["aria-label","Italic","type","button",1,"ql-italic"],["aria-label","Underline","type","button",1,"ql-underline"],[1,"ql-color"],[1,"ql-background"],["value","ordered","aria-label","Ordered List","type","button",1,"ql-list"],["value","bullet","aria-label","Unordered List","type","button",1,"ql-list"],[1,"ql-align"],["value","center"],["value","right"],["value","justify"],["aria-label","Insert Link","type","button",1,"ql-link"],["aria-label","Insert Image","type","button",1,"ql-image"],["aria-label","Insert Code Block","type","button",1,"ql-code-block"],["aria-label","Remove Styles","type","button",1,"ql-clean"]],template:function(i,o){1&i&&(t.NAR(M),t.j41(0,"div",0),t.DNE(1,F,3,1,"div",1)(2,I,40,0,"div",1),t.nrm(3,"div",2),t.k0s()),2&i&&(t.HbH(o.styleClass),t.Y8G("ngClass","p-editor-container"),t.R7$(),t.Y8G("ngIf",o.toolbar||o.headerTemplate),t.R7$(),t.Y8G("ngIf",!o.modules&&!o.toolbar&&!o.headerTemplate),t.R7$(),t.Y8G("ngStyle",o.style))},dependencies:[a.YU,a.bT,a.T3,a.B3],styles:[".p-editor-container .p-editor-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-options .ql-picker-item{width:auto;height:auto}\n"],encapsulation:2,changeDetection:0})}return n})(),S=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275mod=t.$C({type:n});static \u0275inj=t.G2t({imports:[a.MD,m.Gg]})}return n})();const Q=()=>({height:"320px"}),k=[{path:"",component:T},{path:"detail/:note_id",component:(()=>{class n{route;noteId;noteTitle;noteValue;constructor(e){this.route=e,this.noteId=this.route.snapshot.paramMap.get("note_id"),this.noteTitle="",this.noteValue=""}static \u0275fac=function(i){return new(i||n)(t.rXU(d.nX))};static \u0275cmp=t.VBU({type:n,selectors:[["app-detail"]],decls:4,vars:4,consts:[[1,"grid"],[1,"col-12"],[3,"ngModelChange","ngModel"]],template:function(i,o){1&i&&(t.j41(0,"div",0),t.nrm(1,"div",1),t.j41(2,"div",1)(3,"p-editor",2),t.mxI("ngModelChange",function(s){return t.DH7(o.noteValue,s)||(o.noteValue=s),s}),t.k0s()()()),2&i&&(t.R7$(3),t.Aen(t.lJ4(3,Q)),t.R50("ngModel",o.noteValue))},dependencies:[u.BC,u.vS,y]})}return n})()}];let G=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275mod=t.$C({type:n});static \u0275inj=t.G2t({imports:[d.iI.forChild(k),d.iI]})}return n})();var U=l(9179),O=l(2637),R=l(494),N=l(7164),V=l(675),B=l(5430),A=l(1631),x=l(9114),L=l(9667);const Y=[O.h6,R.Ko,N.m,v.tm,V.kr,U.bG,B.q4,A.H_,x.m,L.t,S];let H=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275mod=t.$C({type:n});static \u0275inj=t.G2t({imports:[a.MD,G,u.YN,Y]})}return n})()}}]);