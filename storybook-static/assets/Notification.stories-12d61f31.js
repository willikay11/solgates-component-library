import{B as e,e as t,q as n,a as R,j as s}from"./index-13aa7f7b.js";const w={title:"Data Display/Notification",component:e},p=i=>s(e,{...i}),o={render:i=>p(i),args:{type:t.primary,block:!1,children:"Show Notification",onClick:()=>{n({duration:5e3,type:"success",title:"This is a Title",message:"This is a success notification"})}}},a={render:i=>p(i),args:{type:t.danger,block:!1,children:"Show Notification",onClick:()=>{n({duration:5e3,type:"error",title:"This is a Title",message:"This is a error notification"})}}},r={render:i=>p(i),args:{type:t.primary_blue_600,ghost:!0,block:!1,children:"Show Notification",onClick:()=>{n({duration:5e3,type:"info",title:"This is a Title",message:"This is a info notification"})}}},c={render:i=>p(i),args:{type:t.primary_blue_600,block:!1,children:"Show Notification",onClick:()=>{n({duration:5e3,type:"warning",title:"This is a Title",message:"This is a warning notification"})}}},l={render:()=>R("div",{className:"grid grid-cols-4 gap-4",children:[s(e,{type:t.primary,block:!0,onClick:()=>{n({duration:5e3,type:"success",title:"This is a Title",message:"This is a success notification",position:"topLeft"})},children:"Top Left"}),s(e,{type:t.primary,block:!0,onClick:()=>{n({duration:5e3,type:"success",title:"This is a Title",message:"This is a success notification",position:"topRight"})},children:"Top Right"}),s(e,{type:t.primary,block:!0,onClick:()=>{n({duration:5e3,type:"success",title:"This is a Title",message:"This is a success notification",position:"bottomRight"})},children:"Bottom Right"}),s(e,{type:t.primary,block:!0,onClick:()=>{n({duration:5e3,type:"success",title:"This is a Title",message:"This is a success notification",position:"bottomLeft"})},children:"Bottom Left"})]})};var u,d,m;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: args => buttonRender(args),
  args: {
    type: ButtonTypes.primary,
    block: false,
    children: 'Show Notification',
    onClick: () => {
      notification({
        duration: 5000,
        type: 'success',
        title: 'This is a Title',
        message: \`This is a success notification\`
      });
    }
  }
}`,...(m=(d=o.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var g,h,T;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: args => buttonRender(args),
  args: {
    type: ButtonTypes.danger,
    block: false,
    children: 'Show Notification',
    onClick: () => {
      notification({
        duration: 5000,
        type: 'error',
        title: 'This is a Title',
        message: \`This is a error notification\`
      });
    }
  }
}`,...(T=(h=a.parameters)==null?void 0:h.docs)==null?void 0:T.source}}};var f,y,b;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: args => buttonRender(args),
  args: {
    type: ButtonTypes.primary_blue_600,
    ghost: true,
    block: false,
    children: 'Show Notification',
    onClick: () => {
      notification({
        duration: 5000,
        type: 'info',
        title: 'This is a Title',
        message: \`This is a info notification\`
      });
    }
  }
}`,...(b=(y=r.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var k,B,S;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: args => buttonRender(args),
  args: {
    type: ButtonTypes.primary_blue_600,
    block: false,
    children: 'Show Notification',
    onClick: () => {
      notification({
        duration: 5000,
        type: 'warning',
        title: 'This is a Title',
        message: \`This is a warning notification\`
      });
    }
  }
}`,...(S=(B=c.parameters)==null?void 0:B.docs)==null?void 0:S.source}}};var C,_,N;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <div className="grid grid-cols-4 gap-4">
      <Button type={ButtonTypes.primary} block onClick={() => {
      notification({
        duration: 5000,
        type: 'success',
        title: 'This is a Title',
        message: \`This is a success notification\`,
        position: 'topLeft'
      });
    }}>
        Top Left
      </Button>

      <Button type={ButtonTypes.primary} block onClick={() => {
      notification({
        duration: 5000,
        type: 'success',
        title: 'This is a Title',
        message: \`This is a success notification\`,
        position: 'topRight'
      });
    }}>
        Top Right
      </Button>

      <Button type={ButtonTypes.primary} block onClick={() => {
      notification({
        duration: 5000,
        type: 'success',
        title: 'This is a Title',
        message: \`This is a success notification\`,
        position: 'bottomRight'
      });
    }}>
        Bottom Right
      </Button>

      <Button type={ButtonTypes.primary} block onClick={() => {
      notification({
        duration: 5000,
        type: 'success',
        title: 'This is a Title',
        message: \`This is a success notification\`,
        position: 'bottomLeft'
      });
    }}>
        Bottom Left
      </Button>
    </div>
}`,...(N=(_=l.parameters)==null?void 0:_.docs)==null?void 0:N.source}}};const L=["Success","Error","Info","Warning","Positions"],v=Object.freeze(Object.defineProperty({__proto__:null,Error:a,Info:r,Positions:l,Success:o,Warning:c,__namedExportsOrder:L,default:w},Symbol.toStringTag,{value:"Module"}));export{v as N};
//# sourceMappingURL=Notification.stories-12d61f31.js.map
