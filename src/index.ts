import dotenv from 'dotenv';
dotenv.config(); //ormConfig를 불러오기 이전에 불러야 dotenv에서 define 된 것을 사용할 수 있다.

import { Options } from "graphql-yoga";
import { createConnection } from 'typeorm'
import app from "./app";
import connectionOptions from './ormConfig';

const PORT: number | string = process.env.PORT || 4000;
const PLAYGROUND_ENDPOINT: string = "/playground";
const GRAPHQL_ENDPOINT: string = "/graphql";

const appOptions: Options = {
    port: PORT,
    playground: PLAYGROUND_ENDPOINT,
    endpoint: GRAPHQL_ENDPOINT
};

const handleAppStart = () => console.log(`Listening on port ${PORT}`);

createConnection(connectionOptions).then(() => {
    app.start(appOptions, handleAppStart);
})
.catch(error => console.log(error));

