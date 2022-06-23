import { apolloClient } from "../../../pages/_app";
import { CreateUserDto, LoginDto } from "../../../__generated__/globalTypes";
import { CREATE_USER, LOGIN } from "../user/userMutation";

class UserService {
  async login(loginDto: LoginDto) {
    try {
      const response = await apolloClient.mutate({
        mutation: LOGIN,
        variables: { input: loginDto },
      });
      return response?.data;
    } catch (error) {
      throw error;
    }
  }

  async createUser(createUserDto: CreateUserDto) {
    try {
      const response = await apolloClient.mutate({
        mutation: CREATE_USER,
        variables: { input: createUserDto },
      });
      return response?.data;
    } catch (error) {
      throw error;
    }
  }
}

export default new UserService();
