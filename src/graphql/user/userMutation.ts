import { gql } from "@apollo/client";

export const CREATE_USER = gql`
  mutation createUser($input: CreateUserDto!) {
    createUser(createUserDto: $input) {
      user {
        _id
        firstName
        lastName
        email

      }
      errors {
        error
        message

        phoneNumber

      }
    }
  }
`;

export const LOGIN = gql`
  mutation login($input: LoginDto!) {
    login(loginDto: $input) {
      user {
        _id
        firstName
        lastName
        email
      }
      accessToken
    }
  }
`;
