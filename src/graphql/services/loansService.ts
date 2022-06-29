import { apolloClient } from "../../../pages/_app";
import { CREATE_GUARANTOR, INITIALIZE_LOAN } from "../loans/loansMutation";
import {
  GET_ALL_LOANS_BY_USERID,
  GET_ALL_LOAN_TYPES,
  GET_TOTAL_LOANS,
} from "../loans/loansQuery";
import {
  CreateGuarantorDto,
  CreateLoanDto,
} from "../../../__generated__/globalTypes";

class LoansService {
  async getAllLoanTypes() {
    try {
      const response = await apolloClient.query({
        query: GET_ALL_LOAN_TYPES,
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  async createGuarantor(createGuarantorDto: CreateGuarantorDto) {
    try {
      const { data } = await apolloClient.mutate({
        mutation: CREATE_GUARANTOR,
        variables: { input: createGuarantorDto },
      });
      return { data, status: true };
    } catch (error) {
      return { error, status: false };
    }
  }

  async getAllLoansByUserId(userId: string) {
    try {
      const response = await apolloClient.query({
        query: GET_ALL_LOANS_BY_USERID,
        variables: { input: userId },
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  async initializeLoan(createLoan: CreateLoanDto) {
    try {
      const { data } = await apolloClient.mutate({
        mutation: INITIALIZE_LOAN,
        variables: { input: createLoan },
      });
      return { data, status: true };
    } catch (error) {
      return { error, status: false };
    }
  }
  async getTotalLoans() {
    try {
      const { data } = await apolloClient.query({
        query: GET_TOTAL_LOANS,
      });

      return { data, status: true };
    } catch (error) {
      return { error, status: false };
    }
  }
}
export default new LoansService();
