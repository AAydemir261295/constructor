import express from 'express'
import cors from "cors";
import cookieParser from 'cookie-parser';

import indexRoute from "./routes";
import registerRoute from "./routes/register";
import homeRoute from "./routes/home";


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
// app.use("/login", loginRoute);
app.use("/register", registerRoute);
app.use("/home", homeRoute);



app.listen(port, () => console.log(`Running on port ${port}`));
