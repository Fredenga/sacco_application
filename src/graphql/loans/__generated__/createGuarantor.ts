/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { CreateGuarantorDto } from "./../../../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: createGuarantor
// ====================================================

export interface createGuarantor_createGuarantor {
  __typename: "CreateGuarantorResponse";
  token: string;
}

export interface createGuarantor {
  createGuarantor: createGuarantor_createGuarantor;
}

export interface createGuarantorVariables {
  input: CreateGuarantorDto;
}
