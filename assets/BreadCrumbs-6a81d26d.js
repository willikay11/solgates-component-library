import{j as n,a as o,N as c,x as e,O as t}from"./index-617fcc6b.js";const d=({items:l})=>n("div",{className:"inline-flex",children:l.map((r,a)=>o("span",{className:`text-xs leading-4 font-medium ${r.active?"text-orange-600 ml-1":"text-gray-800"}`,children:[r.title," ",a<l.length-1?" / ":null]},a))}),i=({items:l})=>n("div",{className:"inline-flex items-center",children:l.map((r,a)=>o("div",{className:"inline-flex items-center",children:[a===0&&n("div",{className:"mr-3 cursor-pointer",onClick:()=>{var s;return(s=r==null?void 0:r.onClick)==null?void 0:s.call(r)},children:n(c,{size:16,color:e.gray[500]})}),n("span",{className:`text-lg leading-7 ${r.active?"font-semibold text-orange-600":"cursor-pointer font-medium text-gray-600 hover:text-orange-600 mr-2"}`,onClick:()=>{var s;return(s=r==null?void 0:r.onClick)==null?void 0:s.call(r)},children:r.title}),a<l.length-1&&n(t,{size:16,color:e.gray[500],className:"mr-2"})]},a))}),x={normal:d,admin:i};export{x as B};
//# sourceMappingURL=BreadCrumbs-6a81d26d.js.map