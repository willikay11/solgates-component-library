import{j as p}from"./jsx-runtime-48f9be30.js";import{I as h,p as x}from"./index-807267ee.js";import{U as f}from"./solgates-component-library.esm-c0c47e74.js";const l=new Date,e=l.getMonth(),a=l.getFullYear(),t=l.getDate(),I={title:"Data Entry/Date Picker",component:h.DatePicker},s={args:{picker:"single",textProps:{placeholder:"Select expiry date",clearIcon:p(x,{size:14}),prefixIcon:p(f,{size:14})}}},n={args:{picker:"range"}},r={args:{picker:"single",disabledDate:new Date(a,e,t-1),textProps:{placeholder:"Select date"}}},o={args:{picker:"single",textProps:{placeholder:"Select date"},presets:[{label:"Yesterday",key:1,dates:[new Date(a,e,t-1)]},{label:"Last Week",key:1,dates:[new Date(a,e,t-7)]},{label:"Last Month",key:1,dates:[new Date(a,e-1,t)]}]}},c={args:{picker:"range",textProps:{placeholder:"Select date"},presets:[{label:"Last 7 Days",key:1,dates:[new Date(a,e,t-7),new Date(a,e,t)]},{label:"Last 14 Days",key:1,dates:[new Date(a,e,t-14),new Date(a,e,t)]},{label:"Last 30 Days",key:1,dates:[new Date(a,e,t-30),new Date(a,e,t)]},{label:"Last 90 Days",key:1,dates:[new Date(a,e,t-90),new Date(a,e,t)]}]}};var D,i,d;s.parameters={...s.parameters,docs:{...(D=s.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    picker: 'single',
    textProps: {
      placeholder: 'Select expiry date',
      clearIcon: <CloseLine size={14} />,
      prefixIcon: <User6Line size={14} />
    }
  }
}`,...(d=(i=s.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};var g,k,m;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    picker: 'range'
  }
}`,...(m=(k=n.parameters)==null?void 0:k.docs)==null?void 0:m.source}}};var y,w,b;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    picker: 'single',
    disabledDate: new Date(Y, M, D - 1),
    textProps: {
      placeholder: 'Select date'
    }
  }
}`,...(b=(w=r.parameters)==null?void 0:w.docs)==null?void 0:b.source}}};var u,P,S;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    picker: 'single',
    textProps: {
      placeholder: 'Select date'
    },
    presets: [{
      label: 'Yesterday',
      key: 1,
      dates: [new Date(Y, M, D - 1)]
    }, {
      label: 'Last Week',
      key: 1,
      dates: [new Date(Y, M, D - 7)]
    }, {
      label: 'Last Month',
      key: 1,
      dates: [new Date(Y, M - 1, D)]
    }]
  }
}`,...(S=(P=o.parameters)==null?void 0:P.docs)==null?void 0:S.source}}};var M,L,Y;c.parameters={...c.parameters,docs:{...(M=c.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    picker: 'range',
    textProps: {
      placeholder: 'Select date'
    },
    presets: [{
      label: 'Last 7 Days',
      key: 1,
      dates: [new Date(Y, M, D - 7), new Date(Y, M, D)]
    }, {
      label: 'Last 14 Days',
      key: 1,
      dates: [new Date(Y, M, D - 14), new Date(Y, M, D)]
    }, {
      label: 'Last 30 Days',
      key: 1,
      dates: [new Date(Y, M, D - 30), new Date(Y, M, D)]
    }, {
      label: 'Last 90 Days',
      key: 1,
      dates: [new Date(Y, M, D - 90), new Date(Y, M, D)]
    }]
  }
}`,...(Y=(L=c.parameters)==null?void 0:L.docs)==null?void 0:Y.source}}};const W=["DatePicker","RangePicker","DisabledDate","PresetWithSingleDate","PresetWithRangeDate"],R=Object.freeze(Object.defineProperty({__proto__:null,DatePicker:s,DisabledDate:r,PresetWithRangeDate:c,PresetWithSingleDate:o,RangePicker:n,__namedExportsOrder:W,default:I},Symbol.toStringTag,{value:"Module"}));export{R as D};
