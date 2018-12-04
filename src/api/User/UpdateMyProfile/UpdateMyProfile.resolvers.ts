import privateResolver from "../../../utils/privateResolver";
import { Resolvers } from "../../../types/resolvers";
import { UpdateMyProfileMutationArgs, UpdateMyProfileResponse } from "../../../types/graph";
import User from '../../../entities/User';

const resolvers: Resolvers = {
    Mutation: {
        UpdateMyProfile: privateResolver(async (
            _, 
            args:UpdateMyProfileMutationArgs, 
            { req }
            ):Promise<UpdateMyProfileResponse> => {
            const user: User = req.user;
            const notNull = {};
            Object.keys(args).forEach(key => { // ...args를 넣으면 null인 인자는 update될 수 없기때문에 notNull이라는 object를 생성해준다.
                if(args[key] !== null){
                    notNull[key] = args[key];
                }
            });
           try {
               await User.update({ id: user.id }, { ...notNull })
               return {
                   ok: true,
                   error: null
               }
           } catch(error){
               return {
                ok: false,
                error: error.message
            }
           }
        })
    }
}
export default resolvers;