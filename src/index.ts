import server from "./server/server";
import dbCon from "./config/dbCon";
import dotenv from "dotenv";
dotenv.config();
const PORT = process.env.PORT;
dbCon().then(
    res => {
        server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
    }
)