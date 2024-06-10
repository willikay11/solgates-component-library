import{a as h,j as r}from"./jsx-runtime-48f9be30.js";import{P as s,u as d}from"./index-807267ee.js";const P={title:"Data Display/Product Tile",component:s},o={render:e=>h("div",{className:"grid md:gap-4 md:grid-cols-4 lg:gap-4 lg:grid-cols-4",children:[r(s,{...e}),r(s,{...e}),r(s,{...e}),r(s,{...e})]}),args:{id:"1",imageUrl:"https://res.cloudinary.com/dp1buffig/image/upload/v1695717367/solgates/Products/Shorts/Nike%20Club%20Fleece/jqlzmtwfer7ck0tqkbbl.webp",name:"Air Jordan 1 Retro High OG",smallDescription:"Dutch Green",buttonName:"Nike",price:"KSH 12,200",releaseDate:"Apr 20",addedToWishList:!1,onAddToWishList:()=>{console.log("added to wishlist")},type:d.PRODUCTS}},t={render:e=>h("div",{className:"grid md:gap-4 md:grid-cols-4 lg:gap-4 lg:grid-cols-4",children:[r(s,{...e}),r(s,{...e}),r(s,{...e}),r(s,{...e})]}),args:{imageUrl:"https://res.cloudinary.com/dp1buffig/image/upload/v1695717367/solgates/Products/Shorts/Nike%20Club%20Fleece/jqlzmtwfer7ck0tqkbbl.webp",type:d.PRODUCT}},l={render:e=>r("div",{className:"grid md:gap-4 md:grid-cols-4 lg:gap-4 lg:grid-cols-4",children:r(s,{...e})}),args:{type:d.CAROUSEL,name:"Air Jordan 1 Retro High OG",smallDescription:"Dutch Green",buttonName:"Nike",price:"KSH 12,200",addedToWishList:!0,onAddToWishList:()=>console.log("Added to wishlist"),onRemoveFromWishlist:()=>console.log("Removed from wishlist"),carouselImages:["https://res.cloudinary.com/dp1buffig/image/upload/v1695717367/solgates/Products/Shorts/Nike%20Club%20Fleece/jqlzmtwfer7ck0tqkbbl.webp","https://res.cloudinary.com/dp1buffig/image/upload/v1695717367/solgates/Products/Shorts/Nike%20Club%20Fleece/jqlzmtwfer7ck0tqkbbl.webp","https://res.cloudinary.com/dp1buffig/image/upload/v1695717367/solgates/Products/Shorts/Nike%20Club%20Fleece/jqlzmtwfer7ck0tqkbbl.webp"]}};var i,a,c;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: args => <div className="grid md:gap-4 md:grid-cols-4 lg:gap-4 lg:grid-cols-4">
      <ProductTile {...args} />
      <ProductTile {...args} />
      <ProductTile {...args} />
      <ProductTile {...args} />
    </div>,
  args: {
    id: '1',
    imageUrl: 'https://res.cloudinary.com/dp1buffig/image/upload/v1695717367/solgates/Products/Shorts/Nike%20Club%20Fleece/jqlzmtwfer7ck0tqkbbl.webp',
    name: 'Air Jordan 1 Retro High OG',
    smallDescription: 'Dutch Green',
    buttonName: 'Nike',
    price: 'KSH 12,200',
    releaseDate: 'Apr 20',
    addedToWishList: false,
    onAddToWishList: () => {
      console.log('added to wishlist');
    },
    type: PRODUCT_TYPE.PRODUCTS
  }
}`,...(c=(a=o.parameters)==null?void 0:a.docs)==null?void 0:c.source}}};var n,g,m;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: args => <div className="grid md:gap-4 md:grid-cols-4 lg:gap-4 lg:grid-cols-4">
      <ProductTile {...args} />
      <ProductTile {...args} />
      <ProductTile {...args} />
      <ProductTile {...args} />
    </div>,
  args: {
    imageUrl: 'https://res.cloudinary.com/dp1buffig/image/upload/v1695717367/solgates/Products/Shorts/Nike%20Club%20Fleece/jqlzmtwfer7ck0tqkbbl.webp',
    type: PRODUCT_TYPE.PRODUCT
  }
}`,...(m=(g=t.parameters)==null?void 0:g.docs)==null?void 0:m.source}}};var u,p,b;l.parameters={...l.parameters,docs:{...(u=l.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: args => <div className="grid md:gap-4 md:grid-cols-4 lg:gap-4 lg:grid-cols-4">
      <ProductTile {...args} />
    </div>,
  args: {
    type: PRODUCT_TYPE.CAROUSEL,
    name: 'Air Jordan 1 Retro High OG',
    smallDescription: 'Dutch Green',
    buttonName: 'Nike',
    price: 'KSH 12,200',
    addedToWishList: true,
    onAddToWishList: () => console.log('Added to wishlist'),
    onRemoveFromWishlist: () => console.log('Removed from wishlist'),
    carouselImages: ['https://res.cloudinary.com/dp1buffig/image/upload/v1695717367/solgates/Products/Shorts/Nike%20Club%20Fleece/jqlzmtwfer7ck0tqkbbl.webp', 'https://res.cloudinary.com/dp1buffig/image/upload/v1695717367/solgates/Products/Shorts/Nike%20Club%20Fleece/jqlzmtwfer7ck0tqkbbl.webp', 'https://res.cloudinary.com/dp1buffig/image/upload/v1695717367/solgates/Products/Shorts/Nike%20Club%20Fleece/jqlzmtwfer7ck0tqkbbl.webp']
  }
}`,...(b=(p=l.parameters)==null?void 0:p.docs)==null?void 0:b.source}}};const f=["Products","Product","Carousel"],w=Object.freeze(Object.defineProperty({__proto__:null,Carousel:l,Product:t,Products:o,__namedExportsOrder:f,default:P},Symbol.toStringTag,{value:"Module"}));export{w as P};
