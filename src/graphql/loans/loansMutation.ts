import { gql } from "@apollo/client";

export const CREATE_GUARANTOR = gql`
  mutation createGuarantor($input: CreateGuarantorDto!) {
    createGuarantor(createGurantor: $input) {
      token
    }
  }
`;
export const INITIALIZE_LOAN = gql`
  mutation initializeLoan($input: CreateLoanDto!) {
    initializeLoan(createLoan: $input) {
      loan {
        amount
        loanTypeId
        userId
      }
      token {
        status
        token
      }
      message
      amountRemaining
    }
  }
`;
