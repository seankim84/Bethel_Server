import { Greeting } from '../../../types/graph';

const resolvers = {
  Query: {
    sayHellow: (): Greeting => {
      return {
          error: false,
          text: "Hye Yeon"
      };
    }
  }
};

export default resolvers;