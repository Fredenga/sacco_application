/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { CreateNormalSavingDto } from "./../../../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: createNormalSavingAccount
// ====================================================

export interface createNormalSavingAccount_createNormalSavingsAccount {
  __typename: "Savings";
  _id: string;
  name: string;
}

export interface createNormalSavingAccount {
  createNormalSavingsAccount: createNormalSavingAccount_createNormalSavingsAccount;
}

export interface createNormalSavingAccountVariables {
  input: CreateNormalSavingDto;
}
