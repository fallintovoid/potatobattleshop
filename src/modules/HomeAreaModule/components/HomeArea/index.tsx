import { SEO } from '@/modules/SeoModule';
import React from 'react';
import { IProduct } from '../../types/product.interface';
import Banner from '../Banner';
import Products from '../Products';
import s from './Styles.module.scss';

type Props = {
  products: IProduct[];
};

const HomeArea = ({ products }: Props) => {
  return (
    <>
      <SEO
        title="PotatoeBattleShop"
        description="Hier können Sie Privilegien und Spielwährung kaufen"
      />
      <div className={s.homepage}>
        <Banner />
        <Products products={products} />
      </div>
    </>
  );
};

export default HomeArea;
