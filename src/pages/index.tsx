import { HomeArea, IProduct } from '@/modules/HomeAreaModule';
import { GetStaticProps } from 'next';

type Props = {
  products: IProduct[];
};

export default function Home({ products }: Props) {
  return <HomeArea products={products} />;
}

export const getStaticProps: GetStaticProps<Props> = () => {
  const products: IProduct[] = [
    {
      name: 'VIP-Mitgliedschaft',
      src: '/icons/favicon.png',
      type: 'prevelege',
      cost: 5,
    },
    {
      name: 'VIP+ Mitgliedschaft',
      src: '/icons/favicon.png',
      type: 'prevelege',
      cost: 10,
    },
    {
      name: '500 Potatoes',
      src: '/images/banner.png',
      type: 'potatoe',
      cost: 4.99,
    },
    {
      name: '1000 Potatoes',
      src: '/images/banner.png',
      type: 'potatoe',
      cost: 9.99,
    },
    {
      name: '1500 Potatoes',
      src: '/images/banner.png',
      type: 'potatoe',
      cost: 12.99,
    },
    {
      name: '2000 Potatoes',
      src: '/images/banner.png',
      type: 'potatoe',
      cost: 14.99,
    },
    {
      name: '2500 Potatoes',
      src: '/images/banner.png',
      type: 'potatoe',
      cost: 18.99,
    },
  ];

  return {
    props: {
      products,
    },
  };
};
