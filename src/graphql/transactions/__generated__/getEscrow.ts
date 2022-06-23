/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getEscrow
// ====================================================

export interface getEscrow_getEscrow {
  __typename: "Bank";
  _id: string;
  default: boolean;
  amount: number;
  type: string;
  accountId: string;
}

export interface getEscrow {
  getEscrow: getEscrow_getEscrow;
}

export interface getEscrowVariables {
  input: string;
}
