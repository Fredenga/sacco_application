import { gql } from "@apollo/client";

export const GET_SAVINGS_BY_USERID = gql`
  query getSavingsByUserId($input: String!) {
    getSavingsByUserId(id: $input) {
      _id
      name
      type
      amountSaved
      amountAimed
      userId
      bankId
      frozen
      amountLoanable
    }
  }
`;

export const GET_TOTAL_SAVINGS = gql`
  query getTotalSavings {
    getTotalSavings
  }
`;
