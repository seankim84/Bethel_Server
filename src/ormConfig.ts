import { ConnectionOptions } from "typeorm";

const connectionOptions: ConnectionOptions = {
  type: "postgres",
  database: "bethel",
  synchronize: true, //database와의 연결 여부
  logging: true,
  entities: ["entities/**/*.*"], // 데이터베이스 모델정의
  host: process.env.DB_ENDPOINT, // 데이터베이스의 host 정의
  port: 5432,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD
};

export default connectionOptions;