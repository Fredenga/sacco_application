import { apolloClient } from "../../../pages/_app";
import {
  CreateNormalSavingDto,
  DepositIntoSavingAccountDto,
} from "../../../__generated__/globalTypes";
import {
  CREATE_NORMAL_SAVINGS_ACCOUNT,
  SAVE_TO_CUSTOM_USER_ACCOUNT,
} from "../savings/savingsMutation";
import {
  GET_SAVINGS_BY_USERID,
  GET_TOTAL_SAVINGS,
} from "../savings/savingsQuery";

class SavingsService {
  async createNormalSavingAccount(createNormalSaving: CreateNormalSavingDto) {
    try {
      const response = await apolloClient.mutate({
        mutation: CREATE_NORMAL_SAVINGS_ACCOUNT,
        variables: { input: createNormalSaving },
      });
      return response?.data;
    } catch (error) {
      throw error;
    }
  }

  async getSavingsByUserId(id: string) {
    let pending = true;
    try {
      const { data } = await apolloClient.query({
        query: GET_SAVINGS_BY_USERID,
        variables: { input: id },
      });
      pending = false;
      return { data, pending };
    } catch (error) {
      throw error;
    }
  }

  async saveToCustomUserAccount(
    depositIntoSavingAccountDto: DepositIntoSavingAccountDto
  ) {
    try {
      const { data } = await apolloClient.mutate({
        mutation: SAVE_TO_CUSTOM_USER_ACCOUNT,
        variables: { input: depositIntoSavingAccountDto },
      });
      return { data, status: true };
    } catch (error) {
      return { error, status: false };
    }
  }

  async getTotalSavings() {
    try {
      const { data } = await apolloClient.query({
        query: GET_TOTAL_SAVINGS,
      });
      return { data, status: true };
    } catch (error) {
      return { error, status: false };
    }
  }
}

export default new SavingsService();
