/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getAllLoanTypes
// ====================================================

export interface getAllLoanTypes_getAllLoanTypes {
  __typename: "LoanType";
  name: string;
  /**
   * This is a percentage for loans savings...eg, 90 means 90% total savings.
   */
  maxLoan: number;
  /**
   * Interest rate in percentage.
   */
  interestRate: number;
  /**
   * This is number of months required to repay the loan.
   */
  repayPeriod: number;
  guarantor: boolean;
  _id: string;
}

export interface getAllLoanTypes {
  getAllLoanTypes: getAllLoanTypes_getAllLoanTypes[];
}
