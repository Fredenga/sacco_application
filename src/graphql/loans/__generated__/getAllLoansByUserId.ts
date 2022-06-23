/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getAllLoansByUserId
// ====================================================

export interface getAllLoansByUserId_getAllLoansByUserId_loans {
  __typename: "Loan";
  amount: number;
  amountPaid: number;
  userId: string;
  loanTypeId: string;
  guarantor: boolean;
  processing: boolean;
  amountRemaining: number;
  _id: string;
}

export interface getAllLoansByUserId_getAllLoansByUserId {
  __typename: "GetAllLoansResponse";
  loans: getAllLoansByUserId_getAllLoansByUserId_loans[];
}

export interface getAllLoansByUserId {
  getAllLoansByUserId: getAllLoansByUserId_getAllLoansByUserId;
}

export interface getAllLoansByUserIdVariables {
  input: string;
}
