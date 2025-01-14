import {User} from "../models/User";
import { comparePassword, encryptPassword } from "../utils/bcrypt";
import { ICredentials } from "../utils/interfaceCredentials";
import IUser from "../utils/interfaceUser";
export const usersService = {
    getUsers: async() => {
        try{
            const users = await User.find({})
            return users;
        } catch (error:any) {
            throw new Error(error);
        }
    },
    getUserById: async (id:string) => {
        try {
            const user = await User.findById(id)
                .populate({
                    path: 'orders',
                    populate: {
                        path: 'products'
                    }
                });
            return user;
        } catch (error:any) {
            throw new Error(error);
        }
    },
    postUser: async (data:IUser) => {
        try{
            const encryptedPassword = encryptPassword(data.password);
            const newUser = await User.create({...data, role: "user", password: encryptedPassword});
            return newUser;
        } catch (error:any) {
            throw new Error(error);
        }
    },
    loginUser: async (data:ICredentials) => {
        try{
            const user = await User.findOne({email: data.email});
            if(!user) {
                throw new Error("Wrong Credentials email");
            }
            const isPasswordCorrect = comparePassword(data.password, user.password);
            if(!isPasswordCorrect) {
                throw new Error("Wrong Credentials password");
            }
            else{
                return user;
            }
        } catch (error:any) {
            throw new Error(error);
        }
    },
    putUser: async (id:string, data:IUser) => {
        try{
            const updatedUser = await User.findByIdAndUpdate(id, data);
            return updatedUser;
        } catch (error:any) {
            throw new Error(error);
        }
    },
    deleteUser: async (id:string) => {
        try{
            const deletedUser = await User.findByIdAndDelete(id);
            return deletedUser;
        } catch (error:any) {
            throw new Error(error);
        }
    }
}