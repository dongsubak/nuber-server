import { ConnectionOptions } from "typeorm";

const connectionOptions: ConnectionOptions = {
    type: "postgres",
    database: "nuber",
    synchronize: true,
    logging: true,
    entities: ["entities/**/*.*"],
    host: process.env.DB_ENDPOINT || "localshost",
    port: 5432,
    username: process.env.DB_USERNAME || "dsp",
    password: process.env.DB_PASSOWRD || ""
}

export default connectionOptions;