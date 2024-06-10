import{a as t,j as n}from"./jsx-runtime-48f9be30.js";import{B as r,d as l,n as d,e as C}from"./index-807267ee.js";const u=e=>t("div",{className:"grid grid-cols-12 gap-4",children:[t("div",{className:"col-span-2",children:[n("p",{className:"mb-2 italic",children:"-"}),n(r,{...e,children:"Primary"})]}),t("div",{className:"col-span-2",children:[n("p",{className:"mb-2 italic",children:"loading"}),n(r,{...e,loading:!0,children:"Primary"})]}),t("div",{className:"col-span-2",children:[n("p",{className:"mb-2 italic",children:"ghost"}),n(r,{...e,ghost:!0,children:"Primary"})]}),t("div",{className:"col-span-2",children:[n("p",{className:"mb-2 italic",children:"disabled"}),n(r,{...e,disabled:!0,children:"Primary"})]}),t("div",{className:"col-span-2",children:[n("p",{className:"mb-2 italic",children:"Icon"}),n(r,{...e,prefixIcon:n(C,{size:16}),children:"Primary"})]}),t("div",{className:"col-span-2",children:[n("p",{className:"mb-2 italic",children:"block"}),n(r,{...e,block:!0,children:"Primary"})]})]}),v={title:"General/Button",component:r},s={render:e=>u(e),args:{children:"Default",type:l.default,onClick:()=>{d({type:"success",title:"Default Button",message:"Button clicked"})}}},a={render:e=>u(e),args:{children:"Primary",type:l.primary,onClick:()=>{d({type:"success",title:"Primary Button",message:"Button clicked"})}}},c={render:e=>u(e),args:{children:"Danger",type:l.danger,onClick:()=>{d({type:"success",title:"Danger Button",message:"Button clicked"})}}},i={render:e=>u(e),args:{children:"Text",type:l.text,onClick:()=>{d({type:"success",title:"Text Button",message:"Button clicked"})}}},o={render:e=>u(e),args:{children:"Link",type:l.link,onClick:()=>{d({type:"success",title:"Link Button",message:"Button clicked"})}}};var m,p,y;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: args => buttonLayout(args),
  args: {
    children: 'Default',
    type: ButtonTypes.default,
    onClick: () => {
      notification({
        type: 'success',
        title: 'Default Button',
        message: 'Button clicked'
      });
    }
  }
}`,...(y=(p=s.parameters)==null?void 0:p.docs)==null?void 0:y.source}}};var g,h,B;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: args => buttonLayout(args),
  args: {
    children: 'Primary',
    type: ButtonTypes.primary,
    onClick: () => {
      notification({
        type: 'success',
        title: 'Primary Button',
        message: 'Button clicked'
      });
    }
  }
}`,...(B=(h=a.parameters)==null?void 0:h.docs)==null?void 0:B.source}}};var k,f,b;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: args => buttonLayout(args),
  args: {
    children: 'Danger',
    type: ButtonTypes.danger,
    onClick: () => {
      notification({
        type: 'success',
        title: 'Danger Button',
        message: 'Button clicked'
      });
    }
  }
}`,...(b=(f=c.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var x,L,N;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: args => buttonLayout(args),
  args: {
    children: 'Text',
    type: ButtonTypes.text,
    onClick: () => {
      notification({
        type: 'success',
        title: 'Text Button',
        message: 'Button clicked'
      });
    }
  }
}`,...(N=(L=i.parameters)==null?void 0:L.docs)==null?void 0:N.source}}};var P,T,D;o.parameters={...o.parameters,docs:{...(P=o.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: args => buttonLayout(args),
  args: {
    children: 'Link',
    type: ButtonTypes.link,
    onClick: () => {
      notification({
        type: 'success',
        title: 'Link Button',
        message: 'Button clicked'
      });
    }
  }
}`,...(D=(T=o.parameters)==null?void 0:T.docs)==null?void 0:D.source}}};const S=["Default","Primary","Danger","Text","Link"],O=Object.freeze(Object.defineProperty({__proto__:null,Danger:c,Default:s,Link:o,Primary:a,Text:i,__namedExportsOrder:S,default:v},Symbol.toStringTag,{value:"Module"}));export{O as B};
