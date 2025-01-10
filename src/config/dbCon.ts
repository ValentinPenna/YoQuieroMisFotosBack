import mongoose from "mongoose";
import "dotenv/config";
// const MONGO_URL = process.env.MONGO_URL;

const dbCon = async () => {
    try {
        await mongoose.connect("mongodb+srv://valentinignaciopenna:Vip19012006*@valentinpenna.tc1rduk.mongodb.net/users?retryWrites=true&w=majority");
        console.log("Database connected");
    } catch (error) {
        console.log("Error connecting to database", error);
    }
};

export default dbCon