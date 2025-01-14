import { Order } from "../models/Order";
import IUser from "../utils/interfaceUser";
import IOrder from "../utils/interfaceOrders";
import { User } from "../models/User";

export const ordersService = {
    getOrders: async() => {
        try{
        const orders = await Order.find({}).populate("users").populate("products");
        return orders;
        } catch (error:any) {
            throw new Error(error);
        }
    },
    getOrderById: async (id:string) => {
        try {
            const order = await Order.findById(id).populate("users").populate("products");
            return order;
        } catch (error:any) {
            throw new Error(error);
        }
    },
    putOrder: async (id:string, data:IOrder) => {
        try{
            const updatedOrder = await Order.findByIdAndUpdate(id, data);
            return updatedOrder;
        } catch (error:any) {
            throw new Error(error);
        }
    },
    deleteOrder: async (id:string) => {
        try{
            const deletedOrder = await Order.findByIdAndDelete(id);
            return deletedOrder;
        } catch (error:any) {
            throw new Error(error);
        }
    },
    postOrder: async (orderData: IOrder) => {
        try {
            const newOrder = await Order.create(orderData);
            // Actualizar el usuario con la nueva orden
            await User.findByIdAndUpdate(
                orderData.userId,
                { $push: { orders: newOrder._id } }
            );
            return newOrder;
        } catch (error: any) {
            throw new Error(error);
        }
    }
}