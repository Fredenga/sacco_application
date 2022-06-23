import { gql } from "@apollo/client";

export const CREATE_GUARANTOR = gql`
  mutation createGuarantor($input: CreateGuarantorDto!) {
    createGuarantor(createGurantor: $input) {
      token
    }
  }
`;
