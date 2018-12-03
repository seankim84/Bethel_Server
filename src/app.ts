import cors from "cors";
import { GraphQLServer } from "graphql-yoga";
import helmet from "helmet";
import logger from "morgan";
import schema from './schema';
import decodeJWT from "./utils/decodeJWT";

class App {
    public app: GraphQLServer;
    constructor() {
        this.app = new GraphQLServer({
            schema
        });
        this.middlewares();
    }
    private middlewares = (): void => { // void 로 type check
        this.app.express.use(cors());
        this.app.express.use(logger("dev"));
        this.app.express.use(helmet());
        this.app.express.use(this.jwt);
    };
    
    private jwt = async (req, res, next): Promise<void> => { // jwt를 위한 middleware 생성, next란 req가 아무것도 갖고 있지않으면 넘어가는것
        const token = req.get("X-JWT"); // HEADER에서 받아올 이름
        if(token){
            const user = await decodeJWT(token);
            console.log(user);
        }
        next();
    }
}

export default new App().app;