import { gql } from "@apollo/client";

export const GET_ESCROW = gql`
  query getEscrow($input: String!) {
    getEscrow(userId: $input) {
      _id
      default
      amount
      type
      accountId
    }
  }
`;

export const GET_USER_TRANSACTIONS = gql`
  query getUserTransactions($input: String!) {
    getUserTransactions(userId: $input) {
      type
      amount
      from
      to
      toId
      status
      _id
      userId
    }
  }
`;
