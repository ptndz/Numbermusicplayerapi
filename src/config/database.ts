import ORM from "@ptndev/orm";
import dotenv from 'dotenv';

dotenv.config();
import {Config} from "@ptndev/orm/lib/models";

const config: Config = {
    host: process.env.DB_HOST || "",
    port: process.env.DB_PORT ? Number(process.env.DB_PORT) : 3306,
    user: process.env.DB_USER || "",
    password: process.env.DB_PASS || "",
    database: process.env.DB_DATABASE || "",
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
}
const orm = new ORM(config)
export default orm