import express from 'express'
import cors from "cors";
import cookieParser from 'cookie-parser';
import loginRoute from "./routes/login";
import registerRoute from "./routes/register";
import pincodeRoute from "./routes/pincode";


const app = express();

const port = 4000;

const corsOptions = {
    origin: "http://localhost:3000",
    credentials: true,
}

app.use(cors(corsOptions))
app.use(cookieParser());



app.use("/login", loginRoute);
app.use("/register", registerRoute);
app.use("/pincode", pincodeRoute);



app.listen(port, () => console.log(`Running on port ${port}`));
