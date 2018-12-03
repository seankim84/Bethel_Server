import { Resolvers } from "../../../types/resolvers";

const resolvers: Resolvers = {
  Query: {
    GetMyProfile: async (_, __, { req }) => {
      const { user } = req; // 아래처럼 user라는 객체를 하나만 사용하기 위해서 {} 사용.
      return {
        ok: true,
        error: null,
        user
      };
    }
  }
};

export  default resolvers;