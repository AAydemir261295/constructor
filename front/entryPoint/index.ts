import express from 'express';
import indexRoute from "./routes/index";
import cookieParser from 'cookie-parser';

const staticPath = "/home/ayberk/qk/constructor/front/entryPoint/public";
const app = express();


app.set('view engine', 'ejs')
app.use(cookieParser());
app.use(express.static(staticPath));



app.use("/", indexRoute);


app.listen(3000, () => console.log(`Running on port ${3000}`));
