import IOrder from "./interfaceOrders";

export default interface IUser {
    id?: string;
    name: string;
    email: string;
    password: string;
    address: string;
    phone: string;
    role?: string;
    orders?: IOrder[];
}