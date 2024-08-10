import{g as d}from"./index-0fa819ad.js";import{T as E}from"./TextPlugin-7f8d2251.js";import{c as S}from"./googleSpreadSheetAPI-2c00ed21.js";import{V as w,a as v}from"./VRow-818d9b0b.js";import{d as I,t as r,J as V,K as a,a as l,w as p,o as t,C as e,aj as f,al as _,an as A,L as i,ao as J,G as N,H as W,_ as b}from"./index-9b5957ad.js";import{V as D}from"./VSkeletonLoader-32faab9c.js";const P=[{companyName:"House of Tech (HOT)",role:"Full Stack Developer",duration:"08/2022 - 07/2023",content:["Application used for Online Booking of cars","Technologies: NodeJs, VueJs, Javascript, Google API, Express Js","Work on Database and API's Integration","Work on Backend and Frontend of the project."]},{companyName:"Aslase",role:"Full Stack Software Engineer",duration:"07/2023 - Present",content:["Integrate Recruitment portal for Hiring candidates","Technologies: NodeJs, VueJs, Javascript, Google API, Express Js","Work on Database and API's Integration","Work on Backend and Frontend of the project."]}],j=c=>(N("data-v-87a75f88"),c=c(),W(),c),F=j(()=>e("p",{class:"header-simple"},"Details",-1)),T={key:0},B={class:"main-heading1 mt-3"},C={class:"sub-heading1"},H={class:"sub-heading1 ml-2 d-flex justify-end"},G={class:"px-3"},L={key:1},O=I({__name:"WorkExperience",setup(c){d.registerPlugin(E);const m=r(null),g=r(null),h=r(null),u=r([]),s=r(!1);return V(async()=>{d.to(m.value,{duration:.6,text:"Professional Experience",ease:"slow(0.7,0.7,false)",x:0}),d.to(g.value,{duration:1,text:"Navigating Challenges and Driving Success in the Work Arena",ease:"none",delay:1}),d.to(h.value,{duration:1,opacity:1,display:"block",x:1});try{s.value=!0;const n=await S();n&&n.length?u.value=n.reverse():u.value=P.reverse(),s.value=!1}catch(n){console.error(n),s.value=!1}s.value=!1}),(n,R)=>(t(),a("section",null,[l(w,{align:"center",justify:"center"},{default:p(()=>[l(v,{cols:"12",class:"d-flex align-center justify-center flex-column mt-8"},{default:p(()=>[e("p",{class:"main-heading",ref_key:"title1",ref:m},null,512),e("p",{class:"paragraph",ref_key:"title2",ref:g},null,512)]),_:1}),l(v,{cols:"12",class:"d-flex align-center justify-center flex-wrap mt-6",style:{gap:"2rem"}},{default:p(()=>[e("div",{class:"d-flex base-card flex-column animation-div",ref_key:"workExperienceAnimation",ref:h},[F,s.value?(t(),a("div",L,[(t(),a(f,null,_(10,o=>l(D,{key:o,type:"heading",width:"100%",style:{"background-color":"transparent"}})),64))])):(t(),a("span",T,[(t(!0),a(f,null,_(u.value,(o,k)=>(t(),a("div",{key:k},[e("p",B,[A(i(k+1)+" - "+i(o.companyName)+" ",1),e("span",C," - "+i(o.role),1),e("span",H,i(o.duration),1)]),e("div",G,[(t(!0),a(f,null,_(o.content,(x,y)=>(t(),a("ul",{key:y},[e("li",null,i(x),1)]))),128))]),l(J,{thickness:"2",color:"blue",class:"mt-3"})]))),128))]))],512)]),_:1})]),_:1})]))}});const X=b(O,[["__scopeId","data-v-87a75f88"]]);export{X as default};
