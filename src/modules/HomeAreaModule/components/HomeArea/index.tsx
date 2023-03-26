import React from 'react';
import { IProduct } from '../../types/product.interface';
import Banner from '../Banner';
import Products from '../Products';
import s from './Styles.module.scss';

type Props = {
  products: IProduct[]
}

const HomeArea = ({ products }: Props) => {
  return (
    <div className={s.homepage}>
      <Banner />
      <Products products={products} />
    </div>
  );
};

export default HomeArea;
