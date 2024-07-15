import { Meta, StoryObj } from '@storybook/react';
import {
  ARROW_POSITION,
  Button,
  Carousel,
  CarouselProps,
  ProductTile,
} from '../src';

const meta: Meta = {
  title: 'Data Display/Carousel',
  component: Carousel,
};

export default meta;
type Story = StoryObj<typeof Carousel>;

export const Default: Story = {
  render: (args) => (
    <div className="w-full">
      <Carousel {...args} />
    </div>
  ),
  args: {
    id: 'a',
    title: <span>Popular Right Now</span>,
    arrowPosition: ARROW_POSITION.topRight,
    itemsVisible: {
      mobile: 1,
      tablet: 3,
      large: 4,
    },
    items: [
      {
        item: (
          <ProductTile
            id="1"
            name="Air Jordan 1 Retro High OG"
            smallDescription="Dutch Green"
            buttonName="Nike"
            price="KSH 12,200"
            loaderHeight="h-56"
            imageUrl="https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/23696ebc-18fc-46f9-8a88-c854930ad24c/air-jordan-1-retro-high-womens-shoes-W1tGx4.png"
          />
        ),
      },
      {
        item: (
          <ProductTile
            id="2"
            name="Air Jordan 1 Retro High OG"
            smallDescription="Dutch Green"
            buttonName="Nike"
            price="KSH 17,200"
            loaderHeight="h-56"
            imageUrl="https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/a6bce3ef-bc25-4e3d-b45b-db8223745a49/air-force-1-react-mens-shoes-WSjfs8.png"
          />
        ),
      },
      {
        item: (
          <ProductTile
            id="3"
            name="Air Jordan 1 Retro High OG"
            smallDescription="Dutch Green"
            buttonName="Nike"
            price="KSH 12,200"
            loaderHeight="h-56"
            imageUrl="https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/9a397b0b-57d3-4255-b8b5-9aeeff9f19e4/air-force-1-07-lv8-mens-shoes-ZvGj5Q.png"
          />
        ),
      },
      {
        item: (
          <ProductTile
            id="4"
            name="Air Jordan 1 Retro High OG"
            smallDescription="Dutch Green"
            buttonName="Nike"
            price="KSH 12,200"
            loaderHeight="h-56"
            imageUrl="https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/23696ebc-18fc-46f9-8a88-c854930ad24c/air-jordan-1-retro-high-womens-shoes-W1tGx4.png"
          />
        ),
      },
      {
        item: (
          <ProductTile
            id="5"
            name="Air Jordan 1 Retro High OG"
            smallDescription="Dutch Green"
            buttonName="Nike"
            price="KSH 12,200"
            loaderHeight="h-56"
            imageUrl="https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/23696ebc-18fc-46f9-8a88-c854930ad24c/air-jordan-1-retro-high-womens-shoes-W1tGx4.png"
          />
        ),
      },
      {
        item: (
          <ProductTile
            id="6"
            name="Air Jordan 1 Retro High OG"
            smallDescription="Dutch Green"
            buttonName="Nike"
            price="KSH 12,200"
            loaderHeight="h-56"
            imageUrl="https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/23696ebc-18fc-46f9-8a88-c854930ad24c/air-jordan-1-retro-high-womens-shoes-W1tGx4.png"
          />
        ),
      },
      {
        item: (
          <ProductTile
            id="7"
            name="Air Jordan 1 Retro High OG"
            smallDescription="Dutch Green"
            buttonName="Nike"
            price="KSH 12,200"
            loaderHeight="h-56"
            imageUrl="https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/23696ebc-18fc-46f9-8a88-c854930ad24c/air-jordan-1-retro-high-womens-shoes-W1tGx4.png"
          />
        ),
      },
      {
        item: (
          <ProductTile
            id="8"
            name="Air Jordan 1 Retro High OG"
            smallDescription="Dutch Green"
            buttonName="Nike"
            price="KSH 12,200"
            loaderHeight="h-56"
            imageUrl="https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/23696ebc-18fc-46f9-8a88-c854930ad24c/air-jordan-1-retro-high-womens-shoes-W1tGx4.png"
          />
        ),
      },
    ],
    showDots: false,
    initialSlide: 1
  },
};
