"use strict";(self.webpackChunklanguage_study=self.webpackChunklanguage_study||[]).push([[719],{3719:(M,m,c)=>{c.r(m),c.d(m,{ToeicModule:()=>P});var d=c(177),l=c(4341),p=c(1069),t=c(3953),h=c(1626);let g=(()=>{class s{_http;jsonVeryEasyToeicFile="assets/data/json/very-easy-toeic.part2.json";jsonStarterToeicFile="assets/data/json/starter-toeic.part2.json";bookOnePartTwo;bookSecondPartTwo;data;constructor(e){this._http=e,e.get(this.jsonVeryEasyToeicFile).subscribe(n=>{this.bookOnePartTwo=n,console.log("res: ",n)}),this.data=[];for(let n=0;n<13;n++)this.data.push({userAnswers:Array(5).fill(""),showResults:!1,results:[],totalScore:0})}checkAnswers(e){this.data[e.Unit-1].results=[];for(let n=0;n<e.Part2.Quiz.length;n++)this.data[e.Unit-1].results.push(this.data[e.Unit-1].userAnswers[n]===e.Part2.Quiz[n].CorrectAnswer?"correct":"incorrect");this.data[e.Unit-1].showResults=!0;for(let n=0;n<e.Part2.Quiz.length;n++)this.data[e.Unit-1].userAnswers[n]===e.Part2.Quiz[n].CorrectAnswer&&(this.data[e.Unit-1].totalScore+=2)}resetQuiz(e){this.data[e.Unit-1].userAnswers.fill(""),this.data[e.Unit-1].showResults=!1,this.data[e.Unit-1].results=[]}static \u0275fac=function(n){return new(n||s)(t.rXU(h.Qq))};static \u0275cmp=t.VBU({type:s,selectors:[["app-toeic"]],decls:8,vars:2,consts:[[1,"grid"],[1,"col-12"],[3,"routerLink"]],template:function(n,i){1&n&&(t.j41(0,"div",0)(1,"div",1)(2,"p")(3,"a",2),t.EFF(4,"Very Easy Toeic"),t.k0s()(),t.j41(5,"p")(6,"a",2),t.EFF(7,"Starter Toeic"),t.k0s()()()()),2&n&&(t.R7$(3),t.Y8G("routerLink","/toeic/unit/very-easy-toeic"),t.R7$(3),t.Y8G("routerLink","/toeic/unit/starter-toeic"))},dependencies:[p.Wk]})}return s})();var _=c(2637),U=c(1141),f=c(675);const v=s=>({color:s}),C=()=>["A","B","C"];function w(s,a){if(1&s){const e=t.RV6();t.j41(0,"div",18)(1,"span"),t.EFF(2),t.k0s(),t.j41(3,"label")(4,"input",19),t.mxI("ngModelChange",function(i){const r=t.eBV(e).index,o=t.XpG(4);return t.DH7(o.practiceData[o.selectedUnit.Unit-1].userAnswers[r],i)||(o.practiceData[o.selectedUnit.Unit-1].userAnswers[r]=i),t.Njj(i)}),t.k0s(),t.EFF(5," A "),t.k0s(),t.j41(6,"label")(7,"input",19),t.mxI("ngModelChange",function(i){const r=t.eBV(e).index,o=t.XpG(4);return t.DH7(o.practiceData[o.selectedUnit.Unit-1].userAnswers[r],i)||(o.practiceData[o.selectedUnit.Unit-1].userAnswers[r]=i),t.Njj(i)}),t.k0s(),t.EFF(8," B "),t.k0s(),t.j41(9,"label")(10,"input",19),t.mxI("ngModelChange",function(i){const r=t.eBV(e).index,o=t.XpG(4);return t.DH7(o.practiceData[o.selectedUnit.Unit-1].userAnswers[r],i)||(o.practiceData[o.selectedUnit.Unit-1].userAnswers[r]=i),t.Njj(i)}),t.k0s(),t.EFF(11," C "),t.k0s(),t.nrm(12,"br"),t.k0s()}if(2&s){const e=a.$implicit,n=a.index,i=t.XpG(4);t.R7$(2),t.SpI("",n+1,"."),t.R7$(2),t.Mz_("name","question",n,""),t.R50("ngModel",i.practiceData[i.selectedUnit.Unit-1].userAnswers[n]),t.Y8G("value",e.Answers[0]),t.R7$(3),t.Mz_("name","question",n,""),t.R50("ngModel",i.practiceData[i.selectedUnit.Unit-1].userAnswers[n]),t.Y8G("value",e.Answers[1]),t.R7$(3),t.Mz_("name","question",n,""),t.R50("ngModel",i.practiceData[i.selectedUnit.Unit-1].userAnswers[n]),t.Y8G("value",e.Answers[2])}}function j(s,a){if(1&s&&(t.j41(0,"form",16),t.DNE(1,w,13,13,"div",17),t.k0s()),2&s){const e=t.XpG(3);t.R7$(),t.Y8G("ngForOf",e.selectedUnit.Part2.Quiz)}}function D(s,a){if(1&s&&(t.j41(0,"span")(1,"span",21),t.EFF(2),t.k0s(),t.nrm(3,"br"),t.k0s()),2&s){const e=a.$implicit,n=a.index,i=t.XpG(),r=i.$implicit,o=i.index,u=t.XpG(4);t.R7$(),t.Y8G("ngStyle",t.eq3(3,v,u.practiceData[u.selectedUnit.Unit-1].userAnswers[o]===r.CorrectAnswer&&e===r.CorrectAnswer?"green":u.practiceData[u.selectedUnit.Unit-1].userAnswers[o]===e&&e!==r.CorrectAnswer?"red":e===r.CorrectAnswer?"blue":"black")),t.R7$(),t.Lme(" ",t.lJ4(5,C)[n],". ",e," ")}}function A(s,a){if(1&s&&(t.j41(0,"div")(1,"p"),t.EFF(2),t.k0s(),t.j41(3,"p"),t.DNE(4,D,4,6,"span",20),t.k0s()()),2&s){const e=a.$implicit,n=a.index;t.R7$(2),t.Lme("",n+1,". ",e.Question,""),t.R7$(2),t.Y8G("ngForOf",e.Answers)}}function F(s,a){if(1&s&&(t.j41(0,"div",9),t.DNE(1,A,5,3,"div",20),t.j41(2,"h3"),t.EFF(3),t.k0s()()),2&s){const e=t.XpG(3);t.R7$(),t.Y8G("ngForOf",e.selectedUnit.Part2.Quiz),t.R7$(2),t.Lme("T\u1ed5ng \u0111i\u1ec3m c\u1ee7a b\u1ea1n: ",e.practiceData[e.selectedUnit.Unit-1].totalScore,"/",2*e.selectedUnit.Part2.Quiz.length," ")}}function E(s,a){if(1&s){const e=t.RV6();t.j41(0,"div")(1,"h5",9),t.EFF(2),t.k0s(),t.j41(3,"audio",10),t.nrm(4,"source",11),t.EFF(5," Your browser does not support the audio tag. "),t.k0s(),t.DNE(6,j,2,1,"form",12)(7,F,4,3,"div",13),t.j41(8,"p-button",14),t.bIt("onClick",function(){t.eBV(e);const i=t.XpG(2);return t.Njj(i.checkAnswers(i.selectedUnit))}),t.k0s(),t.j41(9,"p-button",15),t.bIt("onClick",function(){t.eBV(e);const i=t.XpG(2);return t.Njj(i.resetQuiz(i.selectedUnit))}),t.k0s()()}if(2&s){const e=t.XpG(2);t.R7$(2),t.SpI("Unit ",e.selectedUnit.Unit,""),t.R7$(2),t.Y8G("src",e.selectedUnit.Part2.Src,t.B4B),t.R7$(2),t.Y8G("ngIf",!e.practiceData[e.selectedUnit.Unit-1].showResults),t.R7$(),t.Y8G("ngIf",e.practiceData[e.selectedUnit.Unit-1].showResults)}}function R(s,a){if(1&s&&(t.j41(0,"div")(1,"h5",9),t.EFF(2),t.k0s(),t.j41(3,"audio",10),t.nrm(4,"source",11),t.EFF(5," Your browser does not support the audio tag. "),t.k0s()()),2&s){const e=t.XpG(2);t.R7$(2),t.SpI("Unit ",e.selectedUnitPart3.Unit,""),t.R7$(2),t.Y8G("src",e.selectedUnitPart3.Part3.Src,t.B4B)}}function k(s,a){if(1&s){const e=t.RV6();t.j41(0,"div",1)(1,"div",2)(2,"h2"),t.EFF(3),t.k0s()(),t.j41(4,"div",2)(5,"p-accordion",3)(6,"p-accordionTab",4)(7,"div",2)(8,"label"),t.EFF(9,"Ch\u1ecdn b\xe0i: "),t.k0s(),t.j41(10,"p-dropdown",5),t.mxI("ngModelChange",function(i){t.eBV(e);const r=t.XpG();return t.DH7(r.selectedUnit,i)||(r.selectedUnit=i),t.Njj(i)}),t.k0s()(),t.j41(11,"div",2),t.DNE(12,E,10,4,"div",6),t.k0s()(),t.j41(13,"p-accordionTab",7)(14,"div",2)(15,"label"),t.EFF(16,"Ch\u1ecdn b\xe0i: "),t.k0s(),t.j41(17,"p-dropdown",5),t.mxI("ngModelChange",function(i){t.eBV(e);const r=t.XpG();return t.DH7(r.selectedUnitPart3,i)||(r.selectedUnitPart3=i),t.Njj(i)}),t.k0s()(),t.DNE(18,R,6,2,"div",6),t.k0s(),t.nrm(19,"p-accordionTab",8),t.k0s()()()}if(2&s){const e=t.XpG();t.R7$(3),t.JRh(e.unitData.BookName),t.R7$(2),t.Y8G("activeIndex",0),t.R7$(5),t.Y8G("options",e.unitData.Units),t.R50("ngModel",e.selectedUnit),t.R7$(2),t.Y8G("ngIf",e.selectedUnit),t.R7$(5),t.Y8G("options",e.unitData.Units),t.R50("ngModel",e.selectedUnitPart3),t.R7$(),t.Y8G("ngIf",e.selectedUnitPart3)}}const x=[{path:"",component:g},{path:"unit/:unit_name",component:(()=>{class s{route;_http;unitName="";jsonPath="";unitData;practiceData;testData;isLoading=!0;selectedUnit;selectedUnitPart3;constructor(e,n){this.route=e,this._http=n}ngOnInit(){this.unitName=this.route.snapshot.paramMap.get("unit_name"),this.jsonPath=`assets/data/json/${this.unitName}.json`,this._http.get(this.jsonPath).subscribe(e=>{this.unitData=e,this.practiceData=[];for(let n=0;n<13;n++)this.practiceData.push({userAnswers:Array(5).fill(""),showResults:!1,results:[],totalScore:0});this.testData={userAnswers:Array(30).fill(""),showResults:!1,results:[],totalScore:0},this.isLoading=!1})}checkAnswers(e){this.practiceData[e.Unit-1].results=[];for(let n=0;n<e.Part2.Quiz.length;n++)this.practiceData[e.Unit-1].results.push(this.practiceData[e.Unit-1].userAnswers[n]===e.Part2.Quiz[n].CorrectAnswer?"correct":"incorrect");this.practiceData[e.Unit-1].showResults=!0;for(let n=0;n<e.Part2.Quiz.length;n++)this.practiceData[e.Unit-1].userAnswers[n]===e.Part2.Quiz[n].CorrectAnswer&&(this.practiceData[e.Unit-1].totalScore+=2)}resetQuiz(e){this.practiceData[e.Unit-1].userAnswers.fill(""),this.practiceData[e.Unit-1].showResults=!1,this.practiceData[e.Unit-1].results=[],this.practiceData[e.Unit-1].totalScore=0}static \u0275fac=function(n){return new(n||s)(t.rXU(p.nX),t.rXU(h.Qq))};static \u0275cmp=t.VBU({type:s,selectors:[["app-unit"]],decls:1,vars:1,consts:[["class","grid",4,"ngIf"],[1,"grid"],[1,"col-12"],[3,"activeIndex"],["header","Ph\u1ea7n 2"],["optionLabel","Unit","placeholder","Ch\u1ecdn b\xe0i",3,"ngModelChange","options","ngModel"],[4,"ngIf"],["header","Ph\u1ea7n 3"],["header","Ph\u1ea7n 4"],[1,"mb-2"],["controls","",1,"mb-2"],["type","audio/mpeg",3,"src"],["class","flex flex-column mb-2",4,"ngIf"],["class","mb-2",4,"ngIf"],["label","Ki\u1ec3m tra",1,"mr-2",3,"onClick"],["label","L\xe0m l\u1ea1i","severity","secondary",3,"onClick"],[1,"flex","flex-column","mb-2"],["class","flex justify-content-between",4,"ngFor","ngForOf"],[1,"flex","justify-content-between"],["type","radio",3,"ngModelChange","ngModel","value","name"],[4,"ngFor","ngForOf"],[3,"ngStyle"]],template:function(n,i){1&n&&t.DNE(0,k,20,8,"div",0),2&n&&t.Y8G("ngIf",!i.isLoading)},dependencies:[d.Sq,d.bT,d.B3,l.qT,l.me,l.Fm,l.BC,l.cb,l.vS,l.cV,_.nD,_.gV,U.$n,f.ms]})}return s})()}];let G=(()=>{class s{static \u0275fac=function(n){return new(n||s)};static \u0275mod=t.$C({type:s});static \u0275inj=t.G2t({imports:[p.iI.forChild(x),p.iI]})}return s})();var b=c(494),T=c(7164);const y=[_.h6,b.Ko,T.m,U.tm,f.kr];let P=(()=>{class s{static \u0275fac=function(n){return new(n||s)};static \u0275mod=t.$C({type:s});static \u0275inj=t.G2t({imports:[d.MD,G,l.YN,y]})}return s})()}}]);