"use strict";(self.webpackChunklanguage_study=self.webpackChunklanguage_study||[]).push([[719],{3719:(Q,m,c)=>{c.r(m),c.d(m,{ToeicModule:()=>S});var d=c(177),l=c(4341),_=c(1069),t=c(3953),h=c(1626);let v=(()=>{class i{_http;jsonVeryEasyToeicFile="assets/data/json/very-easy-toeic.part2.json";jsonStarterToeicFile="assets/data/json/starter-toeic.part2.json";bookOnePartTwo;bookSecondPartTwo;data;constructor(e){this._http=e,e.get(this.jsonVeryEasyToeicFile).subscribe(n=>{this.bookOnePartTwo=n,console.log("res: ",n)}),this.data=[];for(let n=0;n<13;n++)this.data.push({userAnswers:Array(5).fill(""),showResults:!1,results:[],totalScore:0})}checkAnswers(e){this.data[e.Unit-1].results=[];for(let n=0;n<e.Part2.Quiz.length;n++)this.data[e.Unit-1].results.push(this.data[e.Unit-1].userAnswers[n]===e.Part2.Quiz[n].CorrectAnswer?"correct":"incorrect");this.data[e.Unit-1].showResults=!0;for(let n=0;n<e.Part2.Quiz.length;n++)this.data[e.Unit-1].userAnswers[n]===e.Part2.Quiz[n].CorrectAnswer&&(this.data[e.Unit-1].totalScore+=2)}resetQuiz(e){this.data[e.Unit-1].userAnswers.fill(""),this.data[e.Unit-1].showResults=!1,this.data[e.Unit-1].results=[]}static \u0275fac=function(n){return new(n||i)(t.rXU(h.Qq))};static \u0275cmp=t.VBU({type:i,selectors:[["app-toeic"]],decls:8,vars:2,consts:[[1,"grid"],[1,"col-12"],[3,"routerLink"]],template:function(n,s){1&n&&(t.j41(0,"div",0)(1,"div",1)(2,"p")(3,"a",2),t.EFF(4,"Very Easy Toeic"),t.k0s()(),t.j41(5,"p")(6,"a",2),t.EFF(7,"Starter Toeic"),t.k0s()()()()),2&n&&(t.R7$(3),t.Y8G("routerLink","/toeic/unit/very-easy-toeic"),t.R7$(3),t.Y8G("routerLink","/toeic/unit/starter-toeic"))},dependencies:[_.Wk]})}return i})();var p=c(2637),f=c(1141),U=c(675);const D=["audioPlayerPart2"],w=["audioPlayerPart3"],j=["audioPlayerPart4"],g=i=>({color:i}),C=()=>["A","B","C"];function F(i,a){if(1&i){const e=t.RV6();t.j41(0,"div",21)(1,"span"),t.EFF(2),t.k0s(),t.j41(3,"label")(4,"input",22),t.mxI("ngModelChange",function(s){const r=t.eBV(e).index,o=t.XpG(4);return t.DH7(o.practiceData[o.selectedUnit.Unit-1].userAnswers[r],s)||(o.practiceData[o.selectedUnit.Unit-1].userAnswers[r]=s),t.Njj(s)}),t.k0s(),t.EFF(5," A "),t.k0s(),t.j41(6,"label")(7,"input",22),t.mxI("ngModelChange",function(s){const r=t.eBV(e).index,o=t.XpG(4);return t.DH7(o.practiceData[o.selectedUnit.Unit-1].userAnswers[r],s)||(o.practiceData[o.selectedUnit.Unit-1].userAnswers[r]=s),t.Njj(s)}),t.k0s(),t.EFF(8," B "),t.k0s(),t.j41(9,"label")(10,"input",22),t.mxI("ngModelChange",function(s){const r=t.eBV(e).index,o=t.XpG(4);return t.DH7(o.practiceData[o.selectedUnit.Unit-1].userAnswers[r],s)||(o.practiceData[o.selectedUnit.Unit-1].userAnswers[r]=s),t.Njj(s)}),t.k0s(),t.EFF(11," C "),t.k0s(),t.nrm(12,"br"),t.k0s()}if(2&i){const e=a.$implicit,n=a.index,s=t.XpG(4);t.R7$(2),t.SpI("",n+1,"."),t.R7$(2),t.Mz_("name","question",n,""),t.R50("ngModel",s.practiceData[s.selectedUnit.Unit-1].userAnswers[n]),t.Y8G("value",e.Answers[0]),t.R7$(3),t.Mz_("name","question",n,""),t.R50("ngModel",s.practiceData[s.selectedUnit.Unit-1].userAnswers[n]),t.Y8G("value",e.Answers[1]),t.R7$(3),t.Mz_("name","question",n,""),t.R50("ngModel",s.practiceData[s.selectedUnit.Unit-1].userAnswers[n]),t.Y8G("value",e.Answers[2])}}function A(i,a){if(1&i&&(t.j41(0,"form",19),t.DNE(1,F,13,13,"div",20),t.k0s()),2&i){const e=t.XpG(3);t.R7$(),t.Y8G("ngForOf",e.selectedUnit.Part2.Quiz)}}function E(i,a){if(1&i&&(t.j41(0,"span")(1,"span",24),t.EFF(2),t.k0s(),t.nrm(3,"br"),t.k0s()),2&i){const e=a.$implicit,n=a.index,s=t.XpG(),r=s.$implicit,o=s.index,u=t.XpG(4);t.R7$(),t.Y8G("ngStyle",t.eq3(3,g,u.practiceData[u.selectedUnit.Unit-1].userAnswers[o]===r.CorrectAnswer&&e===r.CorrectAnswer?"green":u.practiceData[u.selectedUnit.Unit-1].userAnswers[o]===e&&e!==r.CorrectAnswer?"red":e===r.CorrectAnswer?"blue":"black")),t.R7$(),t.Lme(" ",t.lJ4(5,C)[n],". ",e," ")}}function k(i,a){if(1&i&&(t.j41(0,"div")(1,"p"),t.EFF(2),t.k0s(),t.j41(3,"p"),t.DNE(4,E,4,6,"span",23),t.k0s()()),2&i){const e=a.$implicit,n=a.index;t.R7$(2),t.Lme("",n+1,". ",e.Question,""),t.R7$(2),t.Y8G("ngForOf",e.Answers)}}function R(i,a){if(1&i&&(t.j41(0,"div",10),t.DNE(1,k,5,3,"div",23),t.j41(2,"h3"),t.EFF(3),t.k0s()()),2&i){const e=t.XpG(3);t.R7$(),t.Y8G("ngForOf",e.selectedUnit.Part2.Quiz),t.R7$(2),t.Lme("T\u1ed5ng \u0111i\u1ec3m c\u1ee7a b\u1ea1n: ",e.practiceData[e.selectedUnit.Unit-1].totalScore,"/",e.selectedUnit.Part2.Quiz.length," ")}}function G(i,a){if(1&i){const e=t.RV6();t.j41(0,"div")(1,"h5",10),t.EFF(2),t.k0s(),t.j41(3,"audio",11,0),t.nrm(5,"source",12),t.EFF(6," Your browser does not support the audio tag. "),t.k0s(),t.DNE(7,A,2,1,"form",13)(8,R,4,3,"div",14),t.j41(9,"p-button",15),t.bIt("onClick",function(){t.eBV(e);const s=t.XpG(2);return t.Njj(s.checkAnswers(s.selectedUnit))}),t.k0s(),t.j41(10,"p-button",16),t.bIt("onClick",function(){t.eBV(e);const s=t.XpG(2);return t.Njj(s.resetQuiz(s.selectedUnit))}),t.k0s()()}if(2&i){const e=t.XpG(2);t.R7$(2),t.SpI("Unit ",e.selectedUnit.Unit,""),t.R7$(3),t.Y8G("src",e.selectedUnit.Part2.Src,t.B4B),t.R7$(2),t.Y8G("ngIf",!e.practiceData[e.selectedUnit.Unit-1].showResults),t.R7$(),t.Y8G("ngIf",e.practiceData[e.selectedUnit.Unit-1].showResults)}}function P(i,a){if(1&i){const e=t.RV6();t.j41(0,"div",21)(1,"span"),t.EFF(2),t.k0s(),t.j41(3,"label")(4,"input",22),t.mxI("ngModelChange",function(s){const r=t.eBV(e).index,o=t.XpG(3);return t.DH7(o.testData.userAnswers[r],s)||(o.testData.userAnswers[r]=s),t.Njj(s)}),t.k0s(),t.EFF(5," A "),t.k0s(),t.j41(6,"label")(7,"input",22),t.mxI("ngModelChange",function(s){const r=t.eBV(e).index,o=t.XpG(3);return t.DH7(o.testData.userAnswers[r],s)||(o.testData.userAnswers[r]=s),t.Njj(s)}),t.k0s(),t.EFF(8," B "),t.k0s(),t.j41(9,"label")(10,"input",22),t.mxI("ngModelChange",function(s){const r=t.eBV(e).index,o=t.XpG(3);return t.DH7(o.testData.userAnswers[r],s)||(o.testData.userAnswers[r]=s),t.Njj(s)}),t.k0s(),t.EFF(11," C "),t.k0s(),t.nrm(12,"br"),t.k0s()}if(2&i){const e=a.$implicit,n=a.index,s=t.XpG(3);t.R7$(2),t.SpI("",n+1,"."),t.R7$(2),t.Mz_("name","question",n,""),t.R50("ngModel",s.testData.userAnswers[n]),t.Y8G("value",e.Answers[0]),t.R7$(3),t.Mz_("name","question",n,""),t.R50("ngModel",s.testData.userAnswers[n]),t.Y8G("value",e.Answers[1]),t.R7$(3),t.Mz_("name","question",n,""),t.R50("ngModel",s.testData.userAnswers[n]),t.Y8G("value",e.Answers[2])}}function x(i,a){if(1&i&&(t.j41(0,"form",19),t.DNE(1,P,13,13,"div",20),t.k0s()),2&i){const e=t.XpG(2);t.R7$(),t.Y8G("ngForOf",e.unitData.Test.Quiz)}}function T(i,a){if(1&i&&(t.j41(0,"span")(1,"span",24),t.EFF(2),t.k0s(),t.nrm(3,"br"),t.k0s()),2&i){const e=a.$implicit,n=a.index,s=t.XpG(),r=s.$implicit,o=s.index,u=t.XpG(3);t.R7$(),t.Y8G("ngStyle",t.eq3(3,g,u.testData.userAnswers[o]===r.CorrectAnswer&&e===r.CorrectAnswer?"green":u.testData.userAnswers[o]===e&&e!==r.CorrectAnswer?"red":e===r.CorrectAnswer?"blue":"black")),t.R7$(),t.Lme(" ",t.lJ4(5,C)[n],". ",e," ")}}function b(i,a){if(1&i&&(t.j41(0,"div")(1,"p"),t.EFF(2),t.k0s(),t.j41(3,"p"),t.DNE(4,T,4,6,"span",23),t.k0s()()),2&i){const e=a.$implicit,n=a.index;t.R7$(2),t.Lme("",n+1,". ",e.Question,""),t.R7$(2),t.Y8G("ngForOf",e.Answers)}}function y(i,a){if(1&i&&(t.j41(0,"div",10),t.DNE(1,b,5,3,"div",23),t.j41(2,"h3"),t.EFF(3),t.k0s()()),2&i){const e=t.XpG(2);t.R7$(),t.Y8G("ngForOf",e.unitData.Test.Quiz),t.R7$(2),t.Lme("T\u1ed5ng \u0111i\u1ec3m c\u1ee7a b\u1ea1n: ",e.testData.totalScore,"/",e.unitData.Test.Quiz.length," ")}}function M(i,a){if(1&i&&(t.j41(0,"div")(1,"h5",10),t.EFF(2),t.k0s(),t.j41(3,"audio",11,1),t.nrm(5,"source",12),t.EFF(6," Your browser does not support the audio tag. "),t.k0s()()),2&i){const e=t.XpG(2);t.R7$(2),t.SpI("Unit ",e.selectedUnitPart3.Unit,""),t.R7$(3),t.Y8G("src",e.selectedUnitPart3.Part3.Src,t.B4B)}}function Y(i,a){if(1&i&&(t.j41(0,"div")(1,"h5",10),t.EFF(2),t.k0s(),t.j41(3,"audio",11,2),t.nrm(5,"source",12),t.EFF(6," Your browser does not support the audio tag. "),t.k0s()()),2&i){const e=t.XpG(2);t.R7$(2),t.SpI("Unit ",e.selectedUnitPart4.Unit,""),t.R7$(3),t.Y8G("src",e.selectedUnitPart4.Part4.Src,t.B4B)}}function B(i,a){if(1&i){const e=t.RV6();t.j41(0,"div",4)(1,"div",5)(2,"h2"),t.EFF(3),t.k0s()(),t.j41(4,"div",5)(5,"p-accordion",6)(6,"p-accordionTab",7)(7,"div",5)(8,"label"),t.EFF(9,"Ch\u1ecdn b\xe0i: "),t.k0s(),t.j41(10,"p-dropdown",8),t.mxI("ngModelChange",function(s){t.eBV(e);const r=t.XpG();return t.DH7(r.selectedUnit,s)||(r.selectedUnit=s),t.Njj(s)}),t.bIt("onChange",function(){t.eBV(e);const s=t.XpG();return t.Njj(s.onUnitChange(2))}),t.k0s()(),t.j41(11,"div",5),t.DNE(12,G,11,4,"div",9),t.k0s(),t.j41(13,"div",5)(14,"h5",10),t.EFF(15,"Final test"),t.k0s(),t.j41(16,"audio",11),t.nrm(17,"source",12),t.EFF(18," Your browser does not support the audio tag. "),t.k0s(),t.DNE(19,x,2,1,"form",13)(20,y,4,3,"div",14),t.j41(21,"p-button",15),t.bIt("onClick",function(){t.eBV(e);const s=t.XpG();return t.Njj(s.checkAnswersFinal())}),t.k0s(),t.j41(22,"p-button",16),t.bIt("onClick",function(){t.eBV(e);const s=t.XpG();return t.Njj(s.resetQuizFinal())}),t.k0s()()(),t.j41(23,"p-accordionTab",17)(24,"div",5)(25,"label"),t.EFF(26,"Ch\u1ecdn b\xe0i: "),t.k0s(),t.j41(27,"p-dropdown",8),t.mxI("ngModelChange",function(s){t.eBV(e);const r=t.XpG();return t.DH7(r.selectedUnitPart3,s)||(r.selectedUnitPart3=s),t.Njj(s)}),t.bIt("onChange",function(){t.eBV(e);const s=t.XpG();return t.Njj(s.onUnitChange(3))}),t.k0s(),t.DNE(28,M,7,2,"div",9),t.k0s(),t.j41(29,"div",5)(30,"h5",10),t.EFF(31,"Final test"),t.k0s(),t.j41(32,"audio",11),t.nrm(33,"source",12),t.EFF(34," Your browser does not support the audio tag. "),t.k0s()()(),t.j41(35,"p-accordionTab",18)(36,"div",5)(37,"label"),t.EFF(38,"Ch\u1ecdn b\xe0i: "),t.k0s(),t.j41(39,"p-dropdown",8),t.mxI("ngModelChange",function(s){t.eBV(e);const r=t.XpG();return t.DH7(r.selectedUnitPart4,s)||(r.selectedUnitPart4=s),t.Njj(s)}),t.bIt("onChange",function(){t.eBV(e);const s=t.XpG();return t.Njj(s.onUnitChange(4))}),t.k0s(),t.DNE(40,Y,7,2,"div",9),t.k0s(),t.j41(41,"div",5)(42,"h5",10),t.EFF(43,"Final test"),t.k0s(),t.j41(44,"audio",11),t.nrm(45,"source",12),t.EFF(46," Your browser does not support the audio tag. "),t.k0s()()()()()()}if(2&i){const e=t.XpG();t.R7$(3),t.JRh(e.unitData.BookName),t.R7$(2),t.Y8G("activeIndex",0),t.R7$(5),t.Y8G("options",e.unitData.Units),t.R50("ngModel",e.selectedUnit),t.R7$(2),t.Y8G("ngIf",e.selectedUnit),t.R7$(5),t.Y8G("src",e.unitData.Test.Src2,t.B4B),t.R7$(2),t.Y8G("ngIf",!e.testData.showResults),t.R7$(),t.Y8G("ngIf",e.testData.showResults),t.R7$(7),t.Y8G("options",e.unitData.Units),t.R50("ngModel",e.selectedUnitPart3),t.R7$(),t.Y8G("ngIf",e.selectedUnitPart3),t.R7$(5),t.Y8G("src",e.unitData.Test.Src3,t.B4B),t.R7$(6),t.Y8G("options",e.unitData.Units),t.R50("ngModel",e.selectedUnitPart4),t.R7$(),t.Y8G("ngIf",e.selectedUnitPart4),t.R7$(5),t.Y8G("src",e.unitData.Test.Src4,t.B4B)}}const I=[{path:"",component:v},{path:"unit/:unit_name",component:(()=>{class i{route;_http;unitName="";jsonPath="";unitData;practiceData;testData;isLoading=!0;selectedUnit;selectedUnitPart3;selectedUnitPart4;audioPlayerPart2;audioPlayerPart3;audioPlayerPart4;constructor(e,n){this.route=e,this._http=n}ngOnInit(){this.unitName=this.route.snapshot.paramMap.get("unit_name"),this.jsonPath=`assets/data/json/${this.unitName}.json`,this._http.get(this.jsonPath).subscribe(e=>{this.unitData=e,this.practiceData=[];for(let n=0;n<13;n++)this.practiceData.push({userAnswers:Array(5).fill(""),showResults:!1,results:[],totalScore:0});this.testData={userAnswers:Array(30).fill(""),showResults:!1,results:[],totalScore:0},this.isLoading=!1})}checkAnswers(e){this.practiceData[e.Unit-1].results=[];for(let n=0;n<e.Part2.Quiz.length;n++)this.practiceData[e.Unit-1].results.push(this.practiceData[e.Unit-1].userAnswers[n]===e.Part2.Quiz[n].CorrectAnswer?"correct":"incorrect");this.practiceData[e.Unit-1].showResults=!0;for(let n=0;n<e.Part2.Quiz.length;n++)this.practiceData[e.Unit-1].userAnswers[n]===e.Part2.Quiz[n].CorrectAnswer&&(this.practiceData[e.Unit-1].totalScore+=1)}checkAnswersFinal(){this.testData.results=[];for(let e=0;e<this.unitData.Test.Quiz.length;e++)this.testData.results.push(this.testData.userAnswers[e]===this.unitData.Test.Quiz[e].CorrectAnswer?"correct":"incorrect");this.testData.showResults=!0;for(let e=0;e<this.unitData.Test.Quiz.length;e++)this.testData.userAnswers[e]===this.unitData.Test.Quiz[e].CorrectAnswer&&(this.testData.totalScore+=1)}resetQuiz(e){this.practiceData[e.Unit-1].userAnswers.fill(""),this.practiceData[e.Unit-1].showResults=!1,this.practiceData[e.Unit-1].results=[],this.practiceData[e.Unit-1].totalScore=0}resetQuizFinal(){this.testData.userAnswers.fill(""),this.testData.showResults=!1,this.testData.results=[],this.testData.totalScore=0}onUnitChange(e){2==e?this.audioPlayerPart2.nativeElement.load():3==e?this.audioPlayerPart3.nativeElement.load():this.audioPlayerPart4.nativeElement.load()}static \u0275fac=function(n){return new(n||i)(t.rXU(_.nX),t.rXU(h.Qq))};static \u0275cmp=t.VBU({type:i,selectors:[["app-unit"]],viewQuery:function(n,s){if(1&n&&(t.GBs(D,5),t.GBs(w,5),t.GBs(j,5)),2&n){let r;t.mGM(r=t.lsd())&&(s.audioPlayerPart2=r.first),t.mGM(r=t.lsd())&&(s.audioPlayerPart3=r.first),t.mGM(r=t.lsd())&&(s.audioPlayerPart4=r.first)}},decls:1,vars:1,consts:[["audioPlayerPart2",""],["audioPlayerPart3",""],["audioPlayerPart4",""],["class","grid",4,"ngIf"],[1,"grid"],[1,"col-12"],[3,"activeIndex"],["header","Ph\u1ea7n 2"],["optionLabel","Unit","placeholder","Ch\u1ecdn b\xe0i",3,"ngModelChange","onChange","options","ngModel"],[4,"ngIf"],[1,"mb-2"],["controls","",1,"mb-2"],["type","audio/mpeg",3,"src"],["class","flex flex-column mb-2",4,"ngIf"],["class","mb-2",4,"ngIf"],["label","Ki\u1ec3m tra",1,"mr-2",3,"onClick"],["label","L\xe0m l\u1ea1i","severity","secondary",3,"onClick"],["header","Ph\u1ea7n 3"],["header","Ph\u1ea7n 4"],[1,"flex","flex-column","mb-2"],["class","flex justify-content-between",4,"ngFor","ngForOf"],[1,"flex","justify-content-between"],["type","radio",3,"ngModelChange","ngModel","value","name"],[4,"ngFor","ngForOf"],[3,"ngStyle"]],template:function(n,s){1&n&&t.DNE(0,B,47,16,"div",3),2&n&&t.Y8G("ngIf",!s.isLoading)},dependencies:[d.Sq,d.bT,d.B3,l.qT,l.me,l.Fm,l.BC,l.cb,l.vS,l.cV,p.nD,p.gV,f.$n,U.ms]})}return i})()}];let $=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275mod=t.$C({type:i});static \u0275inj=t.G2t({imports:[_.iI.forChild(I),_.iI]})}return i})();var z=c(494),N=c(7164);const X=[p.h6,z.Ko,N.m,f.tm,U.kr];let S=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275mod=t.$C({type:i});static \u0275inj=t.G2t({imports:[d.MD,$,l.YN,X]})}return i})()}}]);