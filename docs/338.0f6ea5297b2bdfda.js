"use strict";(self.webpackChunklanguage_study=self.webpackChunklanguage_study||[]).push([[338],{3338:(y,u,s)=>{s.r(u),s.d(u,{EdxModule:()=>ge});var o=s(177),e=s(3953),_=s(5779),f=s(4420),c=s(9969);const d=(n,r,t,i)=>({index:n,active:r,highlighted:t,class:"p-stepper-action",headerClass:"p-stepper-action",numberClass:"p-stepper-number",titleClass:"p-stepper-title",onClick:i});function T(n,r){1&n&&e.eu8(0)}function h(n,r){if(1&n&&(e.qex(0),e.DNE(1,T,1,0,"ng-container",2),e.bVm()),2&n){const t=e.XpG();e.R7$(),e.Y8G("ngTemplateOutlet",t.template)("ngTemplateOutletContext",e.ziG(2,d,t.index,t.active,t.highlighted,t.onClick))}}function g(n,r){if(1&n){const t=e.RV6();e.j41(0,"p-button",3),e.bIt("click",function(a){e.eBV(t);const p=e.XpG();return e.Njj(p.onClick.emit(a,p.index))}),e.j41(1,"span",4),e.EFF(2),e.k0s(),e.j41(3,"span",5),e.EFF(4),e.k0s()()}if(2&n){const t=e.XpG();e.Y8G("id",t.id)("tabindex",t.disabled?-1:void 0)("aria-controls",t.ariaControls),e.R7$(2),e.JRh(t.index+1),e.R7$(2),e.JRh(t.getStepProp)}}const m=(n,r,t,i)=>({index:n,active:r,highlighted:t,class:i});function j(n,r){1&n&&e.eu8(0)}function G(n,r){if(1&n&&(e.qex(0),e.DNE(1,j,1,0,"ng-container",2),e.bVm()),2&n){const t=e.XpG();e.R7$(),e.Y8G("ngTemplateOutlet",t.template)("ngTemplateOutletContext",e.ziG(2,m,t.index,t.active,t.highlighted,t.separatorClass))}}function E(n,r){if(1&n&&e.nrm(0,"span",3),2&n){const t=e.XpG();e.HbH(t.separatorClass)}}const I=(n,r,t,i,a,p)=>({index:n,active:r,highlighted:t,onClick:i,prevCallback:a,nextCallback:p});function D(n,r){1&n&&e.eu8(0)}function F(n,r){if(1&n&&(e.qex(0),e.DNE(1,D,1,0,"ng-container",2),e.bVm()),2&n){const t=e.XpG();e.R7$(),e.Y8G("ngTemplateOutlet",t.template)("ngTemplateOutletContext",e.l4e(2,I,t.index,t.active,t.highlighted,t.onClick,t.prevCallback,t.nextCallback))}}function P(n,r){1&n&&e.eu8(0)}function B(n,r){if(1&n&&(e.qex(0),e.DNE(1,P,1,0,"ng-container",3),e.bVm()),2&n){const t=e.XpG(3);e.R7$(),e.Y8G("ngTemplateOutlet",t.stepperPanel)}}function w(n,r){if(1&n&&e.DNE(0,B,2,1,"ng-container",1),2&n){const t=e.XpG(2);e.Y8G("ngIf",t.stepperPanel)}}function A(n,r){1&n&&e.DNE(0,w,1,1,"ng-template")}const R=["*"],v=(n,r)=>({"p-highlight":n,"p-disabled":r}),N=n=>({"p-stepper-panel-active":n}),b=n=>({transitionParams:n}),V=n=>({value:"visible",params:n}),M=n=>({value:"hidden",params:n});function Y(n,r){1&n&&e.eu8(0)}function $(n,r){if(1&n&&(e.qex(0),e.DNE(1,Y,1,0,"ng-container",4),e.bVm()),2&n){const t=e.XpG();e.R7$(),e.Y8G("ngTemplateOutlet",t.startTemplate)}}function O(n,r){if(1&n&&(e.qex(0),e.nrm(1,"p-stepperSeparator",10),e.bVm()),2&n){const t=e.XpG(),i=t.$implicit,a=t.index,p=e.XpG(2);e.R7$(),e.Y8G("template",i.separatorTemplate)("separatorClass","p-stepper-separator")("stepperPanel",i)("index",a)("active",p.isStepActive(a))("highlighted",a<p.activeStep)}}function X(n,r){if(1&n){const t=e.RV6();e.j41(0,"li",8)(1,"p-stepperHeader",9),e.bIt("onClick",function(a){const p=e.eBV(t).index,l=e.XpG(2);return e.Njj(l.onItemClick(a,p))}),e.k0s(),e.DNE(2,O,2,6,"ng-container",2),e.k0s()}if(2&n){const t=r.$implicit,i=r.index,a=e.XpG(2);e.Y8G("key",a.getStepKey(t,i))("ngClass",e.l_i(20,v,a.isStepActive(i),a.isItemDisabled(i)))("data-pc-name",a.stepperPanel)("data-p-highlight",a.isStepActive(i))("data-p-disabled",a.isItemDisabled(i))("data-pc-index",i)("data-p-active",a.isStepActive(i)),e.BMQ("aria-current",a.isStepActive(i)?"step":void 0),e.R7$(),e.HbH("p-stepper-action"),e.Y8G("id",a.getStepHeaderActionId(i))("template",t.headerTemplate)("stepperPanel",t)("getStepProp",a.getStepProp(t,"header"))("index",i)("disabled",a.isItemDisabled(i))("active",a.isStepActive(i))("highlighted",i<a.activeStep)("aria-controls",a.getStepContentId(i)),e.R7$(),e.Y8G("ngIf",i!==a.stepperPanels.length-1)}}function H(n,r){if(1&n){const t=e.RV6();e.qex(0),e.j41(1,"p-stepperContent",11),e.bIt("onClick",function(a){e.eBV(t);const p=e.XpG().index,l=e.XpG(2);return e.Njj(l.onItemClick(a,p))})("nextCallback",function(a){e.eBV(t);const p=e.XpG().index,l=e.XpG(2);return e.Njj(l.nextCallback(a,p))})("prevCallback",function(a){e.eBV(t);const p=e.XpG().index,l=e.XpG(2);return e.Njj(l.prevCallback(a,p))}),e.k0s(),e.bVm()}if(2&n){const t=e.XpG(),i=t.$implicit,a=t.index,p=e.XpG(2);e.R7$(),e.Y8G("id",p.getStepContentId(a))("template",i.contentTemplate)("orientation",p.orientation)("stepperPanel",i)("index",a)("active",p.isStepActive(a))("highlighted",a<p.activeStep)("ariaLabelledby",p.getStepHeaderActionId(a))}}function z(n,r){if(1&n&&e.DNE(0,H,2,8,"ng-container",2),2&n){const t=r.index,i=e.XpG(2);e.Y8G("ngIf",i.isStepActive(t))}}function L(n,r){if(1&n&&(e.qex(0),e.j41(1,"ul",5),e.DNE(2,X,3,23,"ng-template",6),e.k0s(),e.j41(3,"div",7),e.DNE(4,z,1,1,"ng-template",6),e.k0s(),e.bVm()),2&n){const t=e.XpG();e.R7$(2),e.Y8G("ngForOf",t.panels)("ngForTrackBy",t.trackByFn),e.R7$(2),e.Y8G("ngForOf",t.panels)("ngForTrackBy",t.trackByFn)}}function U(n,r){if(1&n&&(e.qex(0),e.nrm(1,"p-stepperSeparator",10),e.bVm()),2&n){const t=e.XpG(),i=t.$implicit,a=t.index,p=e.XpG(2);e.R7$(),e.Y8G("template",i.separatorTemplate)("separatorClass","p-stepper-separator")("stepperPanel",i)("index",a)("active",p.isStepActive(a))("highlighted",a<p.activeStep)}}function Q(n,r){if(1&n){const t=e.RV6();e.j41(0,"div",12)(1,"div",13)(2,"p-stepperHeader",9),e.bIt("onClick",function(a){const p=e.eBV(t).index,l=e.XpG(2);return e.Njj(l.onItemClick(a,p))}),e.k0s()(),e.j41(3,"div",14),e.DNE(4,U,2,6,"ng-container",2),e.j41(5,"p-stepperContent",11),e.bIt("onClick",function(a){const p=e.eBV(t).index,l=e.XpG(2);return e.Njj(l.onItemClick(a,p))})("nextCallback",function(a){const p=e.eBV(t).index,l=e.XpG(2);return e.Njj(l.nextCallback(a,p))})("prevCallback",function(a){const p=e.eBV(t).index,l=e.XpG(2);return e.Njj(l.prevCallback(a,p))}),e.k0s()()()}if(2&n){const t=r.$implicit,i=r.index,a=e.XpG(2);e.Y8G("key",a.getStepKey(t,i))("ngClass",e.eq3(30,N,"vertical"===a.orientation&&a.isStepActive(i)))("data-pc-name","stepperpanel")("data-p-highlight",a.isStepActive(i))("data-p-disabled",a.isItemDisabled(i))("data-pc-index",i)("data-p-active",a.isStepActive(i)),e.BMQ("aria-current",a.isStepActive(i)?"step":void 0),e.R7$(),e.Y8G("ngClass",e.l_i(32,v,a.isStepActive(i),a.isItemDisabled(i))),e.R7$(),e.HbH("p-stepper-action"),e.Y8G("id",a.getStepHeaderActionId(i))("template",t.headerTemplate)("stepperPanel",t)("getStepProp",a.getStepProp(t,"header"))("index",i)("disabled",a.isItemDisabled(i))("active",a.isStepActive(i))("highlighted",i<a.activeStep)("aria-controls",a.getStepContentId(i)),e.R7$(),e.Y8G("@tabContent",a.isStepActive(i)?e.eq3(37,V,e.eq3(35,b,a.transitionOptions)):e.eq3(41,M,e.eq3(39,b,a.transitionOptions))),e.R7$(),e.Y8G("ngIf",i!==a.stepperPanels.length-1),e.R7$(),e.Y8G("id",a.getStepContentId(i))("template",t.contentTemplate)("orientation",a.orientation)("stepperPanel",t)("index",i)("active",a.isStepActive(i))("highlighted",i<a.activeStep)("ariaLabelledby",a.getStepHeaderActionId(i))}}function K(n,r){if(1&n&&e.DNE(0,Q,6,43,"ng-template",6),2&n){const t=e.XpG();e.Y8G("ngForOf",t.panels)("ngForTrackBy",t.trackByFn)}}function q(n,r){1&n&&e.eu8(0)}function J(n,r){if(1&n&&(e.qex(0),e.DNE(1,q,1,0,"ng-container",4),e.bVm()),2&n){const t=e.XpG();e.R7$(),e.Y8G("ngTemplateOutlet",t.endTemplate)}}let W=(()=>{class n{id;template;stepperPanel;index;disabled;active;highlighted;getStepProp;ariaControls;onClick=new e.bkB;static \u0275fac=function(i){return new(i||n)};static \u0275cmp=e.VBU({type:n,selectors:[["p-stepperHeader"]],hostAttrs:[1,"p-element"],inputs:{id:"id",template:"template",stepperPanel:"stepperPanel",index:"index",disabled:"disabled",active:"active",highlighted:"highlighted",getStepProp:"getStepProp",ariaControls:"ariaControls"},outputs:{onClick:"onClick"},decls:3,vars:2,consts:[["buttonRef",""],[4,"ngIf","ngIfElse"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["role","tab",1,"p-stepper-action",3,"click","id","tabindex","aria-controls"],[1,"p-stepper-number"],[1,"p-stepper-title"]],template:function(i,a){if(1&i&&e.DNE(0,h,2,7,"ng-container",1)(1,g,5,5,"ng-template",null,0,e.C5r),2&i){const p=e.sdS(2);e.Y8G("ngIf",a.template)("ngIfElse",p)}},dependencies:[o.bT,o.T3],encapsulation:2})}return n})(),Z=(()=>{class n{template;separatorClass;stepperPanel;index;active;highlighted;static \u0275fac=function(i){return new(i||n)};static \u0275cmp=e.VBU({type:n,selectors:[["p-stepperSeparator"]],hostAttrs:[1,"p-stepper-separator"],inputs:{template:"template",separatorClass:"separatorClass",stepperPanel:"stepperPanel",index:"index",active:"active",highlighted:"highlighted"},decls:3,vars:2,consts:[["span",""],[4,"ngIf","ngIfElse"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["aria-hidden","true"]],template:function(i,a){if(1&i&&e.DNE(0,G,2,7,"ng-container",1)(1,E,1,2,"ng-template",null,0,e.C5r),2&i){const p=e.sdS(2);e.Y8G("ngIf",a.template)("ngIfElse",p)}},dependencies:[o.bT,o.T3],encapsulation:2})}return n})(),ee=(()=>{class n{id;orientation;template;ariaLabelledby;stepperPanel;index;active;highlighted;onClick=new e.bkB;prevCallback=new e.bkB;nextCallback=new e.bkB;static \u0275fac=function(i){return new(i||n)};static \u0275cmp=e.VBU({type:n,selectors:[["p-stepperContent"]],hostVars:6,hostBindings:function(i,a){2&i&&e.AVh("p-stepper-content",!0)("p-element",!0)("p-toggleable-content","vertical"===a.orientation)},inputs:{id:"id",orientation:"orientation",template:"template",ariaLabelledby:"ariaLabelledby",stepperPanel:"stepperPanel",index:"index",active:"active",highlighted:"highlighted"},outputs:{onClick:"onClick",prevCallback:"prevCallback",nextCallback:"nextCallback"},decls:3,vars:6,consts:[["role","tabpanel","data-pc-name","stepperpanel",3,"id"],[4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[4,"ngTemplateOutlet"]],template:function(i,a){1&i&&(e.j41(0,"div",0),e.DNE(1,F,2,9,"ng-container",1)(2,A,1,0,null,1),e.k0s()),2&i&&(e.Y8G("id",a.id),e.BMQ("data-pc-index",a.index)("data-p-active",a.active)("aria-labelledby",a.ariaLabelledby),e.R7$(),e.Y8G("ngIf",a.template),e.R7$(),e.Y8G("ngIf",!a.template))},dependencies:[o.bT,o.T3],encapsulation:2})}return n})(),C=(()=>{class n{header;templates;headerTemplate;startTemplate;contentTemplate;separatorTemplate;endTemplate;ngAfterContentInit(){this.templates.forEach(t=>{switch(t.getType()){case"header":this.headerTemplate=t.template;break;case"content":this.contentTemplate=t.template;break;case"separator":this.separatorTemplate=t.template}})}static \u0275fac=function(i){return new(i||n)};static \u0275cmp=e.VBU({type:n,selectors:[["p-stepperPanel"]],contentQueries:function(i,a,p){if(1&i&&e.wni(p,_.Ei,4),2&i){let l;e.mGM(l=e.lsd())&&(a.templates=l)}},hostAttrs:[1,"p-element"],inputs:{header:"header"},ngContentSelectors:R,decls:1,vars:0,template:function(i,a){1&i&&(e.NAR(),e.SdG(0))},encapsulation:2})}return n})(),te=(()=>{class n{activeStep=0;orientation="horizontal";linear=!1;transitionOptions="400ms cubic-bezier(0.86, 0, 0.07, 1)";stepperPanels;templates;onClick=new e.bkB;activeStepChange=new e.bkB;headerTemplate;startTemplate;separatorTemplate;endTemplate;id=(0,f._Y)();panels;isStepActive(t){return this.activeStep===t}getStepProp(t){return t?.header?t.header:t?.content?t.content:void 0}getStepKey(t,i){return this.getStepProp(t)||i}getStepHeaderActionId(t){return`${this.id}_${t}_header_action`}getStepContentId(t){return`${this.id}_${t}_content`}updateActiveStep(t,i){this.activeStep=i,this.activeStepChange.emit(this.activeStep)}onItemClick(t,i){this.linear?t.preventDefault():i!==this.activeStep&&this.updateActiveStep(t,i)}isItemDisabled(t){return this.linear&&!this.isStepActive(t)}prevCallback(t,i){0!==i&&this.updateActiveStep(t,i-1)}nextCallback(t,i){i!==this.stepperPanels.length-1&&this.updateActiveStep(t,i+1)}trackByFn(t){return t}ngAfterContentInit(){this.panels=this.stepperPanels.toArray(),this.templates.forEach(t=>{switch(t.getType()){case"start":this.startTemplate=t.template;break;case"end":this.endTemplate=t.template}})}static \u0275fac=function(i){return new(i||n)};static \u0275cmp=e.VBU({type:n,selectors:[["p-stepper"]],contentQueries:function(i,a,p){if(1&i&&(e.wni(p,C,4),e.wni(p,_.Ei,4)),2&i){let l;e.mGM(l=e.lsd())&&(a.stepperPanels=l),e.mGM(l=e.lsd())&&(a.templates=l)}},hostVars:6,hostBindings:function(i,a){2&i&&e.AVh("p-stepper",!0)("p-component",!0)("p-stepper-vertical","vertical"===a.orientation)},inputs:{activeStep:"activeStep",orientation:"orientation",linear:"linear",transitionOptions:"transitionOptions"},outputs:{onClick:"onClick",activeStepChange:"activeStepChange"},decls:6,vars:4,consts:[["vertical",""],["role","tablist"],[4,"ngIf"],[4,"ngIf","ngIfElse"],[4,"ngTemplateOutlet"],[1,"p-stepper-nav"],["ngFor","",3,"ngForOf","ngForTrackBy"],[1,"p-stepper-panels"],["role","presentation",1,"p-stepper-header",3,"key","ngClass","data-pc-name","data-p-highlight","data-p-disabled","data-pc-index","data-p-active"],[3,"onClick","id","template","stepperPanel","getStepProp","index","disabled","active","highlighted","aria-controls"],[3,"template","separatorClass","stepperPanel","index","active","highlighted"],[3,"onClick","nextCallback","prevCallback","id","template","orientation","stepperPanel","index","active","highlighted","ariaLabelledby"],[1,"p-stepper-panel",3,"key","ngClass","data-pc-name","data-p-highlight","data-p-disabled","data-pc-index","data-p-active"],[1,"p-stepper-header",3,"ngClass"],[1,"p-stepper-toggleable-content"]],template:function(i,a){if(1&i&&(e.j41(0,"div",1),e.DNE(1,$,2,1,"ng-container",2)(2,L,5,4,"ng-container",3)(3,K,1,2,"ng-template",null,0,e.C5r)(5,J,2,1,"ng-container",2),e.k0s()),2&i){const p=e.sdS(4);e.R7$(),e.Y8G("ngIf",a.startTemplate),e.R7$(),e.Y8G("ngIf","horizontal"===a.orientation)("ngIfElse",p),e.R7$(3),e.Y8G("ngIf",a.endTemplate)}},dependencies:[o.YU,o.Sq,o.bT,o.T3,ee,W,Z],styles:["@layer primeng{.p-stepper-vertical .p-stepper-panel>.p-stepper-toggleable-content{overflow:hidden}.p-stepper-vertical .p-stepper-panel-active>.p-stepper-toggleable-content:not(.ng-animating){overflow:inherit}}\n"],encapsulation:2,data:{animation:[(0,c.hZ)("tabContent",[(0,c.wk)("hidden",(0,c.iF)({height:"0",visibility:"hidden"})),(0,c.wk)("visible",(0,c.iF)({height:"*",visibility:"visible"})),(0,c.kY)("visible <=> hidden",[(0,c.i0)("250ms cubic-bezier(0.86, 0, 0.07, 1)")]),(0,c.kY)("void => *",(0,c.i0)(0))])]},changeDetection:0})}return n})(),ne=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275mod=e.$C({type:n});static \u0275inj=e.G2t({imports:[o.MD,_.Gg,_.Gg]})}return n})();var ie=s(1934),x=s(1141),ae=s(5144),pe=s(4341),k=s(1069),S=s(7164);function re(n,r){if(1&n){const t=e.RV6();e.j41(0,"div",4)(1,"h3"),e.EFF(2,"About the course"),e.k0s(),e.j41(3,"p"),e.EFF(4,"If you are curious to learn more about the field of software engineering, this course is for you. No prior knowledge or qualification in programming or software development is necessary. Software Engineers are in great demand and now is a great time to learn more about this exciting career path. "),e.k0s(),e.j41(5,"p"),e.EFF(6,"The field of software engineering is growing at an estimated rate of 22% according to the US Bureau of Labor and Statistics. In addition to aspiring software engineers, this course can also help others in related careers such as Product and Project Managers, IT Managers, Information Developers and others who communicate and interact with software engineers. "),e.k0s(),e.j41(7,"p"),e.EFF(8,"This course teaches you about the power of the Software Development Lifecycle (SDLC) and software development methodologies like Agile. Explore fundamental programming principles and foundations of design, architecture, and deployment. Investigate skills a software engineer needs and identify job opportunities with hands-on projects. You will also learn about programming basics and software development tools and stacks. "),e.k0s(),e.j41(9,"p"),e.EFF(10,"Also, throughout this course, you\u2019ll hear from expert and novice software engineers to get a feel for what the job is like from their perspective. After completing this introductory course you will be conversant in the tools, technologies, terminology, processes, and practices in software engineering."),e.k0s(),e.nrm(11,"p-divider"),e.j41(12,"h3"),e.EFF(13,"Recommended Background"),e.k0s(),e.j41(14,"ul")(15,"li"),e.EFF(16,"Basic computer and IT literacy. "),e.k0s()()(),e.j41(17,"div",5)(18,"p-button",6),e.bIt("onClick",function(){const a=e.eBV(t).nextCallback;return e.Njj(a.emit())}),e.k0s()()}}function oe(n,r){if(1&n){const t=e.RV6();e.j41(0,"div",4)(1,"h3"),e.EFF(2,"Course Learning Objectives and Syllabus"),e.k0s(),e.j41(3,"h4"),e.EFF(4,"Course Learning Objectives"),e.k0s(),e.j41(5,"ul"),e.EFF(6,"After completing this course, you should be able to: "),e.j41(7,"li"),e.EFF(8,"Describe software engineering, approaches to software development, and software development tools and technologies."),e.k0s(),e.j41(9,"li"),e.EFF(10,"Evaluate different types of programming languages and synthesize basic programming constructs."),e.k0s(),e.j41(11,"li"),e.EFF(12,"Outline approaches to application and deployment architectures."),e.k0s(),e.j41(13,"li"),e.EFF(14,"Summarize the skills required in software engineering and describe the career options it provides."),e.k0s()(),e.nrm(15,"p-divider"),e.j41(16,"h3"),e.EFF(17,"Syllabus"),e.k0s()(),e.j41(18,"div",7)(19,"p-button",8),e.bIt("onClick",function(){const a=e.eBV(t).prevCallback;return e.Njj(a.emit())}),e.k0s(),e.j41(20,"p-button",6),e.bIt("onClick",function(){const a=e.eBV(t).nextCallback;return e.Njj(a.emit())}),e.k0s()()}}function le(n,r){if(1&n){const t=e.RV6();e.j41(0,"div",9)(1,"div",10),e.EFF(2," Content III "),e.k0s()(),e.j41(3,"div",11)(4,"p-button",8),e.bIt("onClick",function(){const a=e.eBV(t).prevCallback;return e.Njj(a.emit())}),e.k0s()()}}const se=[{path:"",component:(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275cmp=e.VBU({type:n,selectors:[["app-edx"]],decls:7,vars:0,consts:[["header","General Information"],["pTemplate","content"],["header","Course Learning Objectives and Syllabus"],["header","Header III"],[1,"flex","flex-column"],[1,"flex","pt-4","justify-content-end"],["label","Next","icon","pi pi-arrow-right","iconPos","right",3,"onClick"],[1,"flex","pt-4","justify-content-between"],["label","Back","icon","pi pi-arrow-left",3,"onClick"],[1,"flex","flex-column","h-12rem"],[1,"border-2","border-dashed","surface-border","border-round","surface-ground","flex-auto","flex","justify-content-center","align-items-center","font-medium"],[1,"flex","pt-4","justify-content-start"]],template:function(i,a){1&i&&(e.j41(0,"p-stepper")(1,"p-stepperPanel",0),e.DNE(2,re,19,0,"ng-template",1),e.k0s(),e.j41(3,"p-stepperPanel",2),e.DNE(4,oe,21,0,"ng-template",1),e.k0s(),e.j41(5,"p-stepperPanel",3),e.DNE(6,le,5,0,"ng-template",1),e.k0s()())},dependencies:[_.Ei,x.$n,te,C,S.c]})}return n})()}];let ce=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275mod=e.$C({type:n});static \u0275inj=e.G2t({imports:[k.iI.forChild(se),k.iI]})}return n})();const de=[ie.N9,x.tm,ae.Mk,ne,S.m];let ge=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275mod=e.$C({type:n});static \u0275inj=e.G2t({imports:[o.MD,ce,pe.YN,de]})}return n})()},7164:(y,u,s)=>{s.d(u,{c:()=>f,m:()=>c});var o=s(3953),e=s(177);const _=["*"];let f=(()=>{class d{style;styleClass;layout="horizontal";type="solid";align;containerClass(){return{"p-divider p-component":!0,"p-divider-horizontal":"horizontal"===this.layout,"p-divider-vertical":"vertical"===this.layout,"p-divider-solid":"solid"===this.type,"p-divider-dashed":"dashed"===this.type,"p-divider-dotted":"dotted"===this.type,"p-divider-left":"horizontal"===this.layout&&(!this.align||"left"===this.align),"p-divider-center":"horizontal"===this.layout&&"center"===this.align||"vertical"===this.layout&&(!this.align||"center"===this.align),"p-divider-right":"horizontal"===this.layout&&"right"===this.align,"p-divider-top":"vertical"===this.layout&&"top"===this.align,"p-divider-bottom":"vertical"===this.layout&&"bottom"===this.align}}static \u0275fac=function(g){return new(g||d)};static \u0275cmp=o.VBU({type:d,selectors:[["p-divider"]],hostAttrs:[1,"p-element"],inputs:{style:"style",styleClass:"styleClass",layout:"layout",type:"type",align:"align"},ngContentSelectors:_,decls:3,vars:6,consts:[["role","separator",3,"ngClass","ngStyle"],[1,"p-divider-content"]],template:function(g,m){1&g&&(o.NAR(),o.j41(0,"div",0)(1,"div",1),o.SdG(2),o.k0s()()),2&g&&(o.HbH(m.styleClass),o.Y8G("ngClass",m.containerClass())("ngStyle",m.style),o.BMQ("aria-orientation",m.layout)("data-pc-name","divider"))},dependencies:[e.YU,e.B3],styles:['@layer primeng{.p-divider-horizontal{display:flex;width:100%;position:relative;align-items:center}.p-divider-horizontal:before{position:absolute;display:block;top:50%;left:0;width:100%;content:""}.p-divider-horizontal.p-divider-left{justify-content:flex-start}.p-divider-horizontal.p-divider-right{justify-content:flex-end}.p-divider-horizontal.p-divider-center{justify-content:center}.p-divider-content{z-index:1}.p-divider-vertical{min-height:100%;margin:0 1rem;display:flex;position:relative;justify-content:center}.p-divider-vertical:before{position:absolute;display:block;top:0;left:50%;height:100%;content:""}.p-divider-vertical.p-divider-top{align-items:flex-start}.p-divider-vertical.p-divider-center{align-items:center}.p-divider-vertical.p-divider-bottom{align-items:flex-end}.p-divider-solid.p-divider-horizontal:before{border-top-style:solid}.p-divider-solid.p-divider-vertical:before{border-left-style:solid}.p-divider-dashed.p-divider-horizontal:before{border-top-style:dashed}.p-divider-dashed.p-divider-vertical:before{border-left-style:dashed}.p-divider-dotted.p-divider-horizontal:before{border-top-style:dotted}.p-divider-dotted.p-divider-vertical:before{border-left-style:dotted}}\n'],encapsulation:2,changeDetection:0})}return d})(),c=(()=>{class d{static \u0275fac=function(g){return new(g||d)};static \u0275mod=o.$C({type:d});static \u0275inj=o.G2t({imports:[e.MD]})}return d})()}}]);