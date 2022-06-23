import { gql } from "@apollo/client";

export const CREATE_NORMAL_SAVINGS_ACCOUNT = gql`
  mutation createNormalSavingAccount($input: CreateNormalSavingDto!) {
    createNormalSavingsAccount(createNormalSaving: $input) {
      _id
      name
    }
  }
`;

export const SAVE_TO_CUSTOM_USER_ACCOUNT = gql`
  mutation saveToCustomUserAccount($input: DepositIntoSavingAccountDto!) {
    saveToCustomUserAccount(depositIntoSavingAccountDto: $input) {
      _id
      name
      amountSaved
    }
  }
`;
