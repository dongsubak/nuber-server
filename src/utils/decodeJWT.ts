import jwt from "jsonwebtoken"
import User from "../entities/User";

const decodeJWT = async (token: string): Promise<User | undefined> => { 
  //Promise<any>
  try {
    const decoded: any = jwt.verify(token, process.env.JWT_TOKEN || "");
    //: any는 kill switch와 같다. 일단, 에러를 없애준다.
    console.log(decoded);
    const { id } = decoded;
    const user = await User.findOne({ id });
    return user;
  } catch {
    return undefined;
  }
};

export default decodeJWT;