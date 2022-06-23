/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { LoginDto } from "./../../../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: login
// ====================================================

export interface login_login_user {
  __typename: "User";
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
}

export interface login_login {
  __typename: "LoginResponse";
  user: login_login_user;
  accessToken: string;
}

export interface login {
  login: login_login;
}

export interface loginVariables {
  input: LoginDto;
}
