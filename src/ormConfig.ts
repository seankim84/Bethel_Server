import { ConnectionOptions } from "typeorm";

const connectionOptions: ConnectionOptions = {
  type: "postgres",
  database: "bethel",
  synchronize: true,
  logging: true,
  entities: ["entities/**/*.*"],
  host: process.env.DB_ENDPOINT || "localhost", // 데이터베이스의 host 정의
  port: 5432,
  username: process.env.DB_USERNAME || "rebekahpark",
  password: process.env.DB_PASSWORD || "",
  
};

export default connectionOptions;