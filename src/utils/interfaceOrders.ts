import IProduct from "./interfaceProducts";

export default interface IOrder {
    id?: string;
    userId: string;
    products: IProduct[];
    photos: string[];
    total: number;
}