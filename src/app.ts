import cors from "cors";
import decodeJWT from "./utils/decodeJWT";
import helmet from "helmet";
import logger from "morgan"; // 웹 요청이 들어왔을때, 로그를 출력하는 미들웨어
import schema from "./schema";
import { GraphQLServer } from "graphql-yoga";
import { middleware } from "graphql-middleware";

class App {
  public app: GraphQLServer;
  constructor() {
      this.app = new GraphQLServer({
          schema
      })
      this.middelwares()
  }
  private middleware() : void => {
      this.app.express.use(cors());
      this.app.express.use(logger("dev"));
      this.app.express.use(helmet())
  }
}
  


export default new App().app;