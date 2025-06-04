import{j as i}from"./jsx-runtime-D_zvdyIk.js";import{r}from"./iframe-BxNX_S4l.js";import{c as _,I as R,a as $,b as V}from"./InputWrapper-0BHwVJvw.js";import"./index-Bo2GtWE0.js";const W="_input_1fb9g_1",L="_input_sm_1fb9g_14",S="_input_md_1fb9g_18",M="_input_lg_1fb9g_22",z="_input_error_1fb9g_26",B="_input_disabled_1fb9g_29",D="_fakePlaceholder_1fb9g_36",H="_input_filled_1fb9g_48",U="_inputPassword_1fb9g_90",Z="_inputText_1fb9g_91",F="_inputPassword_visible_1fb9g_98",K="_inputText_visible_1fb9g_98",G="_eyeToggle_1fb9g_113",J="_eyeToggle_error_1fb9g_116",n={input:W,input_sm:L,input_md:S,input_lg:M,input_error:z,input_disabled:B,fakePlaceholder:D,input_filled:H,inputPassword:U,inputText:Z,inputPassword_visible:F,inputText_visible:K,eyeToggle:G,eyeToggle_error:J},Q=(t=!1)=>{const[e,o]=r.useState(t);return{value:e,set:()=>o(!0),unset:()=>o(!1),toggle:()=>o(s=>!s)}};/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Y=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,o,s)=>s?s.toUpperCase():o.toLowerCase()),w=t=>{const e=Y(t);return e.charAt(0).toUpperCase()+e.slice(1)},j=(...t)=>t.filter((e,o,s)=>!!e&&e.trim()!==""&&s.indexOf(e)===o).join(" ").trim(),ee=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var te={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oe=r.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:o=2,absoluteStrokeWidth:s,className:l="",children:a,iconNode:m,...g},v)=>r.createElement("svg",{ref:v,...te,width:e,height:e,stroke:t,strokeWidth:s?Number(o)*24/Number(e):o,className:j("lucide",l),...!a&&!ee(g)&&{"aria-hidden":"true"},...g},[...m.map(([c,u])=>r.createElement(c,u)),...Array.isArray(a)?a:[a]]));/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E=(t,e)=>{const o=r.forwardRef(({className:s,...l},a)=>r.createElement(oe,{ref:a,iconNode:e,className:j(`lucide-${X(w(t))}`,`lucide-${t}`,s),...l}));return o.displayName=w(t),o};/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ne=[["path",{d:"m15 18-.722-3.25",key:"1j64jw"}],["path",{d:"M2 8a10.645 10.645 0 0 0 20 0",key:"1e7gxb"}],["path",{d:"m20 15-1.726-2.05",key:"1cnuld"}],["path",{d:"m4 15 1.726-2.05",key:"1dsqqd"}],["path",{d:"m9 18 .722-3.25",key:"ypw2yx"}]],se=E("eye-closed",ne);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const re=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],ae=E("eye",re),ie="_button_1tn0o_1",le="_container_1tn0o_13",ce="_iconClosed_1tn0o_19",ue="_iconOpen_1tn0o_20",pe="_iconClosed_visible_1tn0o_28",de="_iconOpen_visible_1tn0o_29",d={button:ie,container:le,iconClosed:ce,iconOpen:ue,iconClosed_visible:pe,iconOpen_visible:de},O=({open:t,toggle:e,className:o})=>i.jsx("button",{type:"button",onClick:e,className:_(d.button,o),tabIndex:-1,"aria-label":t?"Скрыть пароль":"Показать пароль",children:i.jsxs("div",{className:d.container,children:[i.jsx(se,{className:_(d.iconClosed,t&&d.iconClosed_visible)}),i.jsx(ae,{className:_(d.iconOpen,!t&&d.iconOpen_visible)})]})});O.__docgenInfo={description:"",methods:[],displayName:"EyeToggle",props:{open:{required:!1,tsType:{name:"boolean"},description:""},toggle:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const q=r.forwardRef(({label:t,error:e,className:o="",rounded:s=!0,inputSize:l=V.md,variant:a=$.filled,disabled:m,...g},v)=>{const c=r.useRef(null),u=r.useRef(null),p=Q(),y=r.useId();r.useImperativeHandle(v,()=>p.value?u.current:c.current,[p.value]);const x=A=>{const h=A.currentTarget.value;c.current&&(c.current.value=h),u.current&&(u.current.value=h)};return i.jsxs(R,{label:t,labelId:y,error:e,rounded:s,disabled:m,inputSize:l,variant:a,className:o,inputWrapperClassName:n.inputWrapperPassword,rightIcon:i.jsx(O,{open:p.value,toggle:p.toggle,className:_(n.eyeToggle,e&&n.eyeToggle_error)}),labelTop:!0,children:[i.jsx("input",{id:y,ref:c,onInput:x,type:"password",className:_(n.input,n.inputPassword,m&&n.input_disabled,e&&n.input_error,n[`input_${l}`],!p.value&&n.inputPassword_visible),...g}),i.jsx("input",{ref:u,onInput:x,type:"text",className:_(n.input,n.inputText,m&&n.input_disabled,e&&n.input_error,n[`input_${l}`],p.value&&n.inputText_visible),...g})]})});q.__docgenInfo={description:"",methods:[],displayName:"InputPassword",props:{className:{defaultValue:{value:"''",computed:!1},required:!1},rounded:{defaultValue:{value:"true",computed:!1},required:!1},inputSize:{defaultValue:{value:"InputSize.md",computed:!0},required:!1},variant:{defaultValue:{value:"InputVariant.filled",computed:!0},required:!1}},composes:["InputHTMLAttributes","Omit"]};const be={title:"Form/InputPassword",component:q,tags:["autodocs"],argTypes:{label:{control:"text",description:"Плавающий заголовок"},placeholder:{control:"text",description:"Подсказка внутри поля"},error:{control:"text",description:"Сообщение об ошибке"},disabled:{control:"boolean"},rounded:{control:"boolean"},value:{control:"text"},className:{control:!1},inputSize:{control:"select",options:["sm","md","lg"],description:"Размер поля"},variant:{control:"select",options:["outlined","filled"],description:"Стиль поля"}}},f={args:{label:"Пароль",placeholder:"Введите пароль"}},b={args:{label:"Пароль",placeholder:"Введите пароль",error:"Неверный пароль"}};var T,C,I;f.parameters={...f.parameters,docs:{...(T=f.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    label: 'Пароль',
    placeholder: 'Введите пароль'
  }
}`,...(I=(C=f.parameters)==null?void 0:C.docs)==null?void 0:I.source}}};var P,k,N;b.parameters={...b.parameters,docs:{...(P=b.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    label: 'Пароль',
    placeholder: 'Введите пароль',
    error: 'Неверный пароль'
  }
}`,...(N=(k=b.parameters)==null?void 0:k.docs)==null?void 0:N.source}}};const ve=["Default","WithError"];export{f as Default,b as WithError,ve as __namedExportsOrder,be as default};
