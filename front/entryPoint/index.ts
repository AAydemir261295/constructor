import express from 'express';
import cookieParser from 'cookie-parser';
import otherRoutes from "./routes/otherRoutes";


const staticPath = "/home/ayberk/qk/constructor/front/entryPoint/public";
const app = express();


app.set('view engine', 'ejs')
app.use(cookieParser());
app.use(express.static(staticPath));


app.get("/", function (req, res) {
    res.redirect('/login');
})

app.use("/favicon.ico", (req, res, next) => {
    res.sendStatus(200);
})


app.use("/", otherRoutes);


app.listen(3000, () => console.log(`Running on port ${3000}`));
