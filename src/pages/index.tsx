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
      name: 'Potatoe 1',
      src: '/icons/favicon.png',
      type: 'potatoe',
      cost: 10,
    },
    {
      name: 'Potatoe 2',
      src: '/icons/favicon.png',
      type: 'potatoe',
      cost: 10,
    },
    {
      name: 'Prevelege 1',
      src: '/icons/favicon.png',
      type: 'prevelege',
      cost: 10,
    },
    {
      name: 'Prevelege 2',
      src: '/icons/favicon.png',
      type: 'prevelege',
      cost: 10,
    },
  ];

  return {
    props: {
      products,
    },
  };
};
