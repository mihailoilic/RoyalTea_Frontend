import { IProduct } from "./i-product";

export interface ICartItem {
    id: number;
    quantity: number;
    product: IProduct;
}
