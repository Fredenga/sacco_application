/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { CreateLoanDto } from "./../../../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: initializeLoan
// ====================================================

export interface initializeLoan_initializeLoan_loan {
  __typename: "Loan";
  amount: number;
  loanTypeId: string;
  userId: string;
}

export interface initializeLoan_initializeLoan_token {
  __typename: "Token";
  status: string;
  token: string;
}

export interface initializeLoan_initializeLoan {
  __typename: "CreateLoanResponse";
  loan: initializeLoan_initializeLoan_loan | null;
  token: initializeLoan_initializeLoan_token[] | null;
  message: string;
  /**
   * Amount remaining for guarantors to guarantee
   */
  amountRemaining: number | null;
}

export interface initializeLoan {
  /**
   * This mutation can create a guarantorless loan and also initializes guarantor
   * loans. Use this only when validating the first guarantor. For subsequent
   * guarantor validations, use postLoanInitialization mutation
   */
  initializeLoan: initializeLoan_initializeLoan;
}

export interface initializeLoanVariables {
  input: CreateLoanDto;
}
