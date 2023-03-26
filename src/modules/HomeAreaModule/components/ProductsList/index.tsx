import React from 'react';
import { IProduct } from '../../types/product.interface';
import ProductsListItem from '../ProductsListItem';
import s from './Style.module.scss';

type Props = {
  products: IProduct[];
};

const ProductsList = ({ products }: Props) => {
  return (
    <ul className={s.list}>
      {products.map((item) => {
        return <ProductsListItem product={item} key={item.name} />;
      })}
    </ul>
  );
};

export default ProductsList;
