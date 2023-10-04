import{B as N,e as s,q as D,j as i,F as _}from"./index-bf72dc8c.js";import"./client-128ae93f.js";const x={title:"Data Display/Notification",component:N},n=w=>i(_,{children:i(N,{...w,children:"Show Notification"})}),o=n.bind({});o.args={type:s.default,block:!1,loading:!1,onClick:()=>{D({duration:6e4,type:"success",title:"This is a Title",message:"This is a notification type success"})}};const a=n.bind({});a.args={type:s.primary,block:!1,loading:!1,onClick:()=>console.log("Button Clicked")};const e=n.bind({});e.args={type:s.danger,block:!1,loading:!1,onClick:()=>console.log("Button Clicked")};const t=n.bind({});t.args={type:s.primary,block:!0,loading:!1,onClick:()=>console.log("Button Clicked")};const r=n.bind({});r.args={type:s.primary_blue_600,block:!1,loading:!1,onClick:()=>console.log("Button Clicked")};var c,l,u;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`args => <>
    <Button {...args}>Show Notification</Button>
  </>`,...(u=(l=o.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var p,d,m;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`args => <>
    <Button {...args}>Show Notification</Button>
  </>`,...(m=(d=a.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var g,f,B;e.parameters={...e.parameters,docs:{...(g=e.parameters)==null?void 0:g.docs,source:{originalSource:`args => <>
    <Button {...args}>Show Notification</Button>
  </>`,...(B=(f=e.parameters)==null?void 0:f.docs)==null?void 0:B.source}}};var k,y,b;t.parameters={...t.parameters,docs:{...(k=t.parameters)==null?void 0:k.docs,source:{originalSource:`args => <>
    <Button {...args}>Show Notification</Button>
  </>`,...(b=(y=t.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var S,h,C;r.parameters={...r.parameters,docs:{...(S=r.parameters)==null?void 0:S.docs,source:{originalSource:`args => <>
    <Button {...args}>Show Notification</Button>
  </>`,...(C=(h=r.parameters)==null?void 0:h.docs)==null?void 0:C.source}}};const j=["Default","Primary","Danger","Block","Primary_Blue"];export{t as Block,e as Danger,o as Default,a as Primary,r as Primary_Blue,j as __namedExportsOrder,x as default};
//# sourceMappingURL=Notification.stories-139f8b0d.js.map
