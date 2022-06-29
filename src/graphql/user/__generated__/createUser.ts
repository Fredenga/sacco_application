/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { CreateUserDto } from "./../../../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: createUser
// ====================================================

export interface createUser_createUser_user {
  __typename: "User";
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
}

export interface createUser_createUser {
  __typename: "createUserResponse";
  user: createUser_createUser_user | null;
}

export interface createUser {
  createUser: createUser_createUser;
}

export interface createUserVariables {
  input: CreateUserDto;
}
