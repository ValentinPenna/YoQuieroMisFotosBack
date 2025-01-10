import server from "./server/server";
import dbCon from "./config/dbCon";

dbCon().then(
    res => {
        server.listen(3000, () => console.log("Server running on port 3000"));
    }
)