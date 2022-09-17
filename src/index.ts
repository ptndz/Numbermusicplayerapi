import express, {Express, NextFunction, Request, Response} from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import router from "./routers/index";

dotenv.config();

const app: Express = express();
const port = process.env.PORT;
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(
    cors({
        origin: '*',
        methods: ['GET', 'POST', 'DELETE', 'UPDATE', 'PUT', 'PATCH'],
        credentials: true,
        optionsSuccessStatus: 200
    })
);
app.use('/', router)
app.get('*', function (req: Request, res: Response) {
    return res.json({
        code:404
    })
});


app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});