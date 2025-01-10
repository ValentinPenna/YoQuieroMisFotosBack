import {Project} from "../models/Project";
import IProject from "../utils/interfaceProject";
export const usersService = {
    getUsers: async() => {
        try{
        const users = await Project.find({});
        return users;
        } catch (error:any) {
            throw new Error(error);
        }
    },
    getUserById: (id:string) => {
        try {
            const user = Project.findById(id);
            return user;
        } catch (error:any) {
            throw new Error(error);
        }
    },
    postUser: (data:IProject) => {
        try{
            const newUser = Project.create(data);
            return newUser;
        } catch (error:any) {
            throw new Error(error);
        }
    },
    putUser: (id:string, data:IProject) => {
        try{
            const updatedUser = Project.findByIdAndUpdate(id, data);
            return updatedUser;
        } catch (error:any) {
            throw new Error(error);
        }
    },
    deleteUser: (id:string) => {
        try{
            const deletedUser = Project.findByIdAndDelete(id);
            return deletedUser;
        } catch (error:any) {
            throw new Error(error);
        }
    }
}