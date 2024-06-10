import{a as s,j as e}from"./jsx-runtime-48f9be30.js";import{V as f,I as r,f as l,U as n,g as o,B as t,d as u,k as x}from"./index-807267ee.js";const I={title:"Data Display/Tabs",component:f},y=s("div",{className:"w-full",children:[e("div",{className:"grid grid-cols-1 mb-2.5",children:e(r.Text,{placeholder:"Email",prefixIcon:e(l,{children:e(n,{size:14,color:o.yellow[600]})})})}),e("div",{className:"grid grid-cols-1 mb-[15px]",children:e(r.Password,{placeholder:"Password",prefixIcon:e(l,{children:e(n,{color:o.blue[600]})}),iconRender:c=>c?e(n,{color:o.gray[500]}):e(n,{color:o.gray[500]})})}),e("div",{className:"grid grid-cols-1",children:e(t,{onClick:()=>console.log("clicked"),type:u.primary,block:!0,children:"Sign Up"})})]}),v=s("div",{className:"w-full",children:[s("div",{className:"grid gap-2 grid-cols-2 mb-2.5",children:[e(r.Text,{placeholder:"First Name",prefixIcon:e(l,{children:e(n,{color:o.green[500]})})}),e(r.Text,{placeholder:"Last Name",prefixIcon:e(l,{children:e(n,{color:o.green[500]})})})]}),e("div",{className:"grid grid-cols-1 mb-2.5",children:e(r.Select,{items:[{label:"Male",value:"M"},{label:"Female",value:"F"}],prefixIcon:e(l,{children:e(n,{color:o.red[600]})}),arrowIcon:e(n,{color:o.gray[600],size:18}),selectedIcon:e(n,{color:o.gray[600],size:18})})}),e("div",{className:"grid grid-cols-1 mb-2.5",children:e(r.Text,{placeholder:"Email",prefixIcon:e(l,{children:e(n,{color:o.yellow[600]})})})}),e("div",{className:"grid grid-cols-1 mb-[15px]",children:e(r.Password,{placeholder:"Password",prefixIcon:e(l,{children:e(n,{color:o.blue[600]})}),iconRender:c=>c?e(n,{color:o.gray[500]}):e(n,{color:o.gray[500]})})}),e("div",{className:"grid grid-cols-1 mb-[15px]",children:e(x,{name:"a",id:"a",value:"yes",label:e("span",{className:"text-xs leading-4 text-gray-500 font-normal",children:"By signing up, you agree to the Terms of Service and Privacy Policy"})})}),e("div",{className:"grid grid-cols-1 mb-[15px]",children:e(t,{onClick:()=>console.log("clicked"),type:u.primary,block:!0,children:"Sign Up"})}),s("div",{className:"grid gap-2 grid-cols-2",children:[e(t,{onClick:()=>console.log("clicked"),prefixIcon:e(l,{children:e(n,{color:"#DB4437"})}),block:!0,children:"Google"}),e(t,{onClick:()=>console.log("clicked"),prefixIcon:e(l,{children:e(n,{color:"#3B5998"})}),block:!0,children:"Facebook"})]})]}),a={args:{defaultActiveKey:1,items:[{label:"Sign In",content:y},{label:"Sign Up",content:v}],onChange:c=>console.log("Active key: ",c)}},i={args:{defaultActiveKey:1,tabWidth:"contain",items:[{label:"Sign In",content:y},{label:"Sign Up",content:v}],onChange:c=>console.log("Active key: ",c)}};var d,g,m;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    defaultActiveKey: 1,
    items: [{
      label: 'Sign In',
      content: signIn
    }, {
      label: 'Sign Up',
      content: signUp
    }],
    onChange: (activeKey: number) => console.log('Active key: ', activeKey)
  }
}`,...(m=(g=a.parameters)==null?void 0:g.docs)==null?void 0:m.source}}};var p,h,b;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    defaultActiveKey: 1,
    tabWidth: 'contain',
    items: [{
      label: 'Sign In',
      content: signIn
    }, {
      label: 'Sign Up',
      content: signUp
    }],
    onChange: (activeKey: number) => console.log('Active key: ', activeKey)
  }
}`,...(b=(h=i.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};const k=["Default","tabWidthContain"],C=Object.freeze(Object.defineProperty({__proto__:null,Default:a,__namedExportsOrder:k,default:I,tabWidthContain:i},Symbol.toStringTag,{value:"Module"}));export{C as T};
