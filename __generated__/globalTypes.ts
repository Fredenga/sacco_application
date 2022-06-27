/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

export interface CreateGuarantorDto {
  userId: string;
  amount: number;
}

export interface CreateLoanDto {
  amount: number;
  userId: string;
  loanTypeId: string;
  token?: string | null;
}

export interface CreateNormalSavingDto {
  userId: string;
  amountAimed: number;
  name: string;
}

export interface CreateUserDto {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phoneNumber: string;
}

export interface DepositIntoSavingAccountDto {
  userId: string;
  amount: number;
  savingsId: string;
  bankId?: string | null;
}

export interface LoginDto {
  email: string;
  password: string;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
