import express from 'express'
import cors from "cors";
import authRoute from "./routes/auth";
import cookieParser from 'cookie-parser';

const app = express();
const port = 4001;

const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true,
}


app.use(cors(corsOptions))
app.use(cookieParser());

app.use('/auth', authRoute);


app.listen(port, () => console.log(`Running on port ${port}`));
