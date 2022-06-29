/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getUserTransactions
// ====================================================

export interface getUserTransactions_getUserTransactions {
  __typename: "Transaction";
  type: string;
  amount: number;
  from: string;
  to: string;
  toId: string;
  status: string;
  _id: string;
  userId: string;
}

export interface getUserTransactions {
  getUserTransactions: getUserTransactions_getUserTransactions[];
}

export interface getUserTransactionsVariables {
  input: string;
}
