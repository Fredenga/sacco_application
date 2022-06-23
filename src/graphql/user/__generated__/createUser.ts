/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { CreateUserDto } from "./../../../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: createUser
// ====================================================

export interface createUser_createUser {
  __typename: "User";
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
}

export interface createUser {
  createUser: createUser_createUser;
}

export interface createUserVariables {
  input: CreateUserDto;
}
