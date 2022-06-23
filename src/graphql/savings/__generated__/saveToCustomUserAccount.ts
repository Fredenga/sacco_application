/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { DepositIntoSavingAccountDto } from "./../../../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: saveToCustomUserAccount
// ====================================================

export interface saveToCustomUserAccount_saveToCustomUserAccount {
  __typename: "Savings";
  _id: string;
  name: string;
  amountSaved: number;
}

export interface saveToCustomUserAccount {
  saveToCustomUserAccount: saveToCustomUserAccount_saveToCustomUserAccount;
}

export interface saveToCustomUserAccountVariables {
  input: DepositIntoSavingAccountDto;
}
