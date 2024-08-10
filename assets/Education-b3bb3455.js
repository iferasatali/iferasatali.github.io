import{p as Y,M as fe,m as Z,N as pe,O as ee,e as ae,P as te,g as le,f as se,Q as he,R as ke,S as E,i as ye,a as t,T as M,U as J,W as ge,X as _e,Y as Ce,Z as be,$ as Se,a0 as xe,a1 as Ve,a2 as Ie,a3 as Pe,a4 as Ae,a5 as we,a6 as Be,a7 as Le,a8 as Ee,a9 as Ge,l as Ne,aa as Me,ab as Te,s as T,ac as $,ad as De,ae as Fe,af as je,ag as G,ah as N,ai as ne,aj as S,ak as U,v as $e,d as Re,t as u,J as ze,r as Ke,K as c,w as C,o as i,C as n,al as w,am as q,c as D,D as B,an as F,L as b,G as He,H as Oe,_ as Je}from"./index-9b5957ad.js";import{g as L}from"./index-0fa819ad.js";import{T as Ue}from"./TextPlugin-7f8d2251.js";import{a as qe,b as Qe}from"./googleSpreadSheetAPI-2c00ed21.js";import{V as We,a as j}from"./VRow-818d9b0b.js";import{V as Q}from"./VSkeletonLoader-32faab9c.js";const W=[{degree:"Matric",studyIn:"Science",duration:"01/2010 - 03/2018",institutionName:"Laural Bank Public School (LPS)",marks:"",animation:"animation-1"},{degree:"Intermediate",studyIn:"Science",duration:"01/2018 - 03/2019",institutionName:"Punjab Group of Colleges (PGC)",marks:"",animation:"animation-2"},{degree:"Bachelors",studyIn:"Computer Science",duration:"08/2019 - 08/2023",institutionName:"Univeristy of Central Punjab (UCP)",marks:"CGPA: 3.4",animation:"animation-3"}],Xe=["JavaScript","Node.js","Vue.js","C++","Vuex","TypeScript","Laravel","Python","Pinia","Express.js","MongoDB","MySQL","HTML","Sequelize","CSS","Sass","TailwindCSS","Bootstrap","Vuetify","Git","GitHub","NPM","Composer","VS Code","PyCharm","Postman","Svelte","PHP","C"],Ye=["Cricket","Reading","Coding","Netflix"];const ie=Symbol.for("vuetify:v-chip-group"),Ze=Y({column:Boolean,filter:Boolean,valueComparator:{type:Function,default:fe},...Z(),...pe({selectedClass:"v-chip--selected"}),...ee(),...ae(),...te({variant:"tonal"})},"VChipGroup");le()({name:"VChipGroup",props:Ze(),emits:{"update:modelValue":e=>!0},setup(e,x){let{slots:r}=x;const{themeClasses:v}=se(e),{isSelected:l,select:m,next:f,prev:p,selected:h}=he(e,ie);return ke({VChip:{color:E(e,"color"),disabled:E(e,"disabled"),filter:E(e,"filter"),variant:E(e,"variant")}}),ye(()=>t(e.tag,{class:["v-chip-group",{"v-chip-group--column":e.column},v.value,e.class],style:e.style},{default:()=>{var k;return[(k=r.default)==null?void 0:k.call(r,{isSelected:l,select:m,next:f,prev:p,selected:h.value})]}})),{}}});const ea=Y({activeClass:String,appendAvatar:String,appendIcon:M,closable:Boolean,closeIcon:{type:M,default:"$delete"},closeLabel:{type:String,default:"$vuetify.close"},draggable:Boolean,filter:Boolean,filterIcon:{type:String,default:"$complete"},label:Boolean,link:{type:Boolean,default:void 0},pill:Boolean,prependAvatar:String,prependIcon:M,ripple:{type:[Boolean,Object],default:!0},text:String,modelValue:{type:Boolean,default:!0},onClick:J(),onClickOnce:J(),...ge(),...Z(),..._e(),...Ce(),...be(),...Se(),...xe(),...Ve(),...ee({tag:"span"}),...ae(),...te({variant:"tonal"})},"VChip"),X=le()({name:"VChip",directives:{Ripple:Ie},props:ea(),emits:{"click:close":e=>!0,"update:modelValue":e=>!0,"group:selected":e=>!0,click:e=>!0},setup(e,x){let{attrs:r,emit:v,slots:l}=x;const{t:m}=Pe(),{borderClasses:f}=Ae(e),{colorClasses:p,colorStyles:h,variantClasses:k}=we(e),{densityClasses:V}=Be(e),{elevationClasses:y}=Le(e),{roundedClasses:g}=Ee(e),{sizeClasses:P}=Ge(e),{themeClasses:s}=se(e),d=Ne(e,"modelValue"),a=Me(e,ie,!1),_=Te(e,r),ce=T(()=>e.link!==!1&&_.isLink.value),I=T(()=>!e.disabled&&e.link!==!1&&(!!a||e.link||_.isClickable.value)),de=T(()=>({"aria-label":m(e.closeLabel),onClick(o){o.stopPropagation(),d.value=!1,v("click:close",o)}}));function R(o){var A;v("click",o),I.value&&((A=_.navigate)==null||A.call(_,o),a==null||a.toggle())}function re(o){(o.key==="Enter"||o.key===" ")&&(o.preventDefault(),R(o))}return()=>{const o=_.isLink.value?"a":e.tag,A=!!(e.appendIcon||e.appendAvatar),ue=!!(A||l.append),ve=!!(l.close||e.closable),z=!!(l.filter||e.filter)&&a,K=!!(e.prependIcon||e.prependAvatar),me=!!(K||l.prepend),H=!a||a.isSelected.value;return d.value&&$(t(o,{class:["v-chip",{"v-chip--disabled":e.disabled,"v-chip--label":e.label,"v-chip--link":I.value,"v-chip--filter":z,"v-chip--pill":e.pill},s.value,f.value,H?p.value:void 0,V.value,y.value,g.value,P.value,k.value,a==null?void 0:a.selectedClass.value,e.class],style:[H?h.value:void 0,e.style],disabled:e.disabled||void 0,draggable:e.draggable,href:_.href.value,tabindex:I.value?0:void 0,onClick:R,onKeydown:I.value&&!ce.value&&re},{default:()=>{var O;return[Fe(I.value,"v-chip"),z&&t(je,{key:"filter"},{default:()=>[$(t("div",{class:"v-chip__filter"},[l.filter?t(N,{key:"filter-defaults",disabled:!e.filterIcon,defaults:{VIcon:{icon:e.filterIcon}}},l.filter):t(G,{key:"filter-icon",icon:e.filterIcon},null)]),[[ne,a.isSelected.value]])]}),me&&t("div",{key:"prepend",class:"v-chip__prepend"},[l.prepend?t(N,{key:"prepend-defaults",disabled:!K,defaults:{VAvatar:{image:e.prependAvatar,start:!0},VIcon:{icon:e.prependIcon,start:!0}}},l.prepend):t(S,null,[e.prependIcon&&t(G,{key:"prepend-icon",icon:e.prependIcon,start:!0},null),e.prependAvatar&&t(U,{key:"prepend-avatar",image:e.prependAvatar,start:!0},null)])]),t("div",{class:"v-chip__content"},[((O=l.default)==null?void 0:O.call(l,{isSelected:a==null?void 0:a.isSelected.value,selectedClass:a==null?void 0:a.selectedClass.value,select:a==null?void 0:a.select,toggle:a==null?void 0:a.toggle,value:a==null?void 0:a.value.value,disabled:e.disabled}))??e.text]),ue&&t("div",{key:"append",class:"v-chip__append"},[l.append?t(N,{key:"append-defaults",disabled:!A,defaults:{VAvatar:{end:!0,image:e.appendAvatar},VIcon:{end:!0,icon:e.appendIcon}}},l.append):t(S,null,[e.appendIcon&&t(G,{key:"append-icon",end:!0,icon:e.appendIcon},null),e.appendAvatar&&t(U,{key:"append-avatar",end:!0,image:e.appendAvatar},null)])]),ve&&t("button",$e({key:"close",class:"v-chip__close"},de.value),[l.close?t(N,{key:"close-defaults",defaults:{VIcon:{icon:e.closeIcon,size:"x-small"}}},l.close):t(G,{key:"close-icon",icon:e.closeIcon,size:"x-small"},null)])]}}),[[De("ripple"),I.value&&e.ripple,null]])}}}),oe=e=>(He("data-v-b75e331c"),e=e(),Oe(),e),aa={id:"serving-best"},ta={class:"d-flex flex-column",style:{gap:"0.6rem"}},la={class:"header-simple"},sa={class:"main-sub-heading text"},na={class:"main-sub-heading"},ia={class:"d-flex justify-end"},oa={class:"sub-heading text-whitew"},ca=oe(()=>n("div",{class:"d-flex flex-column",style:{gap:"0.6rem"}},[n("p",{class:"header-simple"},"Skills")],-1)),da={key:0},ra={key:1,class:"d-flex align-center flex-wrap"},ua=oe(()=>n("div",{class:"d-flex flex-column",style:{gap:"0.6rem"}},[n("p",{class:"header-simple"},"Interests")],-1)),va={key:3,class:"d-flex align-center flex-wrap"},ma=Re({__name:"Education",setup(e){L.registerPlugin(Ue);const x=u(null),r=u(null),v=u(null),l=Array.from({length:W.length},(y,g)=>u(null)),m=u([]),f=u([]),p=u(!1),h=u(!1),k=["active-green","leadership-management","soft-skill","it-and-software","hard-skills","green-skills","link"],V=()=>k[Math.floor(Math.random()*k.length)];return ze(async()=>{L.to(v.value,{duration:1,opacity:1,display:"block",x:1,y:1,delay:.7}),L.to(x.value,{duration:.6,text:"Academic Journey",ease:"slow(0.7,0.7,false)",y:3}),L.to(r.value,{duration:1,text:"Nurturing Knowledge, Empowering Futures",ease:"none",delay:.2}),p.value=!0,h.value=!0;const y=await qe();y&&y.length>0?m.value=y:m.value=Xe;const g=await Qe();g&&g.length>0?f.value=g:f.value=Ye,l.forEach((P,s)=>{L.to(P.value,{duration:1,opacity:1,display:"block",x:1,y:1,delay:.3+s*.1})}),p.value=!1,h.value=!1}),(y,g)=>{const P=Ke("divd");return i(),c("section",aa,[t(We,{align:"center"},{default:C(()=>[t(j,{cols:"12",class:"d-flex align-center justify-center flex-column mt-9"},{default:C(()=>[n("p",{class:"main-heading",ref_key:"title1",ref:x},null,512),n("p",{class:"sub-heading",ref_key:"title2",ref:r},null,512)]),_:1}),t(j,{cols:"12",sm:"6",class:"d-flex align-center justify-center mt-7 flex-wrap",style:{gap:"1rem"}},{default:C(()=>[(i(!0),c(S,null,w(q(W),(s,d)=>(i(),c("div",{key:d,class:B(["base-card",`${s.animation}`]),ref_for:!0,ref:q(l)[d]},[n("div",ta,[n("p",la,[F(b(s.degree)+" ",1),n("span",sa," - "+b(s.studyIn),1)]),n("p",na,b(s.institutionName),1),n("div",ia,[n("p",oa,b(s.duration),1)]),$(n("p",{class:"main-sub-heading"},b(s.marks),513),[[ne,s.marks]])])],2))),128))]),_:1}),t(j,{cols:"12",sm:"6"},{default:C(()=>[n("div",{class:"base-card d-flex align-center flex-column animation animation-skills-interest",ref_key:"skillsAndInterestAnimation",ref:v},[ca,p.value?(i(),c("div",ra,[(i(),c(S,null,w(10,s=>t(Q,{key:s,class:B(`ma-1 text-${V()}`),type:"chip",width:"100px",style:{"background-color":"transparent"}},null,8,["class"])),64))])):(i(),c("div",da,[(i(!0),c(S,null,w(m.value,(s,d)=>(i(),D(X,{key:d,class:B(`ma-2 text-${V()}`)},{default:C(()=>[F(b(s),1)]),_:2},1032,["class"]))),128))])),ua,h.value?(i(),c("div",va,[(i(),c(S,null,w(10,s=>t(Q,{key:s,class:B(`ma-1 text-${V()}`),type:"chip",width:"100px",style:{"background-color":"transparent"}},null,8,["class"])),64))])):(i(),D(P,{key:2},{default:C(()=>[(i(!0),c(S,null,w(f.value,(s,d)=>(i(),D(X,{key:d,class:B(`ma-2 text-${V()}`)},{default:C(()=>[F(b(s),1)]),_:2},1032,["class"]))),128))]),_:1}))],512)]),_:1})]),_:1})])}}});const _a=Je(ma,[["__scopeId","data-v-b75e331c"]]);export{_a as default};
