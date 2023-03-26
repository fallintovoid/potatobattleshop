import { IProductType } from "./productType.interface";

export interface IProduct {
    name: string;
    cost: number;
    src: string;
    type: IProductType
}