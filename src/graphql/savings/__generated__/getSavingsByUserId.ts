/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getSavingsByUserId
// ====================================================

export interface getSavingsByUserId_getSavingsByUserId {
  __typename: "Savings";
  _id: string;
  name: string;
  type: string;
  amountSaved: number;
  amountAimed: number;
  userId: string;
  bankId: string;
  frozen: boolean;
  amountLoanable: number;
}

export interface getSavingsByUserId {
  getSavingsByUserId: getSavingsByUserId_getSavingsByUserId[];
}

export interface getSavingsByUserIdVariables {
  input: string;
}
