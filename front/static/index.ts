import express from 'express'
import indexRoute from "./routes/login/index";
import cors from "cors";
import cookieParser from 'cookie-parser';


const app = express();

const port = 3001;

const corsOptions = {
    origin: "http://localhost:3000",
    credentials: true,
}

app.use(cors(corsOptions))
app.use(cookieParser());
app.use(express.static("public"));


app.use("/login", indexRoute);

app.listen(port, () => console.log(`Running on port ${port}`));
