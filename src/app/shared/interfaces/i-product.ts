import { ICategory } from "src/app/shop/shop/interfaces/i-category";
import { ISpecification } from "src/app/shop/shop/interfaces/i-specification";

export interface IProduct {
    id: string;
    title: string;
    category: ICategory;
    discount?: number;
    prices: IProductPrice[];
    image: string;
    description: string;
    productSpecifications: ISpecification[];
    createdAt: Date;
}


export interface IProductPrice {

    currencyIso: string;
    oldValue?: number;
    value: number;
}
