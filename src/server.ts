import express from "express";
import { router } from "./routes";
import "dotenv/config";

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(router);


app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})