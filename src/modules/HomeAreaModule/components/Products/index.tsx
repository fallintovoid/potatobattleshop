import Button from '@/UI/Button';
import React, { useCallback, useEffect, useState } from 'react';
import { useCurrentCategoryStore } from '../../store/categoryStore';
import { IProduct } from '../../types/product.interface';
import { IProductType } from '../../types/productType.interface';
import ProductsList from '../ProductsList';
import s from './Styles.module.scss';

type Props = {
  products: IProduct[];
};

const Products = ({ products }: Props) => {
  const [currentCategory, setCurrentCategory] =
    useCurrentCategoryStore((store) => [
      store.currentCategory,
      store.setCurrentCategory,
    ]);

  const [filteredProducts, setFilteredProducts] = useState(products);

  const filterByCategory = useCallback(
    (category: IProductType) => {
      if (category === 'potatoe') {
        const newProducts = products.filter(
          (item) => item.type === category
        );
        setFilteredProducts(newProducts);
      }
      if (category === 'prevelege') {
        const newProducts = products.filter(
          (item) => item.type === category
        );
        setFilteredProducts(newProducts);
      }
    },
    [products]
  );

  useEffect(() => {
    filterByCategory(currentCategory);
  }, [currentCategory, filterByCategory]);

  return (
    <div className={s.products}>
      <div className={s.tabs}>
        <Button
          onClick={() => setCurrentCategory('prevelege')}
          isActive={currentCategory === 'prevelege'}
        >
          Mitgliedschaften
        </Button>
        <Button
          onClick={() => setCurrentCategory('potatoe')}
          isActive={currentCategory === 'potatoe'}
        >
          Potatoes
        </Button>
      </div>
      <ProductsList products={filteredProducts} />
    </div>
  );
};

export default Products;
