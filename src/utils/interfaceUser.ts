import IOrder from "./interfaceOrders";

export default interface IUser {
    id?: string;
    name: string;
    email: string;
    password: string;
    lastName: string;
    role?: string;
    orders?: IOrder[];
}