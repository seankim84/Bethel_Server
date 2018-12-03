import cors from "cors";
import { NextFunction, Response } from "express";
import { GraphQLServer } from "graphql-yoga";
import helmet from "helmet";
import logger from "morgan";
import schema from './schema';
import decodeJWT from "./utils/decodeJWT";

class App {
    public app: GraphQLServer;
    constructor() {
        this.app = new GraphQLServer({
            schema,
            context: req => { // context란 graphql resolver가 갖고 있는 것으로서, 기본적으로 Server의 정보다.
                return { // context를 사용해서 resolver로 보내줄 수 있다.
                    req: req.request 
                };
            }
        });
        this.middlewares();
    }
    private middlewares = (): void => { // void 로 type check
        this.app.express.use(cors());
        this.app.express.use(logger("dev"));
        this.app.express.use(helmet());
        this.app.express.use(this.jwt);
    };
    
    private jwt = async (
        req, 
        res: Response, 
        next: NextFunction
        ): Promise<void> => { // jwt를 위한 middleware 생성, next란 req가 아무것도 갖고 있지않으면 넘어가는것
        const token = req.get("X-JWT"); // HEADER에서 받아올 이름
        if(token) {
            const user = await decodeJWT(token);
            if(user){//req는 object이고 user를 기점으로 모든 middleware를 거치게 될것이다.(grpahqlServer까지)
                req.user = user;  // user property를  req에 붙임
            } else {
                req.user = undefined;
            }
        }
        next();
    };
}

export default new App().app;