import{j as e}from"./jsx-runtime-48f9be30.js";import{I as v,f as z,H as N,M as P,a as c,e as _}from"./index-807267ee.js";const L={title:"Data Entry/Number",component:v.Number},r={args:{name:"number",width:"w-full",placeholder:"Amount"}},n={args:{name:"number",width:"w-full",placeholder:"Amount",min:1,max:20}},o={args:{name:"number",width:"w-full",placeholder:"Amount",prefixIcon:e(z,{children:e(N,{size:14})})}},a={args:{name:"number",width:"w-full",placeholder:"Amount",border:"borderless"}},s={args:{error:"Please enter number",name:"number",width:"w-full",placeholder:"Amount"}},t={args:{border:"borderless",error:"Please enter number",name:"number",width:"w-[15px]",defaultValue:"1",min:1,centered:!0,minIcon:e("div",{className:"h-[21px] w-[21px] flex justify-center items-center border border-gray-800 rounded-[50%]",children:e(P,{color:c.gray[800],size:12})}),maxIcon:e("div",{className:"h-[21px] w-[21px] flex justify-center items-center border border-gray-800 rounded-[50%]",children:e(_,{color:c.gray[800],size:12})})}};var m,d,l;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    name: 'number',
    width: 'w-full',
    placeholder: 'Amount'
  }
}`,...(l=(d=r.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var u,i,p;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    name: 'number',
    width: 'w-full',
    placeholder: 'Amount',
    min: 1,
    max: 20
  }
}`,...(p=(i=n.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var b,f,h;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    name: 'number',
    width: 'w-full',
    placeholder: 'Amount',
    prefixIcon: <IconContainer>
        <Heart3Line size={14} />
      </IconContainer>
  }
}`,...(h=(f=o.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var g,w,x;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    name: 'number',
    width: 'w-full',
    placeholder: 'Amount',
    border: 'borderless'
  }
}`,...(x=(w=a.parameters)==null?void 0:w.docs)==null?void 0:x.source}}};var y,I,A;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    error: 'Please enter number',
    name: 'number',
    width: 'w-full',
    placeholder: 'Amount'
  }
}`,...(A=(I=s.parameters)==null?void 0:I.docs)==null?void 0:A.source}}};var S,j,M;t.parameters={...t.parameters,docs:{...(S=t.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    border: 'borderless',
    error: 'Please enter number',
    name: 'number',
    width: 'w-[15px]',
    defaultValue: '1',
    min: 1,
    centered: true,
    minIcon: <div className="h-[21px] w-[21px] flex justify-center items-center border border-gray-800 rounded-[50%]">
        <Minus color={colors.gray['800']} size={12} />
      </div>,
    maxIcon: <div className="h-[21px] w-[21px] flex justify-center items-center border border-gray-800 rounded-[50%]">
        <AddLine color={colors.gray['800']} size={12} />
      </div>
  }
}`,...(M=(j=t.parameters)==null?void 0:j.docs)==null?void 0:M.source}}};const C=["Default","MinAndMax","PrefixIcon","Borderless","error","custom"],O=Object.freeze(Object.defineProperty({__proto__:null,Borderless:a,Default:r,MinAndMax:n,PrefixIcon:o,__namedExportsOrder:C,custom:t,default:L,error:s},Symbol.toStringTag,{value:"Module"}));export{O as I};
