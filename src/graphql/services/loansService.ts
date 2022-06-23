import { apolloClient } from "../../../pages/_app";
import { CREATE_GUARANTOR } from "../loans/loansMutation";
import {
  GET_ALL_LOANS_BY_USERID,
  GET_ALL_LOAN_TYPES,
} from "../loans/loansQuery";
import { CreateGuarantorDto } from "../../../__generated__/globalTypes";

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
}
export default new LoansService();
