import { gql } from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Bank = {
  __typename?: 'Bank';
  accountId: Scalars['ID'];
  amount: Scalars['Int'];
  default: Scalars['Boolean'];
  type: Scalars['String'];
};

export type CreateNormalSavingDto = {
  amountAimed: Scalars['Int'];
  name: Scalars['String'];
  userId: Scalars['ID'];
};

export type CreateUserDto = {
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  password: Scalars['String'];
};

export type DepositDto = {
  amount: Scalars['Int'];
  phoneNumber?: InputMaybe<Scalars['Int']>;
  userId: Scalars['ID'];
};

export type DepositIntoSavingAccountDto = {
  amount: Scalars['Int'];
  bankId?: InputMaybe<Scalars['ID']>;
  savingsId: Scalars['ID'];
  userId: Scalars['ID'];
};

export type LoginDto = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type LoginResponse = {
  __typename?: 'LoginResponse';
  accessToken: Scalars['String'];
  user: User;
};

export type Mutation = {
  __typename?: 'Mutation';
  createAdmin: User;
  createNormalSavingsAccount: Savings;
  createSacco: Savings;
  createUser: User;
  login: LoginResponse;
  outDeposit: Bank;
  saveToCustomUserAccount: Savings;
  saveToSaccoAccount: Savings;
};


export type MutationCreateAdminArgs = {
  createAdminDto: CreateUserDto;
};


export type MutationCreateNormalSavingsAccountArgs = {
  createNormalSaving: CreateNormalSavingDto;
};


export type MutationCreateSaccoArgs = {
  id: Scalars['String'];
};


export type MutationCreateUserArgs = {
  createUserDto: CreateUserDto;
};


export type MutationLoginArgs = {
  loginDto: LoginDto;
};


export type MutationOutDepositArgs = {
  outDeposit: DepositDto;
};


export type MutationSaveToCustomUserAccountArgs = {
  depositIntoSavingAccountDto: DepositIntoSavingAccountDto;
};


export type MutationSaveToSaccoAccountArgs = {
  depositIntoSavingAccountDto: DepositIntoSavingAccountDto;
};

export type Query = {
  __typename?: 'Query';
  findOne: Savings;
  getAllSavings: Array<Savings>;
  getAllUsers: Array<User>;
  getEscrow: Bank;
  getHello: Scalars['String'];
  getSavingsByUserId: Array<Savings>;
  getTotalSaving: Scalars['Int'];
  getUserTransactions: Array<Transaction>;
  getUsersTotal: Scalars['Int'];
};


export type QueryFindOneArgs = {
  id: Scalars['String'];
};


export type QueryGetEscrowArgs = {
  userId: Scalars['String'];
};


export type QueryGetSavingsByUserIdArgs = {
  id: Scalars['String'];
};


export type QueryGetUserTransactionsArgs = {
  userId: Scalars['String'];
};

export type Savings = {
  __typename?: 'Savings';
  _id: Scalars['ID'];
  amountAimed: Scalars['Int'];
  amountSaved: Scalars['Int'];
  frozen: Scalars['Boolean'];
  name: Scalars['String'];
  type: Scalars['String'];
  userId: Scalars['ID'];
};

export type Transaction = {
  __typename?: 'Transaction';
  amount: Scalars['Int'];
  from: Scalars['String'];
  fromId: Scalars['ID'];
  requestId: Scalars['String'];
  status: Scalars['String'];
  to: Scalars['String'];
  toId: Scalars['ID'];
  type: Scalars['String'];
  userId: Scalars['ID'];
};

export type User = {
  __typename?: 'User';
  _id: Scalars['String'];
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
};
