import Image from 'next/image';
import React, { useState } from 'react';
import { IProduct } from '../../types/product.interface';
import Modal from '../Modal';
import s from './Style.module.scss';

type Props = {
  product: IProduct;
};

const ProductsListItem = ({ product }: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onClose = () => {
    setIsModalOpen(false);
    console.log(isModalOpen);
  };

  return (
    <>
      <li className={s.item} onClick={() => setIsModalOpen(true)}>
        <div className={s.info}>
          <div className={s.image_wrapper}>
            <div className={s.image_inner}>
              <Image
                src={product.src}
                alt={product.name}
                width={30}
                height={30}
                className={s.image}
              />
            </div>
          </div>
          <h1 className={s.name}>{product.name}</h1>
        </div>
        <h1 className={s.cost}>{product.cost}€</h1>
      </li>
      {isModalOpen && (
        <Modal
          isOpen={isModalOpen}
          onClose={onClose}
          title={product.name}
        >
          Hello
        </Modal>
      )}
    </>
  );
};

export default ProductsListItem;
