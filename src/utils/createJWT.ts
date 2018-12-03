import jwt from "jsonwebtoken";

const createJWT = (id: number): string => {
  const token = jwt.sign(
    { id }, process.env.JWT_TOKEN || "" ); // | "" 을 해주어야 undefined 를 막을 수 있다.
    return token;
};

export default createJWT;