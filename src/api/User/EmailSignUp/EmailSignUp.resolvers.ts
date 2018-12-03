import createJWT from "../../../utils/createJWT";
import { EmailSignUpMutationArgs, EmailSignUpResponse } from "../../../types/graph";
import { Resolvers } from '../../../types/resolvers';
import User from '../../../entities/User';

const resolvers: Resolvers = {
    Mutation: {
        EmailSignUp: async (
            _,
            args: EmailSignUpMutationArgs
            ): Promise<EmailSignUpResponse> => {
                const { email } = args; // args 안의 email로 설정.
                try {
                    const existingUser = await User.findOne({ email })
                    if(existingUser) {
                        return {
                            ok: false,
                            error: "You should Login instead",
                            token: null
                        } 
                    } else {
                        const newUser = await User.create({...args}).save(); //token 생성을 위해서 사용!
                            const token = createJWT(newUser.id)
                            return {
                                ok: true,
                                error: null,
                                token
                            }
                        } 
                } catch(error) {
                    return {
                        ok: false,
                        error: error.message,
                        token: null
                    }
                }
        }
    }
}

export default resolvers;