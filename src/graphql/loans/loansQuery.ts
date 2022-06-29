import { gql } from "@apollo/client";

export const GET_ALL_LOAN_TYPES = gql`
  query getAllLoanTypes {
    getAllLoanTypes {
      name
      maxLoan
      interestRate
      repayPeriod
      guarantor
      _id
    }
  }
`;

export const GET_ALL_LOANS_BY_USERID = gql`
  query getAllLoansByUserId($input: String!) {
    getAllLoansByUserId(userId: $input) {
      loans {
        amount
        amountPaid
        userId
        loanTypeId
        guarantor
        processing
        amountRemaining
        _id
      }
    }
  }
`;

export const GET_TOTAL_LOANS = gql`
  query getTotalLoans {
    getTotalLoans
  }
`;
