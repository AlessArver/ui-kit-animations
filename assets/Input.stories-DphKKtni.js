import{j as s}from"./jsx-runtime-D_zvdyIk.js";import{r as t}from"./iframe-BxNX_S4l.js";import{I as S,a as v,b as k,c as w}from"./InputWrapper-0BHwVJvw.js";import"./index-Bo2GtWE0.js";const D="_input_1gzl7_1",P="_input_sm_1gzl7_14",R="_input_md_1gzl7_18",W="_input_lg_1gzl7_22",H="_input_error_1gzl7_26",O="_input_disabled_1gzl7_29",T="_fakePlaceholder_1gzl7_36",$="_input_filled_1gzl7_48",e={input:D,input_sm:P,input_md:R,input_lg:W,input_error:H,input_disabled:O,fakePlaceholder:T,input_filled:$},E=t.forwardRef(({label:V,error:i,className:y="",rounded:j=!0,disabled:o,type:q="text",inputSize:u=k.md,variant:p=v.filled,...d},N)=>{const n=t.useRef(null),c=t.useId();return t.useImperativeHandle(N,()=>{if(!n.current)throw new Error("Input not mounted");return n.current},[]),s.jsxs(S,{label:V,labelId:c,error:i,rounded:j,disabled:o,inputSize:u,variant:p,className:y,children:[s.jsx("input",{ref:n,id:c,type:q,className:w(e.input,o&&e.input_disabled,i&&e.input_error,e[`input_${u}`],e[`input_${p}`]),disabled:o,...d}),s.jsx("span",{className:e.fakePlaceholder,children:d.placeholder})]})});E.__docgenInfo={description:"",methods:[],displayName:"Input",props:{className:{defaultValue:{value:"''",computed:!1},required:!1},rounded:{defaultValue:{value:"true",computed:!1},required:!1},type:{defaultValue:{value:"'text'",computed:!1},required:!1},inputSize:{defaultValue:{value:"InputSize.md",computed:!0},required:!1},variant:{defaultValue:{value:"InputVariant.filled",computed:!0},required:!1}},composes:["InputHTMLAttributes","Omit"]};const B={title:"Form/Input",component:E,tags:["autodocs"],argTypes:{label:{control:"text",description:"Плавающий заголовок"},placeholder:{control:"text",description:"Подсказка внутри поля"},type:{control:"select",options:["text","email","password","number"],description:"Тип поля"},error:{control:"text",description:"Сообщение об ошибке"},disabled:{control:"boolean"},rounded:{control:"boolean"},value:{control:"text"},className:{control:!1},size:{control:"select",options:["sm","md","lg"],description:"Размер поля"},variant:{control:"select",options:["outlined","filled"],description:"Стиль поля"}}},r={args:{label:"Имя",placeholder:"Введите имя",variant:v.outlined}},a={args:{label:"Email",placeholder:"example@mail.com",error:"Неверный формат email",type:"email"}},l={args:{label:"Имя",placeholder:"Вы не можете редактировать",disabled:!0}};var m,_,f;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    label: 'Имя',
    placeholder: 'Введите имя',
    variant: InputVariant.outlined
  }
}`,...(f=(_=r.parameters)==null?void 0:_.docs)==null?void 0:f.source}}};var g,b,h;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    label: 'Email',
    placeholder: 'example@mail.com',
    error: 'Неверный формат email',
    type: 'email'
  }
}`,...(h=(b=a.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};var x,I,z;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    label: 'Имя',
    placeholder: 'Вы не можете редактировать',
    disabled: true
  }
}`,...(z=(I=l.parameters)==null?void 0:I.docs)==null?void 0:z.source}}};const C=["Default","WithError","Disabled"];export{r as Default,l as Disabled,a as WithError,C as __namedExportsOrder,B as default};
