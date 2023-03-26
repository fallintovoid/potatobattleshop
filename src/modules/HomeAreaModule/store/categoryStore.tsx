import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { IProductType } from '../types/productType.interface';

interface CategoryState {
    currentCategory: IProductType;
    setCurrentCategory: (category: IProductType) => void
}

export const useCurrentCategoryStore = create<CategoryState>()(
  devtools((set) => ({
    currentCategory: 'prevelege',
    setCurrentCategory(category) {
      set(() => ({
        currentCategory: category,
      }));
    },
  }))
);
